//Activity 1
console.log("\nActivity 1");
//task 1
const forloop= (start,end)=>{
    for(let i=start;i<=end;i++){
        console.log(i);
    }
}

forloop(1,10);

//task2
for(let i=1;i<10;i++){
    console.log(`${i}*${5} is ${i*5}`);
}

//Activity 2
console.log('\nActivity 2');
//task 3
const sum = (end)=>{
    let i =1
    let sum=0
    while(i<=end){
        sum+=i
        i++;
    }
    return sum;
}

console.log(sum(10))

//task 4
let i = 10;
while(i!=1){
    console.log(i);
    i--;
}

//Activity 3
console.log('\nActivity 3');
//task 5
const dowhile = (num)=>{
    let i =1;
    do{
        console.log(i);
        i++
    }while(i<=num);
}

dowhile(5);

//task 6 
const fact = (num)=>{
    let fact = 1;
    let i =1;
    do{
        fact*=i;
        i++;
    }while(i<=num);
    console.log(fact);
}

fact(5)

//Activity 4
console.log('\nActivity 4');
const pattern = (num)=>{
    let str = "";
    for(let i=0;i<=num;i++){
        str=""
        for(let j=0;j<i;j++){
            str+=" *"
        }
        console.log(str);
    }
}

pattern(5)

//Activity 5
console.log("\nActivity 5");
for(let i =1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
}

for(let i =1;i<=10;i++){
    if(i==7) break;
    console.log(i);
}

//Feature Request 
console.log("\nFeature Request");
//F1
forloop(10)
//F2
for(let i=1;i<10;i++){
    console.log(`${i}*${5} is ${i*5}`);
}
//F3
pattern(6)
//F4
console.log(sum(15))
//F5
fact(7)