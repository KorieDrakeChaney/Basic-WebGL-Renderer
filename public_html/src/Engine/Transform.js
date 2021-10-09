
/* global vec2, mat4, vec3, gEngine */

function Transform() {
    this.mPosition = vec3.fromValues(0, 0, -5);
    this.mScale = vec3.fromValues(1, 1, 1);
    this.mRotationInRad = vec3.fromValues(0, 0, 0);
};



Transform.prototype.setPosition = function(xPos, yPos, zPos) {
    this.mPosition[0] = xPos;
    this.mPosition[1] = yPos;
    this.mPosition[2] = zPos;

};
Transform.prototype.getPosition = function() {return this.mPosition;};

Transform.prototype.setX = function(x) {this.mPosition[0] = x;};
Transform.prototype.getX = function() {return this.mPosition[0];
    };

Transform.prototype.setY = function(y) {this.mPosition[1] = y;};
Transform.prototype.getY = function() {return this.mPosition[1];
    };


Transform.prototype.setSize = function(width, height, depth) {
    this.mScale[0] = width;
    this.mScale[1] = height;
    this.mScale[2] = depth;
};
Transform.prototype.getSize = function() {return this.mScale;};

Transform.prototype.setWidth = function(width) {this.mScale[0] = width;};
Transform.prototype.getWidth = function() {return this.mScale[0];};

Transform.prototype.setHeight = function(height) {this.mScale[1] = height;};
Transform.prototype.getHeight = function() {return this.mScale[1];};

Transform.prototype.setDepth = function(depth) {this.mScale[2] = depth;};
Transform.prototype.getDepth = function() { return this.mScale[2]; };


Transform.prototype.setRotationInRad = function(rotation) {
    this.mRotationInRad = rotation; 
    while(this.mRotationInRad > (2*Math.PI)){
        this.mRotationInRad -= (2*Math.PI);
    };
};
Transform.prototype.getRotationInRad = function() {return this.mRotationInRad;};

Transform.prototype.setRotationInDegree = function(rotation) {
    this.setRotationInRad(rotation * Math.PI/180.0);
};

Transform.prototype.getDegreeToRad = function(rotation) {
    
    return (rotation * Math.PI/180.0);
};

Transform.prototype.incPosBy = function(x = 0, y = 0){
  this.mPosition[0] += x;  
  this.mPosition[1] += y;
};

Transform.prototype.incRotationByDegree = function(rotation){
    this.mRotationInRad += this.getDegreeToRad(rotation);
};

Transform.prototype.incSizeBy = function(width = 0, height = 0){
    this.mScale[0] += width;
    this.mScale[1] += height;
};


Transform.prototype.setAll = function(position = [0, 0, 0], size = [1, 1, 1], rotation = 0){
   this.mPosition[0] = position[0];
   this.mPosition[1] = position[1];
   this.mPosition[2] = position[2];
   
   this.mScale[0] = size[0];
   this.mScale[1] = size[1];
   this.mScale[2] = size[2];
   
   this.mRotationInRad = rotation;
};


Transform.prototype.getModel = function() {
    var matrix = mat4.create();
    
    
    mat4.translate(matrix, matrix, vec3.fromValues(this.mPosition[0], this.mPosition[1], this.mPosition[2]));

    
    mat4.rotate(matrix, matrix, this.mRotationInRad[0], vec3.fromValues(1, 0, 0));
    mat4.rotate(matrix, matrix, this.mRotationInRad[1], vec3.fromValues(0, 1, 0));
    mat4.rotate(matrix, matrix, this.mRotationInRad[2], vec3.fromValues(0, 0, 1));
    
    mat4.scale(matrix, matrix, vec3.fromValues( this.mScale[0], this.mScale[1], this.mScale[2]));
    
    return matrix;
};

Transform.prototype.changeTranslation = function (x, y, z){
    
    var matrix = mat4.create();
    
    mat4.translate(matrix, matrix, vec3.fromValues(x, y, z));

    
    return matrix;
};



Transform.prototype.changeRotation = function( x, y, z) { 
    
    var matrix = mat4.create();
    
    
    mat4.rotate(matrix, matrix, x, vec3.fromValues(1, 0, 0));
    mat4.rotate(matrix, matrix, y, vec3.fromValues(0, 1, 0));
    mat4.rotate(matrix, matrix, z, vec3.fromValues(0, 0, 1));

    
    return matrix;
};

Transform.prototype.changeScale = function( x, y, z) { 
    
    var matrix = mat4.create();
    
    mat4.scale(matrix, matrix, vec3.fromValue( x, y, z));
    
    return matrix;
    
};


Transform.prototype.changeAll = function (tX, tY, tZ, rX, rY, rZ, sX, sY, sZ){
    var matrix = mat4.create();
    
    mat4.translate(matrix, matrix, vec3.fromValues(tX, tY, tZ));

    
    mat4.rotate(matrix, matrix, rX, vec3.fromValues(1, 0, 0));
    mat4.rotate(matrix, matrix, rY, vec3.fromValues(0, 1, 0));
    mat4.rotate(matrix, matrix, rZ, vec3.fromValues(0, 0, 1));
    
    mat4.scale(matrix, matrix, vec3.fromValues( sX, sY, sZ));

    
    
    return mat4.multiply(matrix, this.getModel(), matrix);
};