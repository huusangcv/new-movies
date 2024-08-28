import { memo, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames/bind';
import styles from './Series.module.scss';
import Filter from '~/layouts/Filter';
import getMovies from '~/services/getMovies';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesSeries, getTotalItemsSeries } from '~/redux/actions';
import { getTotalItems, moviesSeries } from '~/redux/selector/selector';
const cx = classNames.bind(styles);

const Series = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const movies = useSelector(moviesSeries);
  const totalItems = useSelector(getTotalItems);

  const totalPage = Math.floor(+totalItems.moviesSeries / 24);
  console.log({ totalItems });
  useEffect(() => {
    setIsLoading(true);
    if (!movies || movies.length === 0 || page !== 1) {
      const fetchApi = async () => {
        try {
          const movies = await getMovies.Series(page);
          if (movies) {
            document.title = movies.seoOnPage.titleHead;
            dispatch(getMoviesSeries(movies.items));
            if (page === 1) {
              dispatch(getTotalItemsSeries(movies.params.pagination.totalItems));
            }
            setIsLoading(false);
          }
        } catch (error) {
          console.log('Erroe', error);
        }
      };
      fetchApi();
    }

    if (movies) {
      setIsLoading(false);
    }
    console.log({ movies });
    window.scroll({
      top: 0,
    });
  }, [page, dispatch]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <div className={cx('wapper')}>
        <div className="title-list">
          <h1 className="title">Phim bộ</h1>
          <Filter />
          {(isLoading && <p>Loading...</p>) || (
            <>
              <div className="gird columns">
                {movies?.map((movie) => {
                  return (
                    <div className="column" key={movie._id}>
                      <Link to={`/movie/${movie.slug}`} className="cover">
                        <LazyLoadImage
                          src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
                          alt=""
                          effect="blur"
                        ></LazyLoadImage>
                      </Link>
                      <h3 className="name vi">
                        <a href="#!">{movie.name}</a>
                      </h3>
                      <h3 className="name en">
                        <a href="#!">{movie.origin_name}</a>
                      </h3>
                    </div>
                  );
                })}
              </div>
              <div className="paginate">
                <ReactPaginate
                  nextLabel="Trang kế"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={totalPage}
                  previousLabel="Trang trước"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                  forcePage={page - 1}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(Series);
