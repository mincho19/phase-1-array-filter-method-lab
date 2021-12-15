// Code your solution here

// function findMatching(collection, cb){
//     for(const drivers of collection){
//         if(cb(drivers)){
//             console.log(user.firstName);
//         }
//     }
// }


function findMatching(drivers, bobby){
    return drivers.filter(function (driverName) {return driverName.toUpperCase() === bobby.toUpperCase()});
   
}

function fuzzyMatch(drivers, startingLetter){
    return drivers.filter(function (driverName) {return driverName.charAt(0) === startingLetter.charAt(0)})
}

function matchName(drivers, name){
    return drivers.filter(function (driverObject) {return driverObject['name'] === name});
}