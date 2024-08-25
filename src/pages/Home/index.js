import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from './Home.module.scss';
import thumb from '~/assets/images/thumb.jpg';
const cx = classNames.bind(styles);
const HomePage = () => {
  useEffect(() => {
    document.title = 'Từ Hollywood đến Bollywood, chúng tôi mang đến những bộ phim bạn yêu thích';
  }, []);

  return (
    <div className={cx('wapper')}>
      <h2 className="heading">
        <span>PHIM ĐỀ CỬ</span>
      </h2>

      <div className="title-list">
        <div className="gird columns">
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
        </div>
      </div>

      <h2 className="heading">
        <span>PHIM LẺ MỚI CẬP NHẬT</span>
      </h2>
      <div className="title-list">
        <div className="gird columns">
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
        </div>
      </div>
      <h2 className="heading">
        <span>PHIM BỘ MỚI CẬP NHẬT</span>
      </h2>
      <div className="title-list">
        <div className="gird columns">
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
          <div className="column">
            <a href="#!" className="cover">
              <img src={thumb} alt="" />
            </a>
            <h3 className="name vi">
              <a href="#!">Việt Nam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolores.</a>
            </h3>
            <h3 className="name en">
              <a href="#!">
                English Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum quibusdam recusandae
                sit consequatur quaerat facere laudantium doloribus, nihil sunt.
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
