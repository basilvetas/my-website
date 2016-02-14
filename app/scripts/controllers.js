/******** Templates ********/

app.controller('MainCtrl', ['$scope', function ($scope) {

}]);

app.controller('AboutCtrl', ['$scope', function ($scope) {

	$scope.about = "about";

}]);

app.controller('DonateCtrl', ['$scope', function ($scope) {

	$scope.donate = "donate";

}]);

app.controller('StudentsCtrl', ['$scope', function ($scope) {

	$scope.students = "students";

}]);

app.controller('StaffCtrl', ['$scope', function ($scope) {

	$scope.staff = "staff";

}]);

app.controller('ContactCtrl', ['$scope', function ($scope) {

	$scope.contact = "contact";

}]);


/******** Partials ********/

app.controller('NavCtrl', ['$scope', function ($scope) {

	$scope.menu = [
		{ title: "About", link: "#/about" },
		{ title: "Donate", link: "#/donate"},
		{ title: "Students", link: "#/students"},
		{ title: "Staff", link: "#/staff"},
		{ title: "Contact", link: "#/contact"}
	];
    
}]);

app.controller('FooterCtrl', ['$scope', function ($scope) {

	$scope.date = new Date();
    
}]);

app.controller('CarouselCtrl', ['$scope', function ($scope) {




	$scope.interval = 3000;
  $scope.slides = [
    { image: 'imgs/slc-day.jpg', text: "first" },
    { image: 'imgs/slc-night.jpg', text: "second" },    
  ];
    
}]);