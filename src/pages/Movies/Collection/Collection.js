import { memo, useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import classNames from 'classnames/bind';
import styles from './Collection.module.scss';
import Filter from '~/layouts/Filter';
import getMovies from '~/services/getMovies';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPageMovies, getMoviesSingle, getTotalItemsSingle } from '~/redux/actions';
import { currentPageMovies, getTotalItems, moviesSingle } from '~/redux/selector/selector';
import Pagination from '~/components/Pagination';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const cx = classNames.bind(styles);

const Collection = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  console.log({ query });

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const movies = useSelector(moviesSingle);
  const page = useSelector(currentPageMovies);
  const totalItems = useSelector(getTotalItems);

  const totalPage = Math.floor(totalItems.moviesSingle / 24);
  useEffect(() => {
    // check if don't have movies or length of movies === 0 or page !==1 when call API

    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const movies = await getMovies.Single(page);
        if (movies) {
          document.title = movies.seoOnPage.titleHead;

          // Map array to only get [name,slug,origin_name,thumb_url]
          const result = movies.items.map((movie) => {
            return {
              name: movie.name,
              slug: movie.slug,
              origin_name: movie.origin_name,
              thumb_url: movie.thumb_url,
            };
          });

          dispatch(getMoviesSingle(result));

          // setMovies(result);

          //check page === 1 to get totalItem on each page
          if (page === 1) {
            dispatch(getTotalItemsSingle(movies.params.pagination.totalItems));
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.log('Erroe', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (!movies || movies.length === 0 || page !== 1) {
      const delay = page === 1 ? 1200 : 400;
      const timeoutId = setTimeout(fetchApi, delay);
      window.scroll({
        top: 0,
      });
      // Dọn dẹp timeout khi component unmount hoặc khi page thay đổi
      return () => clearTimeout(timeoutId);
    } else {
      setIsLoading(false);
      window.scroll({
        top: 0,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const page = location.pathname; // Đặt tên trang là URL
    const title = document.title; // Tên trang từ document.title

    ReactGA.set({ page, title });
    ReactGA.send('Single Movies');
  }, [location]);

  const handlePageClick = (e) => {
    dispatch(getCurrentPageMovies(e.selected + 1));
  };

  return (
    <>
      <div className={cx('wapper')}>
        {(isLoading && <p>Loading...</p>) || (
          <>
            <div className="title-list">
              <h1 className={cx('title')}>Bộ sưu tập phim của bạn</h1>
              <h2 class={cx('title', 'is-4')}>Các phim bạn muốn xem:</h2>

              {(true && <div style={{ color: '#7a7a7a' }}>Bạn chưa thêm phim nào vào danh sách này</div>) || (
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
            </div>

            <hr />

            <div className="title-list">
              <h2 class={cx('title', 'is-4')}>Các phim bạn đã xem:</h2>
              {(true && <div style={{ color: '#7a7a7a' }}>Bạn chưa thêm phim nào vào danh sách này</div>) || (
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
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default memo(Collection);
