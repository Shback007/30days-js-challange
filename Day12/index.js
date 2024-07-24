//Activity 1

console.log("\nActivity 1");

console.log("\nTask 1");

const err1=()=>{
    try {
        throw new Error("An intentional error")
    } catch (e) {
        console.error("Error handled:", e.message);
    }
}

err1()

console.log("\nTask 2");

const err2=(num1,num2)=>{
    if(num2==0){
        try{
            throw new Error("Denominator is zero");
        } catch(e){
            console.error("Error handled:", e.message);
        }
    }else{
        console.log(num1/num2)
    }
}

err2(4,0);

//Activity 2

console.log("\nActivity 2");
console.log("\nTask 3");

const err3=()=>{
    try{
        console.log("Inside try block");
        throw new Error("This is am intentional error");
    }catch(e){
        console.error("Inside catch block:", e.message);
    } finally{
        console.log("Inside finally blok");
    }
}

err3()

//Activity 3

console.log("\nActivity 3");

console.log("\nTask 4");

class customError extends Error{
    constructor(message){
        super(message);
        this.name="RandomError"
    }
}

const err4=()=>{
    try {
        console.log("Inside try block");
        throw new customError("This is a custom error created");
    }catch(e){
        if(e instanceof customError){
            console.log("Caught a custom error:", e.message);
        }else{
            console.log("Caught an unexpected error:", e.message);
        }
    }
}

err4();

console.log("\nTask 5");
const err5=(name)=>{
    if(typeof name!='string' || name.trim()===''){
        throw new customError("No input");
    }
    console.log(`\nName: ${name}`);
}

const mainerr5=(message)=>{
    try{
        err5(message);
    }catch(e){
        console.log(`\n${e.name}`);
        console.log(`${e.message}`);
    }

}

mainerr5("");
mainerr5(" ");
mainerr5("Sagnik")

//Activity 4



const randomPromise = ()=>{
    return new Promise((resolve,reject)=>{
        const randomOutcome = Math.random();
        if(randomOutcome< 0.5){
            resolve("Promise Resolved Randomly")
        }else{
            reject(new Error("Promise Rejected Randomly"))
        }
    })
}

randomPromise()
.then((message)=>{
    console.log(message);
}).catch((e)=>{

    console.error("Caught an error:", e.message);
})



async function handleRandomPromise(){
    try{
        const message = await randomPromise();
        console.log(message);
    }catch(e){
        console.error("Caught an error:", e.message);
    }
}

handleRandomPromise()

//Activity 5


const url=fetch("https://invalid-url")

url.then(response=>{
    if(!response.ok){
        throw new Error(`HTTP error! status:${response.status}`)
    }
    return response.json();
})
.then(data=>{
    console.log("Data Received:", data);
})
.catch(e=>{
    console.error("Fetch error:", e.message);
})

async function fetchData(){
    try{
        const response = await fetch("https://invalid-url");
        
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data =await response.json();
        console.log("Data Received:", data);
    }catch(e){
        console.error("Fetch error:", e.message);
    }
}

fetchData()

