// Sets the variable of myAge
var myAge = 19;

// Sets the variable earlyYears
var earlyYears = 2;

earlyYears *= 10.5;

// Taking myAge minus by 2
var laterYears = myAge - 2;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Calculating my age in dog years
var myAgeInDogYears = earlyYears + laterYears;

// Converts 'Ray' into all lower case
var myName = 'Ray'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);