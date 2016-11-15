var app = angular.module('8ball', ['ionic']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});


app.controller('PredictionController', function ($scope, $timeout) {

	var predictionList = [
		"Que bolaaa",
		"Eres tremenda",
		"Voy bajando",
		"Acere!",
		"Tu eres mongo, o que?",
		"Estas en llama!",
		"Guanikiki"
	];

	$scope.prediction = "Toca el Cubano";
	$scope.answered = true;

	$scope.ask = function() {
		$scope.answered = false;
		$scope.prediction = "El Cubano dice...";
		$timeout(function () {
			$scope.prediction = predictionList[Math.floor(Math.random() * predictionList.length)];
			$scope.answered = true;
		}, 2000);

	};
});
