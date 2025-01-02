import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import ReactGA from 'react-ga4';
import { Link, useLocation } from 'react-router-dom';
import getMovies from '~/services/getMovies';
import styles from './Search.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { StringParam, useQueryParams } from 'use-query-params';
import ImageComponent from '~/components/ImagesComponent/ImagesComponent';

const cx = classNames.bind(styles);

const Search = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const refInput = useRef();

  const [query, setQuery] = useQueryParams({
    q: StringParam,
  });

  const { q } = query;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const movies = await getMovies.Search(q);
        if (movies) {
          if (q) {
            document.title = q;
          } else {
            document.title = 'Tìm kiếm phim';
          }

          const result = movies.items.map((movie) => {
            return {
              name: movie.name,
              slug: movie.slug,
              origin_name: movie.origin_name,
              year: movie.year,
              thumb_url: movie.thumb_url,
              poster_url: movie.poster_url,
              category: movie.category,
              country: movie.country,
              tmdb: movie.tmdb,
              time: movie.time,
            };
          });

          setMovies(result);
        }
      } catch (error) {
        console.log('Error ---> ', error);
      }
    };

    fetchApi();

    window.scroll({
      top: 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  useEffect(() => {
    const page = location.pathname; // Đặt tên trang là URL
    const title = document.title; // Tên trang từ document.title

    ReactGA.set({ page, title });
    ReactGA.send('Search Movie');
  }, [location]);

  //Func handle setName to call api
  const handleSearchMovie = (e) => {
    const searchName = e.target.value;

    if (searchName === '') {
      setQuery({}, 'push');
    } else {
      setQuery({ q: searchName }, 'push');
    }
  };

  return (
    <div className={cx('wapper')}>
      <div className="title-list">
        <div className={cx('mb-5')}>
          <input
            type="text"
            className={cx('input', 'is-medium')}
            placeholder="Nhập tên phim..."
            value={q}
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
                  <ImageComponent
                    src={`https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75`}
                    alt={movie.name}
                    srcSet={`
                              https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${movie.thumb_url}&w=384&q=75 384w`}
                  />
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
