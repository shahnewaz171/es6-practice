//====Object Destructure====///
// A shortcut way to replace one or more elements in a variable from a large object or array.
/*const person = {name: "Jack William", age: 17, gfName: "Ema Watson", height: 45, job: "Facebooker", Phone: "0171717171"};

const gfName = person.gfName;
const phone = person.Phone;

console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);
console.log(gfName, phone);

*/

//Another Example
const person2 = {name2: "Jack William", age2: 17, gfName2: "Ema Watson", height2: 45, job2: "Facebooker", phone2: "0171717171"};

// const { phone2 } = person2;
const { phone2, job2 } = person2;
const gfName2 = person2.gfName2;

console.log(gfName2, phone2,job2);
console.log(gfName2, phone2,job2);
console.log(gfName2, phone2,job2);
console.log(gfName2, phone2,job2);

//====End Object====//




//====Array Destructure====///
const friends = ['Muhammad', 'Shahnewaz', 'Khondokar', 'Moon', 'Rahim', 'Karim'];

const [chotoFriend, nextFriend,  ...resFriends] = friends;
// console.log(chotoFriend, nextFriend);
console.log(resFriends);

//====End Array Destructure====///




//====Complex Objects====///
const complexObject = {
    name: 'abc',
    info: {
        address: 'Dhanmondhi',
        leader: 'Tiger'
    }
};
const {leader} = complexObject.info;
console.log(leader);

//====End Complex Objects====///
