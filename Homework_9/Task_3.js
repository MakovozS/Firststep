const car1 = {
    brand: "Ford",
    model: "Fiesta",
    year: 2020
};

const car2 = {
    brand: "Ford",
    model: "Mustang",
    owner: "`Svitlana"
};

const car3 = {...car1, ...car2};

console.log(car3)