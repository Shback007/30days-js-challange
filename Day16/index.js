//Activity 1

console.log("\nActivity 1");

console.log("\nTask 1");

const fact =(n)=>{
    if(n==0||n==1) return 1;
    return n * fact(n-1);
}

console.log(fact(0));
console.log(fact(1));
console.log(fact(5));
console.log(fact(7));

console.log("\nTask 2");

const fib = (n)=>{
    if(n<=1) return n;
    return fib(n-1)+ fib(n-2);
}


console.log(fib(0));
console.log(fib(6));
console.log(fib(7));

//Activity 2

console.log("\nActivity 2");

console.log("\nTask 3");

const SumArr = (arr)=>{
    if(arr.length===0) return 0;

    return arr[0]+SumArr(arr.slice(1))
}

console.log(SumArr([1,2,3,4,5]));
console.log(SumArr([5,4,3,2,1]));
console.log(SumArr([1,2,3,4,5,6,7]));


const findMax = (arr)=>{
    if(arr.length===1){
        return arr[0];
    }
    const max = findMax(arr.slice(1));
    return arr[0]>max ? arr[0]:max;
}

console.log(findMax([5,7,3,4,9]));

//Activity 3

console.log("\nActivity 3");

console.log("\nTask 5");

const reverseStr = (str)=>{
    if(str==="") return "";
    else return reverseStr(str.substr(1)) + str.charAt(0);
}

console.log(reverseStr("Hello"));

console.log("\nTask 6");


const isPalindrome=(str)=>{
    if(str.length <= 1) return true
    if(str[0] !==str[str.length-1]) return false

    return isPalindrome(str.slice(1,-1));
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));

console.log("\nActivity 4");

console.log("\nTask 7");

const binarySearch=(arr,target,low=0,high=arr.length-1)=>{
    if(low>high) return -1;

    const mid = Math.floor((low+(high-low)/2))

    if(arr[mid]==target) return mid;

    if(arr[mid]>target) return binarySearch(arr,target,low,mid-1);
    return binarySearch(arr,target,mid+1,high);
}

const arr2=[1,2,3,4,5,6,7,8,9];
const target = 6;

const result = binarySearch(arr2,target);

console.log(result);

console.log("\nTask 8");

const countOrccur=(arr,target)=>{
    if(arr.length===0) return 0;

    const count = arr[0]===target ? 1 : 0;

    return count +countOrccur(arr.slice(1),target);
}
const arr3=[3,3,4,5,6,7,7,7,8,9]
console.log(countOrccur(arr3,7));

//Activity 5

console.log("\nActivity 5");

console.log("\nTask 9");

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const inOrderTraversal=(node)=>{
    if(node===null) return;

    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right)
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

inOrderTraversal(root)

console.log("\nTask 10");


const calculateDepth=(node)=>{
    if(node===null) return 0;
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth,rightDepth) + 1;
}

const depth = calculateDepth(root);

console.log(depth);