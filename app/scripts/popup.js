/*jslint bitwise: true */

"use strict";

var dreChromeApp = angular.module('dreChromeApp', []);

dreChromeApp.config(['$compileProvider',
    function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    }])
    .controller('dreCtrl', ['$scope', 'dreBackend', function ($scope, dreBackend) {
        $scope.selectedService = {};
        $scope.dre = {
            domain: 'http://localhost:3000'
        };
        $scope.select = {};
        $scope.tabStep = 0;

        $scope.files = [];

        $scope.services = [
            {
                name: 'My HealtheVet',
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
                $scope.reportFile = args.file;
            });
        });

        $scope.previousStep = function () {
            $scope.tabStep--;
        };

        $scope.firstStep = function (selectService) {
            $scope.selectedService = selectService;

            if (selectService.name === "My HealtheVet") {
                dreBackend.getVARecordId($scope.select.username, $scope.select.password, function (err, recordId) {
                    if (err) {
                        console.log(err);
                    }
                    $scope.reportId = recordId;
                    dreBackend.getVARecord(recordId, $scope.select.username, $scope.select.password, function (err, file) {
                        if (err) {
                            console.log(err);
                        }
                        $scope.reportFile = file;
                        console.log("type of: " + typeof(file));
                        $scope.files = [file];
                        $scope.downloadFileName = file.name;
                        $scope.downloadUrl = (window.URL || window.webkitURL).createObjectURL( file );
                        $scope.tabStep = 1;
                    });
                });
            } else {
                $scope.tabStep = 1;
            }

        };
        $scope.secondStep = function () {
            dreBackend.uploadRecord($scope.dre.domain, $scope.dre.username, $scope.dre.password, $scope.files[0], function (err2, results) {
                if (err2) {
                    $scope.uploadError = 'Upload Err: ' + err2;
                } else {
                    console.log(results);
                    $scope.tabStep = 2;
                }
            });
        };

        $scope.saveFile = function () {

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

        var Base64 = {

            keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

            encode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output +
                        this.keyStr.charAt(enc1) +
                        this.keyStr.charAt(enc2) +
                        this.keyStr.charAt(enc3) +
                        this.keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                } while (i < input.length);

                return output;
            },

            decode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                var base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                    window.alert("There were invalid base64 characters in the input text.\n" +
                        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                        "Expect errors in decoding.");
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                do {
                    enc1 = this.keyStr.indexOf(input.charAt(i++));
                    enc2 = this.keyStr.indexOf(input.charAt(i++));
                    enc3 = this.keyStr.indexOf(input.charAt(i++));
                    enc4 = this.keyStr.indexOf(input.charAt(i++));

                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;

                    output = output + String.fromCharCode(chr1);

                    if (enc3 !== 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 !== 64) {
                        output = output + String.fromCharCode(chr3);
                    }

                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";

                } while (i < input.length);

                return output;
            }
        };

        this.uploadRecord = function (domain, username, password, file, callback) {
            var uploadUrl = domain + "/api/v1/storage/extension";
            $http({
                method: 'PUT',
                url: uploadUrl,
                headers: {'Content-Type': undefined},
                transformRequest: function (data) {
                    var formData = new FormData();
                    formData.append("username", data.username);
                    formData.append("password", data.password);
                    formData.append("file", data.file);
                    return formData;
                },
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
        };

        this.getVARecordId = function (username, password, callback) {
            var d = new Date();
            var domainBase = "www.myhealth.va.gov/mhv-portal-web/mhv.portal";
            var domainInfo = "?_nfpb=true&_windowLabel=downloadData&downloadData_actionOverride=%2Fgov%2Fva%2Fmed%2Fmhv%2Fusermgmt%2FdownloadYourData%2FdownloadSelectionsReport&_pageLabel=downloadData&";
            var domainEnd = "downloadDatawlw-radio_button_group_key%3A%7BactionForm.pickDate%7D=downloadSelectedDateRanges&downloadDatawlw-select_key%3A%7BactionForm.fromDateMonth%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.fromDateMonth%7D=1&downloadDatawlw-select_key%3A%7BactionForm.fromDateDay%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.fromDateDay%7D=1&downloadDatawlw-select_key%3A%7BactionForm.fromDateYear%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.fromDateYear%7D=1895&downloadDatawlw-select_key%3A%7BactionForm.toDateMonth%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.toDateMonth%7D="+ (d.getMonth()+1)+"&downloadDatawlw-select_key%3A%7BactionForm.toDateDay%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.toDateDay%7D="+ d.getDate()+"&downloadDatawlw-select_key%3A%7BactionForm.toDateYear%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.toDateYear%7D="+ d.getFullYear()+"&downloadDatawlw-radio_button_group_key%3A%7BactionForm.pickDataClasses%7D=downloadAllDataClasses&downloadDatawlw-checkbox_key%3A%7BactionForm.medications%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.labsandtests%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.seiallergies%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.immunizations%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.vitalsandreadings%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.medicalevents%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.familyhealthhistory%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.militaryhealthhistory%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.treatmentfacilities%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.healthcareproviders%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.healthhistoryall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.healthhistoryall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.activityjournal%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.foodjournal%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.foodactivityall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.foodactivityall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.currentgoals%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.completedgoals%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.goalsall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.goalsall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.seidemographics%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.healthinsurance%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.demohealthall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.demohealthall%7D=on";
            var domainUrl = "https://" + domainBase + domainInfo + domainEnd;
            $http({
                method: 'POST',
                url: domainUrl,
                withCredentials: true,
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': "Basic " + Base64.encode(username + ":" + password)
                },
            }).success(function (data) {
                var re = /(?:reportId=)([0-9]{1,})/igm;
                var recordId = re.exec(data);
                callback(null, recordId[1]);
            })
                .error(function (data) {
                    console.log("was an error: ", data);
                    callback(data);
                });
        };
        this.getVARecord = function (recordId, username, password, callback) {
            var domainBase = "www.myhealth.va.gov/mhv-portal-web/downloadData";
            var domainInfo = "?reportId=" + recordId + "&downloadFormat=bbFormat";
            var domainUrl = "https://" + domainBase + domainInfo;
            $http({
                method: 'POST',
                url: domainUrl,
                withCredentials: true,
                headers: {
                    'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                    'Authorization': "Basic " + Base64.encode(username + ":" + password)
                },
            }).success(function (data) {
                var blob = new Blob([data], {type: "text/plain"});
                blob.name = "myhealthevet.txt";
                blob.lastModifiedDate = new Date();
                callback(null, blob);
            })
                .error(function (data) {
                    callback(data);
                });
        };
    });