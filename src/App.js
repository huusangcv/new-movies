import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment, Suspense, useEffect } from 'react';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { useCookies } from 'react-cookie';
import PrivateRoute from './routes/routes';
import { useDispatch } from 'react-redux';
import { getUserProfile } from './redux/actions';
import Snowfall from 'react-snowfall';
// Hàm kiểm tra cookie
function App() {
  const [cookies] = useCookies(['token']);
  const token = cookies.token; // Lấy giá trị cookie
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApiUser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        // Phân tích phản hồi JSON
        const result = await response.json();
        if (result.status === true) {
          dispatch(getUserProfile(result.data));
        }
      } catch (error) {}
    };
    if (token) {
      fetchApiUser();
    }
  }, [token, dispatch]);

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
