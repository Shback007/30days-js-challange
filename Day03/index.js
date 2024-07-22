//Activity 1
console.log("/nActivity1");
//task1
const checknum = (num)=>{
    if(num>0){
        console.log("Positive");
    }
    else if(num<0){
        console.log("Negative");
    }
    else{
        console.log("Zero");
    }
}

checknum(0);
checknum(1);
checknum(-1);

//task2
const checkvote = (age)=>{
    if(age>=18){
        console.log("Eligible");
    }else{
        console.log("Not Eligible");
    }
}

checkvote(18);
checkvote(17);

//Activity 2
console.log("\nActivity 2");
//task3
const threelarge = (a,b,c)=>{
    if(a>b){
        if(a>c){
            console.log("a is largest");
        }else{
            console.log("c is largest");
        }
    }else{
        if(b>c){
            console.log("b is largest");
        }else{
            console.log("c is largest");
        }
    }
}

threelarge(1,2,3);
threelarge(1,3,2);
threelarge(3,1,2);

//Activity 3
console.log("\nActivity 3");
//task 4
const day = (num)=>{
    switch(num){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        
        default:
            return "Invalid Input";
    }
}

console.log(day(1));
console.log(day(2));
console.log(day(3));
console.log(day(4));
console.log(day(5));
console.log(day(6));
console.log(day(7));
console.log(day(8));

//task 5
const gradecheck = (num)=>{
    switch(true){
        case num>=90 && num<=100:
            console.log("Grade A");
            break;
        case num>=75 && num<90:
            console.log("Grade B");
            break;
        case num>=60 && num<75:
            console.log("Grade C");
            break;
        case num>=40 && num<60:
            console.log("Grade D");
            break;
        case num< 40&& num>=0:
            console.log("Grade F");
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}

gradecheck(800)

//Activity 4
console.log("\nActivity 4");
const evenoddCheck = (num)=>{
    if(num%2==0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}

evenoddCheck(3);

//Activity 5
console.log("\nActivity 5");
const leapYearCheck = (year)=>{
    if(year % 400 ==0){
        console.log(`${year} is a leap year`);
    }else if(year % 100==0){
        console.log(`${year} is not a leap year`);
    }
    else if(year % 4 == 0){
        console.log(`${year} is leap year`);
    }else{
        console.log(`${year} is not a leap year`);
    }
}

leapYearCheck(1900)
leapYearCheck(2000)

// Feature Request
console.log("\nFeature Request");
//Feature F1
checknum(0);
checknum(37231);
checknum(-232);

//Feature F2
checkvote(50);
checkvote(16);

//Feature F3
console.log(`Day:${day(1)}`);
console.log(`Day:${day(7)}`);

//Feature F4
gradecheck(67);
gradecheck(50);

//Feature F5
leapYearCheck(400)