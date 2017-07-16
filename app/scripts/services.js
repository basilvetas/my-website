app.service('postService', function () {
  var post = {};

  return {
      getPostContent: function () {
          return post;
      },
      setPostContent: function(content) {
          post = content;
      }
  };
});