export const PI = 3.14159;
export const E = 2.71828;

export const add3 = (a,b)=>{
    return a + b;
}

export const subtract1 = (a,b)=>{
    return a-b;
}
export const multiply1 = (a,b)=>{
    return a*b;
}
export const divide1 = (a,b)=>{
    if(b===0) throw new Error('Division by zero is not allowed.');
    return a/b;
}