if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	return {
		alterContext : function(fn, obj) {

			return fn.call(obj);

		},

		alterObjects : function(constructor, greeting) {
			constructor.prototype.greeting = greeting;
		},

		iterate : function(obj) {
			var ret = [];
			for(var propt in obj){
				if(obj.hasOwnProperty(propt))
				ret.push(propt + ': ' + obj[propt]);
			}
			return ret;
		}
	};
});
