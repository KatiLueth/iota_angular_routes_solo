// Public/app.js (clientapp.js)
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/continuum', {
            templateUrl: '/views/templates/continuum.html',
            controller: 'ContinuumController'
        })
        .when('/drWho', {
            templateUrl: '/views/templates/drWho.html',
            controller: 'DrWhoController'
        })
        .when('/mcFly', {
            templateUrl: '/views/templates/mcFly.html',
            controller: 'McFlyController'
        })
        .otherwise({
            redirectTo: 'home',
            templateUrl: '/views/templates/home.html'
        });
}]);
