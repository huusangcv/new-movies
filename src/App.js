import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment, Suspense, useEffect } from 'react';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { useCookies } from 'react-cookie';
import PrivateRoute from './routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from './redux/actions';
import { userProfile } from './redux/selector/selector';
import user from './services/user';
// Hàm kiểm tra cookie
function App() {
  const [cookies] = useCookies(['token']);
  const token = cookies.token; // Lấy giá trị cookie
  const dispatch = useDispatch();
  const profile = useSelector(userProfile);
  useEffect(() => {
    const fetchApiUser = async () => {
      try {
        const res = await user.profile();
        // Phân tích phản hồi JSON
        if (res.status === true) {
          dispatch(getUserProfile(res.data));
        }
      } catch (error) {}
    };
    if (token || profile.id === null) {
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
