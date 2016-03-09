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

	// adds background to nav bar on scroll
	$(window).scroll(function() {   
	  if($(window).scrollTop() >= 550)
	    $(".navbar-fixed-top").css("background", "rgba(40, 40, 40, .7)");

	  if($(window).scrollTop() < 550)
			$(".navbar-fixed-top").css("background", "none");
	});	

	// make mobile/tablet navbar close on click
	$('.nav a').click(function(){
    $('#collapse-1').collapse('hide');
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

app.controller('ProjectCtrl', ['$scope', function ($scope) {

	$scope.projects = [
		{ name: "Surf Into Yoga", id: "surf-into-yoga" , image: 'imgs/surf-into-yoga.jpg', link: 'http://surfintoyoga.com/' },
		{ name: "Surf Into Yoga", id: "a1", image: 'imgs/surf-into-yoga.jpg', link: 'http://surfintoyoga.com/' },
		{ name: "Surf Into Yoga", id: "b2", image: 'imgs/surf-into-yoga.jpg', link: 'http://surfintoyoga.com/' },
		{ name: "Surf Into Yoga", id: "c3", image: 'imgs/surf-into-yoga.jpg', link: 'http://surfintoyoga.com/' },
		{ name: "Surf Into Yoga", id: "d4", image: 'imgs/surf-into-yoga.jpg', link: 'http://surfintoyoga.com/' }
	];

	$scope.noGray = function(proj) {
		console.log("got in")	
		$("#" + proj).removeClass("gray");		    
  };

  $scope.gray = function(proj) {	
  	console.log("got out")	
		$("#" + proj).addClass("gray");		    
  };
    
}]);

