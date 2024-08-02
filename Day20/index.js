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

  //Activity 2
console.log("\nActivity 2");

console.log("\nTask 3");

document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('userForm');
  const savedDataElement = document.getElementById('savedData')

  const saveToLocalStorage=(name,email)=>{
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
  }

  const getFromLocalStorage=()=>{
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    return { name, email };
  }
  const displaySavedData=()=> {
    const { name, email } = getFromLocalStorage();
    if (name && email) {
        savedDataElement.textContent = `Name: ${name}, Email: ${email}`;
    } else {
        savedDataElement.textContent = 'No data saved';
    }
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    saveToLocalStorage(name, email);
    displaySavedData();
  });
displaySavedData();
})

console.log("\nTask 4");

document.addEventListener('DOMContentLoaded',()=>{
  const removeItemButton = document.getElementById('removeItemButton');

  const logLocalStorageContent=()=>{
    console.log('LocalStorage Content:',JSON.stringify(localStorage,null,2));
  }

  const removeFromLocalStorage=(key)=>{
    localStorage.removeItem(key);
  }

  logLocalStorageContent();

  removeItemButton.addEventListener('click',()=>{
    const key = 'userName';
    removeFromLocalStorage(key);

    logLocalStorageContent();
  })
})

//Activity 3

console.log("\nActivity 3");

console.log("\nTask 5");

document.addEventListener('DOMContentLoaded', ()=>{
  const saveValueButton = document.getElementById('saveValueButton')
  const retrivedValueButton = document.getElementById('retrieveValueButton')

  const key = 'examplekey';
  const value = 'exampleValue';

  const saveToSessionStorage=(key, value)=>{
    sessionStorage.setItem(key,value);
    console.log(`Saved to SessionStorage ${key} = ${value}`);
  }

  const retrieveFromSessionStorage=(key)=>{
    const retrievedValue = sessionStorage.getItem(key);
    console.log(`Retrieved from sessionStorage: ${key} = #{retrievedValue}`);
    return retrievedValue;
  }

  saveValueButton.addEventListener('click',()=>{
    saveToSessionStorage(key,value);
  })

  retrivedValueButton.addEventListener('click',()=>{
    retrieveFromSessionStorage(key)
  })
})

console.log("\nTask 6");

document.addEventListener('DOMContentLoaded', () => {
  const saveObjectButton = document.getElementById('saveObjectButton');
  const retrieveObjectButton = document.getElementById('retrieveObjectButton');

  const key = 'exampleObject';
  const value = {
      name: 'John Doe',
      email: 'john.doe@example.com'
  };

  // Function to save an object to sessionStorage
  function saveObjectToSessionStorage(key, value) {
      sessionStorage.setItem(key, JSON.stringify(value));
      console.log(`Saved to sessionStorage: ${key} = ${JSON.stringify(value)}`);
  }

  // Function to retrieve and parse an object from sessionStorage
  function retrieveObjectFromSessionStorage(key) {
      const retrievedValue = sessionStorage.getItem(key);
      const parsedValue = JSON.parse(retrievedValue);
      console.log(`Retrieved from sessionStorage: ${key} =`, parsedValue);
      return parsedValue;
  }

  // Event listener for save button click
  saveObjectButton.addEventListener('click', () => {
      saveObjectToSessionStorage(key, value);
  });

  // Event listener for retrieve button click
  retrieveObjectButton.addEventListener('click', () => {
      retrieveObjectFromSessionStorage(key);
  });
});

//Activity 4

console.log("\nActivity 4");

console.log("\nTask 7");

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');
  const savedDataElement = document.getElementById('savedData');

  // Function to save data to sessionStorage
  function saveToSessionStorage(name, email) {
      const userData = { name, email };
      sessionStorage.setItem('userData', JSON.stringify(userData));
  }

  // Function to retrieve data from sessionStorage
  function getFromSessionStorage() {
      const userData = sessionStorage.getItem('userData');
      return userData ? JSON.parse(userData) : null;
  }

  // Function to display saved data
  function displaySavedData() {
      const userData = getFromSessionStorage();
      if (userData) {
          savedDataElement.textContent = `Name: ${userData.name}, Email: ${userData.email}`;
      } else {
          savedDataElement.textContent = 'No data saved';
      }
  }

  // Event listener for form submission
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.name.value;
      const email = form.email.value;
      saveToSessionStorage(name, email);
      displaySavedData();
  });

  // Display saved data on page load
  displaySavedData();
});

console.log("\nTask 8");

document.addEventListener('DOMContentLoaded', () => {
  const removeItemButton = document.getElementById('removeSessionItemButton');

  // Function to log the content of sessionStorage
  function logSessionStorageContent() {
      console.log('SessionStorage Content:', JSON.stringify(sessionStorage, null, 2));
  }

  // Function to remove an item from sessionStorage
  function removeFromSessionStorage(key) {
      sessionStorage.removeItem(key);
  }

  // Log the content of sessionStorage before removal
  logSessionStorageContent();

  // Event listener for button click
  removeItemButton.addEventListener('click', () => {
      const key = 'userData'; // Specify the key of the item to remove
      removeFromSessionStorage(key);
      
      // Log the content of sessionStorage after removal
      logSessionStorageContent();
  });
});


//Activity 5

console.log("\nActivity 5");

console.log("\nTask 9");
document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('saveButton');
  const retrieveButton = document.getElementById('retrieveButton');

  const key = 'exampleKey';
  const value = 'exampleValue';

  // Function to save value to both localStorage and sessionStorage
  function saveToBothStorages(key, value) {
      localStorage.setItem(key, value);
      sessionStorage.setItem(key, value);
      console.log(`Saved to localStorage and sessionStorage: ${key} = ${value}`);
  }

  // Function to retrieve and log values from both localStorage and sessionStorage
  function retrieveFromBothStorages(key) {
      const localStorageValue = localStorage.getItem(key);
      const sessionStorageValue = sessionStorage.getItem(key);
      console.log(`Retrieved from localStorage: ${key} = ${localStorageValue}`);
      console.log(`Retrieved from sessionStorage: ${key} = ${sessionStorageValue}`);
  }

  // Event listener for save button click
  saveButton.addEventListener('click', () => {
      saveToBothStorages(key, value);
  });

  // Event listener for retrieve button click
  retrieveButton.addEventListener('click', () => {
      retrieveFromBothStorages(key);
  });
});

console.log("\nTask 10");

document.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.getElementById('clearButton');

  // Function to clear all data from both localStorage and sessionStorage
  function clearBothStorages() {
      localStorage.clear();
      sessionStorage.clear();
      console.log('Both localStorage and sessionStorage have been cleared.');
  }

  // Function to verify that both localStorage and sessionStorage are empty
  function verifyBothStoragesAreEmpty() {
      const isLocalStorageEmpty = localStorage.length === 0;
      const isSessionStorageEmpty = sessionStorage.length === 0;
      
      console.log(`Is localStorage empty? ${isLocalStorageEmpty}`);
      console.log(`Is sessionStorage empty? ${isSessionStorageEmpty}`);
  }

  // Event listener for clear button click
  clearButton.addEventListener('click', () => {
      clearBothStorages();
      verifyBothStoragesAreEmpty();
  });

  // Initial verification on page load
  verifyBothStoragesAreEmpty();
});