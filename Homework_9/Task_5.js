const users = [
    {name: "Sasha", age: 23, city: "Lviv"},
    {name: "Ksusha", age: 23, city: "Dnipro"},
    {name: "Olena", age: 25, city: "Kharkiv"}
];
for (const user of users) {
    console.log(`${user.name} is ${user.age} y.o.,  live in ${user.city}`)
};

const users2 = [
    {name2: "Sasha2", age2: 20, city2: "Lviv2"},
    {name2: "Ksusha2", age2: 21, city2: "Dnipro2"},
    {name2: "Olena2", age2: 22, city2: "Kharkiv2"}
];
for (const {name2, age2, city2} of users2) {
    console.log(`${name2} is  ${age2} y.o., live in ${city2}`)
}