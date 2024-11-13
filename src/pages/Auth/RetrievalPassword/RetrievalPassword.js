// src/Login.js
import { useEffect, useState } from 'react';
import styles from './RetrievalPassword.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import user from '~/services/user';

const cx = classNames.bind(styles);
const RetrievalPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const passwordCode = searchParams.get('passwordRetrievalCode');

  const [data, setData] = useState(null);
  const [newPassword, setNewpassword] = useState('');

  useEffect(() => {
    const fetchResenVirify = async () => {
      try {
        // Gửi yêu cầu POST đến API
        const { status, message } = await user.RetrievalPassword(data);

        if (status) {
          toast.success(
            <div>
              Đặt mật khẩu mới thành công, hãy <Link to="/">đăng nhập vào tài khoản</Link>.
            </div>,
            {
              position: 'bottom-center',
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
              icon: false,
            },
          );
        } else {
          alert(message);
        }
      } catch (error) {
        console.error('Có lỗi xảy ra:', error);
      }
    };

    if (data) {
      fetchResenVirify();
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      password: newPassword,
      password_retrieval_code: passwordCode,
    });
  };
  return (
    <div className={cx('wapper')}>
      <section className={cx('section')}>
        <div className={cx('container')} style={{ flex: 1 }}>
          <div className={cx('inner')}>
            <div className={cx('content')}>
              <div className={cx('column')}>
                <h1 className="title has-text-grey">Đặt lại mật khẩu</h1>
                <div className={cx('has-text-grey', 'box')}>
                  <form onSubmit={handleSubmit}>
                    <div className="column is-half-tablet is-offset-one-quarter-tablet is-one-third-widescreen is-offset-one-third-widescreen">
                      <div className="box has-text-grey">
                        <div className="field">
                          <div className="control">
                            <input
                              type="text"
                              className="input is-large"
                              name="password"
                              placeholder="Mật khẩu mới"
                              value={newPassword}
                              onChange={(e) => setNewpassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <button type="submit" className={cx('button', 'is-block', 'is-info')}>
                          <span>Gửi</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default RetrievalPassword;
