import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import ReactGA from 'react-ga4';
import { Link, useLocation } from 'react-router-dom';
import getMovies from '~/services/getMovies';
import styles from './Search.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchName, setSearchName] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const refInput = useRef();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const movies = await getMovies.Search(searchName.trim());
        if (movies) {
          document.title = searchName;

          setMovies(movies.items);
        }
      } catch (error) {
        console.log('Error ---> ', error);
      }
    };

    if (searchName !== '') {
      fetchApi();
    }

    window.scroll({
      top: 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

  useEffect(() => {
    const page = location.pathname; // Đặt tên trang là URL
    const title = document.title; // Tên trang từ document.title

    ReactGA.set({ page, title });
    ReactGA.send('Search Movie');
  }, [location]);

  //Func handle setName to call api
  const handleSearchMovie = (e) => {
    setSearchName(e.target.value);
  };
  console.log(refInput.current);

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
            ref={refInput}
          />
        </div>
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
      </div>
    </div>
  );
};

export default Search;
