// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';
import classNames from 'classnames/bind';
import Spinner from '~/components/Spinner';
import user from '~/services/user';

const cx = classNames.bind(styles);

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=> {
  //   const fetchApi = async () => {
  //     try {
  //       const signup = await user.SignUp(data);
  //       if(signup) {
  //         navigate('/')
  //       }
  //     } catch (error) {
  //       alert('Lỗi');
  //     }
  //   }
  // fetchApi();

  // },[data])

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

      const response = await fetch('http://127.0.0.1:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

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
        navigate('/');
        // Có thể lưu thông tin người dùng hoặc token ở đây
      } else {
        console.error('Lỗi đăng ký:', result.message);
      }
    } catch (error) {
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
                  <form onSubmit={handleSubmit} method="post">
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
                  <Link to="/">Đăng nhập</Link>
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
