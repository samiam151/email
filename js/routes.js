var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/inbox', {
            templateUrl: 'templates/inbox.html'
        })
        .otherwise({
            redirectTo: '/',
            templateUrl: 'templates/inbox.html'
        });
});