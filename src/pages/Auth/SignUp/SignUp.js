// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';
import classNames from 'classnames/bind';
import Spinner from '~/components/Spinner';

const cx = classNames.bind(styles);

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Tạo đối tượng dữ liệu để gửi
    const data = {
      name: username,
      email: email,
      password: password,
    };

    try {
      // Gửi yêu cầu POST đến API

      const response = await fetch('https://api.newmoviesz.online/add.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log({ response });

      // Kiểm tra mã phản hồi
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Phân tích phản hồi JSON
      const result = await response.json();

      // Xử lý phản hồi
      if (result.success) {
        alert('Đăng ký thành công');
        setIsLoading(false);
        navigate('/login');
        // Có thể lưu thông tin người dùng hoặc token ở đây
      } else {
        setError(result.message); // Hiển thị thông báo lỗi
        console.error('Lỗi đăng ký:', result.message);
      }
    } catch (error) {
      setError('Có lỗi xảy ra, vui lòng thử lại sau.');
      console.error('Có lỗi xảy ra:', error);
    }
  };
  return (
    <div className={cx('wapper')}>
      <section className={cx('section')}>
        <div className={cx('container')} style={{ flex: 1 }}>
          <div className={cx('inner')}>
            <div className={cx('content')}>
              <div className={cx('column')}>
                <h1 className="title has-text-grey">Đăng Ký</h1>
                <div className={cx('has-text-grey', 'box')}>
                  <form onSubmit={handleSubmit}>
                    <div className={cx('field')}>
                      <div className={cx('control')}>
                        <input
                          type="name"
                          className="input is-large"
                          name="name"
                          placeholder="Tên của bạn"
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                    </div>
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
                    <button type="submit" className={cx('button', 'is-block', 'is-info')}>
                      {(isLoading && <Spinner />) || <span>Đăng Ký</span>}
                    </button>
                  </form>
                </div>
                <p className="has-text-grey has-text-right">
                  <a href="/login">Đăng nhập</a>
                  {/* <a href="/forgot">Quên mật khẩu</a>
                  &nbsp;&nbsp;·&nbsp;&nbsp;
                  <a href="/resendVerification">Gửi lại email xác nhận</a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
