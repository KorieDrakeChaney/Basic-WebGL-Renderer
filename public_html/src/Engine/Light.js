

function Light() { 
    this.mColor = vec3(1.0, 1.0, 1.0);
    this.mAmbientStrength = 1.0;
    
};


Light.prototype.changeColor = function(newColor) {this.mColor = newColor;}; 
Light.prototype.changeAmbientStrength = function(newAS) {this.mAmbientStrength = newAS;}; 