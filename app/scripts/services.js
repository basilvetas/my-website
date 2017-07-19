app.service('postService', ['$http', '$sce', function ($http, $sce) {

  return {
		reqPostList: function() {

			return $http.get('posts.json').then(function (success){			
				return success.data.posts;
		  },function (error){

		  });	  
		  
		},    
    getPostContent: function (post) {
    		
    	return $http.get('posts/' + post.path + '.txt').then(function (success){

    		// extract post contents
				var date = post.date;
				var path = post.path;
				var image = post.image || null;
				var title = '';									
				var body = '';

        _.each(success.data.split("\n\n"), function(key, num) {        		
      		if(num == 0) {
      			title = key.trim();
      		}
      		else {
      			body += '<p>' + key + '</p>';	
      		}            
        });

				var currentPost = {
					title: title, 						
					date: date, 		
					image: image,			
					body: $sce.trustAsHtml(body),
					path: path,						
				};

				return currentPost;

		  },function (error){

		  });          
    }
  };
}]);


app.service('resourceService', ['$http', function ($http) {

	return {

		reqResources: function() {

			return $http.get('resources.json').then(function (success){			
				return success.data.resources;
		  },function (error){

		  });	  
		  
		},

	};

}]);

app.filter('catFilter', ['$filter', function($filter) {
  
  return function(resources, category) {

  	var output = [];

  	_.each(resources, function(res) {  		

  		if(_.includes(res.categories, category)) {  	

  			output.push(res);
  		}
    	
    });    

    return output;
  }

}]);



