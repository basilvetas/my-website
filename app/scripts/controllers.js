/******** Templates ********/

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

app.controller('AboutCtrl', ['$scope', function ($scope) {

}]);

app.controller('PortfolioCtrl', ['$scope', function ($scope) {
	

}]);

app.controller('BlogCtrl', ['$scope', function ($scope) {


}]);

app.controller('MediaCtrl', ['$scope', function ($scope) {


}]);

app.controller('ContactCtrl', ['$scope', function ($scope) {
	
	$scope.portrait = "imgs/basil-cropped.jpg";

}]);


/******** Partials ********/

app.controller('NavCtrl', ['$scope', function ($scope) {

	$(window).scroll(function() {   
	  if($(window).scrollTop() >= 550)
	    $(".navbar-fixed-top").css("background", "rgba(40, 40, 40, .7)");

	  if($(window).scrollTop() < 550)
			$(".navbar-fixed-top").css("background", "none");
	});	

	$scope.menu = [
		{ title: "Home", link: "#/" },
		{ title: "About", link: "#/about" },
		{ title: "Portfolio", link: "#/portfolio"},
		{ title: "Blog", link: "#/blog"},
		{ title: "Media", link: "#/media"},
		{ title: "Contact", link: "#/contact"}
	];
    
}]);

app.controller('FooterCtrl', ['$scope', function ($scope) {

	$scope.date = new Date();
    
}]);

app.controller('HeaderCtrl', ['$scope', function ($scope) {

	// $scope.banner = 'imgs/nyc.jpg';
    
}]);

app.controller('CarouselCtrl', ['$scope', function ($scope) {

	$scope.interval = 3000;
  $scope.slides = [
    { image: 'imgs/slc-day.jpg', text: "first" },
    { image: 'imgs/slc-night.jpg', text: "second" },    
  ];
    
}]);

app.controller('SocialCtrl', ['$scope', function ($scope) {

	$scope.social = [
		{ name: "github", link: "https://github.com/basilvetas" },
		{ name: "facebook", link: "https://www.facebook.com/basilvetas" },
		{ name: "twitter", link: "https://twitter.com/basilvetas" },
		{ name: "linkedin", link: "https://www.linkedin.com/in/basilvetas/" },
		{ name: "instagram", link: "https://www.instagram.com/basilvetas/" },
		{ name: "google", link: "https://plus.google.com/+BasilVetas" }
	];
		
	$scope.color = function(i) {	
		$('#' + i).addClass("btn-" + i);		    
  };

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
				$scope.addSuccessAlert("Message Sent Successfully!")
			else if(response.data.result == "Failure 1")
				$scope.addDangerAlert("Message failed to send. Please try again.")
			else
				$scope.addDangerAlert("Message failed to send. Please enter a valid email address and try again.")			
		});
	};

	$scope.addSuccessAlert = function(message) {
    $scope.alerts.push({ type: 'success', msg: message});
  };

  $scope.addDangerAlert = function(message) {
    $scope.alerts.push({ type: 'danger', msg: message});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

}]);





