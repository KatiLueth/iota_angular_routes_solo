// Public/app.js (clientapp.js)
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/continuum', {
            templateUrl: '/views/templates/continuum.html',
            //controller: 'HomeController'
        })
        .when('/drWho', {
            templateUrl: '/views/templates/drWho.html',
            //controller: 'AnotherController'
        })
        .when('/mcFly', {
            templateUrl: '/views/templates/mcFly.html',
            //controller: 'HomeController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
