/*
@Author Pradeep D Kadnor
@Date 04/08/2017
@@ Dashboard for site dynamically fetch from alrefso site 
*/

'use strict';

var qApp = angular.module('qApp', []);

qApp.controller('qCtrl', function ($scope, $http) {

    $scope.clearSearchbox = function () {
        $scope.myProfile.search != undefined ? $scope.myProfile.search="" : $scope.myProfile.search//clear search string
    }

    //read json data
    $http({ method: 'GET', url: 'siteData.json' }).then(function (response, status) {
        if (response.status == 200) {
            $scope.myProfile = response.data;
        }
    });
});