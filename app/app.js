app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: '/templates/about.html',
      controller: 'AboutCtrl'
    })
    .when('/donate', {
      templateUrl: '/templates/donate.html',
      controller: 'DonateCtrl'
    })
    .when('/students', {
      templateUrl: '/templates/students.html',
      controller: 'StudentsCtrl'
    })
    .when('/staff', {
      templateUrl: '/templates/staff.html',
      controller: 'StaffCtrl'
    })
    .when('/contact', {
      templateUrl: '/templates/contact.html',
      controller: 'ContactCtrl'
    })
}]);












