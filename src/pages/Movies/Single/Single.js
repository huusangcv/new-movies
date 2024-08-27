import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames/bind';
import styles from './Single.module.scss';
import Filter from '~/layouts/Filter';
import ReactPaginate from 'react-paginate';
import getMovies from '~/services/getMovies';
import { moviesSelector } from '~/redux/selector/selector';

const cx = classNames.bind(styles);

const Single = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { moviesType, type, nation, year, sortBy } = useSelector(moviesSelector);
  console.log('moviesType, type, nation, year, sortBy ', moviesType, type, nation, year, sortBy);
  useEffect(() => {
    document.title = 'Phim lẻ';

    const fetchApi = async (movieType = 'phim-le') => {
      const movies = await getMovies.Single(movieType, page, moviesType, type, nation, year, sortBy);
      setMovies(movies.items);
    };
    let timer;
    if (movies.length <= 0) {
      timer = setTimeout(() => {
        fetchApi();
      }, 1000);
    }

    window.scroll({
      top: 0,
    });

    return () => clearTimeout(timer);
  }, [moviesType, type, nation, year, sortBy]);
  console.log('movies: ', movies);
  return (
    <>
      <div className={cx('wapper')}>
        <div className="title-list">
          <h1 className="title">Phim lẻ</h1>
          <Filter title="phim-le" />
          <div className="gird columns">
            {movies?.map((movie) => {
              return (
                <div className="column" key={movie._id}>
                  <a href="#!" className="cover">
                    <LazyLoadImage
                      src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
                      alt=""
                      effect="blur"
                    ></LazyLoadImage>
                  </a>
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
        </div>
      </div>
      <div className="pagination">
        <ReactPaginate
          nextLabel="Trang kế >"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={888}
          previousLabel="< Trang trước"
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
          // forcePage={page - 1}
        />
      </div>
    </>
  );
};

export default memo(Single);
