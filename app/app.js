"use strict";

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

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
    .when('/portfolio', {
      templateUrl: '/templates/portfolio.html',
      controller: 'PortfolioCtrl'
    })
    .when('/blog', {
      templateUrl: '/templates/blog.html',
      controller: 'BlogCtrl'
    })
    .when('/media', {
      templateUrl: '/templates/media.html',
      controller: 'MediaCtrl'
    })
    .when('/contact', {
      templateUrl: '/templates/contact.html',
      controller: 'ContactCtrl'
    })
}]);












