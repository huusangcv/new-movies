import { lazy } from 'react';
const HomePage = lazy(() => import('~/pages/Home'));
const Series = lazy(() => import('~/pages/Movies/Series'));
const Single = lazy(() => import('~/pages/Movies/Single'));
const New = lazy(() => import('~/pages/Movies/New'));
const publicLayout = [
  { path: '/', component: HomePage },
  { path: '/movies/series', component: Series },
  { path: '/movies/single', component: Single },
  { path: '/movies/new', component: New },
];

const privateLayout = [];

export { publicLayout, privateLayout };
