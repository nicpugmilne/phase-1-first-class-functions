
// function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }

// function liftWeights() {
//     console.log("Pump iron");
//   }
  
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }

// function exerciseRoutine(postRunActivity){
//     runFiveMiles();
//     postRunActivity();
// }

// function Monday(){
//     exerciseRoutine(liftWeights);
// }

// Monday();

let Spy = function(){}

function receivesAFunction(Spy){
    Spy();
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log('I am a named function');
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('I am anonymous');
    }
}