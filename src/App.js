import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment, Suspense, useEffect } from 'react';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { useCookies } from 'react-cookie';
import PrivateRoute from './routes/routes';
// Hàm kiểm tra cookie
function App() {
  const [cookies, setCookie] = useCookies(['token']);

  useEffect(() => {}, [cookies]);

  const LayoutRoutes = PrivateRoute();
  return (
    <Router>
      <div className="App">
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Routes>
            {LayoutRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Suspense fallback={<p>Loading....</p>}>
                        <Page />
                      </Suspense>
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </QueryParamProvider>
      </div>
    </Router>
  );
}

export default App;
