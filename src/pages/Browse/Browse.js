import { memo, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames/bind';
import styles from './Browse.module.scss';
import Filter from '~/layouts/Filter';
import getMovies from '~/services/getMovies';
import ReactGA from 'react-ga4';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { moviesOnMultiline } from '~/redux/selector/selector';
import Pagination from '~/components/Pagination';
import { useQueryParams, StringParam, NumberParam } from 'use-query-params';
const cx = classNames.bind(styles);

const Browse = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [paginate, setPaginate] = useState();
  const [movies, setMovies] = useState([]);
  // const { moviesType, type, nation, year, sortBy } = useSelector(moviesSelector);

  const isMultiline = useSelector(moviesOnMultiline);

  const [query] = useQueryParams({
    type: StringParam,
    genre: StringParam,
    country: StringParam,
    year: NumberParam,
    sort: StringParam,
  });

  const { type, genre, country, year, sort } = query;

  const totalPage = Math.floor(paginate?.totalItems / paginate?.totalItemsPerPage);
  useEffect(() => {
    setIsLoading(true);

    const fetchApi = async () => {
      try {
        const movies = await getMovies.Browse(type, page, genre, country, year, sort);
        if (movies) {
          document.title = movies.seoOnPage.titleHead;
          setPaginate(movies.params.pagination);

          const result = movies.items.map((movie) => {
            return {
              name: movie.name,
              slug: movie.slug,
              origin_name: movie.origin_name,
              year: movie.year,
              thumb_url: movie.thumb_url,
              poster_url: movie.poster_url,
              category: movie.category,
              country: movie.country,
              tmdb: movie.tmdb,
              time: movie.time,
            };
          });
          setMovies(result);
          setIsLoading(false);
        }
      } catch (error) {
        console.log('Erroe', error);
      }
    };

    fetchApi();

    window.scroll({
      top: 0,
    });
  }, [page, type, genre, country, year, sort]);

  useEffect(() => {
    const page = location.pathname; // Đặt tên trang là URL
    const title = document.title; // Tên trang từ document.title

    ReactGA.set({ page, title });
    ReactGA.send('Filter Movies');
  }, [location]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <div className={cx('wapper')}>
        <div className="title-list">
          <h1 className="title">{movies?.titlePage}</h1>
          <Filter />
          {(isLoading && <p>Loading...</p>) || (
            <>
              {(isMultiline && (
                <div className="tlist">
                  {movies?.map((movie) => {
                    return (
                      <div className="media">
                        <Link className="media-left" to={`/movie/${movie.slug}`}>
                          <LazyLoadImage
                            src={`https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75`}
                            alt={movie.name}
                            effect="blur"
                            srcSet={`
                            https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75 384w`}
                          ></LazyLoadImage>
                        </Link>
                        <div className="media-content">
                          <div className="columns">
                            <div className="column">
                              <h3 className="name vi">
                                <Link to={`/movie/${movie.slug}`}>{movie.name}</Link>
                              </h3>
                              <h3 className="name en">
                                <Link to={`/movie/${movie.slug}`}>{movie.origin_name}</Link> (
                                <Link className="year" to="/year/2024">
                                  {movie.year}
                                </Link>
                                )
                              </h3>
                            </div>
                            <div className="column meta">
                              <p>{movie?.time}</p>
                              <p className="csv">
                                {movie?.country.map((country, index) => {
                                  return (
                                    <Link key={country.id} to={`/country/${country.slug}`}>
                                      {(index === 0 && country.name) || `, ${country.name}`}
                                    </Link>
                                  );
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column tags genres">
                              {movie?.category.map((item, index) => {
                                return (
                                  <Link className="tag is-dark" key={item.id} to={`/genre/${item.slug}`}>
                                    {(index <= 1 && item.name) || `${item.name} `}
                                  </Link>
                                );
                              })}
                            </div>
                            <div className="column imdb-rating">
                              <span className="imdb-icon">
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
                              </span>{' '}
                              {(Math.round(movie?.tmdb?.vote_average * 10) / 10 &&
                                Math.round(movie?.tmdb?.vote_average * 10) / 10) ||
                                ''}
                            </div>
                          </div>
                          <div className="intro">
                            <Link to={`/movie/${movie.slug}`} style={{ color: '#428bca', cursor: 'pointer' }}>
                              Xem chi tiết
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )) || (
                <div className="gird columns">
                  {movies?.map((movie) => {
                    return (
                      <Link to={`/movie/${movie.slug}`} className="column" key={movie._id}>
                        <div className="cover">
                          <LazyLoadImage
                            src={`https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75`}
                            alt={movie.name}
                            effect="blur"
                            srcSet={`
                            https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75 384w`}
                          ></LazyLoadImage>
                        </div>
                        <h3 className="name vi">
                          <span>{movie.name}</span>
                        </h3>
                        <h3 className="name en">
                          <span>{movie.origin_name}</span>
                        </h3>
                      </Link>
                    );
                  })}
                </div>
              )}
              <Pagination handlePageClick={handlePageClick} totalPage={totalPage} page={page} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(Browse);
