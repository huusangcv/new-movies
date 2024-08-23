import Filter from '../Filter';
import Header from '../Header';
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <div className="container__inner">
            <Filter />
            <div className="content">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DefaultLayout;
