localStorage.setItem('myStringKey', 'Hello, World!');

const retrivedValue = localStorage.getItem('myStringKey');

console.log(retrivedValue);

// Define an object
const myObject = {
    name: "John Doe",
    age: 30,
    occupation: "Developer"
  };
  
  // Convert the object to a JSON string and save it to localStorage
  localStorage.setItem('myObject', JSON.stringify(myObject));
  
  // Retrieve the JSON string from localStorage
  const retrievedObjectString = localStorage.getItem('myObject');
  
  // Parse the JSON string back into an object
  const retrievedObject = JSON.parse(retrievedObjectString);
  
  // Log the object to the console
  console.log(retrievedObject);