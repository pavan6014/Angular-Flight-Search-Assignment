angular.module('mainApp').controller('flightSearchController', ['$rootScope', '$scope', '$filter', '$http', function($rootScope, $scope, $filter, $http){
	
	$scope.formData = {};
	$scope.formData.tripType = 'oneway';
	$scope.flightDetails = '';
	$scope.showResults = false;
		
	$scope.selectTrip = function(tripType) {
		$scope.showResults = false;
		$scope.formData.tripType = tripType;
		if(tripType === 'oneway'){
			delete $scope.formData.returnDate;
		}
	};
	
	$scope.search = function(){
		$scope.showResults = true;
	};
	
	$scope.sliderCallback = function(sliderValue){
			
	}
}]);