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
    "Voy hechando",
		"Acere!",
		"Tu eres mongo, o que?",
		"Estas en llama!",
		"Guanikiki"
	];
	var translations = [
    "Translation: What's up?",
    "Translation: Eres tremenda",
    "Translation: I'm leaving",
    "Translation: I'm leaving",
    "Translation: Brother(Friend)!",
    "Translation: Are you stupid, or what?",
    "Translation: You're in trouble!",
    "Translation: Money"

  ];

	$scope.prediction = "Toca el Cubano";
	$scope.translation = "";
	$scope.answered = true;

	$scope.ask = function() {

		$scope.answered = false;
    $scope.translation = "";
		$scope.prediction = "El Cubano dice...";
		$timeout(function () {
      var number = Math.floor(Math.random() * predictionList.length)
      $scope.prediction = predictionList[number];
      $scope.translation = translations[number];
			$scope.answered = true;
		}, 2000);

	};
});
