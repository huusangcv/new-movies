import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga4';
import { CookiesProvider } from 'react-cookie';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '~/redux/store';
ReactGA.initialize('G-9G552G5GLK');
ReactGA.send({ hitType: 'pageview', page: window.location.pathname, title: document.title });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </CookiesProvider>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
