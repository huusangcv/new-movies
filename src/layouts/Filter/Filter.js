import classNames from 'classnames/bind';
import filter from '~/components/Options';
import styles from './Filter.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterMovies } from '~/redux/actions';

const cx = classNames.bind(styles);

const Filter = ({ title }) => {
  const [moviesType, setMoviesType] = useState('');
  const [type, setType] = useState('');
  const [nation, setNation] = useState('');
  const [year, setYear] = useState('');
  const [sortBy, setSortBy] = useState('');

  const dispatch = useDispatch();

  const handleSelectMovies = (e) => {
    setMoviesType(e.target.value);
  };
  const handleSelectType = (e) => {
    setType(e.target.value);
  };
  const handleSelectNations = (e) => {
    setNation(e.target.value);
  };
  const handleSelectYears = (e) => {
    setYear(e.target.value);
  };
  const handleSelectSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterMovies = () => {
    if (moviesType === '') {
      dispatch(
        filterMovies({
          moviesType: title,
          type,
          nation,
          year,
          sortBy,
        }),
      );
    } else {
      dispatch(
        filterMovies({
          moviesType,
          type,
          nation,
          year,
          sortBy,
        }),
      );
    }
  };
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
                  <select name="" id="" defaultValue={title} onChange={handleSelectMovies}>
                    <option value="" defaultValue="">
                      - Tất cả -
                    </option>
                    {filter?.movies.map((movie) => {
                      return (
                        <option value={movie.slug} key={movie.id}>
                          {movie.text}
                        </option>
                      );
                    })}
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
                  <select name="" id="" onChange={handleSelectType}>
                    <option value="">- Tất cả -</option>
                    {filter?.types.map((type) => (
                      <option value={type.slug} key={type.id}>
                        {type.text}
                      </option>
                    ))}
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
                  <select name="" id="" onChange={handleSelectNations}>
                    <option value="">- Tất cả -</option>
                    {filter?.nations.map((nation) => (
                      <option value={nation.slug} key={nation.id}>
                        {nation.text}
                      </option>
                    ))}
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
                  <select name="" id="" onChange={handleSelectYears}>
                    <option value="">- Tất cả -</option>
                    {filter?.years.map((year) => (
                      <option value={year.slug} key={year.id}>
                        {year.text}
                      </option>
                    ))}
                    <option value="">Trước 2000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('column')}>
            <div className={cx('field')}>
              <label htmlFor="" className={cx('label')}>
                Sắp xếp:
              </label>
              <div className={cx('control')}>
                <div className={cx('select')}>
                  <select name="" id="" onChange={handleSelectSortBy}>
                    {filter?.sortBy.map((sort) => (
                      <option value={sort.slug} key={sort.id}>
                        {sort.text}
                      </option>
                    ))}
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
              <div className={cx('control')} onClick={handleFilterMovies}>
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
