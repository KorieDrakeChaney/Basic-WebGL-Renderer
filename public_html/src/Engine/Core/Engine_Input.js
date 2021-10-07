

var gEngine = gEngine || {};


gEngine.Input = (function() {
    
    
    
    var kKeys = {
    // arrows
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,

    // space bar
    Space: 32,

    // numbers
    Zero: 48,
    One: 49,
    Two: 50,
    Three: 51,
    Four: 52,
    Five : 53,
    Six : 54,
    Seven : 55,
    Eight : 56,
    Nine : 57,

    // Alphabets
    A : 65,
    B : 66, 
    C : 67, 
    D : 68,
    E : 69,
    F : 70,
    G : 71,
    H : 72,
    I : 73,
    J : 74,
    K : 75,
    L : 76,
    M : 77,
    N : 78, 
    O : 79, 
    P : 80, 
    Q : 81,
    R : 82,
    S : 83,
    T : 84,
    U : 85, 
    V : 86,
    W : 87,
    X : 88, 
    Y : 89, 
    Z : 90,

    LastKeyCode : 222
    };


    var kLastKeyCode = kKeys.LastKeyCode;
    
    // Previous key state
    var mKeyPreviousState = [];
    
    
    // The pressed keys
    var mIsKeyPressed = [];
    
    // Click events: once an event is set, it will remain there until polled
    var mIsKeyClicked = [];
    
    var _onKeyDown = function(event) { 
        mIsKeyPressed[event.keyCode] = true;
    };
    
    var _onKeyUp = function(event){
        mIsKeyPressed[event.keyCode] = false;
    };
    
    
    var initialize = function() {
        for(let i = 0; i < kLastKeyCode; i++){
          mIsKeyPressed[i] = false;
          mKeyPreviousState[i] = false;
          mIsKeyClicked[i] = false;
        };
        
        window.addEventListener('keyup', _onKeyUp);
        window.addEventListener('keydown', _onKeyDown);
    };
    
    var update = function() {
      for(let i = 0; i < kLastKeyCode; i++){
            mIsKeyClicked[i] = (!mKeyPreviousState[i]) && mIsKeyPressed[i];
            mKeyPreviousState[i] = mIsKeyPressed[i];
      };
    };
    
    var isKeyPressed = function(keyCode){
        return mIsKeyPressed[keyCode];
    };
    
    var isKeyClicked = function(keyCode){
        return (mIsKeyClicked[keyCode]);
    };
    
    
    var mPublic = {
        initialize : initialize,
        update : update,
        isKeyPressed : isKeyPressed, 
        isKeyClicked : isKeyClicked, 
        keys : kKeys,
        lastKeyCode : kLastKeyCode
    };

    return mPublic;
}());

