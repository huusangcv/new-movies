import { lazy } from 'react';
import HeaderOnlyForDetail from '~/layouts/HeaderOnlyForDetail';
import config from '~/config';
import HeaderOnlyForMovies from '~/layouts/HeaderOnlyForMovies';

const HomePage = lazy(() => import('~/pages/Home'));
const Series = lazy(() => import('~/pages/Movies/Series'));
const Single = lazy(() => import('~/pages/Movies/Single'));
const New = lazy(() => import('~/pages/Movies/New'));
const Details = lazy(() => import('~/pages/Movie/Details'));

const publicLayout = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.series, component: Series, layout: HeaderOnlyForMovies },
  { path: config.routes.single, component: Single, layout: HeaderOnlyForMovies },
  { path: config.routes.new, component: New },
  { path: config.routes.detail, component: Details, layout: HeaderOnlyForDetail },
];

const privateLayout = [];

export { publicLayout, privateLayout };
