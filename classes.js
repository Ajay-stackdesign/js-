//A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

//classses :

// class Car{
//     constructor(name){
//         this.myName = name
//     }
// }

// const car1 = new Car ("ajay")
// console.log(car1)

///method in classes

class Car{
    constructor(name,model){
        this.myName = name;
        this.myModel = model;
    }
    biodata(){
        return `this is my${this.myName} and my car model is ${this.myModel}`
    }
}

const car1 = new Car("swift","desire suv")
console.log(car1)

class Bike{
    constructor(name,model){
        this.myName = name;
        this.myModel = model;
    }
    biodata(){
        return `this is my ${this.myName} and model is ${this.myModel}`
    }
}
class Year extends Car{
    constructor(name,model,year){
        super(name,model);
        this.myYear = year;
    }
    year_bio(){
        return `${super.biodata()} and my year is ${this.myYear}`
    }
} 

let obj1 = new Year("tvs","bs6",2020);
console.log(obj1.year_bio());
