const routes = {
  home: '/',
  single: '/movies/single',
  series: '/movies/series',
  new: '/movies/new',
  search: '/search',
  developing: '/developing',
  detail: '/movie/:slug',
  watch: '/watch/:slug',
  browse: '/browse',
  collection: '/collection',
  browseDetails: '/:genreCurrent/:index',
  notfound: '*',
  login: '/login',
  signup: '/signup',
};

export default routes;
