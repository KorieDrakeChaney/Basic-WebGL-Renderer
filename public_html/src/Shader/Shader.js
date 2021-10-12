

function Shader(vertexShader, fragmentShader) {
    this.mProgram = null;

    var gl = gEngine.Core.getGL();
    
    this.mVertexShader = this._loadAndCompileShader(vertexShader, gl.VERTEX_SHADER);
    this.mFragmentShader = this._loadAndCompileShader(fragmentShader, gl.FRAGMENT_SHADER);

    this.mProgram = gl.createProgram();

    gl.attachShader(this.mProgram, this.mVertexShader);
    gl.attachShader(this.mProgram, this.mFragmentShader);
    gl.linkProgram(this.mProgram);

    if (!gl.getProgramParameter(this.mProgram, gl.LINK_STATUS)) {
        alert("Error linking shader");
        return null;
    };

    
};


Shader.prototype.activateShader = function() {
    var gl = gEngine.Core.getGL();
    gl.useProgram(this.mProgram);
    gl.enableVertexAttribArray(0);
};

Shader.prototype._loadAndCompileShader = function(filePath, shaderType){

    var shaderSource, compiledShader;
    var gl = gEngine.Core.getGL();

    xmlReq = new XMLHttpRequest();
    xmlReq.open('GET', filePath, false);
    try {
        xmlReq.send();
    } catch (error) {
        alert("Failed to load shader: " + filePath);
        return null;
    }

    shaderSource = xmlReq.responseText;
    
    if (shaderSource === null) {
        alert("WARNING: Loading of:" + filePath + " Failed!");
        return null;
    }
    compiledShader = gl.createShader(shaderType);
    gl.shaderSource(compiledShader, shaderSource);
    gl.compileShader(compiledShader);


    if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
        alert("A shader compiling error occurred: " + `${filePath}` + " " + gl.getShaderInfoLog(compiledShader));
    }

    return compiledShader;
};

Shader.prototype.getProgram = function() { return this.mProgram; };