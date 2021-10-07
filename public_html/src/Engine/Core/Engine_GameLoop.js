
"use strict"; 

var gEngine = gEngine || {};




gEngine.GameLoop = (function() {

    var kFPS = 60;
    var kMPF = 10;


    var mPreviousTime;
    var mLagTime;
    var mCurrentTime;
    var mElapsedTime;


    // The current loop state (running or should sotp)

    var mIsLoopRunning = false;


     // reference to game logic
    var mMyGame = null;

    var _runLoop = function() {
        if(mIsLoopRunning){
            
            
            // Step A: set up for the next call to _runLoop and update!
            requestAnimationFrame( function() {_runLoop.call(mMyGame);});
            
            
            // Step B: compute elapsed time since last RunLoop was executed 
            mCurrentTime = Date.now();
            mElapsedTime = mCurrentTime - mPreviousTime;
            mPreviousTime = mCurrentTime;
            mLagTime += mElapsedTime;
            
            
            // Step C: update the game the appropriate number of times.
            //  Update only every Milliseconds per frame.
            //  If lag larger then update frames, update until caught up
            
            while ((mLagTime >= kMPF) && mIsLoopRunning){
                gEngine.Input.update();
                this.update();
                mLagTime -= kMPF;
            }
            
            
            // Step D: now let's draw
            this.draw(); // Call MyGame.draw();
           
        }
    };
    
    
    var start = function(myGame){
        mMyGame = myGame;
        
        // Step A: reset frame time
        mPreviousTime = Date.now();
        mLagTime = 0.0;
        
        // Step B: remeber that loop is now running
        mIsLoopRunning = true;
        
        //Step C: request _runLoop to start when loading is done
        requestAnimationFrame(function(){_runLoop.call(mMyGame);});
    };
    
    
    var mPublic = {start : start};

    return mPublic;
}());



