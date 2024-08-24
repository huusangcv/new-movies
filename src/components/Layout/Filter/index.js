import styles from './Filter.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Filter = () => {
  return (
    <div className={cx('wapper')}>
      <div className={cx('filter')}>
        <div className={cx('columns')}>
          <div className={cx('column')}>
            <div className={cx('field')}>
              <label htmlFor="" className={cx('label')}>
                Loại phim:
              </label>
              <div className={cx('control')}>
                <div className={cx('select')}>
                  <select name="" id="">
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                    <option value="">Option 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('column')}>
            <div className={cx('field')}>
              <label htmlFor="" className={cx('label')}>
                Thể loại:
              </label>
              <div className={cx('control')}>
                <div className={cx('select')}>
                  <select name="" id="">
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                    <option value="">Option 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('column')}>
            <div className={cx('field')}>
              <label htmlFor="" className={cx('label')}>
                Quốc gia:
              </label>
              <div className={cx('control')}>
                <div className={cx('select')}>
                  <select name="" id="">
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                    <option value="">Option 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('column')}>
            <div className={cx('field')}>
              <label htmlFor="" className={cx('label')}>
                Năm:
              </label>
              <div className={cx('control')}>
                <div className={cx('select')}>
                  <select name="" id="">
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                    <option value="">Option 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('column')}>
            <div className={cx('field')}>
              <label htmlFor="" className={cx('label')}>
                Năm:
              </label>
              <div className={cx('control')}>
                <div className={cx('select')}>
                  <select name="" id="">
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                    <option value="">Option 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('column')}>
            <div className={cx('field')}>
              <label htmlFor="" className={cx('label')}>
                Lọc phim
              </label>
              <div className={cx('control')}>
                <div className={cx('filter-btn')}>
                  <button>Duyệt</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
