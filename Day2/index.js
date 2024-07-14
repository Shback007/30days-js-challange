//Activity 1 
console.log("\nActivity 1");

const cal = (a,b,operator)=>{
    switch(operator){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        case '%':
            return a%b;
        default:
            console.log('Invalid Input');
            return -1;
    }
}

console.log(cal(7,5,'+'));
console.log(cal(7,5,'-'));
console.log(cal(7,5,'*'));
console.log(cal(7,5,'/'));
console.log(cal(7,5,'%'));
console.log(cal(7,5,'y'));

//Activity 2
console.log('\nActivity 2');
let num=5;
num+=2;
console.log(num);
num-=4;
console.log(num);

//Activity 3
console.log('\nActivity 3');
console.log(3>5);
console.log(3<5);

console.log(7<=8);
console.log(7>=8);
console.log(8<=8);

console.log(4==4);
console.log(4=='4');
console.log(4==='4');

//Activity 4
console.log('\nActivity 4');
const obj = {
    name:'sagnik',
    age:21
}

console.log(obj.age ==21 && obj.name == 'sagnik' );
console.log(obj.age ==21 && obj.name == 'hore' );
console.log(obj.age ==22 && obj.name == 'sagnik' );

console.log(obj.age ==21 || obj.name == 'sagnik' );
console.log(obj.age ==21 || obj.name == 'hore' );
console.log(obj.age ==22 || obj.name == 'sagnik' );

console.log(!(2===3));
console.log(!(2==2));

//Activity 5
console.log("\nActivity 5");
const n=5;
console.log((n>=0)? "positive": "Negative");

//F1
console.log('\nFeature F1');
console.log(cal(7,5,'+'));
console.log(cal(7,5,'-'));
console.log(cal(7,5,'*'));
console.log(cal(7,5,'/'));
console.log(cal(7,5,'%'));
console.log(cal(7,5,'y'));

//F2
console.log("\n Feature F2");
const logcal = (a, b, operator)=>{
    switch (operator) {
        case '&':
            return a&&b;
        case '|':
            return a||b;
        case '!':
            return !(a&&b);      
    
        default:
            console.log('Invalid Input');
            return -1;
    }
}

console.log(logcal(true, false, '&'));
console.log(logcal(true, false, '|'));
console.log(logcal(true, false, '!'));

// F3
console.log("\n Feature F3");
const neg = -12;
console.log((neg>=0)? "Positive": "Negetive");