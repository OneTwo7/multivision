angular.module('app').controller('mvNavBarLoginController', function ($scope, $location, mvIdentity, mvNotifier, mvAuth) {
  $scope.identity = mvIdentity;
  $scope.signin = function (username, password) {
    mvAuth.authenticateUser(username, password).then(function (success) {
      if (success) {
        mvNotifier.notify('You have successfully logged in!');
      } else {
        mvNotifier.notify('Username/Password combination is incorrect');
      }
    });
  };
  $scope.signout = function () {
    mvAuth.logoutUser().then(function () {
      $scope.username = "";
      $scope.password = "";
      mvNotifier.notify('You have successfully logged out!');
      $location.path('/');
    });
  };
});