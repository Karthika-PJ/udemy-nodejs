const EventEmitter = require('events');

const celebrity = new EventEmitter();


//sUBSCRIBE TO CELEBRITY FOR OBSERVER 1
celebrity.on("race win",function(){
    console.log("congratulations you are the best")
})

//sUBSCRIBE TO CELEBRITY FOR OBSERVER 2
celebrity.on("race win",function(){
    console.log("I could have better than that")
})

celebrity.emit("race win");
celebrity.emit("race win");
celebrity.emit("race win");
celebrity.emit("race win");
celebrity.emit("race win");
celebrity.emit("race win")