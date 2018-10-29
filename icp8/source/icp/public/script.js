'use strict'
angular.module('know', [])

    .controller('knowctrl', function($scope, $http) {
        $scope.a=false;
        $scope.getdetails = function () {
            $http.get("http://127.0.0.1:8081/servergoogle?searchtext="+$scope.search).then(function (t) {
                console.log(t);
                $scope.nam=t.data.itemListElement[0].result.name;
                $scope.x = t.data.itemListElement[0].result.description;
                $scope.y=t.data.itemListElement[0].result.detailedDescription.url;
                $scope.a=true;

            }).catch(function (err) {
                console.log(err.message);
            })
        }
    })