// Generate a random number between 0 to 999
let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = false;
let runnerAge = 19;

if (runnerAge > 18 && isEarly) {
    raceNumber += 1000;
}

if (runnerAge > 18 && isEarly) {
    console.log(`Early adults race at 9:30 AM, race number being: ${raceNumber}`);
} else if (runnerAge > 18 && !isEarly) {
    console.log(`Late adults race at 11:00 AM, race number being: ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log(`Youths race at 12:30 PM, race number being: ${raceNumber}`);
} else {
    console.log('Since you\'re exactly 18, please consult the registration desk.');
}