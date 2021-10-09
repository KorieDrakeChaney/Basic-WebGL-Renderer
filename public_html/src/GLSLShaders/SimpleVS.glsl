#version 300 es    


layout (location = 0) in vec3 aVertexPosition;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

out vec3 ourColor;

void main(){
    gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
    ourColor = aVertexPosition;
}
