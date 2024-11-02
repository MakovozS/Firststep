const person = {
    firstName: "Svitlana",
    lastName: "Makovoz",
    age: 100
};
person.email = "makovoz@gmail.com";
delete person.age;

console.log(person)