import { memo, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames/bind';
import styles from './Single.module.scss';
import Filter from '~/layouts/Filter';
import getMovies from '~/services/getMovies';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesSingle, getTotalItemsSingle } from '~/redux/actions';
import { getTotalItems, moviesSingle } from '~/redux/selector/selector';
import Pagination from '~/components/Pagination';
const cx = classNames.bind(styles);

const Single = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const movies = useSelector(moviesSingle);
  const totalItems = useSelector(getTotalItems);

  const totalPage = Math.floor(totalItems.moviesSingle / 24);
  useEffect(() => {
    // check if don't have movies or length of movies === 0 or page !==1 when call API
    if (!movies || movies.length === 0 || page !== 1) {
      const fetchApi = async () => {
        setIsLoading(true);
        try {
          const movies = await getMovies.Single(page);
          if (movies) {
            document.title = movies.seoOnPage.titleHead;
            dispatch(getMoviesSingle(movies.items));

            //check page === 1 to get totalItem on each page
            if (page === 1) {
              dispatch(getTotalItemsSingle(movies.params.pagination.totalItems));
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
      //-------
    } else {
      if (movies) {
        setIsLoading(false);
      }
    }
    window.scroll({
      top: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <div className={cx('wapper')}>
        <div className="title-list">
          <h1 className="title">Phim lẻ</h1>
          <Filter title="phim-le" />
          {(isLoading && <p>Loading...</p>) || (
            <>
              <div className="gird columns">
                {movies?.map((movie) => {
                  return (
                    <Link to={`/movie/${movie.slug}`} className="column" key={movie._id}>
                      <div className="cover">
                        <LazyLoadImage
                          src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
                          alt=""
                          effect="blur"
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

export default memo(Single);
