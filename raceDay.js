//Assign raceNumber to a random number
let raceNumber = Math.floor(Math.random() * 1000);

// Assign the variable registeredEarly to a boolean value
const registeredEarly = false;

//Assign runnerAge to a number indicating the runner's age
let runnerAge = 25;

//Check whether runner is an adult and registered early and add 1000 to the value if true
if (runnerAge > 18 && registeredEarly===true){
  raceNumber+=1000;
};

//Check age and registration time and determine race time.
if(runnerAge > 18 && registeredEarly ===true){
  console.log(`Your race number is ${raceNumber} and you will race at 9:30 am`)
} else if(runnerAge > 18 && registeredEarly===false){
  console.log(`Your race number is ${raceNumber} and you will race at 11:00 am`)
} else if(runnerAge < 18){
  console.log(`Your race number is ${raceNumber} and you will race at 12:30 pm`)
} else {
  console.log('Please see the registration desk.')
}