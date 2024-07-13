//Activity 1
console.log("\nActivity 1");
var num = 5;
let str = "hello";
console.log(num);
console.log(str);

//Activity 2
console.log("\nActivity 2");
const right = true;
console.log(right);

//Activity 3
console.log("\nActivity 3");
const profile={
    name:"sagnik",
    age:"21",
    isEmployed:false
}
const arr=[1,2,3,4,5]

console.log(
    typeof num," ",
    typeof str," ",
    typeof right," ",
    typeof profile," ",
    typeof arr," "
);

console.log("/Activity 4");
let ischeat = false;
console.log(`Have you cheated ${ischeat}`);
ischeat = true;
console.log(`have you cheated ${ischeat}`);

//Activity 5
console.log("\nActivity 5");
try {
    right = true;
    console.log("Everything fine");
} catch (error) {
    console.log(error);
}

//Feature Request F1
const datatype =value =>{
    console.log(`value ${value}`);
    console.log(`DataType ${typeof(value)}`);
}

datatype("Hello")

//Feature Request F2
console.log("\nActivity : F2");
let myLetVariable = 'Initial value';
console.log('Initial value of myLetVariable:', myLetVariable);

myLetVariable = 'Modified value';
console.log('Modified value of myLetVariable:', myLetVariable);

const myConstVariable = 'Initial constant value';
console.log('Initial value of myConstVariable:', myConstVariable);

try {
    myConstVariable = 'Modified constant value';
} catch (error) {
    console.log('Error caught when trying to modify myConstVariable:', error.message);
}
