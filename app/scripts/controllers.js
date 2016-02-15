/******** Templates ********/

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

app.controller('AboutCtrl', ['$scope', function ($scope) {

}]);

app.controller('PortfolioCtrl', ['$scope', function ($scope) {
	

}]);

app.controller('BlogCtrl', ['$scope', function ($scope) {


}]);

app.controller('MediaCtrl', ['$scope', function ($scope) {


}]);

app.controller('ContactCtrl', ['$scope', function ($scope) {
	

}]);


/******** Partials ********/

app.controller('NavCtrl', ['$scope', function ($scope) {

	$scope.menu = [
		{ title: "Home", link: "#/" },
		{ title: "About", link: "#/about" },
		{ title: "Portfolio", link: "#/portfolio"},
		{ title: "Blog", link: "#/blog"},
		{ title: "Media", link: "#/media"},
		{ title: "Contact", link: "#/contact"}
	];
    
}]);

app.controller('FooterCtrl', ['$scope', function ($scope) {

	$scope.date = new Date();
    
}]);

app.controller('HeaderCtrl', ['$scope', function ($scope) {

	$scope.banner = 'imgs/nyc.jpg'
    
}]);

app.controller('CarouselCtrl', ['$scope', function ($scope) {

	$scope.interval = 3000;
  $scope.slides = [
    { image: 'imgs/slc-day.jpg', text: "first" },
    { image: 'imgs/slc-night.jpg', text: "second" },    
  ];
    
}]);