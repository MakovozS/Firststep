import {Book} from './Book.js'


export class eBook extends Book {
    constructor (name, author, year, format) {
        super(name, author, year);
        this.format = format;
    }
    printInfo() {
        console.log(`ця кніга називається "${this.name}", автор ${this.author}, випущена у ${this.year} році та має формат ${this.format}`)
    }
    
}
const ebook1 = new eBook ("Сучасний підручник з JavaScript", "Ілля Кантор", 2024, "fb2");
const ebook2 = new eBook ("Foundations of Software Testing", "Дороті Грем", 2019, "mobi");
const ebook3 = new eBook ("Full Stack Testing", "Gayathri Mohan", 2022, "epub");

ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo()