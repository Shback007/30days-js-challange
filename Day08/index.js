//Activity 1

console.log("\nActivity 1");

console.log("\nTask 1");

const name = "Sagnik";
const age = 21;

console.log(`Hi, My name is ${name}, and my age is ${age} `);

console.log("\nTask 2");

const multiString=`I am Sagnik Hore
and I study Btech
currently 4th year `

console.log(multiString);

//Activity 2

console.log("\nActivity 2");
console.log("\nTask 3");
let arr=[10,20,30,40,50]

let [a,b, ...rest]=arr;

console.log(a,b);

console.log("\nTask 4");
const book={
    title:"Fifty shades of Grey",
    author:"E.L. James",
    year:2011
};

const { title, author}=book;

console.log(`Title is ${title} 
and Author is ${author}`);


//Activity 3

console.log("\nActivity 3");
console.log("\nTask 5");
 arr=[1,2,3,4,5];
console.log(arr);
arr=[...arr,6,7,8];

console.log(arr);

console.log("\nTask 6");
const sum=(...values)=>{
    let sum=0;
    for (const key in values) {
        sum+=values[key];
    }
    return sum;
}

console.log(sum(1,2,3,4,5));


//Activity 4
console.log("\nActivity 4");
console.log("\nTask 7");

const prod=(a,b=9)=>{
    return a*b;
}

console.log(prod(5));
console.log(prod(5,8));

//Activity 5

console.log("\nActivity 5");
console.log("\nTask 8");

const getLaptop = (make,model,year)=>{
    return{
        make,
        model,
        year,
        version(){
            console.log(`The laptop is launched in year ${year} and is version 1 `);
        }
    }
}

let buy = getLaptop("Apple","Macbook",2019);

console.log(buy);
buy.version();
buy=getLaptop("Hp","Pavilion",2020)

console.log(buy);
buy.version()

console.log("\nTask 9");

const company = "Apple";
const product = "Iphone";

const obj = {
    [company]:product
};

console.log(obj);

//Feature Request

console.log("\nFeature Request");

//F1

console.log(`Hi, My name is ${name}, and my age is ${age} `);

//F2

let arr2=[20,30,40,50,60];

const [val1,val2, ...val3]=arr2;

console.log(val3);

//F3
console.log(sum(1,2,3,4,5));

//F4
console.log(prod(10));
console.log(prod(10,4));

//F5
buy=getLaptop("Asus","Vivobook",2020)
console.log(buy.version());