/**
 * The main app module
 *
 * @type {angular.Module}
**/

require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('lodash');
require('angular-sanitize');
require('angular-google-analytics');

require('../../dist/templateCachePartials');

var firebase = require('firebase');
require('angularfire');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCu3ee3zrgVBtWiHZtuQftIunJtRVK1kOI",
  authDomain: "my-website-cb958.firebaseapp.com",
  databaseURL: "https://my-website-cb958.firebaseio.com",
  projectId: "my-website-cb958",
  storageBucket: "my-website-cb958.appspot.com",
  messagingSenderId: "708502335303"
};

firebase.initializeApp(config);

angular.module('mywebsite', ['ngRoute', 'partials', 'ui.bootstrap', 'firebase', 'ngSanitize', 'angular-google-analytics'])
.config(function($locationProvider, $routeProvider) {  
  "use strict";

  $locationProvider.html5Mode(true).hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeCtrl'
    })    
    .when('/about', {
      templateUrl: '/partials/about.html',
      controller: 'AboutCtrl'
    })       
    .when('/resources', {
      templateUrl: '/partials/resources.html',
      controller: 'ResourcesCtrl'
    })        
    .when('/post/:postname', {
      templateUrl: '/partials/post.html', 
      controller: 'PostCtrl'
    })    
    .otherwise({
      redirectTo: "/"
    });

});

// https://www.npmjs.com/package/angular-google-analytics
angular.module('mywebsite')
.config(function (AnalyticsProvider) {      
   AnalyticsProvider.setAccount('UA-106863823-1');
}).run(function(Analytics) { });

require('partialControllers');
require('templateControllers');
require('directives');
require('services');


