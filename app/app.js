"use strict";

var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.config(['$locationProvider', function($locationProvider) {  
  $locationProvider.html5Mode(true).hashPrefix('');
}]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/home.html',
      controller: 'HomeCtrl'
    })    
    .when('/about', {
      templateUrl: '/templates/about.html',
      controller: 'AboutCtrl'
    })       
    .when('/resources', {
      templateUrl: '/templates/resources.html',
      controller: 'ResourcesCtrl'
    })        
    .when('/post/:postname', {
      templateUrl: '/templates/post.html', 
      controller: 'PostCtrl'
    })    
    .otherwise({
      redirectTo: "/"
    });
}]);

