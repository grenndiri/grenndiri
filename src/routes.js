export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('app.notifications', {
      url: 'component-graphic/notifications',
      component: 'notificationsTOTO'
    })
    .state('app.mapDisplay', {
      url: 'component-graphic/map-display',
      component: 'mapDisplay'
    })
}
