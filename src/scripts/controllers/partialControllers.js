/******** Partials ********/
angular.module('mywebsite')
.controller('NavCtrl', function ($scope) {
	'use strict';

	$scope.isCollapsed = true;
	
	$scope.closeNav = function() {
		$scope.isCollapsed = true;			
	};

	$scope.menu = [		
		{ title: "Home", link: "/" },				
		{ title: "About", link: "/about" },	
		{ title: "More...", link: "/more"}		
	];
    
});

angular.module('mywebsite')
.controller('DisqusCtrl', function ($scope) {
	'use strict'

	// Get the remote Disqus script and insert it into the DOM, 
	// but only if it not already loaded (as that will cause warnings)
  if (!window.DISQUS) {  	
    var d = document, s = d.createElement('script');
		s.src = 'https://basilvetas.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
  } else {  	
    window.DISQUS.reset({
      reload: true      
    });
  }  
    
});

angular.module('mywebsite')
.controller('TwitterCtrl', function ($scope) {
	'use strict';

	var d = document, s = d.createElement('script');
	s.setAttribute("async", "");
	s.src = '//platform.twitter.com/widgets.js';
	s.setAttribute("charset", "utf-8");
	(d.head || d.body).appendChild(s);
	
});


angular.module('mywebsite')
.controller('FooterCtrl', function ($scope) {
	'use strict';

	$scope.date = new Date();
    
});


angular.module('mywebsite')
.controller('HeaderCtrl', function ($scope) {	
	'use strict';
    
});


