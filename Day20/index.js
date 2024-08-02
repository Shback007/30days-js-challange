//Activity 1
console.log("\nActivity 1");
console.log("\nTask 1");
localStorage.setItem('myStringKey', 'Hello, World!');

const retrivedValue = localStorage.getItem('myStringKey');

console.log(retrivedValue);

console.log("\nTask 2");
const myObject = {
    name: "John Doe",
    age: 30,
    occupation: "Developer"
  };
  
  localStorage.setItem('myObject', JSON.stringify(myObject));
  
  const retrievedObjectString = localStorage.getItem('myObject');
  
  const retrievedObject = JSON.parse(retrievedObjectString);

  console.log(retrievedObject);