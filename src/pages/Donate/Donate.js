const Donate = () => {
  return (
    <>
      <h1 class="title is-2 has-text-centered">Donate</h1>
      <p class="has-text-centered">
        Để ủng hộ website &amp; sử dụng tính năng <em>VIP mode</em> cho phim, hãy donate cho trang web:
      </p>
      <div class="donate-form my-5">
        <form class="has-text-centered">
          <div class="field">
            <label class="label is-medium">Số tiền donate:</label>
            <div class="control">
              <div class="select is-medium">
                <select name="amount" required="">
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
          <div class="field has-text-centered">
            <button type="submit" class="button is-medium is-primary">
              Tạo mã donate
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Donate;
