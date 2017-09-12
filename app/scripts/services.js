'use strict';

/******** Services ********/
app.service('postService', ['$http', '$sce', function ($http, $sce) {

  return {
		reqPostList: function() {

			return $http.get('posts.json').then(function (success){				
	
				// order by date				
				var posts = _.orderBy(success.data.posts, 'date', 'desc');				 				

				return posts;
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
      		else {      		
      			body += key;	
      		}            
        });        

        var decodedText = $('<div />').html(body).text();                       

				var currentPost = {
					title: title, 						
					date: post.date || null, 							
					body: $sce.trustAsHtml(decodedText),
					path: post.path,
					tags: post.tags,
					image: post.image || null,			
					sources: post.sources || null						
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
				
				var resources = success.data.resources;

				// wrap dates as objects
				_.each(resources, function(res) {
					if(res.date) {
						res.date = new Date(res.date);
					}		
					else {
						res.date = new Date(449902800000);
					}
				});

				// order resources by date
				resources = _.orderBy(resources, 'date', 'desc');

				return resources;
		  },function (error){

		  });	  
		  
		},

	};

}]);


/******** Filters ********/
app.filter('catFilter', ['$filter', function($filter) {
  
  return function(resources, tags) {

  	var output = [];

  	_.each(resources, function(res) {  		  		
  		// filter the resources by their category tags
  		_.each(tags, function(tag) {

  			if(_.includes(res.categories, tag)) {  	

	  			// make sure values are unique
	  			if(!_.includes(output, res)) {  
	  				output.push(res);
	  			}

	  		}

  		});
  		    
    });    

    return output;
  }

}]);



