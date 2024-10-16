function areaCalc (width, height) {
    let area = width * height
    return area;
}

let result = areaCalc (6, 13);
console.log(result)

let areaExp = function (width2, height2) {
    return width2 * height2;
}

console.log(areaExp(2, 8));

let areaArr = (width3, height3) => width3 * height3

console.log(areaArr (3, 10))
