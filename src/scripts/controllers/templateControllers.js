

/******** Templates ********/
angular.module('mywebsite')
.controller('HomeCtrl', function ($scope, postService, $sanitize, ngMeta) {		
	'use strict';	
			
	$scope.postContents = [];
	
	postService.reqPostList().then(function (data){		
		_.each(data, function(post) {		
    	postService.getPostContent(post).then(function (data){        		
    		$scope.postContents.push(data);      		

    		ngMeta.setTitle('A Blog by Basil Vetas', ' | Home');
    		ngMeta.setTag('description', 'A Blog by Basil Vetas');
    		ngMeta.setTag('og:title', 'A Blog by Basil Vetas');
				ngMeta.setTag('og:url', 'https://basilvetas.com/');
				ngMeta.setTag('og:description', 'A Blog by Basil Vetas');	
			  ngMeta.setTag('og:image', '');
    	});
    });		
	});
});


angular.module('mywebsite')
.controller('PostCtrl', function ($scope, $routeParams, postService, $sanitize, ngMeta) {		
	'use strict';
	
	function loadPost(post) {
		
		$scope.post = {};
		
		postService.reqPostList().then(function (data){		
	 		postService.getPostContent(_.find(data, {'path': post})).then(function (data){	    			    
		 		$scope.post = data;				 		 

		 		ngMeta.setTitle('A Blog by Basil Vetas', ' | ' + $scope.post.title);
		 		ngMeta.setTag('description', $scope.post.title);
		 		ngMeta.setTag('og:title', $scope.post.title);
				ngMeta.setTag('og:url', "https://basilvetas.com/" + $scope.post.path);
				ngMeta.setTag('og:description', $scope.post.title);	
			  ngMeta.setTag('og:image', 'images/' + $scope.post.image);
			});
		});
  }

	$scope.$on('$routeChangeUpdate', loadPost($routeParams.postname));
		
});


angular.module('mywebsite')
.controller('AboutCtrl', function ($scope, postService, ngMeta) {
	'use strict';

	$scope.about = {};
				
	postService.getPostContent({"path": "about-me"}).then(function (data){	    			    
 		$scope.about = data; 		

 		ngMeta.setTitle('A Blog by Basil Vetas', ' | About');
 		ngMeta.setTag('description', 'About Me');
 		ngMeta.setTag('og:title', 'About Me');
		ngMeta.setTag('og:url', 'https://basilvetas.com/about');
		ngMeta.setTag('og:description', 'About Me');	
	  ngMeta.setTag('og:image', '');
	});

});


// angular.module('mywebsite')
// .controller('MoreCtrl', function ($scope, resourceService) {
// 	'use strict';
	
// 	$scope.categories = [
// 		{tags: ["blockchain"], title: "Crypto/Blockchain"},
// 		{tags: ["datasci", "statistics"], title: "Data Science"},
// 		{tags: ["investing", "startups"], title: "Startups & Investing"},
// 		{tags: ["tech"], title: "Tech"},		
// 		{tags: ["environment"], title: "Environment"},
// 		{tags: ["politics", "philosophy", "economics"], title: "Philosophy, Politics & Econ"},
// 		{tags: ["health", "nutrition"], title: "Health & Nutrition"},
// 		{tags: ["nyc"], title: "NYC"},
// 		{tags: ["greece"], title: "Greece"},
// 		{tags: ["other"], title: "Other"}
// 	]

// 	$scope.resources = [];

// 	resourceService.reqResources().then(function(data) {		 		
// 		$scope.resources = data;		
// 	}); 

// });

