import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import backGround from './footer-bg.jpg';
const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <footer className={cx('wapper')} style={{ background: `url(${backGround})` }}>
      Footer
    </footer>
  );
};

export default Footer;
