//runners will race at different times
//you can change age and registration to see when they will race
let raceNumber = Math.floor(Math.random() * 1000); 
console.log(raceNumber)
let age = 18;

//early register 9:30 am
//late register 11:00 am
//youth run 12:30 pm
let earlyRegistered = false;

if (age > 18 && earlyRegistered) {
  raceNumber = raceNumber + 1000;
  console.log(raceNumber + ' will race at 9:30 pm')
} else if (age > 18 && !earlyRegistered) {
  console.log(raceNumber + ' will race at 11:00 pm')
} else if (age < 18) {
  console.log('Youth will race at 12:30')
} else if (age === 18) {
  console.log('Check with registration desk for more information')
}
