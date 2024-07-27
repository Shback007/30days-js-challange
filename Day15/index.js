//Activity 1

console.log("\nActivity 1");

console.log("\nTask 1");

const Outer=()=>{
    const a = "Hello, I am from Outer Function"

    const inner= ()=>{
        return a;
    }

    return inner;
}

console.log(Outer()());

console.log("\nTask 2");

const createCounter=()=>{
    let counter = 0;

    return{
        increment: function(){
            counter++;
        },
        getValue: function(){
            return counter;
        }
    };
}

const b = createCounter();

b.increment();
console.log(b.getValue());

b.increment()
console.log(b.getValue());

//Activity 2

console.log("\nActivity 2");

console.log("\nTask 3");

const  CreateIDGenerator=()=>{
    let lastId = Math.floor(Math.random()*10);

    return function(){
        lastId++;
        return lastId;
    }
}

const generateId = CreateIDGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());

console.log("\nTask 4");

const createGreeter = (name)=>{
    return function(){
        return `Hello ${name}`;
    } 
}

const Sagnik = createGreeter('Sagnik');
console.log(Sagnik());

const Alice = createGreeter('Alice');
console.log(Alice());

//Activity 3

console.log("\nActivity 3");

console.log("\nTask 5");

const funcArray = [];

for(let i =0;i<5;i++){
    funcArray.push(
        (function(index){
            return function(){
                console.log(index);
            }
        })(i)
    )
}

funcArray[0]()
funcArray[1]()
funcArray[2]()
funcArray[3]()
funcArray[4]()

//Activity 4

console.log("\nActivity 4");

console.log("\nTask 6");

const createItemManager=()=>{
    let items=[];

    return {
        addItem: function(item){
            items.push(item);
            console.log(`${item} added.`);
        },
        removeItem: function(item){
            const index = items.indexOf(item);
            if(index > -1){
                items.splice(index, 1);
                console.log(`${item} removed`);
            }else{
                console.log(`${item} not found`);
            }
        },
        listItems: function(){
            if(items.length ===0){
                console.log('No items.');
            }else{
                console.log('Items:',items.join(', '));
            }
        }
    };
}

const myItemManager = createItemManager();

myItemManager.addItem('Apple');
myItemManager.addItem('Banana');
myItemManager.listItems();

myItemManager.removeItem('Apple');
myItemManager.listItems();

myItemManager.removeItem('Apple')

//Activity 5

console.log("\nActivity 5");

console.log("\nTask 7");

function memorize(fn){
    const cache={};

    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }else{
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function add(a,b){
    console.log('Computing...');
    return a+b;
}

const memorizeAdd = memorize(add);

console.log(memorizeAdd(1,2));
console.log(memorizeAdd(1,2));
console.log(memorizeAdd(2,3));
console.log(memorizeAdd(2,3));

console.log("\nTask 8");

const fact = (n)=>{
    if(n==0||n==1){ 
        console.log("Computing...");
        return 1;
    }
    return n *fact(n-1);
}

const memorizeFact = memorize(fact);

console.log(memorizeFact(0));
console.log(memorizeFact(0));
console.log(memorizeFact(6));
console.log(memorizeFact(6));