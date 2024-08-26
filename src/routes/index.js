import { lazy } from 'react';
import HeaderOnly from '~/layouts/HeaderOnly';
import config from '~/config';
const HomePage = lazy(() => import('~/pages/Home'));
const Series = lazy(() => import('~/pages/Movies/Series'));
const Single = lazy(() => import('~/pages/Movies/Single'));
const New = lazy(() => import('~/pages/Movies/New'));
const Details = lazy(() => import('~/pages/Movie/Details'));

const publicLayout = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.series, component: Series },
  { path: config.routes.single, component: Single },
  { path: config.routes.new, component: New },
  { path: config.routes.detail, component: Details, layout: HeaderOnly },
];

const privateLayout = [];

export { publicLayout, privateLayout };
