//Activity 1

console.log("\nActivity 1");

console.log("\nTask 1");

const findMedianSortedArrays =(nums1, nums2)=>{
    if(nums1.length > nums2.length){
        [nums1, nums2] = [nums2, nums1];
    }

    const x = nums1.length;
    const y = nums2.length;
    let low = 0, high = x;

     while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        const maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const minX = (partitionX === x) ? Infinity : nums1[partitionX];

        const maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        const minY = (partitionY === y) ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
}

console.log(findMedianSortedArrays([1,2,3],[5,6,7]));
console.log(findMedianSortedArrays([1,2,3],[5,6]));
console.log(findMedianSortedArrays([1,2,3],[0]));

//Activity 2

console.log("\nActivity 2");

console.log("\nTask 2");

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeKLists =(lists)=>{
    const minHeap = new MinHeap((a, b) => a.val - b.val);

    for (let list of lists) {
        if (list !== null) minHeap.push(list);
    }

    const dummy = new ListNode();
    let current = dummy;

    while(!minHeap.isEmpty()){
        const smallestNode = minHeap.pop();
        current.next = smallestNode;
        current = current.next;

        if(smallestNode.next !== null ) minHeap.push(smallestNode.next)
    }

    return dummy.next;
}

class MinHeap{
    constructor(compare){
        this.data = [];
        this.compare = compare;
    }
    push(val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }
    
    pop() {
        if (this.data.length === 1) return this.data.pop();
        const root = this.data[0];
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
        return root;
    }
    
    isEmpty() {
        return this.data.length === 0;
    }
    
    bubbleUp(index) {
        const parent = Math.floor((index - 1) / 2);
        if (parent >= 0 && this.compare(this.data[index], this.data[parent]) < 0) {
            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
            this.bubbleUp(parent);
        }
    }
    
    bubbleDown(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let smallest = index;
        
        if (leftChild < this.data.length && this.compare(this.data[leftChild], this.data[smallest]) < 0) {
            smallest = leftChild;
        }
        if (rightChild < this.data.length && this.compare(this.data[rightChild], this.data[smallest]) < 0) {
            smallest = rightChild;
        }
        if (smallest !== index) {
            [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];
            this.bubbleDown(smallest);
        }
    }
}

const l1 = new ListNode(1, new ListNode(4, new ListNode(5)))
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l3 = new ListNode(2, new ListNode(6));

const lists = [l1, l2, l3];
const mergedList = mergeKLists(lists);

let node =mergedList;

while(node){
    console.log(node.val);
    node = node.next;
    
}

//Activity 3

console.log("\nActivity 3");

console.log("\nTask 3");

const trap = (height) => {
    if (height.length === 0) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); 
console.log(trap([4,2,0,3,2,5])); 


//Activity 4
console.log("\nActivity 4");

console.log("\nTask 4");

var solveNQueens = function(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isSafe = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    const solve = (row) => {
        if (row === n) {
            solutions.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.';
            }
        }
    };

    solve(0);
    return solutions;
};

console.log(solveNQueens(4));
console.log(solveNQueens(5));

//Activity 5

console.log("\nActivity 5");

console.log("\nTask 5");

const ladderLength = (beginWord, endWord, wordList) => {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    while (queue.length > 0) {
        let [word, length] = queue.shift();
        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let char of alphabet) {
                const newWord = word.slice(0, i) + char + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); 
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]));
console.log(ladderLength("a", "c", ["a","b","c"]));       

