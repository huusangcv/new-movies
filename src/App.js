import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLayout } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment, Suspense } from 'react';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
