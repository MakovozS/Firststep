import { BookGetSet } from './BookGetSet.js';

export class eBookGetSet extends BookGetSet {
    constructor(name, author, year, format) {
        super(name, author, year);
        this.format = format; 
    }

    get format() {
        return this._format;
    }

    set format(value) {
        // Проверка формата
        if (value === "epub" || value === "mobi" || value === "fb2") {
            this._format = value;
        } else {
            console.log("Формат не підтримується");
        }
    }

    static fromBookGetSet(book, format) {
        return new eBookGetSet(book.name, book.author, book.year, format);
    }

    printInfo() {
        console.log(`ця кніга називається "${this.name}", автор ${this.author}, випущена у ${this.year} році та має формат ${this.format}`);
    }
}


export const eBookGetSet1 = new eBookGetSet("Сучасний підручник з JavaScript", "Ілля Кантор", 2024, "fb2");
export const eBookGetSet2 = new eBookGetSet("Foundations of Software Testing", "Дороті Грем", 1900, "mobi");
export const eBookGetSet3 = new eBookGetSet("Full Stack Testing", "Gayathri Mohan", 2022, "epub");


eBookGetSet1.printInfo();
eBookGetSet2.printInfo();
eBookGetSet3.printInfo()