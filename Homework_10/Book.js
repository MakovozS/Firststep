export class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }



printInfo() {
    
}
}

const book1 = new Book ("Сучасний підручник з JavaScript", "Ілля Кантор", 2024);
const book2 = new Book ("Foundations of Software Testing", "Дороті Грем", 2019);
const book3 = new Book ("Full Stack Testing", "Gayathri Mohan", 2022);

book1.printInfo();
book2.printInfo();
book3.printInfo();