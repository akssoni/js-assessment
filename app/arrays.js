if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {

        var length = arr.length;

        for(var i=0; i<length; i++){

            if(arr[i]===item)
                return i;
        }

        return -1;
    },

    sum : function(arr) {

        var ret =0;
         var length = arr.length;
        for(var i=0; i<length; i++){

            ret += arr[i];
        }

        return ret;
    },

    remove : function(arr, item) {

        var ret =[];
        var length = arr.length;
                console.log(arr);
         for(var i=0; i<length; i++){

             if(arr[i]!==item)
             ret.push(arr[i]);
           
         }

        return ret;
        

    },

    removeWithoutCopy : function(arr, item) {

        var flag=1;
        while(flag){
        var location = arr.indexOf(item);
        if(location!==-1)
            arr.splice(location,1);
        else
            flag=0;
    }
        return arr;

    },

    append : function(arr, item) {

      
         arr[arr.length]=item;

         return arr;

    },

    truncate : function(arr) {

        arr.splice(arr.length-1,1);
        return arr;

    },

    prepend : function(arr, item) {

         arr.unshift(item);
         return arr;   

    },

    curtail : function(arr) {

         arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {

        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {

        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {

        var cnt=0;
        var length = arr.length;

        for(var i=0; i<length;i++){
            if(arr[i]===item)
                cnt++;
        }
        return cnt;

    },

    duplicates : function(arr) {



    },

    square : function(arr) {

        var square =[];
         var length = arr.length;

        for(var i=0; i<length;i++){
            
                square.push(arr[i]*arr[i]);
        }

        return square;
    },

    findAllOccurrences : function(arr, target) {

        var occurrences =[];
         var length = arr.length;

        for(var i=0; i<length;i++){
            if(arr[i]===target)
                occurrences.push(i);
        }

        return occurrences;
    }
  };
});
