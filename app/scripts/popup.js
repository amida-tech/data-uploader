"use strict";

var dreChromeApp = angular.module('dreChromeApp', []);

dreChromeApp.controller('dreCtrl', ['$scope', 'authentication', function ($scope, authentication) {

	$scope.selectedService = {};
    $scope.dre = {};
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
        authentication.login($scope.dre.domain, $scope.dre.username, $scope.dre.password, function(err,data) {
            if (err) {
                console.log("err: ",err);
            }
            if (data) {
                console.log("success? "+data);
                $scope.tabStep = 2;
            } else {
                console.log("failed...");
            }
        });
	};
}]).service('authentication', function authentication($rootScope, $location, $http) {
        var auth_data = {};

        function clearAuth() {
            auth_data = {};
            $rootScope.isAuthorized = false;
        }
        this.clearAuth = clearAuth;

        this.authStatus = function (domain, callback) {
            if (Object.keys(auth_data).length > 0) {
                if (auth_data.authenticated) {
                    callback(null, true);
                } else {
                    callback(null, false);
                }
            } else {
                $http.get(domain+'/api/v1/account')
                    .success(function (data) {
                        if (data && data.authenticated) {
                            auth_data.authenticated = true;
                            callback(null, true);
                        } else {
                            auth_data.authenticated = false;
                            callback(null, false);
                        }

                    }).error(function (err) {
                        auth_data.authenticated = false;
                        callback(err, false);
                    });
            }
        };

        this.login = function (domain, username, password, callback) {
            if (domain && username && password) {
                $http.post(domain+'/api/v1/login', {
                        username: username,
                        password: password
                    })
                    .success(function () {
                        auth_data.authenticated = true;
                        callback(null,true);
                    })
                    .error(function () {
                        console.log("login failed");
                        auth_data.authenticated = false;
                        callback('Invalid Login and/or Password.',false);
                    });
            }
        };

        this.logout = function (domain, callback) {
            $http.post(domain+'/api/v1/logout')
                .success(function () {
                    clearAuth();
                    callback(null);
                }).error(function (err) {
                    console.log("logout failed");
                    callback(err);
                });
        };
    });