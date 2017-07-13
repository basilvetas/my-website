/******** Templates ********/

app.controller('HomeCtrl', ['$scope', function ($scope) {

	var $el = $('#my-infinite-container');
	var listView = new infinity.ListView($el);
	console.log("listView");
	console.log(listView);

}]);

app.controller('ArchiveCtrl', ['$scope', function ($scope) {

}]);

app.controller('AboutCtrl', ['$scope', function ($scope) {

}]);

app.controller('BlogCtrl', ['$scope', function ($scope) {


}]);

app.controller('ContactCtrl', ['$scope', function ($scope) {
	

}]);

/******** Partials ********/

app.controller('NavCtrl', ['$scope', function ($scope) {

	// make mobile/tablet navbar close on click
	$('.nav a').click(function(){
    $('#collapse-1').collapse('hide');
	});

	$scope.menu = [		
		{ title: "Home", link: "#/" },		
		{ title: "Archive", link: "#/archive" },		
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

app.controller('ContactFormCtrl', ['$scope', '$http', '$animate', function ($scope, $http, $animate) {

	$scope.firstName = "";
	$scope.lastName = "";
	$scope.email = "";
	$scope.subject = "";
	$scope.message = "";

	$scope.alerts = [];

	$scope.sendMail = function()
	{	
		var msg = ({
			name : $scope.firstName  + " " + $scope.lastName,
			email : $scope.email,
			subject : $scope.subject,
			text : $scope.message
		});		

		// need to do stuff with callback
		$http.post("/contact-form", msg).then(function(response){			
			console.log(response);
			console.log(response.data.result);
			if(response.data.result == "Success")
				$scope.addSuccessAlert("Message sent successfully!")
			else if(response.data.result == "Failure 1")
				$scope.addDangerAlert("Oops. Something may be wrong. Please try again later.")
			else
				$scope.addDangerAlert("Message failed to send. Please enter a valid email address and try again.")			
		});
	};

	// add success alert
	$scope.addSuccessAlert = function(message) {
    $scope.alerts.push({ type: 'success', msg: message});
  };

  // add danger alert
  $scope.addDangerAlert = function(message) {
    $scope.alerts.push({ type: 'danger', msg: message});
  };

  // remove alert when X clicked
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

}]);

