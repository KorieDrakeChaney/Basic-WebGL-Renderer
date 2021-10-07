    attribute vec3 aSquareVertexPosition;

    uniform mat4 uModelTransform;
    uniform mat4 uViewProjTransform;

    varying vec3 aColor;
    void main(void){
        gl_Position = uViewProjTransform * uModelTransform * vec4(aSquareVertexPosition, 1.0);
        aColor = aSquareVertexPosition;
    }
