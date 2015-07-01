'use strict';

chrome.runtime.onInstalled.addListener(function(details) {
    console.log('previousVersion', details.previousVersion);
});

//chrome.browserAction.setBadgeText({text: '\'Allo'});

//console.log('\'Allo \'Allo! Event Page for Browser Action');

/*
chrome.cookies.getAll({url:'https://www.myhealth.va.gov'},function(cookiesArr) {
    for (var i = 0; i < cookiesArr.length; i++) {
      chrome.cookies.remove({url:cookiesArr[i].url, name:cookiesArr[i].name},function(err){
         console.log("cookie removed!");
      });
    }
});
*/