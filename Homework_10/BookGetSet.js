export class BookGetSet {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === "string") {
            this._name = value;
        } else {
            console.log("Назва має бути рядком");
        }
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value === "string") {
            this._author = value;
        } else {
            console.log("Автор має бути рядком");
        }
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value === "number" && value <= 2025 && value >= 0) {
            this._year = value;
        } else {
            console.log("Неіснуючий рік видання або рік має бути числом");
        }
    }


    printInfo() {
        console.log(`ця кніга називається "${this.name}", автор ${this.author}, випущена у ${this.year} році`);
    }


static theOldestBook(books) {
    let oldestBook = books[0];
    for (let i = 1; i < books.length; i++) {
        if (books[i].year < oldestBook.year) {
            oldestBook = books[i];
        }
    }
    return oldestBook;
}
}
export const book1 = new BookGetSet(666, "Ілля Кантор", 2024);
export const book2 = new BookGetSet("Foundations of Software Testing", "Дороті Грем", 2028);
export const book3 = new BookGetSet("Full Stack Testing", 777, 2022);
export const book4 = new BookGetSet("Full Stack Testing", "Gayathri Mohan", 2022);

book1.printInfo();
book2.printInfo();
book3.printInfo();
book4.printInfo()