// import { BookGetSet } from './BookGetSet.js';
// import { eBookGetSet } from './eBookGetSet.js';


// // const book1 = new BookGetSet("First book ", "Author 1", 1900);
// // const book2 = new BookGetSet("Second book ", "Author 2", 2005);
// // const book3 = new BookGetSet("Third book", "Author 3", 2000);
// // const ebook1 = new eBookGetSet("First ebook ", "Author 11", 2025, "epub");
// // const ebook2 = new eBookGetSet("Second ebook ", "Author 12", 2001, "mobi");
// // const ebook3 = new eBookGetSet("Third ebook ", "Author 13", 2023, "pdf");



// // const books = [book1, book2, book3, ebook1, ebook2, ebook3];

// const books = [book1, book2, book3, eBookGetSet1, eBookGetSet2, eBookGetSet3]

// const oldestBook = BookGetSet.theOldestBook(books);
// console.log("Найдавніша книга:");
// oldestBook.printInfo();


// const ebookFromBook = eBookGetSet.fromBookGetSet(oldestBook, "fb2");
// console.log("Створена Електронна книга:");
// ebookFromBook.printInfo();

import { BookGetSet, book1, book2, book3 } from './BookGetSet.js';
import { eBookGetSet, eBookGetSet1, eBookGetSet2, eBookGetSet3 } from './eBookGetSet.js';

const books = [book1, book2, book3, eBookGetSet1, eBookGetSet2, eBookGetSet3];

const oldestBook = BookGetSet.theOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();

const ebookFromBook = eBookGetSet.fromBookGetSet(oldestBook, "fb2");
console.log("Створена Електронна книга:");
ebookFromBook.printInfo();