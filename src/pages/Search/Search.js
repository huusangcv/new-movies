import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import getMovies from '~/services/getMovies';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Search = () => {
  const [searchName, setSearchName] = useState('');
  const [movies, setMovies] = useState([]);

  const refInput = useRef();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await getMovies.Search(searchName);
        if (movies) {
          document.title = searchName;
          setMovies(data.items);
        }
      } catch (error) {
        console.log('Error ---> ', error);
      }
    };

    if (searchName !== '') {
      window.addEventListener('keyup', fetchApi());
    }

    return () => window.removeEventListener('keyup', fetchApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

  //Func handle setName to call api
  const handleSearchMovie = (e) => {
    setSearchName(e.target.value);
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
            ref={refInput}
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
    </div>
  );
};

export default Search;
