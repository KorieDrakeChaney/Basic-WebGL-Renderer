

/* global gEngine */

function SimpleShader(vertexShaderID, fragmentShaderID){
    // instance variables (Convention : all instance variables)
    this.mCompiledShader = null;
        // reference to the compiled shader in webgl context
    this.mShaderVertexPositioAttribute = null;
    
    
    this.pixelColor = null;
    
    this.mPixelColor = null;
    this.mVPMatrix = [1, 0, 0, 0, 
                   0, 1, 0, 0, 
                   0, 0, 1, 0, 
                   0, 0, 0, 1];
    this.mModel = null;
    
    this.mViewProjTransform = null;

    
    var gl = gEngine.Core.getGL();
    
    // start of constructor code
    
    // Step A: load and compile vertex and fragmnet shaders 
    var vertexShader = this._loadAndCompileShader(vertexShaderID, gl.VERTEX_SHADER);
    var fragmentShader = this._loadAndCompileShader(fragmentShaderID, gl.FRAGMENT_SHADER);
    
    // Step B: Create and link the shaders into a program.
    this.mCompiledShader = gl.createProgram();
    gl.attachShader(this.mCompiledShader, vertexShader);
    gl.attachShader(this.mCompiledShader, fragmentShader);
    gl.linkProgram(this.mCompiledShader);
    
    // Step C: check for error;
    
    
        
    if(!gl.getProgramParameter(this.mCompiledShader, gl.LINK_STATUS)){
        alert("Error linking shader");
        return null;
    };
    
    return this.mCompiledShader;

    

    


        

};




SimpleShader.prototype._loadAndCompileShader = function(filePath, shaderType){
    var shaderSource, compiledShader;
    
    var gl = gEngine.Core.getGL();
    
    // Step A: Get the shader source from a XMLHttpRequest
    xmlReq = new XMLHttpRequest();
    xmlReq.open('GET', filePath, false);
    try {
        xmlReq.send();
       
    }catch (error){
        alert("Failed to load shader: " + filePath);
        return null;
    }
    
    shaderSource = xmlReq.responseText;
    
    if(shaderSource === null){
        alert("WARNING: Loading of: " + filePath + " Failed!");
        return null;
    }
    
    // Step B: Create the shader based on teh shader type vertex or fragment
    compiledShader = gl.createShader(shaderType);
    
    // Step C: Compile the created shader
    gl.shaderSource(compiledShader, shaderSource);
    gl.compileShader(compiledShader);
    
    // Step D: check for erros and return results (null if error)
    // The log info is how shader compilation erros are typically displayed 
    // This is useful for debugging the shaders. 
    if(!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)){
        alert("A shader compiling error occured: " + gl.getShaderInfoLog(compiledShader));
    }
    return compiledShader;
};
