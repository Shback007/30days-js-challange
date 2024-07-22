//Activity 1
console.log("\nActivity 1");

//Task 1
console.log("\nTask 1");
const arr=[1,2,3,4,5];
console.log(arr);

//Task 2
console.log("\nTask 2");
console.log(`First element of array is: ${arr[0]} and last element of array is ${arr[arr.length-1]}`);

//Activity 2
console.log("\nActivity 2");

//Task 3
console.log("\nTask 3");
const addElement = (arr,num)=>{
    arr.push(num);
    console.log(arr);
}
let arr2=[1,2,3,4,5];
addElement(arr2,6);

//Task 4
console.log("\nTask 4");
const removeElement = (arr)=>{
    arr.pop();
    console.log(arr);
}

removeElement(arr2)

//Task 5
console.log("\nTask 5");
const shiftElement = (arr)=>{
    arr.shift();
    console.log(arr);
}

shiftElement(arr);

//Task 6
console.log("\nTask 6");
const unshiftElement = (arr,num)=>{
    arr.unshift(num);
    console.log(arr);
}

unshiftElement(arr,1)

//Activity 3
console.log("\nActivity 3");
console.log("\nTask 7");

const doubleArray= (arr)=>{
    const arr2=[]
    arr.map((element)=>{
        arr2.push(2*element);
    });
    return arr2;
}

arr2= doubleArray(arr);
console.log(arr2);

console.log("\nTask 8");

const isEven= num=>{
    if( num%2 ==0) return true;
    else return false;
}
const arr3=arr.filter(isEven);
console.log(arr3);

console.log("\nTask 9");

const add= arr.reduce((accumulator,element)=>{
    return accumulator+element;
})

console.log(add);

//Activity 4
console.log("\nActivity 4");
console.log("\nTask 10");

for(const key in arr){
    console.log(arr[key]);
}

console.log("\nTask 11");
arr.forEach(element => {
    console.log(element);
});

//Activity 5
console.log("\nActivity 5");
console.log("\nTask 12");

const arr4=[[1,2,3],
            [4,5,6],
            [7,8,9]]
console.log(arr4);

console.log("\nTask 13");
console.log(arr4[2][1]);

//Feature Request
console.log("\nFeature Request");

//F1
const arr5 = [1,2,3,4,5,6]
addElement(arr5,7);
removeElement(arr5);
shiftElement(arr5);
unshiftElement(arr5,1)

//F2
console.log(doubleArray(arr5));
const arr6=arr5.filter(isEven);
console.log(arr6);
console.log(add);

//F3
const traverse=(arr)=>{
    for(const key in arr){
        console.log(arr[key]);
    }
}
traverse(arr5);

const traverse2= (arr)=>{
    arr.forEach(element => {
        console.log(element);
    });
}

traverse2(arr6);

//F4
const matrix=[];
for(let i=0;i<5;i++){
    matrix.push([1,2,3])
}

console.log(matrix);

const midX=parseInt(matrix[0].length/2);
const midY=parseInt(matrix.length/2);

console.log(`Middle Element is ${matrix[midX][midY]}`);

matrix[midX][midY]=12;
console.log(`Middle Element is ${matrix[midX][midY]}`);
console.log(matrix);