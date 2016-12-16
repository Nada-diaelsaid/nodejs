(function(){
	"use strict";
	angular
		.module("ngClassifieds", [])
		.controller("classifiedsCtrl", function($scope){
			$scope.name = "Nada";
			// name here is an object of variables
			$scope.name1={
				first:"Nona",
				second:"Dia"
			};
			$scope.message = "Hey there!";

		});

})();
