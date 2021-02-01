//====Class, Constructor, create object from class====//
class student{  // It can add similar type multiple object using same (Class).
    constructor(){   //constructor is a main function as like building foundation :)
        this.id = 1;
        this.name = "newaz"; 
    }
}
const student1 = new student();
const student2 = new student();
console.log(student1, student2);

//Another example
class students{
    constructor(sId, sName){   //Add parameters for multiple value add but same property
        this.id = sId;
        this.name = sName; 
        this.school = "Ideal School";
    }
}
const student3 = new students(12, "newaz");
const student4 = new students(22, "mun");
console.log(student3, student4);
console.log(student3.name, student4.name);