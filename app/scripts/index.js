/*jslint bitwise: true */

"use strict";

var dreChromeApp = angular.module('dreChromeApp', ['ui.bootstrap'], function ($provide) {
  // Prevent Angular from sniffing for the history API
  // since it's not supported in packaged apps.
  $provide.decorator('$window', function ($delegate) {
    $delegate.history = null;
    return $delegate;
  });
}).config(['$compileProvider',
  function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
  }]).service('dreBackend', function authentication($http) {

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

  this.checkDRELogin = function (domain, username, password, callback) {
    var loginUrl = domain + "/api/v1/login";

    $http({
      method: 'PUT',
      url: loginUrl,
      headers: {
        'Content-Type': undefined
      },
      transformRequest: function (data) {
        var formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        return formData;
      },
      data: {
        username: username,
        password: password
      }
    }).success(function (data) {
      callback(null, true);
    })
      .error(function (data) {
        callback(data, false);
      });

  };

  this.uploadRecord = function (domain, username, password, file, callback) {
    var uploadUrl = domain + "/api/v1/storage/extension";

    $http({
      method: 'PUT',
      url: uploadUrl,
      headers: {
        'Content-Type': undefined
      },
      transformRequest: function (data) {
        var formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        //formData.append("file", data.file);
        formData.append(data.file.name, data.file);
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
    var domainEnd = "downloadDatawlw-radio_button_group_key%3A%7BactionForm.pickDate%7D=downloadSelectedDateRanges&downloadDatawlw-select_key%3A%7BactionForm.fromDateMonth%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.fromDateMonth%7D=1&downloadDatawlw-select_key%3A%7BactionForm.fromDateDay%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.fromDateDay%7D=1&downloadDatawlw-select_key%3A%7BactionForm.fromDateYear%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.fromDateYear%7D=1895&downloadDatawlw-select_key%3A%7BactionForm.toDateMonth%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.toDateMonth%7D=" + (d.getMonth() + 1) + "&downloadDatawlw-select_key%3A%7BactionForm.toDateDay%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.toDateDay%7D=" + d.getDate() + "&downloadDatawlw-select_key%3A%7BactionForm.toDateYear%7DOldValue=true&downloadDatawlw-select_key%3A%7BactionForm.toDateYear%7D=" + d.getFullYear() + "&downloadDatawlw-radio_button_group_key%3A%7BactionForm.pickDataClasses%7D=downloadAllDataClasses&downloadDatawlw-checkbox_key%3A%7BactionForm.futureappointments%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.pastappointments%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.appointmentsall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.appointmentsall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.prescriptions%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.medications%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.medsall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.medsall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.vachemlabs%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.vapathology%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.varadiology%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.vaekg%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.labsandtests%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.labsall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.labsall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.vaproblemlist%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.vaadmissionsanddischarges%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.vaprogressnotes%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.wellness%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.wellnesshistoryall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.wellnesshistoryall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.vaallergies%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.seiallergies%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.allergiesall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.allergiesall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.vaimmunizations%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.immunizations%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.immunizationsall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.immunizationsall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.vavitals%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.vitalsandreadings%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.vitalsandreadingsall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.vitalsandreadingsall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.medicalevents%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.familyhealthhistory%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.militaryhealthhistory%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.treatmentfacilities%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.healthcareproviders%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.healthhistoryall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.healthhistoryall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.activityjournal%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.foodjournal%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.foodactivityall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.foodactivityall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.currentgoals%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.completedgoals%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.goalsall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.goalsall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.vademographics%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.seidemographics%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.healthinsurance%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.demohealthall%7DOldValue=false&downloadDatawlw-checkbox_key%3A%7BactionForm.demohealthall%7D=on&downloadDatawlw-checkbox_key%3A%7BactionForm.dodmilitaryservice%7DOldValue=false";
    var domainUrl = "https://" + domainBase + domainInfo + domainEnd;
    var authHeader = "Basic " + Base64.encode(username + ":" + password);
    $http({
      method: 'POST',
      url: domainUrl,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': authHeader
      }
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
  this.getVARecordASCII = function (recordId, username, password, callback) {
    var domainBase = "www.myhealth.va.gov/mhv-portal-web/downloadData";
    var domainInfo = "?reportId=" + recordId + "&downloadFormat=bbFormat";
    var domainUrl = "https://" + domainBase + domainInfo;
    var authHeader = "Basic " + Base64.encode(username + ":" + password);
    $http({
      method: 'POST',
      url: domainUrl,
      withCredentials: true,
      headers: {
        'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        'Authorization': authHeader
      }
    }).success(function (data) {
      var re = /(?:File Name:\s{1,})(.{1,})/igm;
      var filename = re.exec(data);
      var blob = new Blob([data], {type: "text/plain"});
      blob.name = filename[1];
      blob.lastModifiedDate = new Date();
      callback(null, blob);
    })
      .error(function (data) {
        callback(data, null);
      });
  };
  this.getVARecordPDF = function (recordId, username, password, filename, callback) {
    var domainBase = "www.myhealth.va.gov/mhv-portal-web/downloadData";
    var domainInfo = "?reportId=" + recordId + "&downloadFormat=pdfFormat";
    var domainUrl = "https://" + domainBase + domainInfo;
    var authHeader = "Basic " + Base64.encode(username + ":" + password);
    filename = filename.substring(0, filename.length - 4);
    filename += '.pdf';
    $http({
      method: 'POST',
      url: domainUrl,
      withCredentials: true,
      responseType: 'arraybuffer',
      headers: {
        Accept: "application/pdf",
        Authorization: authHeader
      }
    }).success(function (data) {
      var blob = new Blob([data], {type: "application/pdf"});
      blob.name = filename;
      blob.lastModifiedDate = new Date();
      callback(null, blob);
    })
      .error(function (data) {
        callback(data, null);
      });
  };

  this.getVARecordCCD = function (requestDate, username, password, filename, callback) {
    var domainBase = "www.myhealth.va.gov/mhv-portal-web/downloadCCDData";
    var domainInfo = "?downloadFormat=xml&requestDate=" + requestDate;
    var domainUrl = "https://" + domainBase + domainInfo;
    var authHeader = "Basic " + Base64.encode(username + ":" + password);
    $http({
      method: 'POST',
      url: domainUrl,
      withCredentials: true,
      headers: {
        'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        'Authorization': authHeader
      }
    }).success(function (data) {
      var type = 'application/xml';
      var blob = new Blob([data], {type: type});
      blob.name = filename + '.xml';
      blob.lastModifiedDate = new Date();
      callback(null, blob);
    })
      .error(function (data) {
        callback(data, null);
      });
  };

  this.getVARecordCCDPDF = function (requestDate, username, password, filename, callback) {
    var domainBase = "www.myhealth.va.gov/mhv-portal-web/downloadCCDData";
    var domainInfo = "?downloadFormat=pdf&requestDate=" + requestDate;
    var domainUrl = "https://" + domainBase + domainInfo;
    var authHeader = "Basic " + Base64.encode(username + ":" + password);
    $http({
      method: 'POST',
      url: domainUrl,
      withCredentials: true,
      responseType: 'arraybuffer',
      headers: {
        Accept: "application/pdf",
        'Authorization': authHeader
      }
    }).success(function (data) {
      var blob = new Blob([data], {type: "application/pdf"});
      blob.name = filename + '.pdf';
      blob.lastModifiedDate = new Date();
      callback(null, blob);
    })
      .error(function (data) {
        callback(data, null);
      });
  };

  this.checkVAReportReady = function (username, password, callback) {
    var domainBase = "www.myhealth.va.gov/mhv-portal-web/mhv.portal";
    var domainEnd = "?_nfpb=true&_windowLabel=downloadData&downloadData_actionOverride=%2Fgov%2Fva%2Fmed%2Fmhv%2Fusermgmt%2FdownloadYourData%2FdownloadReport&_pageLabel=downloadData&operation=downloadHealthHistoryData";
    var domainUrl = "https://" + domainBase + domainEnd;
    var authHeader = "Basic " + Base64.encode(username + ":" + password);
    $http({
      method: 'POST',
      url: domainUrl,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': authHeader
      }
    }).success(function (data) {
      var existRE = /(Your information update is complete.)/;
      var existCheck = existRE.exec(data);
      if (existCheck) {
        var dateRE = /(?:javascript:setValue\(')([0-9\-T:.]{1,})/;
        var requestDate = dateRE.exec(data);
        var filenameRE = /(?:<td nowrap="nowrap">)([A-z0-9]{1,})(?=<)/;
        var filename = filenameRE.exec(data);
        callback(null, true, true, requestDate[1], filename[1]); //report available
      } else {
        var basicRE = /(An unexpected error has occurred)/;
        var basicCheck = basicRE.exec(data);
        if (basicCheck) {
          //probably a basic account
          callback(null, false);
        } else {
          //report not ready
          callback(null, true, false);
        }
      }
    })
      .error(function (data) {
        console.log("was an error: ", data);
        callback(data);
      });
  };

}).controller('dreCtrl', ['$scope', 'dreBackend', function ($scope, dreBackend) {
  $scope.select = {};
  $scope.dre = {
    domain: 'http://localhost:3000'
  };
  $scope.tabStep = 0;
  $scope.progress = 0;
  $scope.progressAlerts = [];
  $scope.dreAlerts = [];

  $scope.manualFiles = {};
  $scope.dreLoggedIn = false;
  $scope.fileButtons = [];

  $scope.services = [
    {
      name: 'My HealtheVet',
      username: true,
      password: true,
      file: false
    },
    /*      {
     name: 'Centers for Medicare & Medicade Services',
     username: true,
     password: true,
     file: false
     }, */
    {
      name: 'Manual Upload',
      username: false,
      password: false,
      file: true
    }
  ];

  $scope.reset = function () {
    $scope.selectService = {};
    $scope.dre = {
      domain: 'http://localhost:3000'
    };
    $scope.select = {};
    $scope.tabStep = 0;
    $scope.progress = 0;
    $scope.progressAlerts = [];
    $scope.dreAlerts = [];

    $scope.manualFiles = {};
    $scope.dreLoggedIn = false;
    $scope.manualFile = null;
    $scope.fileButtons = [];
  };

  $scope.$on("fileSelected", function (event, args) {
    $scope.$apply(function () {
      $scope.manualFile = args.file;
    });
  });

  $scope.previousStep = function () {
    $scope.tabStep--;
  };

  var reportRetrieved = false;
  var checkInterval;

  function checkReport() {
    console.log("checking for report");
    if (!reportRetrieved) {
      dreBackend.checkVAReportReady($scope.select.username, $scope.select.password, function (err, premium, avail, requestDate, filename) {
        if (err) {
          console.log("err: " + err);
          $scope.progressAlerts.push('Error Checking for Advanced Report' + err);
          ;
        } else {
          if (premium) {
            if (avail) {
              reportRetrieved = true;
              //requestDate and filename should be there
              dreBackend.getVARecordCCD(requestDate, $scope.select.username, $scope.select.password, filename, function (err, xmlFile) {
                if (err) {
                  console.log("err: ", err);
                } else {
                  $scope.progress = $scope.progress + 20;
                  $scope.progressAlerts.push('Retrieved CCD File');
                  $scope.fileButtons.push({
                    uploaded: false,
                    filetype: 'ccd',
                    file: xmlFile,
                    filename: xmlFile.name,
                    url: (window.URL || window.webkitURL).createObjectURL(xmlFile)
                  });
                  //$scope.xmlFile = xmlFile;
                  //$scope.xmlFileName = xmlFile.name;
                  //$scope.xmlUrl = (window.URL || window.webkitURL).createObjectURL(xmlFile);
                  dreBackend.getVARecordCCDPDF(requestDate, $scope.select.username, $scope.select.password, filename, function (err, ccdPdfFile) {
                    if (err) {
                      console.log("err: ", err);
                    } else {
                      $scope.fileButtons.push({
                        uploaded: false,
                        filetype: 'ccdPdf',
                        file: ccdPdfFile,
                        filename: ccdPdfFile.name,
                        url: (window.URL || window.webkitURL).createObjectURL(ccdPdfFile)
                      });
                      $scope.progress = $scope.progress + 20;
                      $scope.progressAlerts.push('Retrieved Advanced PDF');
                      //$scope.ccdPdfFile = ccdPdfFile;
                      //$scope.ccdPdfFileName = ccdPdfFile.name;
                      //$scope.ccdPdfUrl = (window.URL || window.webkitURL).createObjectURL(ccdPdfFile);
                      setTimeout(function () {
                        $scope.tabStep = 2;
                      }, 5 * 1000);
                    }
                  });
                }
              });
            } else {
              //report not available yet
              $scope.progressAlerts.push('Report is not available yet.  Trying again in 30 seconds');
            }
          } else {
            //basic account
            $scope.progress = $scope.progress + 40;
            $scope.progressAlerts.push('Basic Account Detected');
            setTimeout(function () {
              $scope.tabStep = 2;
            }, 5 * 1000);
          }
        }
      });
    } else {
      clearInterval(checkInterval);
    }
  }

  function myHealtheVet() {
    dreBackend.getVARecordId($scope.select.username, $scope.select.password, function (err, recordId) {
      if (err) {
        console.log(err);
        $scope.progressAlerts.push('Error: ' + err);
      } else {
        $scope.progress = 20;
        $scope.progressAlerts.push('Logged In to MyHealtheVet');
        $scope.progressAlerts.push('Retrieved Report Id');
        $scope.reportId = recordId;
        dreBackend.getVARecordASCII(recordId, $scope.select.username, $scope.select.password, function (err, asciiFile) {
          if (err) {
            console.log(err);
          } else {
            $scope.progress = $scope.progress + 20;
            $scope.progressAlerts.push('Retrieved Txt Record');
            $scope.fileButtons.push({
              uploaded: false,
              filetype: 'ascii',
              file: asciiFile,
              filename: asciiFile.name,
              url: (window.URL || window.webkitURL).createObjectURL(asciiFile)
            });
            //$scope.asciiFile = asciiFile;
            //$scope.asciiFileName = asciiFile.name;
            //$scope.asciiUrl = (window.URL || window.webkitURL).createObjectURL(asciiFile);
          }
          dreBackend.getVARecordPDF(recordId, $scope.select.username, $scope.select.password, asciiFile.name, function (err, pdfFile) {
            if (err) {
              console.log(err);
            } else {
              $scope.progress = $scope.progress + 20;
              $scope.progressAlerts.push('Retrieved Basic PDF');
              $scope.fileButtons.push({
                uploaded: false,
                filetype: 'pdf',
                file: pdfFile,
                filename: pdfFile.name,
                url: (window.URL || window.webkitURL).createObjectURL(pdfFile)
              });
              //$scope.pdfFile = pdfFile;
              //$scope.pdfFileName = pdfFile.name;
              //$scope.pdfUrl = (window.URL || window.webkitURL).createObjectURL(pdfFile);
            }
          });
        });
        reportRetrieved = false;
        checkInterval = setInterval(checkReport(), 30 * 1000);
      }
    });
  }

  $scope.serviceStep = function () {
    if ($scope.select.service.name === "My HealtheVet") {
      myHealtheVet();
      $scope.tabStep = 1; //1 is now progress screen
    } else {
      $scope.tabStep = 2; //2 is DRE Login Screen
    }
  };

  $scope.skipDRE = function () {
    $scope.tabStep = 3;
  };

  $scope.checkDRE = function () {
    dreBackend.checkDRELogin($scope.dre.domain, $scope.dre.username, $scope.dre.password, function (err, validLogin) {
      if (err) {
        console.log("err: " + err);
        $scope.dreAlerts.push('DRE Login Error: ' + err);
      } else {
        if (validLogin) {
          $scope.dreAlerts.push('DRE Login Successful!');
          $scope.dreLoggedIn = true;
          setTimeout(function () {
            $scope.tabStep = 3;
          }, 5 * 1000);
        } else {
          $scope.dreAlerts.push('DRE Login Error: ' + err);
        }
      }
    });
    /*
     if ($scope.selectedService.name === 'Manual Upload') {
     dreBackend.uploadRecord($scope.dre.domain, $scope.dre.username, $scope.dre.password, $scope.manualFile, function (err, manualResults) {
     if (err) {
     $scope.uploadError = 'Upload Err: ' + err;
     } else {
     console.log('manual: ', manualResults);
     $scope.tabStep = 2;
     }
      });
    } else {
      dreBackend.uploadRecord($scope.dre.domain, $scope.dre.username, $scope.dre.password, $scope.pdfFile, function (err3, pdfResults) {
        if (err3) {
          $scope.uploadError = 'Upload Err: ' + err3;
        } else {
          console.log('pdf: ', pdfResults);
          dreBackend.uploadRecord($scope.dre.domain, $scope.dre.username, $scope.dre.password, $scope.asciiFile, function (err2, asciiResults) {
            if (err2) {
              $scope.uploadError = 'Upload Err: ' + err2;
            } else {
              console.log('ascii: ', asciiResults);
              $scope.tabStep = 2;
            }
          });
        }
      });
    }
     */
  };

  $scope.uploadFile = function (fileButton) {
    dreBackend.uploadRecord($scope.dre.domain, $scope.dre.username, $scope.dre.password, fileButton.file, function (err, data) {
      if (err) {
        $scope.uploadError = 'Upload Err: ' + err;
      } else {
        //$scope.tabStep = 2;
        fileButton.uploaded = true;
      }
    });
  };

  $scope.finish = function () {
    $scope.tabStep = 4;
  }
}]).directive('fileModel', function () {
  return {
    scope: true,
    link: function (scope, element) {
      element.bind('change', function (event) {
        console.log(JSON.stringify(event.target));
        scope.$emit("fileSelected", {file: event.target.files[0]});
      });
    }
  };
}).filter('reverse', function () {
  return function (items) {
    return items.slice().reverse();
  };
});