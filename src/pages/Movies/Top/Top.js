import { memo, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Top.scss';
import getMovies from '~/services/getMovies';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMoviesTop, getCurrentPageMovies, getMoviesTop, getTotalItemsTop } from '~/redux/actions';
import { currentMoviesTop, currentPageMovies, getTotalItems, moviesTop } from '~/redux/selector/selector';
import Pagination from '~/components/Pagination';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const cx = classNames.bind(styles);

const Top = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const movies = useSelector(moviesTop);
  const page = useSelector(currentPageMovies);
  const totalItems = useSelector(getTotalItems);
  const isCurrentMoviesTop = useSelector(currentMoviesTop);

  console.log(isCurrentMoviesTop);
  const totalPage = Math.floor(totalItems.moviesSingle / 24);
  useEffect(() => {
    // check if don't have movies or length of movies === 0 or page !==1 when call API
    if (!movies || movies.length === 0 || page !== 1) {
      const fetchApi = async () => {
        setIsLoading(true);
        try {
          const movies = await getMovies.Top(page, isCurrentMoviesTop);
          if (movies) {
            document.title = 'Phim hot, Top phim xem nhiều nhất';

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

            dispatch(getMoviesTop(result));

            if (page === 1) {
              dispatch(getTotalItemsTop(movies.params.pagination.totalItems));
            }
            setIsLoading(false);
          }
        } catch (error) {
          console.log('Erroe', error);
        }
      };
      //Check page === 1 delay 1,2 call api movies series else page !== 1 delay 400ms
      if (page === 1) {
        setTimeout(() => {
          fetchApi();
        }, 1200);
      } else {
        setTimeout(() => {
          fetchApi();
        }, 400);
      }
      //--
    } else {
      if (movies) {
        setIsLoading(false);
      }
    }
    window.scroll({
      top: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, dispatch, isCurrentMoviesTop]);

  const handlePageClick = (e) => {
    dispatch(getCurrentPageMovies(e.selected + 1));
  };

  return (
    <>
      <div className={cx('wapper')}>
        <div className="title-list">
          <h1 className="title is-3 has-text-centered">Top phim được xem nhiều nhất</h1>
          <div className="MuiPaper-root mb-4 MuiPaper-elevation1 MuiPaper-rounded">
            <div className="MuiTabs-root">
              <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist">
                  <button
                    className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary"
                    tabindex="-1"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    onClick={() => dispatch(getCurrentMoviesTop(''))}
                  >
                    <span className="MuiTab-wrapper">Tất cả</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className={`MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary`}
                    tabindex="0"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    onClick={() => dispatch(getCurrentMoviesTop('phim-le'))}
                  >
                    <span className="MuiTab-wrapper">Phim lẻ</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary"
                    tabindex="-1"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    onClick={() => dispatch(getCurrentMoviesTop('phim-bo'))}
                  >
                    <span className="MuiTab-wrapper">Phim bộ</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                </div>
                <span className="jss19 jss20 MuiTabs-indicator" style={{ left: '413.854px', width: '160px' }}></span>
              </div>
            </div>
          </div>
          {(isLoading && <p>Loading...</p>) || (
            <>
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
              <Pagination handlePageClick={handlePageClick} totalPage={totalPage} page={page} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(Top);
