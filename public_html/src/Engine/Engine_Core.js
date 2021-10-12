
var gEngine = gEngine || {};

gEngine.Core = (function() {

    var _mGL = null;

    var init = function(htmlCanvasID) {
        var canvas = document.getElementById(htmlCanvasID);

        _mGL = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl2");

        if(_mGL === null) {
            document.write("<br><b>WebGL is not supported!</b>");
            return;
        }

    };

    var clearScreen = function() {
        _mGL.clearColor(0, 0, 0, 1);
        _mGL.clear(_mGL.COLOR_BUFFER_BIT || _mGL.DEPTH_BUFFER_BIT);
    };

    var getGL = function() {return _mGL;};

    var mPublic = {
        init : init, 
        clearScreen : clearScreen,
        getGL : getGL
    };

    return mPublic;
}());
