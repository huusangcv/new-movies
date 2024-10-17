const routes = {
  home: '/',
  single: '/movies/single',
  series: '/movies/series',
  new: '/movies/new',
  top: '/top',
  faqs: '/faqs',
  search: '/search',
  detail: '/movie/:slug',
  watch: '/watch/:slug',
  browse: '/browse',
  collection: '/collection',
  browseDetails: '/:genreCurrent/:index',
  settings: '/settings',
  donate: '/donate',
  notfound: '*',
  login: '/',
  signup: '/signup',
};

export default routes;
