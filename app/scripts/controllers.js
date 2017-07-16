'use strict';

/******** Templates ********/
app.controller('HomeCtrl', ['$scope', '$location', '$http', "$sce", function ($scope, $location, $http, $sce) {		

	$scope.postList = [];

	// load posts from txt files
	$http.get('posts.json').then(function (success){

		var posts = success.data.posts; 		

 		_.each(posts, function(post) {

 			$http.get('posts/' + post.title + '.txt').then(function (success){
 				var content = success.data

 				// format as html				
				var title = '';
				var date = post.date;
				var tag = post.title
				var htmlContent = '';	

        _.each(content.split("\n\n"), function(key, num) {        		
        		if(num == 0) {
        			title = key.trim();
        		}
        		else {
        			htmlContent += '<p>' + key + '</p>';	
        		}            
        });

        htmlContent = $sce.trustAsHtml(htmlContent);

				$scope.postList.push({title : title, date: date, content: htmlContent, tag: tag});				

		  },function (error){

		  });
		  
		});
		
  },function (error){

  });	

  console.log($scope.postList);

	$scope.goToPost = function (postname) {  		         
    $location.path('/post/' + postname);
  };

}]);

// app.controller('ArchiveCtrl', ['$scope', function ($scope) {

// }]);

app.controller('AboutCtrl', ['$scope', function ($scope) {

}]);

app.controller('PostCtrl', ['$scope', '$routeParams', '$http', '$sce', function ($scope, $routeParams, $http, $sce) {
		
		var postname = $routeParams.postname;	

		$http.get('posts/' + postname + '.txt').then(function (success){
			var content = success.data

			// format as html				
			var title = '';
			var date = post.date;
			var tag = post.title
			var htmlContent = '';	

      _.each(content.split("\n\n"), function(key, num) {        		
      		if(num == 0) {
      			title = key.trim();
      		}
      		else {
      			htmlContent += '<p>' + key + '</p>';	
      		}          
      });

      htmlContent = $sce.trustAsHtml(htmlContent);

			$scope.post = {
				title : title, 				
				content: htmlContent, 
				tag: tag
			};				

	  },function (error){

	  });
		
}]);

/******** Partials ********/

app.controller('NavCtrl', ['$scope', function ($scope) {

	// make mobile/tablet navbar close on click
	$('.nav a').click(function(){
    $('#collapse-1').collapse('hide');
	});

	$scope.menu = [		
		{ title: "Home", link: "#/" },		
		// { title: "Archive", link: "#/archive" },		
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


