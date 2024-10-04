import { useState } from 'react';
import numeral from 'numeral';
import user from '~/services/user';
const Donate = () => {
  const [amount, setAmount] = useState(0);
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const handleSelectAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const requestData = {
      accountNo: '0358337215',
      accountName: 'LE HUU SANG',
      acqId: '970422',
      amount: amount,
      template: 'compact',
    };

    try {
      const response = await user.Donate(requestData, {
        headers: {
          'x-client-id': '6abebc05-1761-41e0-a22d-e61722fde0bf', // Thay CLIENT_ID_HERE bằng client ID của bạn
          'x-api-key': '075473cf-700a-475d-a9a9-9745774cb717', // Thay API_KEY_HERE bằng API key của bạn
          'Content-Type': 'application/json',
        },
      });

      if (response.code === '00') {
        setQrCode(response.data.qrDataURL); // Lưu URL mã QR
      } else {
        // setError('Lỗi: ' + response.desc);
      }
    } catch (err) {
      // setError('Có lỗi xảy ra: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCoppy = () => {
    navigator.clipboard
      .writeText('0358337215')
      .then(() => {
        setCopySuccess('Sao chép thành công!');

        setTimeout(() => {
          setCopySuccess('');
        }, 1000);
      })
      .catch(() => {
        setCopySuccess('Sao chép thất bại!');
      });
  };
  return (
    <>
      <h1 className="title is-2 has-text-centered">Donate</h1>
      <p className="has-text-centered">
        Để ủng hộ website &amp; sử dụng tính năng <em>VIP mode</em> cho phim, hãy donate cho trang web:
      </p>
      {!qrCode && (
        <div className="donate-form my-5">
          <form className="has-text-centered" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label is-medium">Số tiền donate:</label>
              <div className="control">
                <div className="select is-medium">
                  <select name="amount" required onChange={handleSelectAmount}>
                    <option value="">Chọn số tiền bạn muốn chuyển</option>
                    <option value="10000">10.000</option>
                    <option value="20000">20.000</option>
                    <option value="30000">30.000</option>
                    <option value="50000">50.000</option>
                    <option value="100000">100.000</option>
                    <option value="200000">200.000</option>
                    <option value="300000">300.000</option>
                    <option value="500000">500.000</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field has-text-centered">
              <button
                type="submit"
                className="button is-medium is-primary"
                style={{ opacity: loading && 0.5, cursor: loading && 'not-allowed' }}
                disabled={loading}
              >
                {loading ? 'Vui lòng chờ...' : 'Tạo mã donate'}
              </button>
            </div>
          </form>
        </div>
      )}
      {qrCode && (
        <div className="donate-info has-text-centered">
          <p>Quét mã QR dưới đây trên app ngân hàng của bạn để chuyển tiền:</p>
          <div className="m-5 qr-code">
            <img src={qrCode} alt="QR chuyển khoản" />
          </div>
          <div className="mt-3">
            <p>Ngân hàng MB BANK</p>
            <p>
              Số tài khoản: 0358337215{' '}
              <button
                onClick={handleCoppy}
                className="MuiButtonBase-root MuiIconButton-root contact_copy__BYUeG"
                tabIndex="0"
                type="button"
              >
                <span className="MuiIconButton-label">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM352 32.491a15.88 15.88 0 0 1 7.431 4.195l51.882 51.883A15.885 15.885 0 0 1 415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z"></path>
                  </svg>
                </span>
                {copySuccess && <span className="MuiTouchRipple-root">{copySuccess}</span>}
              </button>
            </p>
            <p>Chủ tài khoản: LE HUU SANG</p>
            <p>Số tiền: {numeral(amount).format('0,0')} đ</p>
            {/* <p>
              Nội dung chuyển tiền: <div className="bank-content">UNG HO HUU SANG</div>
              <button className="MuiButtonBase-root MuiIconButton-root contact_copy__BYUeG" tabindex="0" type="button">
                <span className="MuiIconButton-label">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM352 32.491a15.88 15.88 0 0 1 7.431 4.195l51.882 51.883A15.885 15.885 0 0 1 415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z"></path>
                  </svg>
                </span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </p> */}
          </div>
          {/* <div className="my-5">
          <div className="notification is-warning is-inline-block p-3">
            Mã donate hết hạn sau: <b>29:56</b>
          </div>
        </div> */}
          {/* <div className="my-4">
          <a className="icon-default icon-white has-text-weight-bold" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
            </svg>{' '}
            Quay lại
          </a>
        </div>
        <div className="m-5 has-text-left">
          <div className="has-text-weight-bold mb-2">Lưu ý:</div>
          <ul className="has-text-warning">
            <li>
              - Nhập đúng SỐ TIỀN và NỘI DUNG chuyển tiền để hệ thống tự động cộng tiền vào tài khoản bạn sau từ 1 - 5
              phút
            </li>
            <li>
              - Thông tin nạp tiền ở trên <span className="has-text-danger">chỉ dùng được 1 lần</span>. Nếu lần nạp sau bạn
              nhập lại thông tin như trên thì giao dịch đó sẽ KHÔNG được hệ thống xử lý cộng vào tài khoản bạn! Để nạp
              thêm, bạn phải tạo Mã donate mới.
            </li>
            <li>
              - Trang web KHÔNG hỗ trợ hoàn tiền các trường hợp nhập sai thông tin, vì vậy vui lòng kiểm tra kỹ lại
              trước khi chuyển tiền.
            </li>
          </ul>
        </div> */}
        </div>
      )}
    </>
  );
};

export default Donate;
