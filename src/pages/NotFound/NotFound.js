const divStyle = {
  color: '#000',
  background: '#fff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
  height: '100vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const h1Style = {
  display: 'inline-block',
  borderRight: '1px solid rgba(0, 0, 0, .3)',
  margin: 0,
  marginRight: '20px',
  padding: '10px 23px 10px 0',
  fontSize: '24px',
  fontWeight: 500,
  verticalAlign: 'top',
};

const h2Style = {
  fontSize: '14px',
  fontWeight: 'normal',
  lineHeight: 'inherit',
  margin: 0,
  padding: 0,
};
const NotFound = () => {
  return (
    <section class="section">
      <div class="container">
        <div style={divStyle}>
          <div>
            <h1 style={h1Style}>404</h1>
            <div
              style={{
                display: 'inline-block',
                textAlign: 'left',
                lineHeight: '49px',
                height: '49px',
                verticalAlign: 'middle',
              }}
            >
              <h2 style={h2Style}>This page could not be found.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
