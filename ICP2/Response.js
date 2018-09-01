                      angular.module('weather', [])

                  .controller('weatherctrl', function($scope, $http) {
                       $scope.siri = false;
                      $scope.siris = false;
                      $scope.getWeather = function() {
                       $http.get('http://api.wunderground.com/api/36b799dc821d5836/hourly/q/' + $scope.code + '/ ' + $scope.city + '.json').then(function (res) {
                         console.log(res);
                       $scope.x = res.data.hourly_forecast;
                      $scope.siri = true;
                    })
                  this.currentweather();
                 }

                 $scope.currentweather = function() {

                 $http.get('http://api.wunderground.com/api/36b799dc821d5836/conditions/q/'+ $scope.code + '/ '+ $scope.city+'.json').then(function(o) {
                console.log(o);
                $scope.current_temp = "Current Weather is" +  o.data.current_observation.temp_f + "F";
               $scope.current_Weather = o.data.current_observation.weather;
               $scope.current_weather_icon = o.data.current_observation.icon_url;

            });
           }


          });
