//Activity 1

console.log("\nActivity 1");

console.log("\nTask 1 & 2");
class Node{
    constructor(value, next=null){
        this.value = value;
        this.next= next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(value){
        const newNode = new Node(value);
        if(this.head ===null) this.head = newNode;
        else{
            let current = this.head;
            while (current.next !== null) current = current.next;
            current.next = newNode;
        }
    }
    remove() {
        if (this.head === null) {
          return null;
        }
        if (this.head.next === null) {
          this.head = null;
          return;
        }
        let current = this.head;
        let previous = null;
        while (current.next !== null) {
          previous = current;
          current = current.next;
        }
        previous.next = null;
      }
      display() {
        let current = this.head;
        const values = [];
        while (current !== null) {
          values.push(current.value);
          current = current.next;
        }
        console.log(values.join(' -> '));
      }

}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();
list.remove();
list.display();

//Activity 2

console.log("\nActivity 2");

console.log("\nTask 3");

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    display() {
      console.log(this.items.join(' -> '));
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();
console.log(stack.peek());
stack.pop();
stack.display();
console.log(stack.peek());


console.log("\nTask 4");

function reverseString(str) {
    const stack = new Stack();
    
    for (let char of str) {
      stack.push(char);
    }
    
    let reversedStr = '';
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
    
    return reversedStr;
  }
  
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  console.log(`Original string: ${originalString}`);
  console.log(`Reversed string: ${reversedString}`);

//Activity 3

console.log("\nActivity 3");

console.log("\nTask 5");

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the first element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    // View the first element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Display all elements in the queue
    display() {
      console.log(this.items.join(' -> '));
    }
  }
  
  // Example usage
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.display(); // Output: 1 -> 2 -> 3
  console.log(queue.front()); // Output: 1
  queue.dequeue();
  queue.display(); // Output: 2 -> 3
  console.log(queue.front()); // Output: 2

  console.log("\nTask 6");

  function simulatePrinterQueue() {
    const printerQueue = new Queue();
  
    // Add print jobs to the queue
    printerQueue.enqueue('Print Job 1');
    printerQueue.enqueue('Print Job 2');
    printerQueue.enqueue('Print Job 3');
    console.log('Current Printer Queue:');
    printerQueue.display(); // Output: Print Job 1 -> Print Job 2 -> Print Job 3
  
    // Process print jobs in order
    while (!printerQueue.isEmpty()) {
      const job = printerQueue.dequeue();
      console.log(`Processing: ${job}`);
    }
  
    console.log('All print jobs have been processed.');
  }
  
  // Example usage
  simulatePrinterQueue();

  //Activity 4

  console.log("\nActivity 4");

  console.log("\nTask 7 & 8");

  class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a value into the binary tree
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    // Helper method to insert a node into the tree
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // Perform in-order traversal and display nodes
    inOrderTraversal() {
      this._inOrderHelper(this.root);
    }
  
    // Helper method for in-order traversal
    _inOrderHelper(node) {
      if (node !== null) {
        this._inOrderHelper(node.left);
        console.log(node.value);
        this._inOrderHelper(node.right);
      }
    }
  }
  
  // Example usage
  const tree = new BinaryTree();
  tree.insert(5);
  tree.insert(3);
  tree.insert(7);
  tree.insert(2);
  tree.insert(4);
  tree.insert(6);
  tree.insert(8);
  
  console.log('In-order traversal:');
  tree.inOrderTraversal(); 
  // Output: 2 3 4 5 6 7 8

  //Activity 5

  console.log("\nActivity 5");

  console.log("\nTask 9");

  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    // Add an edge between two vertices in the graph
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // If the graph is undirected
      }
    }
  
    // Perform a breadth-first search (BFS) starting from a given vertex
    bfs(start) {
      const queue = [start];
      const visited = new Set();
      visited.add(start);
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        console.log(vertex);
  
        for (const neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
    bfsShortestPath(start, end) {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start);
    
        while (queue.length > 0) {
          const path = queue.shift();
          const vertex = path[path.length - 1];
    
          if (vertex === end) {
            return path;
          }
    
          for (const neighbor of this.adjacencyList[vertex]) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              const newPath = [...path, neighbor];
              queue.push(newPath);
            }
          }
        }
    
        return null; // If no path is found
      }

  }
  
  // Example usage
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  
  console.log('BFS starting from vertex A:');
  graph.bfs('A'); 
  // Output: A B C D E
  

  console.log("\nTask 10");

  console.log('Shortest path from A to E:');
const shortestPath = graph.bfsShortestPath('A', 'E');
console.log(shortestPath); 