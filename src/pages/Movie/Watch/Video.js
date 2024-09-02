import React, { memo, useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = memo(({ movie, currentEpisode, poster_url }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Kiểm tra xem phần tử video đã tồn tại trong DOM chưa
    if (videoRef.current) {
      // Khởi tạo player
      playerRef.current = videojs(videoRef.current, {
        playbackRates: [0.5, 1, 1.5, 2],
        controls: true,
        userActions: {
          hotkeys: function (event) {
            if (event.key === ' ') {
              event.preventDefault();
              this.paused() ? this.play() : this.pause();
            }
          },
        },
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
        autoplay: true,
        preload: 'auto',
      });

      // Cập nhật source video
      const newSrc = movie?.episodes[0]?.server_data[currentEpisode]?.link_m3u8;
      if (newSrc) {
        playerRef.current.src({ src: newSrc, type: 'application/x-mpegURL' });
        playerRef.current.poster(`https://img.ophim.live/uploads/movies/${poster_url}`);
      }
    }

    // Dọn dẹp player khi component bị unmount
  }, [currentEpisode, movie, poster_url]);

  return (
    <div
      data-vjs-player="true"
      playsInline
      tabIndex="-1"
      role="region"
      lang="vi"
      translate="no"
      aria-label="Video Player"
      className="video-js vjs-controls-enabled vjs-workinghover"
      style={{ paddingTop: '41.67%', outline: 'none' }}
    >
      <video
        ref={videoRef}
        poster={`https://img.ophim.live/uploads/movies/${poster_url}`}
        playsInline
        tabIndex="-1"
        className="video-js"
        role="application"
      />
    </div>
  );
});

export default VideoPlayer;
