//Question no 1 Start

interface user {
    id : number,
    name : string,
    email : string,
    isActive : boolean
}
 function createUser(obj : user) {
    return obj
 }

 let newUser= {
    id : 123,
    name : 'shahrukh',
    email : 'shahrukh@gmail.com',
    isActive : true
 }

console.log(createUser(newUser));

// Question no 1 End

//Question no 2 Start

type input = number | string;
function processInput(argu : input){
    if(typeof(argu) === 'string'){
        console.log(`String : ${argu}`)
    }
    else if(typeof(argu) === 'number'){
        console.log(`Number : ${argu}`)
    }
}
processInput(123)


//Question no 2 End

//Question no 3 Start

class vehicle {
    make : string
    year : number
    model : string

    constructor(make : string, model : string, year : number){
        this.make = make
        this.year = year
        this.model = model
    }
    getInfo(){
        return(`you have a ${this.year} ${this.make}, ${this.model}`)
    }
}

class Car extends vehicle{
    door : number
    constructor(make: string, model : string, year : number, door : number){
        super(make =make, model = model, year = year)
        this.door = door
    }
    getInfo(){
        return(`${super.getInfo()} with ${this.door} doors.`)
    }
}

class Motorcycle extends vehicle{
    hasSideCar : boolean
    constructor(make : string, model : string, year : number, hasSideCar : boolean){
        super(make = make, model = model, year = year)
        this.hasSideCar = hasSideCar
    }
}

let car = new Car('Honda', 'Civic', 2017, 4);
console.log(car.getInfo())



//Question no 3 End

//Question no 4 Start

class bankAccount{
    private balanced : number
    private readonly accountNumber : string
    constructor(balanced : number, accountNumber : string){
        this.balanced = balanced
        this.accountNumber = accountNumber
    }
    get getBalanced(){
        return `Your Account Balanced is ${this.balanced}`
    }

    get getAccountNumber(){
        return `your Account number is ${this.accountNumber}`
    }
    deposit(amount : number){
        (this.balanced = this.balanced + amount)
    }
    withdraw(amount : number){
        if(amount > this.balanced){
            console.log(`Insufficient Funds For withdrawl`) 
        }
        else{
            this.balanced -=amount
        }
    }
}

let accountDetail = new bankAccount(500,'9977123430780231');
console.log(`${accountDetail.getBalanced}`)
console.log(accountDetail.getAccountNumber)
accountDetail.deposit(1500)
console.log(`${accountDetail.getBalanced}`)
accountDetail.withdraw(500)
console.log(`${accountDetail.getBalanced}`)

//Question no 4 End

//Question no 5 Start
abstract class shape{
    protected color : string;
    constructor(color : string){
        this.color = color
    }

    abstract calculatedArea() : number;
    getColor(){
        return this.color
    }
}

class circle extends shape{
    radius : number;
    constructor(color : string, radius : number){
        super(color = color)
        this.radius = radius
    }
    calculatedArea(): number {
        return (3.142 * this.radius * this.radius)
    }
}
 class rectangle extends shape{
    width : number;
    height : number;
    constructor(color : string, width : number, height : number){
        super(color = color)
        this.width = width
        this.height = height
    }
    calculatedArea(): number {
        return (this.width * this.height)
    }
 }

 let circleInstance = new circle('red', 5);
 console.log(`Area of circle is ${circleInstance.calculatedArea()}`);
 console.log(`Color of given circle is ${circleInstance.getColor()}`);

 let rectangleInstance = new rectangle('green', 5, 8);
 console.log(`Area of Rectangle is ${rectangleInstance.calculatedArea()}`);
 console.log(`Color of Given rectangle is ${rectangleInstance.getColor()}`)

//Question no 5 end

//question n0 6 start 

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }

  function createProduct(product: Product) {
    return product;
  }

  let newProduct : Product = {
    id : 1,
    name : 'Laptop',
    price : 1200,
    category: "Electronics"
  }

  console.log(createProduct(newProduct));


//question no 6 End


//Question nO 7 Start

class Employee{
    name : string
    salary : number
    constructor(name : string, salary : number){
        this.name = name;
        this.salary = salary
    }
    getDetail(){
        return `${this.name}, your salary is ${this.salary}`
    }
}

class Developer extends Employee {
    programmingLanguage: string;
  
    constructor(name: string, salary: number, programmingLanguage: string) {
      super(name = name, salary = salary);
      this.programmingLanguage = programmingLanguage;
    }
  
    getDetail(){
      return `Name: ${this.name},\nSalary: ${this.salary},\nProgramming Language: ${this.programmingLanguage}`;
    }
  }

  class Designer extends Employee {
    toolUsed: string;
  
    constructor(name: string, salary: number, toolUsed: string) {
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

class Student{
    name : string;
    private grades : number[] = [];
    protected school : string;
    readonly studentID : number;
    constructor(name : string, school : string, studentID : number){
        this.name = name ;
        this.school = school;
        this.studentID = studentID
    }

    set addGrade(grade : number){
        this.grades.push(grade)
    }
    getAverage(){
        if(this.grades.length === 0){
            return 0
        }
        else{
            let total = 0;
            for(let i = 0; i < this.grades.length; i++){
                total += this.grades[i]
                console.log(`Totaal value is ${total}`)
            }
            return (total / this.grades.length)
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

//Question No 8 End

//Question No 9 Start

type condition1 = {
    success : true;
    data : string
}
type condition2 = {
    success : false;
    error : string
}

type Responce = condition1 | condition2;



//Question No 9 End

//Question no 10 Start

abstract class Animal{
    species : string
    constructor(species : string){
        this.species = species
    }
    abstract makeSound() : string

    getSpecies(){
        return this.species
    }
}
class Dog extends Animal{
    constructor(species : string){
        super(species)
    }
    makeSound(): string {
        return 'Woof!'
    }
}

class Cat extends Animal{
    constructor(species : string){
        super(species)
    }
    makeSound(): string {
        return 'MeoW!!'
    }
}
let dog = new Dog('dog');
let cat = new Cat('cat');

console.log(dog.makeSound());
console.log(dog.getSpecies());

console.log(cat.makeSound());
console.log(cat.getSpecies());

//Question No 10 End