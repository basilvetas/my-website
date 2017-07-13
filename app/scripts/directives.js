app.directive('nav', [function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: 'partials/_nav.html',
    controller: 'NavCtrl'
  }
}]);

app.directive('header', [function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: 'partials/_header.html',
    controller: 'HeaderCtrl'
  }
}]);

app.directive('footer', [function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: 'partials/_footer.html',
    controller: 'FooterCtrl'
  }
}]);

app.directive('social', [function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: 'partials/_social.html',
    controller: 'SocialCtrl'
  }
}]);
