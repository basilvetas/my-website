'use strict';

/******** Templates ********/
app.controller('HomeCtrl', ['$scope', 'postService', function ($scope, postService) {		
		
	$scope.postContents = [];
	
	postService.reqPostList().then(function (data){		
		_.each(data, function(post) {
    	postService.getPostContent(post).then(function (data){    
    		$scope.postContents.push(data);
    	});
    });		
	});

}]);

app.controller('PostCtrl', ['$scope', '$routeParams', 'postService', function ($scope, $routeParams, postService) {		
	
	function loadPost(post) {
		
		$scope.post = {};
		
		postService.reqPostList().then(function (data){		
	 		postService.getPostContent(_.find(data, {'path': post})).then(function (data){	    			    
		 		$scope.post = data;		 		
			});
		});
  }

	$scope.$on('$routeChangeUpdate', loadPost($routeParams.postname));
		
}]);

app.controller('AboutCtrl', ['$scope', 'postService', function ($scope, postService) {

	$scope.about = {};
				
	postService.getPostContent({"path": "about-me"}).then(function (data){	    			    
 		$scope.about = data; 		
	});

}]);

app.controller('ResourcesCtrl', ['$scope', 'resourceService', function ($scope, resourceService) {
	
	$scope.categories = [
		{tags: ["blockchain"], title: "Blockchain"},
		{tags: ["investing", "startups"], title: "Startups & Investing"},
		{tags: ["technology"], title: "Technology"},		
		{tags: ["environment"], title: "Environment"},
		{tags: ["politics", "philosophy", "economics"], title: "Philosophy, Politics & Economics"},
		{tags: ["health", "nutrition"], title: "Health & Nutrition"},
		{tags: ["other"], title: "Other"}
	]

	$scope.resources = [];

	resourceService.reqResources().then(function(data) {		 		
		$scope.resources = data;		
	}); 

}]);

/******** Partials ********/

app.controller('NavCtrl', ['$scope', function ($scope) {

	// make mobile/tablet navbar close on click
	$('.nav a').click(function(){
    $('#collapse-1').collapse('hide');
	});

	$scope.menu = [		
		{ title: "Home", link: "/" },				
		{ title: "About", link: "/about" },	
		{ title: "Resources", link: "/resources"}		
	];
    
}]);

app.controller('FooterCtrl', ['$scope', function ($scope) {

	$scope.date = new Date();
    
}]);

app.controller('HeaderCtrl', ['$scope', function ($scope) {	
    
}]);


