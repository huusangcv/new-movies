import classNames from 'classnames/bind';
import filter from '~/components/Options';
import styles from './Filter.module.scss';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '~/components/Spinner';
import { moviesSelector } from '~/redux/selector/selector';
import { useNavigate } from 'react-router-dom';
import { filterMovies } from '~/redux/actions';

const cx = classNames.bind(styles);

const Filter = ({ isLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectValue = useSelector(moviesSelector);
  const [moviesType, setMoviesType] = useState(selectValue.moviesType);
  const [type, setType] = useState(selectValue.type);
  const [nation, setNation] = useState(selectValue.nation);
  const [year, setYear] = useState(selectValue.year);
  const [sortBy, setSortBy] = useState(selectValue.sortBy);

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
    dispatch(
      filterMovies({
        moviesType,
        type,
        nation,
        year,
        sortBy,
      }),
    );
    navigate('/browse');
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
                  <select name="" id="" defaultValue={selectValue.moviesType} onChange={handleSelectMovies}>
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
                  <select name="" id="" onChange={handleSelectType} defaultValue={selectValue.type}>
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
                  <select name="" id="" onChange={handleSelectNations} defaultValue={selectValue.nation}>
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
                  <select name="" id="" onChange={handleSelectYears} defaultValue={selectValue.year}>
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
                  <select name="" id="" onChange={handleSelectSortBy} defaultValue={selectValue.sortBy}>
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
                  <button>{(isLoading && <Spinner />) || <span>Duyệt</span>}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Filter);
