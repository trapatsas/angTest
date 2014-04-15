'use strict';

angular.module('angTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.clock = new Date();
	
	var updateClock = function() {
		$scope.clock = new Date();
	};
	
	setInterval(function() {
		$scope.$apply(updateClock);
	}, 1000);
	
	updateClock();
	
	$scope.counter = 0;
	$scope.add = function(amount) { $scope.counter += amount; };
	$scope.subtract = function(amount) { $scope.counter -= amount; };
  });
