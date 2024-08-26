import { lazy } from 'react';
import HeaderOnly from '~/components/Layout/HeaderOnly';
const HomePage = lazy(() => import('~/pages/Home'));
const Series = lazy(() => import('~/pages/Movies/Series'));
const Single = lazy(() => import('~/pages/Movies/Single'));
const New = lazy(() => import('~/pages/Movies/New'));
const Details = lazy(() => import('~/pages/Movie/Details'));
const publicLayout = [
  { path: '/', component: HomePage },
  { path: '/movies/series', component: Series },
  { path: '/movies/single', component: Single },
  { path: '/movies/new', component: New },
  { path: '/movie/detail', component: Details, layout: HeaderOnly },
];

const privateLayout = [];

export { publicLayout, privateLayout };
