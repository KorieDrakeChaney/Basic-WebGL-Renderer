#version 300 es
precision mediump float; 

uniform vec4 uPixelColor; // to transform the vertex position

in vec3 ourColor;
out vec4 FragColor;
void main(void){
    FragColor = vec4(abs(ourColor), 1.0);
}
