"use strict";

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/home.html',
      controller: 'HomeCtrl'
    })
    // .when('/archive', {
    //   templateUrl: '/templates/archive.html',
    //   controller: 'ArchiveCtrl'
    // }) 
    .when('/about', {
      templateUrl: '/templates/about.html',
      controller: 'AboutCtrl'
    })    
    .when('/blog', {
      templateUrl: '/templates/blog.html',
      controller: 'BlogCtrl'
    })        
    .when('/post/:postname', {
      templateUrl: '/templates/post.html', 
      controller: 'PostCtrl'
    })
    .otherwise({
      redirectTo: "/"
    });
}]);






