import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import backGround from './footer-bg.jpg';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('wapper', 'footer')} style={{ background: `url(${backGround})` }}>
      <div className={cx('container')}>
        <h3 className={cx('title')}>
          Phim chất lượng cao online của <a href="/">XemPhim</a> khác gì so với các trang phim khác?
        </h3>
        <ul className={cx('has-text-grey-light')}>
          <li>
            Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các trang phim
            khác chỉ có tới độ phân giải HD (720p) là cao nhất
          </li>
          <li>
            Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần phim online thông thường - đây là yếu tố
            quyết định độ nét của phim (thậm chí còn quan trọng hơn độ phân giải)
          </li>
          <li>Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác (kể cả Youtube)</li>
          <li>Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao</li>
          <li>Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề của riêng mình để xem online</li>
          <li>
            Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh &amp; tiếng Việt), phù hợp với những người
            muốn học tiếng Anh qua phụ đề phim
          </li>
        </ul>

        {/* <div className={cx('layout_contacts')}>
          <a rel="nofollow" className="layout_social__2PR5b" title="Liên hệ" href="/contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/XemPhim.news/"
            target="_blank"
            className={cx('layout_socia')}
            title="Facebook Page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512">
              <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
            </svg>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
