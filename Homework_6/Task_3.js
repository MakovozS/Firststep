
function checkOrder (available, ordered) {
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods."
    } else if (ordered ==0) {
        return "Your order is empty"
    } else if (available >= ordered) {
        return "Your order is accepted"
    }
}

console.log(checkOrder(10, 0))
console.log(checkOrder(10, 2))
console.log(checkOrder(10, 10))
console.log(checkOrder(2, 10))
console.log(checkOrder(0, 0))