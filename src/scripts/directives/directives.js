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


angular.module('mywebsite')
.directive('disqus', function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    template: '<div id="disqus_thread"></div>',
    controller: 'DisqusCtrl'
  }
});

angular.module('mywebsite')
.directive('twitter', function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    template: '<span></span>',
    controller: 'TwitterCtrl'
  }
});

angular.module('mywebsite').directive('footer', function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: '/partials/_footer.html',
    controller: 'FooterCtrl'
  }
});
