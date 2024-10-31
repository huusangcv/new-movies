import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '~/redux/selector/selector';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '~/redux/actions';
import Spinner from '~/components/Spinner';

// Hàm để lấy giá trị cookie theo tên
const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Lấy các phần của ngày
  const day = String(date.getDate()).padStart(2, '0'); // Ngày
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng (0-11)
  const year = date.getFullYear(); // Năm

  // Lấy giờ và phút
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Trả về định dạng mong muốn
  return `${month}/${day}/${year} ${hours}:${minutes}`;
};
const Account = () => {
  const [isChangeEmail, setIsChangeEmail] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const user = useSelector(userProfile);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const token = cookies['token'];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formattedDate = formatDate(user.created_at);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

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

    setIsLoading(true);

    const fetchApi = async () => {
      try {
        const response = await fetch(`https://api.newmoviesz.online/api/update-profile/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        // Phân tích phản hồi JSON
        const result = await response.json();
        if (result.status === true) {
          setIsLoading(false);
          setIsChangeEmail(false);
          setEmail('');
          toast.success(
            <div>
              <p>
                Một email xác nhận đã được gửi tới địa chỉ email mới của bạn. Hãy đọc và làm theo hướng dẫn trong đó
              </p>
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
        }
      } catch (error) {}
    };

    fetchApi();
  };

  const handleOnSubmitChangePassword = (e) => {
    e.preventDefault();

    const data = {
      password,
    };

    const fetchApi = async () => {
      try {
        const response = await fetch(`https://api.newmoviesz.online/api/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        // Phân tích phản hồi JSON
        const result = await response.json();
        if (result.success === true) {
          toast.success(<p>Thay đổi mật khẩu thành công</p>, {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            icon: false,
          });
        }
      } catch (error) {}
    };

    if (password.length >= 6 && rePassword.length >= 6) {
      if (password === rePassword) {
        fetchApi();
        setPassword('');
        setRePassword('');
        setIsChangePassword(false);
      } else {
        alert('Nhập lại mật khẩu không chính xác');
      }
    } else {
      alert('Mật khẩu phải từ 6 kí tự');
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <h1 className="title is-3">{user.name}</h1>
        <p>
          Ngày gia nhập: <b>{formattedDate}</b>
        </p>
        {(!isChangeEmail && (
          <p>
            Email: <b>{user.email}</b> -&nbsp;
            <a href="#" onClick={handleIsChangeEmail}>
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
                  {(isLoading && <Spinner />) || 'Cập nhật'}
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
          <form onSubmit={handleOnSubmitChangePassword} className="my-4" style={{ width: '300px' }}>
            <div className="field">
              <div className="control">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password1"
                  className="input"
                  placeholder="Mật khẩu mới"
                  required=""
                  value={password}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  onChange={(e) => setRePassword(e.target.value)}
                  type="password"
                  name="password2"
                  className="input"
                  placeholder="Nhập lại mật khẩu"
                  required=""
                  value={rePassword}
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
          Số dư: <b className="has-text-danger">1,000 đ</b>
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
        <ToastContainer />
      </div>
    </>
  );
};

export default Account;
