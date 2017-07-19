'use strict';

/******** Templates ********/
app.controller('HomeCtrl', ['$scope', '$location', 'postService', function ($scope, $location, postService) {		
		
	$scope.postContents = [];
	
	postService.reqPostList().then(function (data){		
		_.each(data, function(post) {
    	postService.getPostContent(post).then(function (data){    
    		$scope.postContents.push(data);
    	});
    });		
	});

	$scope.goToPost = function (tag) {  		         
    $location.path('/post/' + tag);        
  };

}]);

app.controller('PostCtrl', ['$scope', '$routeParams', '$location', 'postService', function ($scope, $routeParams, $location, postService) {		
	
	function loadPost(post) {
		
		$scope.post = {};
		
		postService.reqPostList().then(function (data){		
	 		postService.getPostContent(_.find(data, {'tag': post})).then(function (data){	    			    
		 		$scope.post = data;		 		
			});
		});
  }

  // loadPost($routeParams.postname);

	$scope.$on('$routeChangeUpdate', loadPost($routeParams.postname));

	$scope.goToPost = function (tag) {  		         
    $location.path('/post/' + tag);        
  };
		
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
		{ title: "Home", link: "/" },		
		// { title: "Archive", link: "#/archive" },		
		{ title: "About", link: "/about" }		
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


