import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

import { lazy, Suspense } from 'react';
import HomePage from './pages/Home/';
import Search from './pages/Search';
import Watch from './pages/Movie/Watch';
// const HomePage = lazy(() => import('~/pages/Home'));
// const Series = lazy(() => import('~/pages/Movies/Series'));
// const Single = lazy(() => import('~/pages/Movies/Single'));

import Single from '~/pages/Movies/Single';
import Series from '~/pages/Movies/Series';
import Developing from './pages/Developing/Developing';
import NotFound from './pages/NotFound';

const New = lazy(() => import('~/pages/Movies/New'));
const Details = lazy(() => import('~/pages/Movie/Details'));
const Browse = lazy(() => import('~/pages/Browse'));
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* {publicLayout.map((route, index) => {
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
                })} */}
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/movies/single"
              element={
                // <Suspense fallback={<p>Loading....</p>}>
                <Single />
                // </Suspense>
              }
            />
            <Route
              path="/movies/series"
              element={
                // <Suspense fallback={<p>Loading....</p>}>
                <Series />
                // </Suspense>
              }
            />
            <Route
              path="/movies/new"
              element={
                <Suspense fallback={<p>Loading....</p>}>
                  <New />
                </Suspense>
              }
            />
            <Route
              path="/movie/:slug"
              element={
                <Suspense fallback={<p>Loading....</p>}>
                  <Details />
                </Suspense>
              }
            />
            <Route
              path="/browse"
              element={
                <Suspense fallback={<p>Loading....</p>}>
                  <Browse />
                </Suspense>
              }
            />
            <Route path="/search" element={<Search />} />
            <Route path="/watch/:slug" element={<Watch />} />
            <Route path="/developing" element={<Developing />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
