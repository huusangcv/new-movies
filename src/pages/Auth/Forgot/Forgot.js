// src/Login.js
import React, { useState } from 'react';
import styles from './Forgot.module.scss';
import classNames from 'classnames/bind';
import Spinner from '~/components/Spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);
const Forgot = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      <div>
        <p>
          Chúng tôi đã gửi 1 email hướng dẫn lấy mật khẩu về <strong className="has-text-warning">{email}</strong>.
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
  };

  return (
    <div className={cx('wapper')}>
      <section className={cx('section')}>
        <div className={cx('container')} style={{ flex: 1 }}>
          <div className={cx('inner')}>
            <div className={cx('content')}>
              <div className={cx('column')}>
                <h1 className="title has-text-grey">Lấy lại mật khẩu</h1>
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
                          {(false && <Spinner />) || <span>Gửi</span>}
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

export default Forgot;
