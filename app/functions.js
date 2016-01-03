if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0],arr[1],arr[2]); 
    },

    speak : function(fn, obj) {

       // fn.greeting = obj.greeting;
        //fn.name = obj.name;

        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2){
            return str+', '+str2;
        };

    },

    makeClosures : function(arr, fn) {

        var array =[];
        var callParaFn = function (int){
            return function() {
                return fn(int);
            };
        };
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            array.push(callParaFn(arr[i]));
        }

        return array;
    },

    partial : function(fn, str1, str2) {

        return function(para){
            return fn(str1,str2,para);
        };
    },

    useArguments : function() {
       var len = arguments.length;
       var ret=0;
       for (var i = 0; i < len; i++) {
        ret = ret+arguments[i];
    }
    return ret;
},

callIt : function(fn) {

    var len = arguments.length;

    var para = [];

    for(var i=1; i<len; i++){
        para.push(arguments[i]);
    }

    return arguments[0].apply(this,para);

},

partialUsingArguments : function(fn) {

   var len = arguments.length;
   var para = [];
   for(var i=1; i<len; i++){
    para.push(arguments[i]);
}

return function(){
    var leni = arguments.length;
    for(var j=0; j<leni; j++){
        para.push(arguments[j]);
    }

    return fn.apply(this,para);
};


},

curryIt : function(fn) {



}
};
});
