var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
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
        // $locationProvider.html5Mode(true);
});