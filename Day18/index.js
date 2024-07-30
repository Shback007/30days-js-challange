//Activity 1

console.log("\nActivity 1");

console.log("\nTask 1");

const swap=(arr,first,second)=>{
    let temp = arr[first];
    arr[first]= arr[second];
    arr[second]= temp;
}

const bubbleSort = (arr)=>{
    for(let i =0; i< arr.length; i++){
        for( let j=0; j< arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}

let arr=[45,34,67,47,98];

console.log(`Bubble Sort: ${bubbleSort(arr)}`);

console.log("\nTask 2");

const getMinIndex=(arr,start,end)=>{
    let min = start;
    for(let i=start;i<=end;i++){
        if(arr[min] > arr[i]) min=i;
    }
    return min;
}


const selectionSort=(arr)=>{
    for(let i=0; i < arr.length; i++){
        let minIndex = getMinIndex(arr, i ,arr.length-1);
        swap(arr,minIndex,i);
    }
    return arr;
}

console.log(`Selection Sort: ${selectionSort(arr)}`);
console.log("\nTask 3");
const quickSort=(arr)=>{
    if(arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for(let i=0; i < arr.length - 1; i++){
        if (arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(`Quick Sort : ${quickSort(arr)}`);

//Activity 2

console.log("\nActivity 2");

console.log("\nTask 4");

const linearSearch=(arr,target)=>{
    if(arr.length === 0) return -1;

    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(element ===target) return i;
    }
    return -1;
}

let ans=linearSearch(arr,target=47);
console.log(`The index at which ${target} is present is ${ans}`);

console.log("\nTask 5");

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    } else {
        return binarySearch(arr, target, left, mid - 1);
    }
}

const sortedArray = [1, 2, 3, 6, 8, 10];
const target2 = 6;
const index = binarySearch(sortedArray, target2);
console.log(index); // Output: 3

//Activity 3

console.log("\nActivity 3");

console.log("\nTask 6");

function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
console.log("Character Occurrences:", countCharacters("hello world"));

console.log("\nTask 7");

function longestSubstringWithoutRepeatingChars(str) {
    let charSet = new Set();
    let left = 0, right = 0;
    let maxLength = 0;
    while (right < str.length) {
        if (!charSet.has(str[right])) {
            charSet.add(str[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        } else {
            charSet.delete(str[left]);
            left++;
        }
    }
    return maxLength;
}
console.log("Longest Substring Without Repeating Characters:", longestSubstringWithoutRepeatingChars("abcabcbb"));

//Activity 4

console.log("\nActivity 4");
console.log("\nTask 8");

function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log("Rotate Array by k Positions:", rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

console.log("\nTask 9");

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log("Merge Two Sorted Arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));
