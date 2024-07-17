//Activity 1
console.log("\nActivity 1\n");
console.log("Task 1");
function evenOdd(num) {
    if(num % 2==0) console.log(`${num} is even`);
    else console.log(`${num} is odd`);
}

evenOdd(4);
evenOdd(5);
console.log("\nTask 2");
function square(num){
    return num*num;
}

console.log(square(3));
console.log(square(4));

//Activity 2
console.log("\nActivity 2");
console.log("\nTask 3");
function max(num1,num2){
    if(num1>num2) console.log(`${num1} is greater than ${num2}`);
    else console.log(`${num2} is greater than ${num1}`);
}

max(3,4)

console.log("\nTask 4");
function catstring(str1,str2,order){
    if(order===1){
        return str1+str2;
    }else if(order==2){
        return str2+str1;
    }else return "Invalid input"
}

str1 = "sag";
str2 = "nik";
console.log(catstring(str1,str2,1));
console.log(catstring(str1,str2,2));

//Activity 3
console.log("\nActivity 3");
console.log("\nTask 5");
const sum = (num1,num2)=>{
    return num1+num2;
}

console.log(sum(4,5));
console.log(sum(2,3));

console.log("\nTask 6");
const charcheck = (str,ch)=>{
    str=str.toLowerCase();
    ch= ch.toLowerCase().charAt(0)
    for(let i=0;i<str.length;i++){
        if(str[i]==ch) return true;
    }
    return false
}

console.log(charcheck("sagnik","h"));
console.log(charcheck("sagnik","gn"))

//Activity 4
console.log("\nActivity 4");
console.log("\nTask 7");
const prod = (num1,num2=1)=>{
    return num1*num2;
}

console.log(prod(5));
console.log(prod(5,3));

console.log("\nTask 8");
const greet = (name,age=21)=>{
    console.log(`Hello ${name}, your age is ${age}`);
}

greet("Sagnik")
greet("Anurag",20)

//Activity 5
console.log("\nActivity 5");
console.log("\nTask 9");

function callback(){
    return "I am a call back function";
}
const high = (callback,num)=>{
    while(num!=0){
    console.log(`${callback()} and i have been called ${num} times`);
    num--;
    }
}

high(callback,5);

console.log("\nTask10");

function log(num){
    console.log(num);
}

function add5(num) {
    return num+5;
}

const high2 = (add5,log,num)=>{
    let temp = add5(num);
    log(temp);
}

high2(add5,log,6)

console.log("\nFeature Request");

//F1
evenOdd(5)
evenOdd(6)

//F2
console.log(square(5))

//F3
console.log(catstring("anu","rag",1))

//F5
console.log(sum(5,6));

//F6
high(callback,6);