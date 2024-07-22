//Activity 1

//Task 1:
const changeText = document.getElementById('changeText');
const buttonText = document.getElementById('buttonText');
const txt1 = changeText.innerText;
let change = false;
buttonText.addEventListener('click',()=>{
    change = !change;
    if(change){
        changeText.innerText = "Le-do-lo-le-lo-le, le-do-lo-le-lo-le, At your feet, I'm at your feet" 
    }else{
        changeText.innerText = txt1
    }
})
//Task 2
let img = document.querySelector('#img')
let imgButton = document.getElementById('imgButton')

imgButton.addEventListener('dblclick',(e)=>{
    img.classList.toggle('toggle')
})

//Activity 2

//Task 3
const txt3= document.getElementById('cyan')
let prevColor;
txt3.addEventListener('mouseover',(e)=>{
    // console.log(e.target.classList);
    prevColor=e.target.id
    txt3.style.backgroundColor="gray"
})

//Task 4

txt3.addEventListener('mouseout',(e)=>{
    txt3.style.backgroundColor=prevColor
})

//Activity 3

//Task 5
const keys=document.getElementById('keys');
const p1 = document.getElementById('output1');
const p2 = document.getElementById('output2')

keys.addEventListener('keydown',(e)=>{
    p1.innerText="The keydown is:" +e.key
})
//Task 6
keys.addEventListener('keyup',(e)=>{
    p2.innerText = "The keyup is:" +e.key
})

//Activity 4

//Task 7
const form= document.getElementById('form1');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    data.forEach((value,key)=>{
        const newElement = document.createElement('p');
        newElement.innerText = `${key}: ${value}`;
        document.body.appendChild(newElement)
    })
})

//Task 8

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('options');
    const displayParagraph = document.getElementById('selectedValue');

    selectElement.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        displayParagraph.textContent = `Selected value: ${selectedValue}`;
    });
    selectElement.addEventListener('click',(e)=>{
        const selectedValue = e.target.value;
        displayParagraph.textContent = `Selected value: ${selectedValue}`;
    })
});


// task-10
document.addEventListener('DOMContentLoaded', () => {
    const parentElement = document.getElementById('parentElement');
    const displayParagraph = document.getElementById('selectedValue');
    const addElementButton = document.getElementById('addElement');

    // Event listener for the parent element
    parentElement.addEventListener('change', (event) => {
        if (event.target && event.target.classList.contains('dynamic-select')) {
            const selectedValue = event.target.value;
            displayParagraph.textContent = `Selected value: ${selectedValue}`;
        }
    });

    // Add new select element dynamically
    addElementButton.addEventListener('click', () => {
        const newSelect = document.createElement('select');
        newSelect.className = 'dynamic-select';

        const option1 = document.createElement('option');
        option1.value = 'Option 3';
        option1.textContent = 'Option 3';

        const option2 = document.createElement('option');
        option2.value = 'Option 4';
        option2.textContent = 'Option 4';

        newSelect.appendChild(option1);
        newSelect.appendChild(option2);

        parentElement.appendChild(newSelect);
    });
});


// feature request
// ref to all the tasks


