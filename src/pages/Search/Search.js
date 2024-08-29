import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState } from 'react';
import getMovies from '~/services/getMovies';
import ReactPaginate from 'react-paginate';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchName, setSearchName] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await getMovies.Search(searchName, page);
        if (movies) {
          setMovies(data.items);
        }
      } catch (error) {
        console.log('Error ---> ', error);
      }
    };
    if (searchName !== '') {
      fetchApi();
    }
  }, [page, searchName]);

  console.log({ movies });
  const handleSearchMovie = (e) => {
    setSearchName(e.target.value);
  };

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <div className={cx('wapper')}>
      <div className="title-list">
        <div className={cx('mb-5')}>
          <input
            type="text"
            className={cx('input', 'is-medium')}
            placeholder="Nhập tên phim..."
            value={searchName}
            onChange={handleSearchMovie}
            spellCheck={false}
          />
        </div>
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
      </div>
      <div className="paginate">
        <ReactPaginate
          nextLabel="Trang sau"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          pageCount={50}
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
    </div>
  );
};

export default Search;
