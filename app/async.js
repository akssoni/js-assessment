if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
   
      var deferred = $.Deferred();
    
        deferred.resolve(value);
     
      return deferred.promise();
    
    },

    manipulateRemoteData : function(url) {
    
      var deferred = $.Deferred();
      
      var post = $.ajax(url);

      post.done(function(data){
      	var rows = [];
      	for (var i = 0; i < data.people.length; i++) {
      		rows.push(data.people[i].name);
      	}
      	deferred.resolve(rows.sort());
      });

      post.fail(function(data){return 0;});

      return deferred.promise();

    }
  };
});