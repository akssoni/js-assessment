if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var matches = str.match(/\d+/g);
        if (matches != null)
            return true;
        else
            return false;
    },

    containsRepeatingLetter : function(str) {

        var matches = str.match(/([a-zA-Z])\1/);
        if (matches != null)
            return true;
        else
            return false;

    },

    endsWithVowel : function(str) {

      

     var matches = str.match(/[aeiou]$/i);
     if (matches != null)
        return true;
    else
        return false;
},

captureThreeNumbers : function(str) {
    var matches = (/\d{3}/).exec(str);
    if (matches != null)
        return matches[0];
    else
        return false;

},

matchesPattern : function(str) {

    var matches = str.match(/^\d{3}-\d{3}-\d{4}$/);
    if (matches != null)
        return true;
    else
        return false;

},
isUSD : function(str) {
    var matches = str.match(/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/);
    if (matches != null)
        return true;
    else
        return false;

}
};
});
