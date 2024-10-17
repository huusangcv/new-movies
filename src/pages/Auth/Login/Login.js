// src/Login.js
import React, { useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Spinner from '~/components/Spinner';
import { useCookies } from 'react-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(['token']);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Tạo đối tượng dữ liệu để gửi
    const data = {
      email: email,
      password: password,
    };

    try {
      // Gửi yêu cầu POST đến API
      setIsLoading(true);
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Kiểm tra mã phản hồi
      if (!response.ok) {
        const { message } = await response.json(); // Lấy thông điệp từ phản hồi
        if (response.status === 401) {
          // Xử lý lỗi 401
          toast.error(message);
        } else {
          // Xử lý các lỗi khác
          toast.error(message || 'Có lỗi xảy ra.');
        }
        setIsLoading(false);
        return false;
      }

      // Phân tích phản hồi JSON
      const { message, success, token } = await response.json();
      if (success) {
        window.location.href = '/';
        setIsLoading(false);
        setCookie('token', token, {
          path: '/',
        });
      }
    } catch (error) {
      console.error('Có lỗi xảy ra:', error);
      setIsLoading(false);
      toast.error('Đã xảy ra lỗi khi kết nối đến máy chủ.');
    }
  };
  return (
    <div className={cx('wapper')}>
      <section className={cx('section')}>
        <div className={cx('container')} style={{ flex: 1 }}>
          <div className={cx('inner')}>
            <div className={cx('content')}>
              <div className={cx('column')}>
                <h1 className="title has-text-grey">Đăng nhập</h1>
                <div className={cx('has-text-grey', 'box')}>
                  <form onSubmit={handleSubmit}>
                    <div className={cx('field')}>
                      <div className={cx('control')}>
                        <input
                          type="email"
                          className="input is-large"
                          name="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className={cx('field')}>
                      <div className={cx('control')}>
                        <input
                          type="password"
                          className="input is-large"
                          name="password"
                          placeholder="Mật khẩu"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className={cx('field')}>
                      <label className="checkbox" htmlFor="remember">
                        <input type="checkbox" name="remember" id="remember" className={cx('remember')} /> Ghi nhớ
                      </label>
                    </div>
                    <button type="submit" className={cx('button', 'is-block', 'is-info')}>
                      {(isLoading && <Spinner />) || <span>Đăng nhập</span>}
                    </button>
                  </form>
                </div>
                <p className="has-text-grey has-text-right">
                  <Link to="/signup">Đăng ký</Link>
                  &nbsp;&nbsp;·&nbsp;&nbsp;<a href="/forgot">Quên mật khẩu</a>
                  {/*
                  &nbsp;&nbsp;·&nbsp;&nbsp;<a href="/resendVerification">Gửi lại email xác nhận</a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;
