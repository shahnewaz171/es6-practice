//===Concatenate Array[concat()]===//
const ages = [12, 14, 17, 22, 18];
const age2 = [30, 45, 31, 32];

const allAges = ages.concat(age2);  // It can merge two or more elements
console.log(allAges);

//Another way
const days = [12, 14, 17, 22, 18];
const days2 = [30, 45, 31, 32];
const days3 = [50, 22, 54];

const allDays = days.concat(days2).concat([5]).concat(days3);  // It can merge two or more elements
console.log(allDays);
//===End Concatenate Array===//



//===Spread Operator[...input]===//
const night = [12, 14, 17, 22, 18];
const night2 = [30, 45, 31, 32];
const night3 = [50, 22, 54];

// const allNight = [night, night2, night3];
// console.log(allNight);
const allNight2 = [...night, ...night2, ...night3]; //It can spread all array elements
console.log(allNight2);

//===End Spread Operator===//



//===Array Maximum===//
const business = 650;
const minister = 450;
const sochib = 250;

const maximum = Math.max(business, minister, sochib); //It can find maximum value using (Math.max) method.
console.log(maximum);

//Another example
const takaPoisa = [650, 450, 250];
const maximum2 = Math.max(takaPoisa);

//===End Array Maximum===//