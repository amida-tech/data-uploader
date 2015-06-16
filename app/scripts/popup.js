"use strict";

var dreChromeApp = angular.module('dreChromeApp', []);

dreChromeApp.controller('dreCtrl', ['$scope', function ($scope) {

	$scope.selectedService = {};
	$scope.tabStep = 0;
	$scope.services = [
		{
			name: 'My HealthEVet',
			username: true,
			password: true,
			file: false
		},
		{
			name: 'Centers for Medicare & Medicade Services',
			username: true,
			password: true,
			file: false
		},
		{
			name: 'Manual Upload',
			username: false,
			password: false,
			file: true
		}
	];

	$scope.previousStep = function() {
		$scope.tabStep--;
	};

	$scope.firstStep = function (selectService) {
		$scope.selectedService = selectService;
		$scope.tabStep=1;
	};

	$scope.secondStep = function() {
		$scope.tabStep = 2;
	};
}]);