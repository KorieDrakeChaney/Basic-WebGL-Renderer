"use strict";

var gEngine = gEngine || {};
    // initialize the variable while ensuring it is not redefined
    
    
gEngine.Core = (function() {

   // instance variable: the graphical context for drawing
   var mGL = null;
   
   // Accessor of the webgl context
   var getGL = function() { return mGL; };

    var _initializeWebGL = function(htmlCanvasID) {
        var canvas = document.getElementById(htmlCanvasID);
        mGL = canvas.getContext("webgl2") ||
              canvas.getContext("experimental-webgl2");

        if (mGL === null) {
            document.write("<br><b>WebGL is not supported!</b>");
        }
    };
   var getCanvas = function(htmlCanvasID){
        var canvas = document.getElementById(htmlCanvasID);
        return canvas;
   };
   // initialize the WebGL, the vertex buffer and compile the shader
   var initializeEngineCore = function(htmlCanvasID) {
    
        _initializeWebGL(htmlCanvasID);
       // now initialize the VertexBuffer 
        gEngine.Controls.initialize();
        gEngine.Input.initialize();
   };
   
   var clearCanvas = function(color = [1, 1, 1, 1]) {
     mGL.clearColor(color[0], color[1], color[2], color[3]);  
     mGL.clear(mGL.COLOR_BUFFER_BIT || mGL.DEPTH_BUFFER_BIT);
   };
   
   
      
   // Contains the functions and variabls that will be accessible
   var mPublic = {
       getGL: getGL,
       initializeEngineCore : initializeEngineCore,
       clearCanvas : clearCanvas, 
       getCanvas : getCanvas
   };
   
   return mPublic;
}());