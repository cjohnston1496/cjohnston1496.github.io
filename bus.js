var app = angular.module('busApp', []);

app.controller("BusCtrl", function($scope, $http) {
	console.log("start");
	$http.jsonp("http://mbus.doublemap.com/map/v2/buses")
		.then(function(response) {
			console.log(response);
		});
});