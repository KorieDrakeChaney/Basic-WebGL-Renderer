

/* global mat4, gEngine */

var Camera = function(wcCenter = vec2.valueOf(20, 60), wcWidth = vec2.valueOf(10), viewportArray){
  this.mViewMatrix = mat4.create();
  this.mProjMatrix = mat4.create();
  this.mVPMatrix = mat4.create();
  
  this.mWCCenter = wcCenter;
  this.mWCWidth = wcWidth;
  this.mViewport = viewportArray;
  this.mNearPlane = 0;
  this.mFarPlane = 1000;
  
  this.mBgColor = [0.8, 0.8, 0.8, 1];
  
};


Camera.prototype.setupViewProjection = function() {
  var gl = gEngine.Core.getGL();
  
    gl.viewport(
          this.mViewport[0],
          this.mViewport[1],
          this.mViewport[2],
          this.mViewport[3]
      );
    
    gl.scissor(
        this.mViewport[0],
        this.mViewport[1],
        this.mViewport[2],
        this.mViewport[3]
    );
    
    
    gl.enable(gl.SCISSOR_TEST);
    gEngine.Core.clearCanvas(this.mBgColor);
    gl.disable(gl.SCISSOR_TEST);
    
   
};

Camera.prototype.getVPMatrix = function() {
    
    mat4.lookAt(this.mViewMatrix, 
        [this.mWCCenter[0], this.mWCCenter[1], 10], 
        [this.mWCCenter[0], this.mWCCenter[1], 0], 
        [0, 1, 0]);

        
    var halfWCWidth = 0.5 * this.mWCWidth;
    var halfWCHeight = halfWCWidth * this.mViewport[3] / this.mViewport[2];


    mat4.perspective(this.mProjMatrix, 
        120, 
        (window.innerWidth) / (window.innerHeight), 
        -halfWCHeight, 
        halfWCHeight, 
        this.mNearPlane, 
        this.mFarPlane);
        
    
    mat4.multiply(this.mVPMatrix, this.mProjMatrix, this.mViewMatrix);
    
    return this.mVPMatrix;
};


Camera.prototype.getViewMatrix = function() { return this.mViewMatrix; };
Camera.prototype.getProjMatrix = function() { return this.mProjMatrix; };

// Setter/getter of WC and viewport
Camera.prototype.setWCCenter = function(xPos, yPos) {
    this.mWCCenter[0] = xPos;
    this.mWCCenter[1] = yPos;
};
Camera.prototype.getWCCenter = function() { return this.mWCCenter; };
Camera.prototype.setWCWidth = function(width) { this.mWCWidth = width; };

Camera.prototype.setViewport = function(viewportArray) {     this.mViewport = viewportArray; };
Camera.prototype.getViewport = function() { return this.mViewport; };

Camera.prototype.setBackgroundColor = function(newColor) {     this.mBgColor = newColor; };
Camera.prototype.getBackgroundColor = function() { return this.mBgColor; };


Camera.prototype.changeCameraViewport = function(viewportArray) { 
    this.mViewport = viewportArray;
    this.setupViewProjection();
};

