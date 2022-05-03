
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas"; 
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);
// console.log('test');


// let JavascriptIsFun = true
// console.log(true);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);


// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Conner';
// console.log(lastName);

// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Conner';
// console.log(firstName +' ' + lastName);

// //assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; //x = x + 1
// x--;
// x--;
// console.log(x)

// //Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log( now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge)

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information 
about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const firstName = 'Trenton';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const Trenton = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(Trenton); 

// const trentonNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(trentonNew);

// console.log(`Just a regular string...`)

// console.log('Strig with \n\
// multiple \n\
// ')

// console.log(`String
// multiple
// lines
// `)


// const age = 15;
// const isOldEnough = age >= 18;

// if(age >= 18) {
//     console.log(`Sarah can start driving License 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Saeah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century;

// if(birthYear <= 2000) {
//     century = 20
// } else {
//     century = 21;
// }
// console.log(century);

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log((Number)(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion

// console.log('I am ' + 23 + ' Years old ')
// console.log('23' - '10' - 3);
// console.log('23' / '2');



// let n = '1' + 1;
// n = n - 1;
// console.log(n);


// 5 falsy values:0, '', undifened, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if(money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('you should get a job!');
// }

// let height = 0;
// if(height) {
//     console.log('YAY! HEEIGHT IS DEFINED');
// } else {
//     console.log('Height is undefined');
// }

// const age = 18;
// if(age === 18) console.log('you jsut became an adult (strict)');

// if(age == 18) console.log('you jsut became an adult (loose)');

// const favorite = Number (prompt ("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 23) { // '23' == 23
//     console.log(`Cool! 23 is an amazing number!`);
// } else if(favorite === 7) {
//     console.log(`7 is also a cool number`);
// } else if(favorite === 9 ){
//     console.log(`9 is also a cool number`);
// } else {
//     console.log(`number is not 23 or 7`);
// }

// if (favorite !== 23) console.log(`Whay not23?`);

// const hasDriversLicense = true; //A
// const hasGoodVistion = true; //B

// console.log(hasDriversLicense && hasGoodVistion);
// console.log(hasDriversLicense || hasGoodVistion);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVistion) {
// //     console.log(`Sarah is able to drive`);
// // } else {
// //     console.log(`Someone else should drive...`);
// // }

// const isTired = false; //c
// console.log(hasDriversLicense && hasGoodVistion && isTired);

// if (hasDriversLicense && hasGoodVistion && !isTired) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive...`);
// }

// const day = `thursday`;

// switch(day) {
//     case 'monday': // day ===  `monday`
//         console.log('Plab course structure');
//         console.log('Go to coding meetup')
//         break;
//     case `tuesday`:
//         console.log(`Prepare theory videos`);
//         break;
//     case `wednesday`:
//     case `thursday` :
//         console.log('Write code examples');
//         break;
//     case `Friday`:
//         console.log(`Record videos`);
//         break;
//     case `saturday`:
//     case `Sunday` :
//         console.log(`enjoy your weekend`);
//         break;
//     default:
//         console.log(`not a valid day!`);
// }


// if (day === `monday`) {
//     console.log('Plab course structure');
//     console.log('Go to coding meetup');
// } else if (day ===  `tuesday`) {
//     console.log(`Prepare theory videos`);
// } else if (day === `wednesday` || day === `thursday`) {
//     console.log('Write code examples');
// } else if (day === `Friday`) {
//     console.log(`Record videos`);
// } else if (day === `saturday` || day === `sunday`) {
//     console.log(`enjoy your weekend`);
// } else {
//     console.log(`not a valid day!`);
// }

// 3 + 4 
// 1991
// ture && false && !false

// if (23>10) {
//     const str = `23 is bigger`;
// }

// console.log(`I'm ${2037 - 1991} years old. `);


// const me = `Trenton`;
// console.log(`I'm ${2022 - 2006} years old`);

// const age = 23;
// age >= 18 ? console.log(`I like to drink wine`) :
// console.log(`I like to drink water`);

// const drink = age >= 18 ? `wine` : `water`;
// console.log(drink);

// let drink2;
// if(age >= 18) {
//     drink2 = `wine`;
// } else {
//     drink2 = `water`;
// }

// console.log(drink2);

// console.log(`I like to drink ${drink}`);

