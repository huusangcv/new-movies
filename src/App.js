import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLayout } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicLayout.map((route) => {
            const Page = route.component;
            const Layout = DefaultLayout;
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
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
