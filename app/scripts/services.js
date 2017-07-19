app.service('postService', ['$http', '$sce', function ($http, $sce) {

  return {
		reqPostList: function() {

			return $http.get('posts.json').then(function (success){			
				return success.data.posts;
		  },function (error){

		  });	  
		  
		},    
    getPostContent: function (post) {
    		
      	return $http.get('posts/' + post.tag + '.txt').then(function (success){

      		// extract post contents
					var date = post.date;
					var tag = post.tag;
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
						tag: tag,						
					};

					return currentPost;

			  },function (error){

			  });
          
      }
  };
}]);


