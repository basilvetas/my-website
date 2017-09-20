/******** Partials ********/
angular.module('mywebsite').controller('NavCtrl', function ($scope) {

	// make mobile/tablet navbar close on click
	// $('.nav a').click(function(){
 //    $('#collapse-1').collapse('hide');
	// });

	$scope.menu = [		
		{ title: "Home", link: "/" },				
		{ title: "About", link: "/about" },	
		{ title: "Resources", link: "/resources"}		
	];
    
});


angular.module('mywebsite').controller('FooterCtrl', function ($scope) {

	$scope.date = new Date();
    
});


angular.module('mywebsite').controller('HeaderCtrl', function ($scope) {	
    
});


