/**
 * The main app module
 *
 * @type {angular.Module}
**/

require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('angular-sanitize');
require('angular-google-analytics');
require('ng-meta');
window._ = require('lodash');
require('../../dist/templateCachePartials');
var ga = require('../../dist/config/ga-config.json');

// Initialize Firebase
var firebase = require('firebase');
require('angularfire');
var config = require('../../dist/config/fb-config.json');
firebase.initializeApp(config);

angular.module('mywebsite', ['ngRoute', 'partials', 'ui.bootstrap', 'firebase', 'ngSanitize', 'angular-google-analytics', 'ngMeta'])
.config(function($locationProvider, $routeProvider, ngMetaProvider) {  
  "use strict";

  $locationProvider.html5Mode(true).hashPrefix('');

  ngMetaProvider.useTitleSuffix(true);
  ngMetaProvider.setDefaultTitle('A Blog by Basil Vetas');
  ngMetaProvider.setDefaultTitleSuffix(' | Home');
  ngMetaProvider.setDefaultTag('author', 'Basil Vetas');

  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeCtrl'
    })    
    .when('/about', {
      templateUrl: '/partials/about.html',
      controller: 'AboutCtrl'
    })       
    // .when('/more', {
    //   templateUrl: '/partials/more.html',
    //   controller: 'MoreCtrl'
    // })        
    .when('/post/:postname', {
      templateUrl: '/partials/post.html', 
      controller: 'PostCtrl'
    })    
    .otherwise({
      redirectTo: "/"
    });

});

angular.module('mywebsite')
.config(function (AnalyticsProvider) {      
   AnalyticsProvider.setAccount(ga.key);
}).run(function(Analytics) {});

angular.module('mywebsite').run(['ngMeta', function(ngMeta) { 
  ngMeta.init();
}]);

require('partialControllers');
require('templateControllers');
require('directives');
require('services');


