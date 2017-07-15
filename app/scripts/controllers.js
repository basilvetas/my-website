/******** Templates ********/
app.controller('HomeCtrl', ['$scope', function ($scope) {

	var $el = $('#my-infinite-container');
	var listView = new infinity.ListView($el);
	console.log("listView");
	console.log(listView);
	
	console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));	

	// for (var i = Things.length - 1; i >= 0; i--) {
	// 	Things[i]
	// }

	// var mainInfo = null;
	// $http.get('content.json').success(function(data) {
	//     mainInfo = data;
	// });

}]);

app.controller('ArchiveCtrl', ['$scope', function ($scope) {

}]);

app.controller('AboutCtrl', ['$scope', function ($scope) {

}]);

/******** Partials ********/

app.controller('NavCtrl', ['$scope', function ($scope) {

	// make mobile/tablet navbar close on click
	$('.nav a').click(function(){
    $('#collapse-1').collapse('hide');
	});

	$scope.menu = [		
		{ title: "Home", link: "#/" },		
		{ title: "Archive", link: "#/archive" },		
		{ title: "About", link: "#/about" }		
	];
    
}]);

app.controller('FooterCtrl', ['$scope', function ($scope) {

	$scope.date = new Date();
    
}]);

app.controller('HeaderCtrl', ['$scope', function ($scope) {

	// $scope.banner = 'imgs/nyc.jpg';
    
}]);

app.controller('SocialCtrl', ['$scope', function ($scope) {

	// NOTE: minor bug - can't have more than one instance of social.html
	// on a page or the color changes don't work (because of id's)

	$scope.social = [
		{ name: "github", link: "https://github.com/basilvetas" },
		{ name: "facebook", link: "https://www.facebook.com/basilvetas" },
		{ name: "twitter", link: "https://twitter.com/basilvetas" },
		{ name: "linkedin", link: "https://www.linkedin.com/in/basilvetas/" },
		{ name: "instagram", link: "https://www.instagram.com/basilvetas/" },
		{ name: "google", link: "https://plus.google.com/+BasilVetas" }
	];
	
	// adds background color to social buttons
	$scope.color = function(i) {	
		$('#' + i).addClass("btn-" + i);		    
  };

  // removes background color from social buttons
  $scope.default = function(i) {		
		$('#' + i).removeClass("btn-" + i);		    
  };	
    
}]);


