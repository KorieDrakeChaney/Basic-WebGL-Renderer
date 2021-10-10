#version 300 es
    

uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;
uniform mat4 uNormalMatrix; 
uniform vec3 uLightDirection;
uniform vec3 uLightDiffuse;
uniform vec3 uMaterialDiffuse;

in vec3 aVertexPosition;
in vec3 aVertexNormal;

out vec4 vVertexColor;



    out vec3 aColor;
    void main(void){
        vec3 normal = normalize(vec3(uNormalMatrix * vec4(aVertexNormal, 1.0)));

        vec3 lightDirection = normalize(uLightDirection);

        float LambertianTerm = dot(normal, -lightDirection);

        vec3 intensityDiffuse = uMaterialDiffuse * uLightDiffuse * LambertianTerm;  
        vVertexColor = vec4(intensityDiffuse, 1.0);
        // Setting the vertex position
        gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
    }
