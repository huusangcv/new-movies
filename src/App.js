import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLayout } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Suspense } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicLayout.map((route, index) => {
            const Page = route.component;
            const Layout = DefaultLayout;
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
