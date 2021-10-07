#version 300 es

precision mediump float;  // sets the precision for floating point computation
uniform vec4 uPixelColor; // to transform the vertex position

in vec3 aColor;


void main(void){
    gl_FragColor = vec4(aColor.x, 0.1, aColor.y, 1.0);
}
