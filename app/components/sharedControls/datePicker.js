angular.module('datePickerModule', []).directive('datePicker', [function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            date: '=',
            placeHolder: '@',
            isRequired: '=',
            name: '@'
        },
        template: '<input ng-model="date" class="form-control" placeholder="{{placeHolder}}" type="text" ng-required="{{isRequired}}" name="{{name}}"/>',
        link: function($scope, iElem, iAttr){

            $(iElem).datepicker({
                maxDate: "+3m +2w",
                minDate: new Date(),
                onSelect: function(date) {
                    $scope.$apply(function(){
                        $scope.date = date;
                    });
                }
            });
        }
    }
}]);