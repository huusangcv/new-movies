const Account = () => {
  return (
    <div class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
      <h1 class="title is-3">Hữu Sang</h1>
      <p>
        Ngày gia nhập: <b>10/01/2023 14:30</b>
      </p>
      <p>
        Email: <b>huusangcv@gmail.com</b> -&nbsp;<a href="#">Đổi email</a>
      </p>
      <p>
        <a href="#">Đổi mật khẩu</a>
      </p>
      <br />
      <p>
        Số dư: <b class="has-text-danger">1,491 đ</b>
      </p>
      <div class="field mt-4 has-text-centered">
        <label class="checkbox">
          <input type="checkbox" name="censorSubtitle" /> Bật chế độ kiểm duyệt phụ đề
        </label>
        <div class="help has-text-grey">Những từ ngữ tục, chửi thề... trong phụ đề sẽ được thay bằng ký tự lạ</div>
      </div>
      <div class="field mt-4 has-text-centered is-hidden">
        <label class="checkbox">
          <input type="checkbox" name="subscribed" checked="" /> Đăng ký nhận thông báo về trang web
        </label>
        <div class="help has-text-grey">Chúng tôi chỉ gửi những thông báo quan trọng</div>
      </div>
    </div>
  );
};

export default Account;
