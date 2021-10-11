#version 300 es
precision mediump float; 

uniform vec4 uPixelColor; // to transform the vertex position
uniform vec3 objectColor;
uniform vec3 lightColor;


in vec3 ourColor;
out vec4 FragColor;
void main(void){

    FragColor = vec4(lightColor * objectColor, 1.0);
}
