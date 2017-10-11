angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {
      auth: function (mvAuth) {
        mvAuth.authorizeCurrentUserForRoute('admin');
      }
    }
  };

  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
  .when('/admin/users', {templateUrl: '/partials/admin/user-list',
    controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
  });
});