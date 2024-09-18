import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment, Suspense } from 'react';
import { publicLayout } from './routes';
import { authLayout } from './routes/routes';
import AuthLayout from './layouts/AuthLayout';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

function App() {
  return (
    <Router>
      <div className="App">
        <QueryParamProvider adapter={ReactRouter6Adapter}>
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
        </QueryParamProvider>
      </div>
    </Router>
  );
}

export default App;
