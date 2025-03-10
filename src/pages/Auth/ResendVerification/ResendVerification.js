// src/Login.js
import React, { useEffect, useState } from 'react';
import styles from './ResendVerification.module.scss';
import classNames from 'classnames/bind';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import user from '~/services/user';
import Spinner from '~/components/Spinner';

const cx = classNames.bind(styles);
const ResendVerification = () => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchResenVirify = async () => {
      try {
        setIsLoading(true);
        // Gửi yêu cầu POST đến API
        const { status, message } = await user.ResendVerification(data);

        if (status) {
          toast.success(
            <div>
              <p>
                Chúng tôi đã gửi 1 email xác nhận lại về <strong className="has-text-warning">{email}</strong>.
              </p>
              Vui lòng kiểm tra email của bạn (nhớ kiểm tra cả hòm thư spam).
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
          setIsLoading(false);
        } else {
          alert(message);
          setIsLoading(false);
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
    setData({ email });
  };

  return (
    <div className={cx('wapper')}>
      <section className={cx('section')}>
        <div className={cx('container')} style={{ flex: 1 }}>
          <div className={cx('inner')}>
            <div className={cx('content')}>
              <div className={cx('column')}>
                <h1 className="title has-text-grey">Gửi lại link xác nhận</h1>
                <div className={cx('has-text-grey', 'box')}>
                  <form onSubmit={handleSubmit}>
                    <div className="column is-half-tablet is-offset-one-quarter-tablet is-one-third-widescreen is-offset-one-third-widescreen">
                      <div className="box has-text-grey">
                        <div className="field">
                          <div className="control">
                            <input
                              type="email"
                              className="input is-large"
                              name="email"
                              placeholder="Email đăng ký"
                              required=""
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <button type="submit" className={cx('button', 'is-block', 'is-info')}>
                          {(isLoading && <Spinner />) || <span>Gửi</span>}
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

export default ResendVerification;
