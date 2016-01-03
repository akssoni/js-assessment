if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	return {

		listFiles: function(data, dirName) {

			var dir = dirName;
			var isDir=0;
			if(dirName){
				isDir=1;
			}
			var dirs = [];
			var ret = [];
			function scan(obj)
			{

				var k;
				dirs.push(obj.dir);
				if (obj instanceof Object) {
					for (k in obj){
						if (obj.hasOwnProperty(k)){

							if(k==='files'){


								var ob = obj[k];
								for (var i = 0, len = ob.length; i < len; i++) {
									if(typeof ob[i] === 'string' ){
										if(isDir){
											if(dirs.indexOf(dir) > -1 )
												ret.push(ob[i]);
										}
										else{
											ret.push(ob[i]);
										}
									}
								}

							}

							scan( obj[k] );  
						}                
					}
				}
				dirs.pop();
			}

			scan(data);
			return ret;

		},

		permute: function(arr) {

		}
	};
});
