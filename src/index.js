import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux/store';
import ReactGA from 'react-ga4';
import { CookiesProvider } from 'react-cookie';

ReactGA.initialize('G-9G552G5GLK');
ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: document.title });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <GlobalStyles>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <App />
      </CookiesProvider>
    </GlobalStyles>
  </Provider>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
