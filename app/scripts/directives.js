app.directive('carousel', [function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: true, // replaces original content with template
    templateUrl: 'partials/_carousel.html',
    controller: 'CarouselCtrl'
  }
}]);