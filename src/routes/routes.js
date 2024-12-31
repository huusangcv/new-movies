import { lazy } from 'react';
import config from '~/config';
import HeaderOnlyForMovies from '~/layouts/HeaderOnlyForMovies';
import Login from '~/pages/Auth/Login/Login';
import SignUp from '~/pages/Auth/SignUp';
import Forgot from '~/pages/Auth/Forgot';
import Details from '~/pages/Movie/Details';
import BrowseDetails from '~/pages/BrowseDetails';
import HomePage from '~/pages/Home';
import Series from '~/pages/Movies/Series';
import Single from '~/pages/Movies/Single';
import New from '~/pages/Movies/New';
import Top from '~/pages/Movies/Top';
import Collection from '~/pages/Movies/Collection';
import Search from '~/pages/Search';
import Browse from '~/pages/Browse';
import Faqs from '~/pages/Faqs/Faqs';
import ResendVerification from '~/pages/Auth/ResendVerification';
import Verify from '~/pages/Auth/Verify';
import ConfirmNewEmail from '~/pages/Auth/ConfirmNewEmail';
import RetrievalPassword from '~/pages/Auth/RetrievalPassword/RetrievalPassword';

const Watch = lazy(() => import('~/pages/Movie/Watch'));
const NotFound = lazy(() => import('~/pages/NotFound'));
const Account = lazy(() => import('~/pages/Account'));
const Donate = lazy(() => import('~/pages/Donate'));

const publicLayout = [
  { path: config.routes.login, component: Login },
  { path: config.routes.signup, component: SignUp },
  { path: config.routes.forgot, component: Forgot },
  { path: config.routes.resendVerification, component: ResendVerification },
  { path: config.routes.retrievePassword, component: RetrievalPassword },
  { path: config.routes.verify, component: Verify },
  { path: config.routes.notfound, component: Login },
  { path: config.routes.home, component: HomePage },
  { path: config.routes.series, component: Series },
  { path: config.routes.single, component: Single },
  { path: config.routes.new, component: New },
  { path: config.routes.top, component: Top },
  { path: config.routes.collection, component: Collection },
  { path: config.routes.browseDetails, component: BrowseDetails },
  { path: config.routes.detail, component: Details },
  { path: config.routes.watch, component: Watch, layout: HeaderOnlyForMovies },
  { path: config.routes.browse, component: Browse },
  { path: config.routes.search, component: Search },
  { path: config.routes.faqs, component: Faqs },
  { path: config.routes.notfound, component: NotFound },
];

const privateLayout = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.series, component: Series },
  { path: config.routes.single, component: Single },
  { path: config.routes.new, component: New },
  { path: config.routes.top, component: Top },
  { path: config.routes.collection, component: Collection },
  { path: config.routes.browseDetails, component: BrowseDetails },
  { path: config.routes.detail, component: Details },
  { path: config.routes.watch, component: Watch, layout: HeaderOnlyForMovies },
  { path: config.routes.browse, component: Browse },
  { path: config.routes.search, component: Search },
  { path: config.routes.settings, component: Account },
  { path: config.routes.donate, component: Donate },
  { path: config.routes.faqs, component: Faqs },
  { path: config.routes.confirmNewEmail, component: ConfirmNewEmail },
  { path: config.routes.notfound, component: NotFound },
];

const hasCookie = () => {
  return document.cookie.split(';').some((item) => item.trim().startsWith('token='));
};

const PrivateRoute = () => {
  return hasCookie() ? privateLayout : publicLayout;
};

export default PrivateRoute;
export { privateLayout, publicLayout };
