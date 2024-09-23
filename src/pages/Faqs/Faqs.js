const Faqs = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="has-text-centered title is-2">Câu hỏi thường gặp</h1>
      </div>
      <ul>
        <li>Chọn một server khác từ các server bên dưới phim</li>
        <li>
          Thử xem trên một thiết bị khác (máy tính / điện thoại / TV...). Nếu phim chạy mượt trên thiết bị khác =&gt; do
          thiết bị cũ của bạn. Hãy <i>thử dùng một trình duyệt khác</i> trên thiết bị cũ để xem.
        </li>
        <li>Tắt modem 1 phút rồi bật lại</li>
      </ul>
      <p>
        Nếu đã thử tất cả những cách trên mà phim vẫn chạy chậm, có thể <b>băng thông đường truyền quốc tế</b> mạng của
        bạn đang bị nghẽn (do dùng vào giờ cao điểm hoặc{' '}
        <a href="https://vnexpress.net/cap-quang-bien-viet-nam-dut-10-lan-moi-nam-4403945.html" target="_blank">
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
        Nếu sau khi cập nhật driver mà tình trạng trên không hết, cách khắc phục tạm thời là khi bật full màn hình, hãy
        để thanh công cụ player và tiến trình phim luôn hiển thị bằng cách rê chuột qua đó và để nguyên chuột ở đó (nếu
        không thanh này sẽ biến mất sau vài giây).
      </p>
      <h3 className="has-text-warning" id="sound">
        3. Gặp vấn đề về âm thanh: phim không có tiếng, mất tiếng nhân vật, hoặc âm thanh bị rè?
      </h3>
    </div>
  );
};

export default Faqs;
