export const person = {
    name: 'Sagnik Hore',
    age: 21,
    greet(){
        console.log(`Hello My name is ${this.name} and I am ${this.age} years old`);
    },
    incrementAge(){
        this.age+=1;
        console.log(`I am now ${this.age} years old.`);
    }
}