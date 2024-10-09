import { memo, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Top.scss';
import getMovies from '~/services/getMovies';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesTop } from '~/redux/actions';
import { moviesTop } from '~/redux/selector/selector';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const cx = classNames.bind(styles);

const Top = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector(moviesTop);
  const [value, setValue] = useState('phim-le');

  useEffect(() => {
    // check if don't have movies or length of movies === 0 or page !==1 when call API

    const fetchApi = async () => {
      setIsLoading(false);
      try {
        const movies = await getMovies.Top(1, value);
        if (movies) {
          document.title = 'Phim hot, Top phim xem nhiều nhất';

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

          dispatch(getMoviesTop(result));
        }
      } catch (error) {
        console.log('Erroe', error);
      }
    };

    //Check page === 1 delay 1,2 call api movies series else page !== 1 delay 400ms
    fetchApi();
    //--

    window.scroll({
      top: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={cx('wapper')}>
        <div className="title-list">
          <h1 className="title is-3 has-text-centered">Top phim được xem nhiều nhất</h1>
          <div className="MuiPaper-root mb-4 MuiPaper-elevation1 MuiPaper-rounded ">
            <Box sx={{ width: '100%', bgcolor: '#0b1e30' }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab value="phim-le" label="Phim lẻ" />
                <Tab value="phim-bo" label="Phim bộ" />
              </Tabs>
            </Box>
          </div>
          {(isLoading && <p>Loading...</p>) || (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(Top);
