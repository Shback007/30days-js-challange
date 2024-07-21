//Activity 1
console.log("\nActivity 1");

console.log("\nTask 1");
const text = document.getElementById('text');

text.addEventListener("click",(e)=>{
    text.textContent="I Have changed";
})


console.log("\nTask 2");
const background=document.querySelector('.bg-color');

background.addEventListener("click",(e)=>{
    background.style.backgroundColor="red";
})


//Activity 2
console.log("\nActivity 2");

console.log("\nTask 3");

const div=document.createElement('div');

div.className="main";
div.id=Math.round(Math.random()*10+1)
div.style.backgroundColor="aqua";
div.style.padding = "12px"
const addText=document.createTextNode("I have been added dynamically")
div.appendChild(addText);

document.body.appendChild(div)

console.log("\nTask 4");

const lidiv=document.querySelector("#list")
const ul = document.querySelector("#one")
const li = document.createElement('li')

li.innerHTML = "<li>Four</li>"
const button = document.getElementById('newlist')
button.addEventListener("click",(e)=>{
    ul.appendChild(li);
    lidiv.appendChild(ul);
    button.style.visibility='hidden';
})

//Activity 3
console.log("\nActivity 3");

console.log("\nTask 5");
const remove=document.getElementById('remove')
remove.remove()

console.log("\nTask 6");
const child=document.getElementById("child1")

child.parentNode.addEventListener('click',(e)=>{
child.parentNode.removeChild(child.parentElement.lastElementChild);
})



//Activity 4
console.log("\nActivity 4");

console.log("\nTask 7");

const img= document.querySelector("#img")

img.addEventListener("click",(e)=>
    {img.innerHTML="<img src ='https://lh3.googleusercontent.com/pw/AP1GczPbRmgYzF8No16gtq1_RUXUS6-0G8RucvF-IK-IJ8Bunihf00Jnta1VWoyuuO1alxaWbVlZzZrBDnE18lTHvhgtxdnfdPMiCBt9mC1gztDuahtArXIPG6IPM5rDFLbViVoF9SlnE2QDKc4qQNY0lmkHZ_piIYdfDVvp90f6k6gpYS1aK8_lF-pwfvHsWB6iNJagts2KNxDodV28RrkR4QHWLtVzu-xRiJ_5pRGcJv1SKxvvn8IxSOwKmbwHTefY3T2QrgAL7TfnKEaaDBuEbKuw27jdBQ7dm0x9H_MFdwmyW_4qltH5dfDO6x7qLJdmCjx2Z2-dwH11vZVSXAGZXoqJESJLb4zpNKCH7ZnFmK3bxe9l4T4s9yQ03VqFadBcUQsoXIrsQnIPMQFvDBllLrcpjDFV_l4mFeBJNQxj8Gmy-YGbtWfXy_uUf2-ta6lWl8VSD3CMF4DU4XDWDcVqe-BphbLY0DsH8llJqvivcPhGWfVpstmKquVf3M_YwZYelCttAB09A5TS4SjeClStf9knrIVu5ce7t_oYwaCkoufWQHuXON1RswxKSwIsUqi80-LdpxAANq2GIvxR1VVQFOUOT7sLCN5EFejLCHmPRChazWCLjk9Sek_tw89KlbzDjoj4p2XhVeumpdwj9_-HkdIJbW0WJs3STZPyrdPySoe_iXFa8GqLrR7HvVSCtQF2URkqGbR2D6FYgPF0AGtcwNw_9S5t348Z1D-4NsD7zkH6vyVkUcT9wIXvJSv_0YOY9MmF6eZwZyHDfUVojFTb_COMXLr8uIoUNTDRI7RZzCU4RnfS6-6mT1PqMnXwmnxachq2zznXTaetgodLNCkuKsTD7pFxDxH7SbbGtse09VS2M1bJXgujvboUFmN7yD8TnDqRoNvZBItL1DnqiIgoiL1EWnO9txq5GJqBulhVgRnn8iwTr7YHY4n3xLivR4Sm_etzXeGdUNlmAxF0GNRY4ryeDL4_3mywPQ=w949-h711-s-no-gm?authuser=0' height = 400px>"})

console.log("\nTask 8");

function addClass(){
    let element = document.getElementById('myElement');
    element.classList.add('highlight')
}

function removeClass(){
    let element = document.getElementById('myElement');
    element.classList.remove('highlight')
}

function toggleClass(){
    let element = document.getElementById('myElement');
    element.classList.toggle('highlight')
}

//Activity 5

console.log("\nActivity 5");

console.log("\nTask 9");

const p = document.querySelector("#tochange")

const button2 = document.querySelector("#para")


button2.addEventListener("click",(e)=>{
    p.innerText = "Hello, I am Shback007"
})

console.log("\nTask 10");
p.addEventListener("mouseover",(e)=>{
    // console.log(e.target.style.borderColor)
    e.target.style.borderColor = 'blue'
})