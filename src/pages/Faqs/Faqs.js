import { useEffect } from 'react';

const Faqs = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);

  return (
    <div className="wapper">
      <h1 className="has-text-centered title is-2">Câu hỏi thường gặp</h1>
      <div className="content has-text-grey-lighter">
        <h3 className="has-text-warning" id="lag">
          1. Xem phim bị chậm, mặc dù đã kích hoạt VIP Mode cho phim đó?
        </h3>
        Nếu phim chạy nhưng cứ một đoạn lại bị dừng để chờ load tiếp, hãy lần lượt thử các cách sau:
        <ul>
          <li>Chọn một server khác từ các server bên dưới phim</li>
          <li>
            Thử xem trên một thiết bị khác (máy tính / điện thoại / TV...). Nếu phim chạy mượt trên thiết bị khác =&gt;
            do thiết bị cũ của bạn. Hãy <i>thử dùng một trình duyệt khác</i> trên thiết bị cũ để xem.
          </li>
          <li>Tắt modem 1 phút rồi bật lại</li>
        </ul>
        <p>
          Nếu đã thử tất cả những cách trên mà phim vẫn chạy chậm, có thể <b>băng thông đường truyền quốc tế</b> mạng
          của bạn đang bị nghẽn (do dùng vào giờ cao điểm hoặc{' '}
          <a
            href="https://vnexpress.net/cap-quang-bien-viet-nam-dut-10-lan-moi-nam-4403945.html"
            target="_blank"
            rel="noreferrer"
          >
            đứt cáp biển
          </a>
          ). Bạn có thể thử xem bằng 4G xem có cải thiện không (4G thường được các nhà mạng ưu tiên băng thông).
        </p>
        <h3 className="has-text-warning" id="sound">
          2. Phim bị giật hình (hình ảnh nhảy lên nhảy xuống) khi xem full màn hình, nhất là khi hiện phụ đề?
        </h3>
        <p>
          Hiện tượng này hay gặp gần đây khi xem phim trên Windows với các phiên bản driver card đồ họa mới. Cách khắc
          phục là hãy cài driver card đồ họa từ nhà sản xuất máy tính thay vì driver từ hãng chip đồ họa. VD: máy bạn là
          laptop Asus, có card đồ họa onboard Intel HD, thì hãy vào trang chủ của Asus (chứ không phải trang chủ của
          Intel) để download driver card đồ họa về cài đặt (uninstall driver đang dùng trước khi cài).
        </p>
        <p>
          Nếu không cập nhật driver được hoặc cập nhật rồi mà tình trạng trên không hết, hãy thử tắt tính năng tăng tốc
          phần cứng của trình duyệt. Xem{' '}
          <a
            href="https://gearvn.com/blogs/cong-nghe/harware-acceleration-la-gi-va-lieu-ban-co-nen-su-dung-tren-chrome-hay-khong"
            target="_blank"
            rel="noreferrer"
          >
            hướng dẫn tại đây
          </a>
          .
        </p>
        <p>
          Nếu đã làm cả 2 cách trên mà không có tác dụng, cách khắc phục tạm thời là khi bật full màn hình, hãy để thanh
          công cụ player và tiến trình phim luôn hiển thị bằng cách rê chuột qua đó và để nguyên chuột ở đó (nếu không
          thanh này sẽ biến mất sau vài giây).
        </p>
        <h3 className="has-text-warning" id="sound">
          3. Gặp vấn đề về âm thanh: phim không có tiếng, mất tiếng nhân vật, hoặc âm thanh bị rè?
        </h3>
        <ul>
          <li>
            Nếu xem trên điện thoại: Lỗi âm thanh là do trình duyệt của bạn (thường là Chrome). Hãy dùng trình duyệt{' '}
            <a
              href="https://play.google.com/store/apps/details?id=org.mozilla.firefox"
              target="_blank"
              rel="noreferrer"
            >
              Firefox
            </a>
            hoặc
            <a href="https://apkmody.io/vi/ung-dung/app-420462531127561922" target="_blank" rel="noreferrer">
              Puffin
            </a>
            !
          </li>
          <li>
            Nếu bạn xem trên PC: Khác với phim / clip trên các web khác (kể cả Youtube), phim trên XemPhim sử dụng âm
            thanh 5.1 (6 channel) thay vì âm thanh stereo (2 channel). Nếu thiết bị bạn xem chỉ có 2 loa, bạn cần thiết
            lập chương trình quản lý âm thanh trên thiết bị cho đúng: chọn đúng chế độ với số loa mình có (stereo), đừng
            chọn nhiều hơn, nếu không thiết bị của bạn sẽ cố gắng xuất âm thanh ra những loa không tồn tại =&gt; mất
            tiếng.
            <br />
            Ví dụ đây là phần chọn các chế độ âm thanh của Realtek HD Audio Manager:{' '}
            <a href="https://imgur.com/a/D6nPGcl" target="_blank" rel="noreferrer">
              click vào đây
            </a>
          </li>
        </ul>
        <h3 className="has-text-warning" id="tv">
          4. Làm sao để xem phim trên TV?
        </h3>
        <p>
          Để xem phim trên TV, TV bạn phải có trình duyệt web. Hầu hết các loại Smart TV những năm gần đây đều có cài
          sẵn trình duyệt. Nếu TV bạn không có sẵn trình duyệt, bạn có thể cài trình duyệt từ cửa hàng ứng dụng (Google
          Play Store / CH Play / App Store) trên TV. Với TV Android, bạn nên cài trình duyệt Puffin. Sau khi cài trình
          duyệt, truy cập trang web như bạn vẫn làm trên máy tính / điện thoại và xem phim.
        </p>
        <p>
          Nếu bạn không thể xem phim bằng trình duyệt trên TV, bạn có thể kết nối máy tính với TV (thường qua cổng HDMI)
          rồi phát từ máy tính lên TV.
        </p>
      </div>
    </div>
  );
};

export default Faqs;
