var app = angular.module('myApp', []);
//----BY ID
// app.controller('myCtrl', function ($scope, $http) {
//  $scope.weather ="Press The Button To View Weather";
//     function weatherReload() {
//         $http.get("http://api.openweathermap.org/data/2.5/forecast?id=7839562&APPID=f3caf2bc2fc13dd775fcbf0569b28cfd")
//             .then(function (response) {
//                 $scope.weather = response.data.city.name + " " + response.data.list[0].weather[0].description;
//             }).catch(function (error) {
//                 $scope.weather = "There is some WRONG information";
//              });
//     }
//     $scope.reload = weatherReload;
//     //weatherReload();
// });

//BY CITY NAME
app.controller('myCtrl', function ($scope, $http) {
    $scope.cityName = '';

    function weatherReload() {
        $scope.cityName = toTitleCase($scope.cityName);
        $http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + $scope.cityName + "&APPID=f3caf2bc2fc13dd775fcbf0569b28cfd")
            .then(function (response) {
                $scope.weather = response.data.city.name + " " + response.data.list[0].weather[0].description;
            }).catch(function (error) {
                $scope.weather = "There is some WRONG information";
            });
    }
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }
    $scope.reload = weatherReload;
    //weatherReload();
});