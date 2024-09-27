import { lazy } from 'react';
import config from '~/config';
import HeaderOnlyForMovies from '~/layouts/HeaderOnlyForMovies';
import Login from '~/pages/Auth/Login/Login';
import SignUp from '~/pages/Auth/SignUp';

const HomePage = lazy(() => import('~/pages/Home'));
const Series = lazy(() => import('~/pages/Movies/Series'));
const Single = lazy(() => import('~/pages/Movies/Single'));
const New = lazy(() => import('~/pages/Movies/New'));
const Collection = lazy(() => import('~/pages/Movies/Collection'));
const BrowseDetails = lazy(() => import('~/pages/BrowseDetails'));
const Details = lazy(() => import('~/pages/Movie/Details'));
const Watch = lazy(() => import('~/pages/Movie/Watch'));
const Browse = lazy(() => import('~/pages/Browse'));
const Search = lazy(() => import('~/pages/Search'));
const Developing = lazy(() => import('~/pages/Developing'));
const NotFound = lazy(() => import('~/pages/NotFound'));
const Account = lazy(() => import('~/pages/Account'));

const publicLayout = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.series, component: Series },
  { path: config.routes.single, component: Single },
  { path: config.routes.new, component: New },
  { path: config.routes.collection, component: Collection },
  { path: config.routes.browseDetails, component: BrowseDetails },
  { path: config.routes.detail, component: Details },
  { path: config.routes.watch, component: Watch, layout: HeaderOnlyForMovies },
  { path: config.routes.browse, component: Browse },
  { path: config.routes.search, component: Search },
  { path: config.routes.developing, component: Developing },
  { path: config.routes.settings, component: Account },
  { path: config.routes.notfound, component: NotFound },
];

const authLayout = [
  { path: config.routes.login, component: Login },
  { path: config.routes.signup, component: SignUp },
];

const privateLayout = [];

export { publicLayout, privateLayout, authLayout };
