import classNames from 'classnames/bind';
import ReactGA from 'react-ga4';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { uid } from 'react-uid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMoviesWantToSee,
  addMoviesWatched,
  deleteMoviesWantToSee,
  deleteMoviesWatched,
  getMovieDetails,
  updateMoviesWantToSee,
  updateMoviesWatched,
} from '~/redux/actions';
import { movieDetail, wantToSeeMovies, watchedMovies } from '~/redux/selector/selector';

import getMovies from '~/services/getMovies';
import styles from './Detail.module.scss';
import BackDrop from '~/layouts/BackDrop';
import Modal from '~/components/ModalRoot/Modal';
import SimpleSlider from '~/components/SimpleSlider/SimpleSlider';

const cx = classNames.bind(styles);

const MovieDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const movie = useSelector(movieDetail);
  const isWatched = useSelector(watchedMovies);
  const isWantToSee = useSelector(wantToSeeMovies);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isShowModalTrailer, setIsShowModalTrailer] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    if (movie) {
      return false;
    } else {
      return true;
    }
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const movies = await getMovies.Detail(slug);
        if (movies) {
          document.title = movies.seoOnPage.titleHead;
          dispatch(getMovieDetails(movies));
          setIsLoading(false);
        } else {
          navigate('*');
        }
      } catch (error) {
        console.log('Error ---> ', error);
      }
    };

    window.scroll({
      top: 0,
    });

    if (!movie || movie.slug !== slug) {
      fetchApi();
    } else {
      setIsLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    const page = location.pathname; // Đặt tên trang là URL
    const title = document.title; // Tên trang từ document.title

    ReactGA.set({ page, title });
    ReactGA.send('Detail Movie');
  }, [location]);

  const handleCloseModalTrailers = () => {
    setIsShowModalTrailer(!isShowModalTrailer);
  };

  const metaTag = () => {
    if (movie?.episode_current === 'Full') {
      return `${movie?.episode_current} ${movie?.quality}`;
    } else if (movie?.episode_current.includes('Hoàn Tất') || movie?.episode_current.includes('Hoàn tất')) {
      return `${movie?.episode_current.replace('Tập ', '')}`;
    } else if (movie?.episode_current === 'Trailer') {
      return `0 / ${movie?.episode_total.replace(' Tập', '')}`;
    } else {
      return `${movie?.episode_current.replace('Tập ', '')}/${movie?.episode_total.replace(' Tập', '')}`;
    }
  };

  const handleShare = async () => {
    try {
      await navigator?.share({
        title: 'Người Dùng',
        text: 'Phim này hay lắm',
        url: window.location.href,
      });
    } catch (error) {}
  };

  return (
    <>
      {(isLoading && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999999, backgroundColor: '#06121e' }}>
          <p>Loading...</p>
        </div>
      )) || (
        <>
          <div className={cx('details__poster')}>{<BackDrop poster_url={movie?.poster_url} />}</div>
          <div className={cx('wapper')}>
            <div className={cx('details')}>
              <div className={cx('column', 'is-one-quarter-tablet')}>
                <p className={cx('cover', 'has-text-centered')}>
                  <img
                    src={`https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75`}
                    alt={movie.name}
                    loading="lazy"
                    decoding="auto"
                    srcSet={`
                          https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75 384w,
                      `}
                  ></img>
                </p>
                <Link
                  onClick={movie?.episode_current === 'Trailer' && handleCloseModalTrailers}
                  className={cx('watch', 'button', 'is-danger', 'is-medium', 'is-fullwidth')}
                  to={movie?.episode_current === 'Trailer' || `/watch/${slug}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                  </svg>
                  {(movie?.episode_current === 'Trailer' && 'Trailer') || 'Xem phim'}
                </Link>
              </div>
              <div className={cx('column', 'main')}>
                <h1 className={cx('title')}>{movie?.origin_name}</h1>
                <h2 className={cx('subtitle')}>
                  {movie?.name} (<Link to={`/year/${movie.year}`}>{movie?.year}</Link>)
                </h2>
                <div className={cx('meta')}>
                  <span>{movie?.time}</span>
                  <span className={cx('tag')} title={`${movie?.view} lượt xem`}>
                    {metaTag()}
                  </span>
                </div>

                <div className={cx('meta')}>
                  <span className={cx('imdb-icon')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path
                        d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                        fill="#ffc107"
                      ></path>
                      <path
                        d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z"
                        fill="#263238"
                      ></path>
                    </svg>
                  </span>
                  <span
                    className={cx('has-text-weight-bold')}
                    style={{ cursor: 'help' }}
                    title={`${movie?.tmdb?.vote_count} lượt đánh giá`}
                  >
                    {(Math.round(movie?.tmdb?.vote_average * 10) / 10 &&
                      Math.round(movie?.tmdb?.vote_average * 10) / 10) ||
                      ''}
                  </span>
                </div>

                <div className={cx('level', 'genres')}>
                  <div className={cx('level-left')}>
                    <div className={cx('level-item')} onClick={handleShare}>
                      <div className={cx('fb-share', 'button', 'is-link')} style={{ cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
                        </svg>
                        Chia sẻ
                      </div>
                    </div>
                    <div className={cx('level-item')}>
                      <div className={cx('dropdown', 'is-hoverable')}>
                        <div className={cx('dropdown-trigger')}>
                          <button
                            className={cx(
                              'collection-btn',
                              'button',
                              isWatched &&
                                isWatched.find((movieWatched) => movieWatched.id === movie._id) &&
                                'is-light',
                              isWatched.length > 0 && 'watched',
                              isWantToSee &&
                                isWantToSee.find((movieWantToSee) => movieWantToSee.id === movie._id) &&
                                'watched',
                              isWantToSee &&
                                isWantToSee.find((movieWantToSee) => movieWantToSee.id === movie._id) &&
                                'is-warning',
                            )}
                          >
                            {(isWatched && isWatched.find((movieWatched) => movieWatched.id === movie._id) && (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path>
                                </svg>
                                Đã xem
                              </>
                            )) ||
                              (isWantToSee && isWantToSee.find((movieWantToSee) => movieWantToSee.id === movie._id) && (
                                <>
                                  {' '}
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M569.354 231.631C512.97 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-102.556 0-192.091-54.701-240-136 44.157-74.933 123.677-127.27 216.162-135.007C273.958 131.078 280 144.83 280 160c0 30.928-25.072 56-56 56s-56-25.072-56-56l.001-.042C157.794 179.043 152 200.844 152 224c0 75.111 60.889 136 136 136s136-60.889 136-136c0-31.031-10.4-59.629-27.895-82.515C451.704 164.638 498.009 205.106 528 256c-47.908 81.299-137.444 136-240 136z"></path>
                                  </svg>
                                  Mong muốn
                                </>
                              )) || (
                                <>
                                  {' '}
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
                                  </svg>
                                  Bộ sưu tập
                                </>
                              )}
                          </button>
                        </div>

                        {(isWatched && isWatched.find((movieWatched) => movieWatched.id === movie._id) && (
                          <div className={cx('dropdown-menu')} role="menu">
                            <div className={cx('dropdown-content', 'has-text-left')}>
                              <a
                                href="#!"
                                className={cx('dropdown-item')}
                                onClick={() =>
                                  dispatch(
                                    updateMoviesWantToSee({
                                      id: movie._id,
                                      thumb_url: movie.thumb_url,
                                      name: movie.name,
                                      origin_name: movie.origin_name,
                                      slug: movie.slug,
                                    }),
                                  )
                                }
                              >
                                Thêm vào danh sách phim <strong>Muốn xem</strong>
                              </a>
                              <a
                                href="#!"
                                className={cx('dropdown-item')}
                                onClick={() =>
                                  dispatch(
                                    deleteMoviesWatched({
                                      id: movie._id,
                                    }),
                                  )
                                }
                              >
                                Loại bỏ khỏi bộ sưu tập
                              </a>
                            </div>
                          </div>
                        )) ||
                          (isWantToSee && isWantToSee.find((movieWantToSee) => movieWantToSee.id === movie._id) && (
                            <div className={cx('dropdown-menu')} role="menu">
                              <div className={cx('dropdown-content', 'has-text-left')}>
                                <a
                                  href="#!"
                                  className={cx('dropdown-item')}
                                  onClick={() =>
                                    dispatch(
                                      updateMoviesWatched({
                                        id: movie._id,
                                        thumb_url: movie.thumb_url,
                                        name: movie.name,
                                        origin_name: movie.origin_name,
                                        slug: movie.slug,
                                      }),
                                    )
                                  }
                                >
                                  Thêm vào danh sách phim <strong>Đã xem</strong>
                                </a>
                                <a
                                  href="#!"
                                  className={cx('dropdown-item')}
                                  onClick={() =>
                                    dispatch(
                                      deleteMoviesWantToSee({
                                        id: movie._id,
                                      }),
                                    )
                                  }
                                >
                                  Loại bỏ khỏi bộ sưu tập
                                </a>
                              </div>
                            </div>
                          )) || (
                            <div className={cx('dropdown-menu')} role="menu">
                              <div className={cx('dropdown-content', 'has-text-left')}>
                                <a
                                  href="#!"
                                  className={cx('dropdown-item')}
                                  onClick={() =>
                                    dispatch(
                                      addMoviesWatched({
                                        id: movie._id,
                                        thumb_url: movie.thumb_url,
                                        name: movie.name,
                                        origin_name: movie.origin_name,
                                        slug: movie.slug,
                                      }),
                                    )
                                  }
                                >
                                  Thêm vào danh sách phim <strong>Đã Xem</strong>
                                </a>
                                <a
                                  href="#!"
                                  className={cx('dropdown-item')}
                                  onClick={() =>
                                    dispatch(
                                      addMoviesWantToSee({
                                        id: movie._id,
                                        thumb_url: movie.thumb_url,
                                        name: movie.name,
                                        origin_name: movie.origin_name,
                                        slug: movie.slug,
                                      }),
                                    )
                                  }
                                >
                                  Thêm vào danh sách phim <strong>Muốn xem</strong>
                                </a>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className={cx('level-item', 'buttons')}>
                      {movie?.category.map((type) => {
                        return (
                          <Link
                            key={type.id}
                            className="button is-link is-small is-rounded is-inverted is-outlined"
                            to={`/genre/${type.slug}`}
                          >
                            {type.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <dl className={cx('horizontal-dl')}>
                  <dt>Đạo diễn</dt>
                  <dd className={cx('csv')}>
                    {movie?.director.length &&
                      movie?.director.map((director, index) => {
                        if (director) {
                          return (
                            <Link key={director.id} to="/developing">
                              {(index === 0 && director) || `, ${director}`}
                            </Link>
                          );
                        } else {
                          return <div>Đang cập nhật....</div>;
                        }
                      })}
                  </dd>
                  <dt>Quốc gia</dt>
                  <dd className={cx('csv')}>
                    {movie?.country.map((country, index) => {
                      return (
                        <Link key={country.id} to={`/country/${country.slug}`}>
                          {(index === 0 && country.name) || `, ${country.name}`}
                        </Link>
                      );
                    })}
                  </dd>
                  <dt>Diễn viên</dt>
                  <dd className={cx('csv')}>
                    {movie?.actor.map((actor, index) => {
                      if (actor) {
                        return (
                          <Link key={uid(actor)} to="/developing">
                            {(index === 0 && actor) || `, ${actor}`}
                          </Link>
                        );
                      } else {
                        return <div>Đang cập nhật....</div>;
                      }
                    })}
                  </dd>
                </dl>

                <div className={cx('has-text-grey-light')}>
                  <p>
                    {movie?.content
                      .replace(/<\/?p>/g, '')
                      .replace(/<\/?strong>/g, '')
                      .replace(/<\/?i>/g, '')
                      .replace(/<\/?br>/g, '')
                      .replace(/&nbsp;/g, ' ')}
                  </p>
                </div>

                <h3 className="section-header">Trailer</h3>

                <div className="trailers">
                  <div
                    data-index="0"
                    className="slick-active slick-current"
                    tabIndex="-1"
                    aria-hidden="false"
                    style={{
                      outline: 'none',
                      width: 248,
                    }}
                  >
                    <div>
                      {movie?.trailer_url && (
                        <div
                          className={cx('item')}
                          tabIndex="-1"
                          onClick={handleCloseModalTrailers}
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <div className={cx('clip')}>
                            <img
                              src={`https://img.youtube.com/vi/${movie?.trailer_url.replace(
                                'https://www.youtube.com/watch?v=',
                                '',
                              )}/hqdefault.jpg`}
                              alt=""
                            />
                            <div className={cx('icon')}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* <h3 className="section-header">Phim tương tự</h3>
                <div className={cx('related-titles')}>
                  <SimpleSlider />
                </div> */}
              </div>
            </div>
          </div>
          <Modal
            isShowModalTrailer={isShowModalTrailer}
            onClickCloseTrailers={handleCloseModalTrailers}
            trailer={movie?.trailer_url}
          />
        </>
      )}
    </>
  );
};

export default MovieDetails;
