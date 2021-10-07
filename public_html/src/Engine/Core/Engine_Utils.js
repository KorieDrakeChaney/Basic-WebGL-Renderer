

var gEngine = gEngine || {};

gEngine.Utils = (function() {
    
    var autoResizeCanvas = function(canvas){
       
    const expandFullScreen = () => {
        canvas.width = window.innerWidth - 40;
        canvas.height = window.innerHeight -  40;
      };
      expandFullScreen();
      window.addEventListener('resize', expandFullScreen);

    };
    
    
    
    
    var mPublic = {
        autoResizeCanvas : autoResizeCanvas
    };
    
    return mPublic;
    
}());