import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
// import { lazy } from 'react';
import HomePage from './pages/Home/Home';
import Single from './pages/Movies/Single';
import Series from './pages/Movies/Series';
import Details from './pages/Movie/Details';
import Browse from './pages/Browse';

// const HomePage = lazy(() => import('~/pages/Home'));
// const Series = lazy(() => import('~/pages/Movies/Series'));
// const Single = lazy(() => import('~/pages/Movies/Single'));
// // const New = lazy(() => import('~/pages/Movies/New'));
// const Details = lazy(() => import('~/pages/Movie/Details'));
// const Browse = lazy(() => import('~/pages/Browse'));
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
            {/* <Route path="phim-moi-cap-nhat" element={<NewMovies />} /> */}
            <Route path="/movies/single" element={<Single />} />
            <Route path="/movies/series" element={<Series />} />
            <Route path="/movie/:slug" element={<Details />} />
            <Route path="/browse" element={<Browse />} />
            {/* <Route path="phim-dang-chieu" element={<MoviesWatching />} />
            <Route path="type/:slug" element={<MoviesType />} />
            <Route path="search" element={<MoviesSearch />} />
            <Route path="movie/:slug" element={<MovieDetail />} />
            <Route path="watch/:slug" element={<WatchMovie />} />
            <Route path="faqs" element={<FAQ />} />
            <Route path={'*'} element={<NotFound />} /> */}
          </Route>
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
