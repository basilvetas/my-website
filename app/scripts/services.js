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

    		// format post contents								
				var title = '';									
				var body = '';

        _.each(success.data.split("\n\n"), function(key, num) { 

        	key = key.trim();

      		if(num == 0) {
      			title = key;
      		}
      		else if(key[0] ===  "\"" && key[key.length-1] ===  "\"") {
      			body += '<blockquote>' + key + '</blockquote>';	
      		}
      		else {      		
      			body += '<p>' + key + '</p><br />';	
      		}            
        });

				var currentPost = {
					title: title, 						
					date: post.date || null, 							
					body: $sce.trustAsHtml(body),
					path: post.path,
					tags: post.tags,
					image: post.image || null,			
					sources: post.sources || null						
				};

				console.log(currentPost);

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



