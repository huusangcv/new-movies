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
  login: '/login',
  signup: '/signup',
  forgot: '/forgot',
  resendVerification: 'resendVerification',
  verify: '/verify/:token',
  confirmNewEmail: '/confirmNewEmail',
  retrievePassword: '/retrievePassword',
  // maintenance: '/',
};

export default routes;
