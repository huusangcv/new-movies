import { lazy } from 'react';
import config from '~/config';

const HomePage = lazy(() => import('~/pages/Home'));
const Series = lazy(() => import('~/pages/Movies/Series'));
const Single = lazy(() => import('~/pages/Movies/Single'));
const New = lazy(() => import('~/pages/Movies/New'));
const Details = lazy(() => import('~/pages/Movie/Details'));
const Watch = lazy(() => import('~/pages/Movie/Watch'));
const Browse = lazy(() => import('~/pages/Browse'));
const Search = lazy(() => import('~/pages/Search'));
const Developing = lazy(() => import('~/pages/Developing'));
const NotFound = lazy(() => import('~/pages/NotFound'));

const publicLayout = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.series, component: Series },
  { path: config.routes.single, component: Single },
  { path: config.routes.new, component: New },
  { path: config.routes.detail, component: Details },
  { path: config.routes.watch, component: Watch },
  { path: config.routes.browse, component: Browse },
  { path: config.routes.search, component: Search },
  { path: config.routes.developing, component: Developing },
  { path: config.routes.notfound, component: NotFound },
];

const privateLayout = [];

export { publicLayout, privateLayout };
