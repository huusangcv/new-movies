import { memo, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames/bind';
import styles from './Browse.module.scss';
import Filter from '~/layouts/Filter';
import getMovies from '~/services/getMovies';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { moviesSelector } from '~/redux/selector/selector';
import ReactPaginate from 'react-paginate';
const cx = classNames.bind(styles);

const Browse = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [paginate, setPaginate] = useState();
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const { titlePage, moviesType, type, nation, year, sortBy } = useSelector(moviesSelector);
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
  }, [moviesType, page, type, nation, year, sortBy, dispatch]);

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

export default memo(Browse);
