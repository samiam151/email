var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/inbox', {
            templateUrl: 'templates/inbox.html'
        })
        .when('/inbox/:id', {
            templateUrl: 'templates/message.html'
        })
        .otherwise({
            redirectTo: '/inbox',
            templateUrl: 'templates/inbox.html'
        });
});