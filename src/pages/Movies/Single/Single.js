import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames/bind';
import styles from './Single.module.scss';
import Filter from '~/layouts/Filter';
import getMovies from '~/services/getMovies';
import { moviesSelector } from '~/redux/selector/selector';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
const cx = classNames.bind(styles);

const Single = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [paginate, setPaginate] = useState();

  const totalPage = Math.floor(paginate?.totalItems / paginate?.totalItemsPerPage);
  const { moviesType, type, nation, year, sortBy } = useSelector(moviesSelector);
  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      const movies = await getMovies.Single(moviesType, page, sortBy, type, nation, year);
      document.title = movies.seoOnPage.titleHead;
      if (movies) {
        setIsLoading(false);
        setMovies(movies.items);
        setPaginate(movies.params.pagination);
      }
    };

    let timer = setTimeout(() => {
      fetchApi();
    }, 1000);

    window.scroll({
      top: 0,
    });

    return () => clearTimeout(timer);
  }, [moviesType, nation, page, sortBy, type, year]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <div className={cx('wapper')}>
        <div className="title-list">
          <h1 className="title">Phim lẻ</h1>
          <Filter title={moviesType || 'phim-le'} isLoading={isLoading} />
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

export default memo(Single);
