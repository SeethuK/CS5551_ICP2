
angular.module('nutrical', [])

    .controller('nutrictrl', function($scope, $http) {
        $scope.a = false;
        /*$scope.siris = false;*/
        $scope.getdetails = function () {
            $http.get('http://api.nutritionix.com/v1_1/search/' + $scope.searchfood + '? results=0:1&fields=*&appId=ff526d3e&appKey=908c7d0ae48526f77cfa2a3121f6dee9').then(function (t) {
                console.log(t);
                $scope.x = t.data.hits;

                $scope.url = "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=e27b1bbf-8961-42e0-bf1e-993bc8f6e307&password=ye1fd35zzlPQ&text="+ "caloriesperservingquantityof "+ $scope.searchfood;

                $scope.a = true;
            })

        }
        /*.controller('videoctrl', function($scope, $http) {
                $scope.a = false;
                $scope.siris = false;
                $scope.getdetails = function () {
                    $http.get('https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=e27b1bbf-8961-42e0-bf1e-993bc8f6e307&password=ye1fd35zzlPQ&text=' + $scope.searchfood + 'type="audio/ogg"').then(function (r) {
                        console.log(r);

                        $scope.a = true;
                    })

                }*/


    });