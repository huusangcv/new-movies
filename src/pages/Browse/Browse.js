import { memo, useEffect, useState } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames/bind';
import styles from './Browse.module.scss';
import Filter from '~/layouts/Filter';
import getMovies from '~/services/getMovies';
import ReactGA from 'react-ga';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { moviesSelector } from '~/redux/selector/selector';
import Pagination from '~/components/Pagination';
const cx = classNames.bind(styles);

const Browse = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [paginate, setPaginate] = useState();
  const [movies, setMovies] = useState([]);
  const { moviesType, type, nation, year, sortBy } = useSelector(moviesSelector);
  const totalPage = Math.floor(paginate?.totalItems / paginate?.totalItemsPerPage);
  useEffect(() => {
    console.log('render');
    setIsLoading(true);

    const fetchApi = async () => {
      try {
        const movies = await getMovies.Browse(moviesType, page, type, nation, year, sortBy);
        if (movies) {
          document.title = movies.seoOnPage.titleHead;
          setPaginate(movies.params.pagination);
          setMovies(movies.items);
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
  }, [moviesType, page, type, nation, year, sortBy]);

  useEffect(() => {
    const page = location.pathname; // Đặt tên trang là URL
    const title = document.title; // Tên trang từ document.title

    ReactGA.set({ page, title });
    ReactGA.send('pageview');
  }, [location]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <div className={cx('wapper')}>
        <div className="title-list">
          <h1 className="title">{movies?.titlePage}</h1>
          <Filter title="phim-bo" isLoading={isLoading} />
          {(isLoading && <p>Loading...</p>) || (
            <>
              <div className="gird columns">
                {movies?.map((movie) => {
                  return (
                    <Link to={`/movie/${movie.slug}`} className="column" key={movie._id}>
                      <div className="cover">
                        <img src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`} alt=""></img>
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

export default memo(Browse);
