//===Template String====
const firstName = "Muhammad";
const lastName = "Shahnewaz";

// const fullName = firstName + lastName;
const fullName = firstName + " " + lastName + " is a good boy" ; //template string [`input`]
console.log(fullName);

//Another way
const firstName2 = "Muhammad";
const lastName2 = "Shahnewaz";

// const fullName = firstName + lastName;
const fullName2 = `${firstName2} ${lastName2} is a good boy` ; //template string
console.log(fullName2);

//===End Template string===//



//===multiple line string [input\n]===//
const multiline = "I love you\n"  //add multiline string [input\n]
         + "I miss you"
         + "I need you";

console.log(multiline);

//Another way
const multiline2 = `I love you.
            I miss you no.
            I don't need you`;

console.log(multiline2);

//===End multiple line string===//