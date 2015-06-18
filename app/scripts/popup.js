"use strict";

var dreChromeApp = angular.module('dreChromeApp', []);

dreChromeApp.controller('dreCtrl', ['$scope', 'dreBackend', function ($scope, dreBackend) {
    $scope.selectedService = {};
    $scope.dre = {
        domain: 'http://localhost:3000'
    };
    $scope.tabStep = 0;

    $scope.files = [];

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
    $scope.$on("fileSelected", function (event, args) {
        $scope.$apply(function () {
            $scope.files = [args.file];
        });
    });

    $scope.previousStep = function () {
        $scope.tabStep--;
    };

    $scope.firstStep = function (selectService) {
        $scope.selectedService = selectService;
        $scope.tabStep = 1;
    };
    $scope.secondStep = function () {
        /*
         dreBackend.login($scope.dre.domain, $scope.dre.username, $scope.dre.password, function (err, data) {
         if (err) {
         console.log("err: ", err);
         }
         if (data) {
         dreBackend.uploadRecord($scope.dre.domain, $scope.userFile, false, function(err2,results){
         if(err2) {
         $scope.uploadError = 'Upload Err: '+err2;
         } else {
         console.log(results);
         $scope.tabStep = 2;
         }
         });
         } else {
         console.log("failed...");
         }
         });
         */
        dreBackend.uploadRecord($scope.dre.domain, $scope.dre.username, $scope.dre.password, $scope.files[0], function (err2, results) {
            if (err2) {
                $scope.uploadError = 'Upload Err: ' + err2;
            } else {
                console.log(results);
                $scope.tabStep = 2;
            }
        });
    };
}]).directive('fileModel', function () {
    return {
        scope: true,
        link: function (scope, element) {
            element.bind('change', function (event) {
                scope.$emit("fileSelected", {file: event.target.files[0]});
            });
        }
    };
}).service('dreBackend', function authentication($http) {

    /*
     this.login = function (domain, username, password, callback) {
     if (domain && username && password) {
     $http.post(domain + '/api/v1/login', {
     username: username,
     password: password
     })
     .success(function () {
     auth_data.authenticated = true;
     callback(null, true);
     })
     .error(function () {
     console.log("login failed");
     auth_data.authenticated = false;
     callback('Invalid Login and/or Password.', false);
     });
     }
     };
     */
    this.uploadRecord = function (domain, username, password, file, callback) {
        var uploadUrl = domain + "/api/v1/storage/extension";
        //var fd = new FormData();
        //var ff = document.getElementById('uploadFile').files[0];
        //fd.append('file', ff);
        //fd.append('file', file);
        /*
        $http.put(uploadUrl, {
            username: username,
            password: password,
            file: file
        }).success(function (data) {
            callback(null, data);
        })
            .error(function (data) {
                callback(data);
            });
*/
        $http({
            method: 'PUT',
            url: uploadUrl,
            headers: { 'Content-Type': undefined },
            transformRequest: function (data) {
                var formData = new FormData();
                formData.append("username", data.username);
                formData.append("password", data.password);
                formData.append("file", data.file);
                return formData;
            },
            //Create an object that contains the model and files which will be transformed
            // in the above transformRequest method
            data: {
                username: username,
                password: password,
                file: file
            }
        }).success(function (data) {
            callback(null, data);
        })
            .error(function (data) {
                callback(data);
            });

        /*fd.append('file', file);
         fd.append('check', check);
         $http.put(uploadUrl, fd, {
         transformRequest: angular.identity,
         headers: {
         'Content-Type': undefined
         }
         })
         .success(function (data) {
         callback(null, data);
         })
         .error(function (data) {
         callback(data);
         });
         */
    };
});