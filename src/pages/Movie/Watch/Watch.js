/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames/bind';
import styles from './Watch.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from 'react-ga4';
import { uid } from 'react-uid';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '~/redux/actions';
import { movieDetail } from '~/redux/selector/selector';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import videoUrl from '~/assets/video/ex1.mp4';
import Hls from 'hls.js';

import getMovies from '~/services/getMovies';
import Footer from '~/layouts/Footer';
import Artplayer from 'artplayer';
import Player from './Video';

const cx = classNames.bind(styles);
const Watch = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector(movieDetail);

  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [isLoading, setIsLoading] = useState(() => {
    if (movie) {
      return false;
    } else {
      return true;
    }
  });

  const videoSrc = movie?.episodes[0]?.server_data[currentEpisode]?.link_m3u8;

  useEffect(() => {
    setIsLoading(true);
    if (movie) {
      setIsLoading(false);
      if (currentEpisode === 0) {
        toast.info('Nếu phim không load được vui lòng refresh');
      }
      if (movie.quality === 'CAM') toast.warning('Phim hiện chưa có bản đẹp');
    } else {
      const fetchApi = async () => {
        try {
          setIsLoading(true);
          const movie = await getMovies.Detail(slug);
          if (movie) {
            document.title = movie.seoOnPage.titleHead;
            dispatch(getMovieDetails(movie));
            setIsLoading(false);
          } else {
            navigate('*');
          }
        } catch (error) {
          console.log('Error ---> ', error);
        }
      };
      fetchApi();
    }

    window.scroll({
      top: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEpisode, videoSrc]);

  useEffect(() => {
    const page = location.pathname; // Đặt tên trang là URL
    const title = document.title; // Tên trang từ document.title

    ReactGA.set({ page, title });
    ReactGA.send('Watch movie');
  }, [location]);

  const handleEpisodeChange = (index) => {
    setCurrentEpisode(index);
  };

  const handleShare = async () => {
    try {
      await navigator?.share({
        title: 'Hữu Sang',
        text: 'Phim này hay lắm',
        url: window.location.href,
      });
    } catch (error) {}
  };

  const playM3u8 = (video, url, art) => {
    if (Hls.isSupported()) {
      if (art.hls) art.hls.destroy();
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      art.hls = hls;
      art.on('destroy', () => hls.destroy());
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
    } else {
      art.notice.show = 'Unsupported playback format: m3u8';
    }
  };

  return (
    <>
      {(isLoading && <p>Loading...</p>) || (
        <div className={cx('watch_video')}>
          <div className={cx('columns')}>
            <div className={cx('column')}>
              {/* {(videoSrc && (
                <iframe
                  src={videoSrc}
                  frameBorder="0"
                  allow="accelerometer; autoplay; muted; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-js"
                ></iframe>
              )) || <div className="video-js">Vui lòng đợi giây lát</div>} */}

              <Player
                option={{
                  url: videoSrc,
                  customType: {
                    m3u8: playM3u8,
                  },
                  volume: 0.5,
                  isLive: false,
                  muted: false,
                  autoplay: false,
                  pip: true,
                  autoSize: true,
                  autoMini: true,
                  setting: true,
                  loop: true,
                  flip: true,
                  playbackRate: true,
                  aspectRatio: true,
                  fullscreen: true,
                  fullscreenWeb: true,
                  subtitleOffset: true,
                  miniProgressBar: true,
                  mutex: true,
                  backdrop: true,
                  playsInline: true,
                  autoPlayback: true,
                  airplay: true,
                  theme: '#23ade5',
                  lang: navigator.language.toLowerCase(),
                  moreVideoAttr: {
                    crossOrigin: 'anonymous',
                  },
                  controls: [
                    {
                      position: 'right',
                      html: 'Control',
                      index: 1,
                      tooltip: 'Control Tooltip',
                      style: {
                        marginRight: '20px',
                      },
                      click: function () {
                        console.info('You clicked on the custom control');
                      },
                    },
                  ],
                }}
                style={{
                  width: '600px',
                  height: '400px',
                  margin: '60px auto 0',
                }}
                getInstance={(art) => console.info(art)}
              />
            </div>
          </div>
          <p className={cx('has-text-centered', 'is-size-7')}>
            <a href="/developing">Phim bị giật hình / mất tiếng nhân vật?</a>
          </p>
          <section className={cx('section')}>
            <div className={cx('container')}>
              <div className={cx('columns')}>
                <div className={cx('column')}>
                  <h1 className="title is-3">{movie?.name}</h1>
                  <h2 className="subtitle is-5">
                    {movie?.origin_name} (<Link to={`/year/${movie.year}`}>{movie?.year}</Link>)
                  </h2>
                  <div className={cx('buttons', 'are-small')} style={{ cursor: 'pointer' }}>
                    <div
                      onClick={handleShare}
                      className={cx('fb-share', 'button', 'is-link')}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
                      </svg>
                      Chia sẻ
                    </div>
                  </div>
                </div>
                <div className={cx('column', 'has-text-right')}>
                  <div className={cx('back')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path d="M11.093 251.65l175.998 184C211.81 461.494 256 444.239 256 408v-87.84c154.425 1.812 219.063 16.728 181.19 151.091-8.341 29.518 25.447 52.232 49.68 34.51C520.16 481.421 576 426.17 576 331.19c0-171.087-154.548-201.035-320-203.02V40.016c0-36.27-44.216-53.466-68.91-27.65L11.093 196.35c-14.791 15.47-14.791 39.83 0 55.3zm23.127-33.18l176-184C215.149 29.31 224 32.738 224 40v120c157.114 0 320 11.18 320 171.19 0 74.4-40 122.17-76.02 148.51C519.313 297.707 395.396 288 224 288v120c0 7.26-8.847 10.69-13.78 5.53l-176-184a7.978 7.978 0 0 1 0-11.06z"></path>
                    </svg>
                    <Link to={`/movie/${slug}`}>Về trang giới thiệu phim</Link>
                  </div>
                </div>
              </div>

              <div className={cx('buttons')} style={{ maxHeight: 250, overflow: 'auto' }}>
                {/* <button className="button is-success is-outlined is-hidden">Tập 1 ... -1</button> */}
                {movie?.episodes[0]?.server_data?.map((episode, index) => {
                  return (
                    <span
                      className={cx('button', 'is-success')}
                      key={uid(episode)}
                      onClick={() => handleEpisodeChange(index)}
                      disabled={index === currentEpisode && true}
                    >
                      Tập {episode.name}
                    </span>
                  );
                })}
                <button className="button is-success is-outlined is-hidden"></button>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Watch;
