app.service('postService', function () {

  return {
      getPostContent: function () {        		
          return JSON.parse(localStorage.getItem('currentPost'));
      },
      setPostContent: function(content) {      		
      		localStorage.setItem('currentPost', JSON.stringify(content));      		          
      }
  };
});