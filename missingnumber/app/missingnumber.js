'use strict'
 
function findMissing(arr1,arr2) {
	var checkIdenticalArray = function(arr1,arr2) {
		if(arr1.length !== arr2.length)
	        return false;
	    for(var i = arr1.length; i--;) {
	        if(arr1[i] !== arr2[i])
	            return false;
	    }

	    return true;
	}
	if ((arr1.length === 0) && (arr2.length === 0))  {
		return 0;
	}
	else if (checkIdenticalArray(arr1,arr2)) {
		return 0;
	}
	else {
		for (var i=0;i<arr2.length;i++) {
			if(arr1.indexOf(arr2[i]) < 0){
            	return arr2[i];
        	}
		}
		
	}
}

module.exports = findMissing;