
var gEngine = gEngine || {};


gEngine.Controls = (function() {
    
    
    const Options = {
       RenderingOptionList : {
       TRIANGLES : 'TRIANGLES', 
       LINE_LOOP : 'LINE_LOOP', 
       TRIANGLE_FAN : 'TRIANGLE_FAN'
    },
       Objects : {
           SQUARE : 'SQUARE', 
           TRIANGLE : 'TRIANGLE', 
           PYRAMID : 'PYRAMID', 
           CUBE : 'CUBE', 
           CONE : 'CONE'
       },
       
       Rotation : {
         X : 0, 
         Y : 0, 
         Z : 0
       }, 
       
       Translation : {
         X : 20, 
         Y : 60, 
         Z : 5
       }, 
       
       Scale : {
         X : 1, 
         Y : 1, 
         Z : 1
       }
    };

    
    var initialize = function(){
    const gui = new dat.GUI();
    const objectsFolder = gui.addFolder('Objects');
    objectsFolder.add(ObjectSelection, 'ObjectOption', Options.Objects).listen();
    const renderModeFolder = gui.addFolder('Rendering Options');
    renderModeFolder.add(RenderingMode, 'RenderingOption' , Options.RenderingOptionList);
    const RotationFolder = gui.addFolder('Rotation');
    RotationFolder.add(Options.Rotation, 'X', 0, Math.PI * 2).listen();
    RotationFolder.add(Options.Rotation, 'Y', 0, Math.PI * 2).listen();
    RotationFolder.add(Options.Rotation, 'Z', 0, Math.PI * 2).listen();
    const TranslationFolder = gui.addFolder('Translation');
    TranslationFolder.add(Options.Translation, 'X', -10, 60).listen();
    TranslationFolder.add(Options.Translation, 'Y', 40, 70).listen();
    TranslationFolder.add(Options.Translation, 'Z', -40, 7).listen();
    const ScaleFolder = gui.addFolder('Scale');
    ScaleFolder.add(Options.Scale, 'X', 0, 10).listen();
    ScaleFolder.add(Options.Scale, 'Y', 0, 10).listen();
    ScaleFolder.add(Options.Scale, 'Z', 0, 10).listen();

    };
    
    
    var getRenderingMode = function(){
        return RenderingMode.RenderingOption;
    };
    
    var RenderingMode = {
      RenderingOption : 'TRIANGLES'  
    };
    
    var getObjectSelection = function(){
        return ObjectSelection.ObjectOption;
    };
    
    var ObjectSelection = {
        ObjectOption : 'SQUARE'
    };
        
    var mPublic = {
        getRenderingMode : getRenderingMode,
        initialize : initialize, 
        getObjectSelection : getObjectSelection,
        Rotation : Options.Rotation, 
        Translation : Options.Translation, 
        Scale : Options.Scale
        };
        
    return mPublic;
    
}());



