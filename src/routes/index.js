import HomePage from '~/pages/Home';
import Series from '~/pages/Movies/Series';
import Single from '~/pages/Movies/Single';
import New from '~/pages/Movies/New';

const publicLayout = [
  { path: '/', component: HomePage },
  { path: '/movies/series', component: Series },
  { path: '/movies/single', component: Single },
  { path: '/movies/new', component: New },
];

const privateLayout = [];

export { publicLayout, privateLayout };
