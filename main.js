// I'm 29 yrs old
const myAge = 29;

// I'm converting my first 2 yrs to dog yrs
var earlyYears = 2;
earlyYears = (earlyYears * 10.5);

//I already accounted for the first 2 years
var laterYears = (myAge - 2);

//I'm converting the remainder of my yrs to dog yrs
laterYears = (laterYears * 4);

//I'm combining my first 2 yrs and 27 yrs to find my age in dog yrs
var myAgeInDogYears = (earlyYears + laterYears);

// I'm writing my name in all lower case letters
const myName = 'JASSON'.toLowerCase();

var NAME = myName;
var humanAge = myAge;
var dogAge = myAgeInDogYears;
console.log(`My name is ${NAME}. I am ${humanAge} years old in human years which is ${dogAge} years old in dog years`);
