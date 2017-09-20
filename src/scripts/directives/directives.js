angular.module('mywebsite')
.directive('nav', function () {
  'use strict';

  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: '/partials/_nav.html',
    controller: 'NavCtrl'
  }
});

angular.module('mywebsite')
.directive('header', function () {
	'use strict';

  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: '/partials/_header.html',
    controller: 'HeaderCtrl'
  }
});

// angular.module('mywebsite').directive('footer', function () {
//   return {
//     restrict: 'A', // C: class, E: element, M: comments, A: attributes
//     replace: false, // replaces original content with template
//     templateUrl: '/partials/_footer.html',
//     controller: 'FooterCtrl'
//   }
// });

// angular.module('mywebsite').directive('social', function () {
//   return {
//     restrict: 'A', // C: class, E: element, M: comments, A: attributes
//     replace: false, // replaces original content with template
//     templateUrl: '/partials/_social.html',
//     controller: 'SocialCtrl'
//   }
// });
