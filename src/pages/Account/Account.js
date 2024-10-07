import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Account = () => {
  const [isChangeEmail, setIsChangeEmail] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);

  const handleIsChangeEmail = () => {
    setIsChangeEmail(!isChangeEmail);
  };

  const handleIsChangePassword = () => {
    setIsChangePassword(!isChangePassword);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    const fetchApi = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/users/1', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        // Phân tích phản hồi JSON
        const result = await response.json();
        if (result.success === true) {
          toast.success('Thay đổi Email thành công');
        }
      } catch (error) {}
    };

    fetchApi();
    setEmail('');
    setIsChangeEmail(false);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <h1 className="title is-3">Hữu Sang</h1>
        <p>
          Ngày gia nhập: <b>10/01/2023 14:30</b>
        </p>
        {(!isChangeEmail && (
          <p>
            Email: <b>huusangcv@gmail.com</b> -&nbsp;
            <a href="#!" onClick={handleIsChangeEmail}>
              Đổi email
            </a>
          </p>
        )) || (
          <form onSubmit={handleOnSubmit} className="my-4" style={{ width: '400px' }}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  onChange={handleChangeEmail}
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Địa chỉ email mới"
                  required=""
                  value={email}
                />
              </div>
              <div className="control">
                <button type="submit" className="button is-info">
                  Cập nhật
                </button>
              </div>
              <div className="control">
                <a href="#!" className="button" onClick={handleIsChangeEmail}>
                  Hủy
                </a>
              </div>
            </div>
          </form>
        )}
        {(!isChangePassword && (
          <p>
            <a href="#!" onClick={handleIsChangePassword}>
              Đổi mật khẩu
            </a>
          </p>
        )) || (
          <form className="my-4" style={{ width: '300px' }}>
            <div className="field">
              <div className="control">
                <input
                  type="password"
                  name="password1"
                  className="input"
                  placeholder="Mật khẩu mới"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  type="password"
                  name="password2"
                  className="input"
                  placeholder="Nhập lại mật khẩu"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div>
              <button type="submit" className="button is-success mr-4">
                Cập nhật
              </button>
              <a href="#!" className="button" style={{ borderRadius: '4px' }} onClick={handleIsChangePassword}>
                Hủy
              </a>
            </div>
          </form>
        )}
        <br />
        <p>
          Số dư: <b className="has-text-danger">1,491 đ</b>
        </p>
        {/* <div className="field mt-4 has-text-centered">
        <label className="checkbox">
          <input type="checkbox" name="censorSubtitle" /> Bật chế độ kiểm duyệt phụ đề
        </label>
        <div className="help has-text-grey">Những từ ngữ tục, chửi thề... trong phụ đề sẽ được thay bằng ký tự lạ</div>
      </div> */}
        <div className="field mt-4 has-text-centered ">
          <label className="checkbox">
            <input type="checkbox" name="subscribed" checked="" /> Đăng ký nhận thông báo về trang web
          </label>
          <div className="help has-text-grey">Chúng tôi chỉ gửi những thông báo quan trọng</div>
        </div>
      </div>
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
    </>
  );
};

export default Account;
