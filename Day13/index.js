
//Activity 1

console.log("\nActivity 1");
console.log("\nTask 1");
import { add } from './task1.js'

let num1=3;
let num2=7;

let result = add(num1,num2);

console.log(`The result is: ${result}`);

console.log("\nTask 2");

import { person } from './task2.js';

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);

person.greet();
person.incrementAge();

//Activity 2
console.log("\nActivity 2");
console.log("\nTask 3");

import { add1 , subtract, multiply, divide } from './task3.js';

num1 = 10;
num2 = 5;

console.log(`Adding ${num1} and ${num2} gives: ${add1(num1, num2)}`);
console.log(`Subtracting ${num2} from ${num1} gives: ${subtract(num1, num2)}`);
console.log(`Multiplying ${num1} and ${num2} gives: ${multiply(num1, num2)}`);
console.log(`Dividing ${num1} by ${num2} gives: ${divide(num1, num2)}`);


console.log("\nTask 4");

import add2 from './task4.js';

num1 = 5;
num2 = 8;

result = add2(num1,num2);


console.log(`The result is: ${result}`);

//Activity 3

console.log("\nActivity 3");
console.log("\nTask 5");

import * as utils from './task5.js'

console.log(`PI: ${utils.PI}`);
console.log(`E: ${utils.E}`);

num1 = 9;
num2=4;
console.log(`Adding ${num1} and ${num2} gives: ${utils.add3(num1, num2)}`);
console.log(`Subtracting ${num2} from ${num1} gives: ${utils.subtract1(num1, num2)}`);
console.log(`Multiplying ${num1} and ${num2} gives: ${utils.multiply1(num1, num2)}`);
console.log(`Dividing ${num1} by ${num2} gives: ${utils.divide1(num1, num2)}`);


console.log("\nActivity 4");

console.log("\nTask 6");
import _ from 'lodash';

const message = 'hello, World';

const capitalizeMessage= _.capitalize(message);

console.log(capitalizeMessage);

console.log("\nTask 7");

import axios from 'axios';

async function fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
