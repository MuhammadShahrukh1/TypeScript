"use strict";
//Question no 1 Start
function createUser(obj) {
    return obj;
}
let newUser = {
    id: 123,
    name: 'shahrukh',
    email: 'shahrukh@gmail.com',
    isActive: true
};
console.log(createUser(newUser));
function processInput(argu) {
    if (typeof (argu) === 'string') {
        console.log(`String : ${argu}`);
    }
    else if (typeof (argu) === 'number') {
        console.log(`Number : ${argu}`);
    }
}
processInput(123);
//Question no 2 End
//Question no 3 Start
class vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.year = year;
        this.model = model;
    }
    getInfo() {
        return (`you have a ${this.year} ${this.make}, ${this.model}`);
    }
}
class Car extends vehicle {
    constructor(make, model, year, door) {
        super(make = make, model = model, year = year);
        this.door = door;
    }
    getInfo() {
        return (`${super.getInfo()} with ${this.door} doors.`);
    }
}
class Motorcycle extends vehicle {
    constructor(make, model, year, hasSideCar) {
        super(make = make, model = model, year = year);
        this.hasSideCar = hasSideCar;
    }
}
let car = new Car('Honda', 'Civic', 2017, 4);
console.log(car.getInfo());
//Question no 3 End
//Question no 4 Start
class bankAccount {
    constructor(balanced, accountNumber) {
        this.balanced = balanced;
        this.accountNumber = accountNumber;
    }
    get getBalanced() {
        return `Your Account Balanced is ${this.balanced}`;
    }
    get getAccountNumber() {
        return `your Account number is ${this.accountNumber}`;
    }
    deposit(amount) {
        (this.balanced = this.balanced + amount);
    }
    withdraw(amount) {
        if (amount > this.balanced) {
            console.log(`Insufficient Funds For withdrawl`);
        }
        else {
            this.balanced -= amount;
        }
    }
}
let accountDetail = new bankAccount(500, '9977123430780231');
console.log(`${accountDetail.getBalanced}`);
console.log(accountDetail.getAccountNumber);
accountDetail.deposit(1500);
console.log(`${accountDetail.getBalanced}`);
accountDetail.withdraw(500);
console.log(`${accountDetail.getBalanced}`);
//Question no 4 End
//Question no 5 Start
class shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class circle extends shape {
    constructor(color, radius) {
        super(color = color);
        this.radius = radius;
    }
    calculatedArea() {
        return (3.142 * this.radius * this.radius);
    }
}
class rectangle extends shape {
    constructor(color, width, height) {
        super(color = color);
        this.width = width;
        this.height = height;
    }
    calculatedArea() {
        return (this.width * this.height);
    }
}
let circleInstance = new circle('red', 5);
console.log(`Area of circle is ${circleInstance.calculatedArea()}`);
console.log(`Color of given circle is ${circleInstance.getColor()}`);
let rectangleInstance = new rectangle('green', 5, 8);
console.log(`Area of Rectangle is ${rectangleInstance.calculatedArea()}`);
console.log(`Color of Given rectangle is ${rectangleInstance.getColor()}`);
function createProduct(product) {
    return product;
}
let newProduct = {
    id: 1,
    name: 'Laptop',
    price: 1200,
    category: "Electronics"
};
console.log(createProduct(newProduct));
//question no 6 End
//Question nO 7 Start
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetail() {
        return `${this.name}, your salary is ${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name = name, salary = salary);
        this.programmingLanguage = programmingLanguage;
    }
    getDetail() {
        return `Name: ${this.name},\nSalary: ${this.salary},\nProgramming Language: ${this.programmingLanguage}`;
    }
}
class Designer extends Employee {
    constructor(name, salary, toolUsed) {
        super(name = name, salary = salary);
        this.toolUsed = toolUsed;
    }
    getDetail() {
        return `Name: ${this.name},\nSalary: ${this.salary},\nTool Used: ${this.toolUsed}`;
    }
}
let developer = new Developer('john', 75000, 'Javascipt');
let designer = new Designer('Doe', 50000, 'Figma');
console.log(developer.getDetail());
console.log(designer.getDetail());
//Question No 7 End
//Question No 8 Start
class Student {
    constructor(name, school, studentID) {
        this.grades = [];
        this.name = name;
        this.school = school;
        this.studentID = studentID;
    }
    set addGrade(grade) {
        this.grades.push(grade);
    }
    getAverage() {
        if (this.grades.length === 0) {
            return 0;
        }
        else {
            let total = 0;
            for (let i = 0; i < this.grades.length; i++) {
                total += this.grades[i];
                console.log(`Totaal value is ${total}`);
            }
            return (total / this.grades.length);
        }
    }
}
let student = new Student('Shahrukh', 'SMIT', 275039);
console.log(`Name : ${student.name}`);
console.log(`StudentID : ${student.studentID}`);
// console.log(`School Name is : ${student.school}`)
student.addGrade = 25;
student.addGrade = 75;
student.addGrade = 80;
console.log(`Average Value is ${student.getAverage()}`);
//Question No 9 End
//Question no 10 Start
class Animal {
    constructor(species) {
        this.species = species;
    }
    getSpecies() {
        return this.species;
    }
}
class Dog extends Animal {
    constructor(species) {
        super(species);
    }
    makeSound() {
        return 'Woof!';
    }
}
class Cat extends Animal {
    constructor(species) {
        super(species);
    }
    makeSound() {
        return 'MeoW!!';
    }
}
let dog = new Dog('dog');
let cat = new Cat('cat');
console.log(dog.makeSound());
console.log(dog.getSpecies());
console.log(cat.makeSound());
console.log(cat.getSpecies());
let car1 = {
    drive() {
        return `Drive A Car`;
    }
};
let bike = {
    ride() {
        return `Riding a Bicycle`;
    }
};
function useVehicle(vehicle) {
    if ('drive()' in vehicle) {
        console.log(vehicle.drive());
    }
}
useVehicle(car1);
function describeEmployee(emp) {
    console.log(`Name ${emp.name}`);
    console.log(`Age ${emp.age}`);
    console.log(`Job Title ${emp.jobTitle}`);
}
let companyEmployee = {
    name: 'John Doe',
    age: 25,
    jobTitle: 'Engineer'
};
describeEmployee(companyEmployee);
//Question no 13 End
//# sourceMappingURL=app.js.map