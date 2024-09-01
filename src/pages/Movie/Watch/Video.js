import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ movie, currentEpisode, poster_url, videoSrc }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    const player = videojs(videoRef.current, {
      userActions: {
        hotkeys: function (event) {
          if (event.key === ' ') {
            event.preventDefault();
            if (this.paused()) {
              this.play();
            } else {
              this.pause();
            }
          }
        },
      },
      playbackRates: [0.5, 1, 1.5, 2],
      controls: true,
      enableSmoothSeeking: true,
      controlBar: {
        skipButtons: {
          backward: 10,
          forward: 10,
        },
      },
      spatialNavigation: {
        enabled: true,
      },
      hls: {
        smoothQualityChange: true,
      },
      autoPlay: false,
      preload: 'auto',
      sources: [
        {
          src: videoSrc, // Đảm bảo videoSrc là URL hợp lệ
          type: 'application/x-mpegURL',
        },
      ],
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [currentEpisode, videoSrc]);

  return (
    <div
      data-vjs-player="true"
      id="vjs_video_3"
      playsInline={true}
      tabIndex="-1"
      role="region"
      lang="vi"
      translate="no"
      aria-label="Video Player"
      className="video-js vjs-controls-enabled vjs-workinghover vjs-v7 vjs-contextmenu-ui vjs-seek-buttons vjs-has-started vjs_video_3-dimensions vjs-paused vjs-user-active"
      style={{ paddingTop: '41.67%', outline: 'none' }}
    >
      <video
        ref={videoRef}
        poster={`https://img.ophim.live/uploads/movies/${poster_url}`}
        playsInline="playsinline"
        id="vjs_video_3"
        tabIndex="-1"
        className="video-js"
        role="application"
      ></video>
    </div>
  );
};

export default VideoPlayer;
