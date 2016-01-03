if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
	return {
		count : function (start, end) {

			var timeCancel;                 

			function myLoop () {    
				console.log(start++); 
				if (start <= end) { 
					timeCancel = setTimeout(function () { myLoop();}, 100);
				}
			}

			myLoop();   
			
			return {
				cancel : function () {
					clearTimeout(timeCancel);
				}
			};
			
		}
	};
});