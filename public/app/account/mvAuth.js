angular.module('app').factory('mvAuth', function ($http, mvIdentity, $q, mvUser, $location) {
  return {
    authenticateUser: function (username, password) {
      var dfd = $q.defer();
      $http.post('/login', {username: username, password: password}).then(function (res) {
        if (res.data.success) {
          var user = new mvUser();
          angular.extend(user, res.data.user);
          mvIdentity.currentUser = user;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },
    logoutUser: function () {
      var dfd = $q.defer();
      $http.post('/logout', {logout: true}).then(function () {
        mvIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },
    authorizeCurrentUserForRoute: function (role) {
      if (mvIdentity.isAuthorized(role)) {
        return true;
      } else {
        return $q.reject('not authorized').catch(function () {
          $location.path('/');
        });
      }
    },
    createUser: function (newUserData) {
      var newUser = new mvUser(newUserData);
      var dfd = $q.defer();
      newUser.$save().then(function () {
        mvIdentity.currentUser = newUser;
        dfd.resolve();
      }, function (res) {
        dfd.reject(res.data.reason);
      });
      return dfd.promise;
    }
  };
});