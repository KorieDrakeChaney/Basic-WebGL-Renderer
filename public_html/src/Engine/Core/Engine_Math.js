

var gEngine = gEngine || {};


gEngine.Math = (function() { 
    
    
    
    var map = function(value, minA, maxA, minB, maxB){
        return (1 - ((value - minA) / (maxA - minA))) * minB + ((value - minA) / (maxA - minA)) * maxB;
    };
    
    
    
    var mPublic = {
        map : map
    };
    
    
    return mPublic;
}());