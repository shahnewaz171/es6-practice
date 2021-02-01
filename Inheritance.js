//=====Inheritance====//
class Parent{
    constructor(){
        this.fatherName = "Schwarzenegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child("Rahim");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);

//=====End Inheritance====//