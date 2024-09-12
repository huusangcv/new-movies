import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

import { Fragment, Suspense } from 'react';
import { publicLayout } from './routes';
import { authLayout } from './routes/routes';
import AuthLayout from './layouts/AuthLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicLayout.map((route, index) => {
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

          {authLayout.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <AuthLayout>
                    <Page />
                  </AuthLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
