angular.module('flightResultsModule', []).directive('resultsgrid', ['$http', function($http){
   return{
       restrict: 'E',
       scope: {
           gridConfig: '=',
           flightDetailsFilter: '=flightDetailsFilter',
           showResults: '=showResults'
       },
       templateUrl: 'components/flightResults/flightResults.html',
       link: function($scope, tElem, tAttr){
    	   $http.get('data.json').then(function(result) {
    			$scope.flightDetails = result.data;
    			console.log($scope.flightDetails);
    		}, function(err) {
    			$scope.flightDetails = undefined;
    		});
    	       	   
    	   $scope.$watch('flightDetailsFilter', function(newValue, oldValue) {
    		  console.log($scope.flightDetailsFilter);
 	          if (newValue !== oldValue) {
 	            console.log("I got the new value! ", newValue);
 	            $scope.flightDetailsFilter = newValue;
 	          }
 	       }, true);    
       }
   }
}]);