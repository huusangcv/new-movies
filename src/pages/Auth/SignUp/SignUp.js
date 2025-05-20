// src/Login.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';
import classNames from 'classnames/bind';
import Spinner from '~/components/Spinner';
import user from '~/services/user';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const cx = classNames.bind(styles);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState();
  const [username, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        // Gửi yêu cầu POST đến API

        const response = await user.SignUp(data);

        if (response.errors) {
          if (response.errors.email) {
            // Xử lý lỗi trùng email ở đây
            toast.error(response.errors.email[0]); // Hiển thị lỗi trùng email cho người dùng
          } else {
            toast.error(response.errors.password[0]);
          }
          setIsLoading(false);
          return false;
        }

        // Xử lý phản hồi
        if (response.status === true) {
          setIsLoading(false);
          toast.success(
            <div>
              <p>Đăng ký thành công!</p>
              <p>
                Chúng tôi đã gửi 1 email chứa link xác nhận tới <strong className="has-text-warning">{email}</strong>.
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
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        if (error.response.status === 422) {
          // Xử lý lỗi 422 Unprocessable Entity
          console.log('Lỗi 422 Unprocessable Entity:');
          // Điều chỉnh xử lý lỗi 422 theo nhu cầu của bạn
        } else {
          // Xử lý các lỗi khác
          console.error('Đã xảy ra lỗi:', error);
        }
        setIsLoading(false);
      }
    };

    if (data) {
      fetchApi();
    }
  }, [data]);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault(); // Ngăn chặn hành động mặc định của
    // Tạo đối tượng dữ liệu để gửi
    const data = {
      name: username,
      email: email,
      password: password,
      password_confirmation: password,
    };

    setData(data);
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
                  <Link to="/login">Đăng nhập</Link>
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

export default SignUp;
