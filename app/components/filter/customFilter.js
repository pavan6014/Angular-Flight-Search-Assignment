angular.module('mainApp').filter('mySearchFilter', function(){

return function(arrayToFilter,filterObject){
	var arrayToReturn = [];
    angular.forEach(arrayToFilter,function(arrayvalue,arrayKey){
    	var isMatched = true; 
    	angular.forEach(filterObject,function(objectValue,objectKey){        	
			if(objectKey === 'sliderValue'){
				var rate = arrayvalue.flightRate.split(' ')[0];
				rateInt = parseInt(rate);
				if(typeof rateInt === 'number'){					
					if(rateInt > objectValue){
						isMatched=false;
					} 
				}
			}else if(arrayvalue[objectKey] != objectValue){
            	isMatched=false;	
            }
        });
        if(isMatched){
        	arrayToReturn.push(arrayvalue);
        }
    });
   return arrayToReturn; 
}

}); 