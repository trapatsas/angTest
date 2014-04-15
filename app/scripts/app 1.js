'use strict';

angular
  .module('angTestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angTestApp.controller('MyController', function($scope) {  
	$scope.clock = new Date();
	var updateClock = function() {
		$scope.clock = new Date();
	};
	setInterval(function() {
		$scope.$apply(updateClock);
	}, 1000);
	updateClock();
});

angTestApp.controller('FirstController', function($scope) {
	$scope.counter = 0;
	$scope.add = function(amount) { $scope.counter += amount; };
	$scope.subtract = function(amount) { $scope.counter -= amount; };
});