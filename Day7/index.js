//Activity 1
console.log("\nActivity 1");

console.log("\nTask 1");


const bookcreate=(title,author,year)=>{
    return{
        title,
        author,
        year
    };
}
let book =bookcreate("Lord of the Rings","J.R.R. Tolkien",1937)
console.log(book);

console.log("\nTask 2");
console.log(`Title of the book is:${book.title} and\nAuthor of the book is ${book.author}`);

//Activity 2

console.log("\nActivity 2");

book={
    ...book,
    printDetails:function(){
        console.log(`Title:${book.title}\nAuthor:${book.author}`);
    },
    yearchange:function(year){
        this.year=year
        console.log(book);
    }

}

console.log("\nTask 3");
book.printDetails()
console.log("\nTask 4");
book.yearchange(2000);

//Activity 3
console.log("\nActivity 3");

console.log("\nTask 5");
let library = {
    name:"New Town Library",
    books:[book]
}
library.books.push(bookcreate("Harry Potter","JK Rowling",1997))

console.log(library);

console.log("\nTask 6");
console.log(`Library Name: ${library.name}`)
library.books.map((book)=>{
    if(book){
        console.log(book.title);
    }
});

//Activity 4
console.log("\nActivity 4");
console.log("\nTask 7");
book={
    ...book,
    addString:function(str){
        console.log(`${str} purchased ${this.title} which published on year ${this.year}`);
    }
}

book.addString("Sagnik")

//Activity 5
console.log("\nActivity 5");
console.log("\nTask 8");

for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

console.log("\nTask 9");

console.log(Object.keys(book));
console.log(Object.values(book));

//Feature Request

//F1

let book2=bookcreate("Fifty Shades of Grey","E. L. James",2011);


book2={
    ...book2,
    printDetails:function(){
        console.log(`Title:${book2.title}\nAuthor:${book2.author}`);
    },
    yearchange:function(year){
        this.year=year
        console.log(book2);
    }

}
book2.printDetails()
book2.yearchange(2000);

//F2
let library2 = {
    name:"New Town Library 2",
    books:[book]
}
library2.books.push(bookcreate("Harry Potter","JK Rowling",1997))

console.log(library2);

console.log(`Library Name: ${library2.name}`)
library2.books.map((book2)=>{
    if(book2){
        console.log(book2.title);
    }
});

//F3
for (const key in book2) {
    console.log(`${key}: ${book2[key]}`);
}



console.log(Object.keys(book2));
console.log(Object.values(book2));





