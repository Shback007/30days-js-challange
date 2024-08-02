//Activity 1
console.log("\nActivity 1");

console.log("\nTask 1");

const twoSum = (arr,target)=>{
    const numMap = new Map();

    for(let i=0; i < arr.length; i++){
        const complement = target - arr[i];
        if(numMap.has(complement)) return [numMap.get(complement), i]
        numMap.set(arr[i],i)
    }
    return null;
}

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,7,11,15],7));
console.log(twoSum([2,7,11,15],17));

//Activity 2
console.log("\nActivity 2");

console.log("\nTask 2");

const reverseInt=(num)=>{
    const isNegative = num<0;

    let reversedStr = Math.abs(num).toString().split('').reverse().join('');

    let reversedNum = parseInt(reversedStr, 10);

    if(isNegative) reversedNum = -reversedNum;

    return reversedNum;
}

console.log(reverseInt(12345));
console.log(reverseInt(-12345));
console.log(reverseInt(1000));
console.log(reverseInt(0));

//Activity 3

console.log("\nActivity 3");

console.log("\nTask 3");
const isPalindrome = (num)=>{
    if( num < 0) return false;

    const numStr = num.toString()
    const reversedStr = numStr.split('').reverse().join('');

    return numStr === reversedStr;

}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(12321));
console.log(isPalindrome(0));

//Activity 4

console.log("\nActivity 4");

console.log("\nTask 4");

class ListNode {
    constructor(value = 0, next = null){
        this.value = value;
        this.next = next;
    }
}

const mergeTwoSortedLists=(l1,l2)=>{
    const dummy = new ListNode();
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) current.next = l1;
    else current.next = l2;
    
    return dummy.next;
}

const printList =(node)=>{
    let result = [];
    while (node !== null) {
        result.push(node.value);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

const mergedList = mergeTwoSortedLists(l1, l2);
printList(mergedList);

//Activity 5

console.log("\nActivity 5");
console.log("\nTask 5");

const isValid = (str)=>{
    const stack = []

    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of str) {
        if(bracketMap[char]){
            const topElement = stack.pop();
            if (topElement !== bracketMap[char]) return false;
        }
        else stack.push(char)
    }
    return stack.length ===0;
}

console.log(isValid("()"));    
console.log(isValid("()[]{}"));     
console.log(isValid("(]"));    