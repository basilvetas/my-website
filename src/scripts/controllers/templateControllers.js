

/******** Templates ********/
angular.module('mywebsite')
.controller('HomeCtrl', function ($scope, postService, $sanitize) {		
	'use strict';
			
	$scope.postContents = [];
	
	postService.reqPostList().then(function (data){		
		_.each(data, function(post) {
    	postService.getPostContent(post).then(function (data){    
    		$scope.postContents.push(data);
    	});
    });		
	});

});


angular.module('mywebsite')
.controller('PostCtrl', function ($scope, $routeParams, postService, $sanitize) {		
	'use strict';
	
	function loadPost(post) {
		
		$scope.post = {};
		
		postService.reqPostList().then(function (data){		
	 		postService.getPostContent(_.find(data, {'path': post})).then(function (data){	    			    
		 		$scope.post = data;		 		
			});
		});
  }

	$scope.$on('$routeChangeUpdate', loadPost($routeParams.postname));
		
});


angular.module('mywebsite')
.controller('AboutCtrl', function ($scope, postService) {
	'use strict';

	$scope.about = {};
				
	postService.getPostContent({"path": "about-me"}).then(function (data){	    			    
 		$scope.about = data; 		
	});

});


angular.module('mywebsite')
.controller('ResourcesCtrl', function ($scope, resourceService) {
	'use strict';
	
	$scope.categories = [
		{tags: ["blockchain"], title: "Crypto/Blockchain"},
		{tags: ["datasci", "statistics"], title: "Data Science"},
		{tags: ["investing", "startups"], title: "Startups & Investing"},
		{tags: ["tech"], title: "Tech"},		
		{tags: ["environment"], title: "Environment"},
		{tags: ["politics", "philosophy", "economics"], title: "Philosophy, Politics & Econ"},
		{tags: ["health", "nutrition"], title: "Health & Nutrition"},
		{tags: ["nyc"], title: "NYC"},
		{tags: ["greece"], title: "Greece"},
		{tags: ["other"], title: "Other"}
	]

	$scope.resources = [];

	resourceService.reqResources().then(function(data) {		 		
		$scope.resources = data;		
	}); 

});

