import classNames from 'classnames/bind';
import styles from './Single.module.scss';
import thumb from '~/assets/images/thumb.jpg';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
const Single = () => {
  useEffect(() => {
    document.title = 'Phim lẻ';
    window.scroll({
      top: 0,
    });
  }, []);
  return (
    <div className={cx('wapper')}>
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
    </div>
  );
};

export default Single;
