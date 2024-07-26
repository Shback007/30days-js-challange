//Activity 1

console.log("\nActivity 1");

console.log("\nTask 1");
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHi(){
        console.log(`Hi My name is ${this.name} and my age is ${this.age}`);
    }
}

const P1= new Person('Sagnik',21);
const P2 = new Person('Anurag', 20);

P1.sayHi();
P2.sayHi();

console.log("\nTask 2");
Person.prototype.ageUpdate=function(age){
    this.age=age;
}

P1.ageUpdate(30);
P1.sayHi()

//Activity 2

console.log("\nActivity 2");

console.log("\nTask 3");

class Student extends Person{
    static objcount=0;
    constructor(name,age,studentID){
        super(name,age);
        this.studentID = studentID;
        Student.objcount++;
    }
    getStudentID(){
        console.log(`Student Id of ${this.name} is ${this.studentID}`);
    }
    sayHi(){
        console.log(`Hi my name is ${this.name} and my id is ${this.studentID}`);
    }
    

}

const S1 = new Student('Sagnik',18,1023);
const S2 = new Student('Anurag',22,1024);

S1.getStudentID();
console.log("\nTask 4");
S1.sayHi();
P1.sayHi();

//Activity 3 

console.log("\nActivity 3");

console.log("\nTask 5");

Person.genericGreet = function(){
    return "Hello, welcome to the person Class!";
}

console.log(Person.genericGreet());

console.log("\nTask 6");

console.log(Student.objcount);

//Activity 4

console.log("\nActivity 4");

console.log("\nTask 7");

class Person1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

}

Object.defineProperty(Person1.prototype, 'fullName', {
    get: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    set: function(name){
        const [ firstName, lastName] = name.split();
        this.firstName = firstName || '';
        this.lastName = lastName || '';
    },
    configurable: true,
    enumerable: true
});


const sagnik = new Person1('Sagnik', 'Hore', 30);


console.log(sagnik.fullName);

console.log("\nTask 8");
sagnik.fullName = 'Sagnik Smith';

console.log(sagnik.fullName);


//Activity 5

console.log("\nActivity 5");

console.log("\nTask 9 and 10");

class Account{
    #balance;

    constructor(initialBalance){
        if(initialBalance<0){
            throw new Error("Balance can't be less than 0")
        }
        this.#balance=initialBalance;
    }

    deposit(amount){
        if (amount<=0) throw new Error("Amount can be less than 0");
        this.#balance+=amount;
    }
    withdraw(amount){
        if(amount<=0) throw new Error('Withdrawl amount must be positive.')
        if(amount>this.#balance) throw new Error('Insufficient funds.')
        this.#balance -= amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const myAcc = new Account(1000);

console.log(`Initial Balance of account is $${myAcc.getBalance()}`);

myAcc.deposit(500);
console.log(`Balance after deposit of ammount is $${myAcc.getBalance()}`);

myAcc.withdraw(200);
console.log(`Balance after withdrawl of ammount is $${myAcc.getBalance()}`);

// console.log(myAcc.#balance);