var mainApp = angular.module('mainApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '../index.html',
            controller: 'MainController'
        }).
        when('/michael', {
            templateUrl: '../views/michael.html',
            controller: ''
        }).
        when('/or', {
            templateUrl: '../views/or.html',
            controller: ''
        }).
        when('/lian', {
            templateUrl: '../views/lian.html',
            controller: ''
        }).
        when('/yossi', {
            templateUrl: '../views/yossi.html',
            controller: ''
        }).
        when('/shavit', {
            templateUrl: '../views/shavit.html',
            controller: ''
        }).
        otherwise({
            redirectTo: '/'
      });
}]);