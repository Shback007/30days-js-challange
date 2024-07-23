//Activity 1

console.log("\nActivity 1");



const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("\nTask 1");
       resolve("I have been printed after 2 seconds");
    },2000)
})

promiseOne.then((msg)=>{
    console.log(msg);
})

//Task 2
const PromiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let b=true;
        console.log("\nTask 2");
        if(!b){
            resolve("No error")
        }else{
            reject("Error Something went wrong")
        }
    },2000)
})

PromiseTwo.catch((error)=>{
    console.log(error);
})

//Activity 2
setTimeout(()=>{
    console.log("\nTask 3");
},2000)

// function fetchData(data,delay){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(`Fetched ${data}`);
//             resolve(data);
//         },delay);
//     })
// }

function fetchFromServer(url) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        const delay = 2000;
        setTimeout(() => {
            console.log(`Fetched data from: ${JSON.stringify(url)}`);
            resolve(`Data from ${JSON.stringify(url)}`);
        }, delay);
    });
}
import { dataFile1 } from "./data.js";
import { dataFile2 } from "./data.js";
import { dataFile3 } from "./data.js";
import { dataFile4 } from "./data.js";
const url1= dataFile1
const url2= dataFile2
const url3= dataFile3
const url4= dataFile4

fetchFromServer(url1)
    .then(() => fetchFromServer(url2))
    .then(() => fetchFromServer(url3))
    .then(() => fetchFromServer(url4))
    .catch(error => console.error('Error fetching data:', error));

// fetchData('Data 1', 2000)
// .then(()=>fetchData('Data 2',2000))
// .then(()=>fetchData('Data 3',3000))
// .then(()=>fetchData('Data 4',500))

//Task 4
const work= async(t)=>{
     return await new Promise((resolve,reject)=>{
        if(t){
            setTimeout(()=>{
                resolve("Work resolved");
            },10000)
        }else{
            setTimeout(()=>{
                reject("Rejected");
            },10000)
            
        }
    })
}

work(1).then((msg)=>{
    console.log("\nTask 4");
    console.log(`Done ${msg}`);
})
work(0).catch((err)=>{
    console.log("\nTask 5");
    console.log(err);
})

//Activity 4
//Task 6

setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
    })
    .catch((error) =>{
        console.log(error);
    })
},10000)


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}

setTimeout(()=>{
    console.log("\nTask 8 & 9");
    getAllUsers()
},10000)


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 3 Resolved")
    },10000)
})
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 4 Resolved")
    },10000)
})
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise 5 Resolved")
    },10000)
})

Promise.all([promiseThree,promiseFour,promiseFive])
.then((values)=>{
    console.log(values);
}).catch((err)=>{
    console.log(err);
})
Promise.race([promiseThree,promiseFour,promiseFive])
.then((values)=>{
    console.log(values);
}).catch((err)=>{
    console.log(err);
})


//Feature Request

//Refer to above programs