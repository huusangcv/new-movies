/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames/bind';
import styles from './Watch.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from 'react-ga4';
import { uid } from 'react-uid';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
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
import { movieDetail, moviesSimilar, wantToSeeMovies, watchedMovies } from '~/redux/selector/selector';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Hls from 'hls.js';
import getMovies from '~/services/getMovies';
import Footer from '~/layouts/Footer';
import FacebookComments from '~/components/Comments';
import DialogSmilar from '~/components/Dialog';

const cx = classNames.bind(styles);
const Watch = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector(movieDetail);
  const isWatched = useSelector(watchedMovies);
  const isWantToSee = useSelector(wantToSeeMovies);
  const moviesSimilarExits = useSelector(moviesSimilar);
  const [open, setOpen] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [isLoading, setIsLoading] = useState(() => {
    if (movie) {
      return false;
    } else {
      return true;
    }
  });

  const videoSrc = movie?.episodes[0]?.server_data[currentEpisode]?.link_embed;

  useEffect(() => {
    setIsLoading(true);
    if (movie) {
      setIsLoading(false);
      if (currentEpisode === 0) {
        toast.info('Nếu phim không tải được vui lòng load lại trang');
      }
      if (movie.quality === 'CAM') toast.warning('Phim hiện chưa có bản đẹp');
    } else {
      const fetchApi = async () => {
        try {
          setIsLoading(true);
          const movie = await getMovies.Detail(slug);
          if (movie) {
            document.title = movie.seoOnPage.titleHead;
            dispatch(getMovieDetails(movie));
            setIsLoading(false);
          } else {
            navigate('*');
          }
        } catch (error) {
          console.log('Error ---> ', error);
        }
      };
      fetchApi();
    }

    window.scroll({
      top: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEpisode, videoSrc]);

  useEffect(() => {
    const page = location.pathname; // Đặt tên trang là URL
    const title = document.title; // Tên trang từ document.title

    ReactGA.set({ page, title });
    ReactGA.send('Watch movie');
  }, [location]);

  const handleEpisodeChange = (index) => {
    setCurrentEpisode(index);
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

  const playM3u8 = (video, url, art) => {
    if (Hls.isSupported()) {
      if (art.hls) art.hls.destroy();
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      art.hls = hls;
      art.on('destroy', () => hls.destroy());
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
    } else {
      art.notice.show = 'Unsupported playback format: m3u8';
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {(isLoading && <p>Loading...</p>) || (
        <div className={cx('watch_video')}>
          <div className={cx('columns')}>
            <div className={cx('column')}>
              {(videoSrc && (
                <iframe
                  src={videoSrc}
                  frameBorder="0"
                  allow="accelerometer; autoplay; muted; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-js"
                ></iframe>
              )) || <div className="video-js">Vui lòng đợi giây lát</div>}
              {/* 
              <Player
                option={{
                  url: videoSrc,
                  customType: {
                    m3u8: playM3u8,
                  },
                  volume: 0.5,
                  isLive: false,
                  muted: false,
                  autoplay: true,
                  pip: true,
                  autoMini: true,
                  setting: true,
                  loop: true,
                  flip: true,
                  playbackRate: true,
                  aspectRatio: true,
                  fullscreen: true,
                  subtitleOffset: true,
                  miniProgressBar: true,
                  mutex: true,
                  backdrop: true,
                  playsInline: true,
                  autoPlayback: true,
                  airplay: true,
                  theme: '#23ade5',
                  lang: navigator.language.toLowerCase(),
                  moreVideoAttr: {
                    crossOrigin: 'anonymous',
                  },
                }}
                style={{
                  width: '100%',
                  height: '600px',
                }}
                getInstance={(art) => console.info(art)}
              /> */}
            </div>
          </div>
          <p className={cx('has-text-centered', 'is-size-7')}>
            <Link to="/faqs">Phim bị giật hình / mất tiếng nhân vật?</Link>
          </p>
          <section className={cx('section')}>
            <div className={cx('container')}>
              <div className={cx('columns')}>
                <div className={cx('column')}>
                  <h1 className="title is-3">{movie?.name}</h1>
                  <h2 className="subtitle is-5">
                    {movie?.origin_name} (
                    <Link className="year" to={`/year/${movie.year}`}>
                      {movie?.year}
                    </Link>
                    )
                  </h2>
                  <div className={cx('buttons', 'are-small', 'button-actions')} style={{ cursor: 'pointer' }}>
                    <div
                      onClick={handleShare}
                      className={cx('fb-share', 'button', 'is-link')}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
                      </svg>
                      Chia sẻ
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
                    {moviesSimilarExits && moviesSimilarExits.length > 0 && (
                      <div className="related-btn button is-success is-outlined" onClick={handleClickOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 224c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V284c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v120zm0-176c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V108c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v120zm96 144c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path>
                        </svg>
                        Phim tương tự
                      </div>
                    )}
                  </div>
                </div>
                <div className={cx('column', 'has-text-right')}>
                  <div className={cx('back')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path d="M11.093 251.65l175.998 184C211.81 461.494 256 444.239 256 408v-87.84c154.425 1.812 219.063 16.728 181.19 151.091-8.341 29.518 25.447 52.232 49.68 34.51C520.16 481.421 576 426.17 576 331.19c0-171.087-154.548-201.035-320-203.02V40.016c0-36.27-44.216-53.466-68.91-27.65L11.093 196.35c-14.791 15.47-14.791 39.83 0 55.3zm23.127-33.18l176-184C215.149 29.31 224 32.738 224 40v120c157.114 0 320 11.18 320 171.19 0 74.4-40 122.17-76.02 148.51C519.313 297.707 395.396 288 224 288v120c0 7.26-8.847 10.69-13.78 5.53l-176-184a7.978 7.978 0 0 1 0-11.06z"></path>
                    </svg>
                    <Link className="back" to={`/movie/${slug}`}>
                      Về trang giới thiệu phim
                    </Link>
                  </div>
                </div>
              </div>

              <div className={cx('buttons', 'episode')} style={{ maxHeight: 250, overflow: 'auto' }}>
                {/* <button className="button is-success is-outlined is-hidden">Tập 1 ... -1</button> */}
                {movie?.episodes[0]?.server_data?.map((episode, index) => {
                  return (
                    <span
                      className={cx('button', 'is-success')}
                      key={uid(episode)}
                      onClick={() => handleEpisodeChange(index)}
                      disabled={index === currentEpisode && true}
                    >
                      Tập {episode.name}
                    </span>
                  );
                })}
                <button className="button is-success is-outlined is-hidden"></button>
              </div>
              {/* Comment facebook */}
              <div className="comments-section">
                <h2 className="section-title title is-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.4 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.1 2.1 18.4 3.7 28 4.8 31.5 57.5 105.5 98 191.8 98 20.8 0 40.8-2.4 59.8-6.8 28.5 18.5 71.6 38.8 125.2 38.8 9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.5-.4-22.6-24.2-37.9-54.9zM142.2 311l-11.4 7.4c-20.1 13.1-50.5 28.2-87.7 32.5 8.8-11.3 20.2-27.6 29.5-46.4L83 283.7l-16.5-16.3C50.7 251.9 32 226.2 32 192c0-70.6 79-128 176-128s176 57.4 176 128-79 128-176 128c-17.7 0-35.4-2-52.6-6l-13.2-3zm303 103.4l-11.4-7.4-13.2 3.1c-17.2 4-34.9 6-52.6 6-65.1 0-122-25.9-152.4-64.3C326.9 348.6 416 278.4 416 192c0-9.5-1.3-18.7-3.3-27.7C488.1 178.8 544 228.7 544 288c0 34.2-18.7 59.9-34.5 75.4L493 379.7l10.3 20.7c9.4 18.9 20.8 35.2 29.5 46.4-37.1-4.2-67.5-19.4-87.6-32.4zm-37.8-267.7c.1.2.1.4.2.6-.1-.2-.1-.4-.2-.6z"></path>
                  </svg>
                  Bình luận phim
                </h2>
                <FacebookComments url={`https://newmoviesz.online/watch/${slug}`} />
              </div>
              <div className="dialog-smilar">
                <DialogSmilar
                  open={open}
                  setOpen={setOpen}
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                  slug={movie.slug}
                />
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Watch;
