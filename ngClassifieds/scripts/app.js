angular
	.module("ngClassifieds",["ngMaterial"])
	.config(function($mdThemingProvider){
		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

	})
	//the directive takes helloworld all lower case as it was in the tag of the index.html file <hello-world>
	.directive("helloWorld",function(){
		// it returns object
		return{
			template:"<h1> {{message}}</h1>"

		}

	});

