pyDelhiSponsorsApp.controller("sponsorsController", function($scope, $http) {
	$http.get('./sponsors.json').success(function(data) {
		$scope.sponsors = data;
	}).error(function() {
		alert("Could not load sponsors right now! Please try again later.");
	});
});