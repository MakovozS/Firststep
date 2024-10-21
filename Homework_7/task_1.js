function handleNum (number, numevenCallback, numoddCallback) {
    if (number % 2 ===0) {
        numevenCallback();
    } else {numoddCallback()
    };
}

function handleEven () {
    console.log("number is even")
}
function handleOdd () {
    console.log("number is odd")
}
handleNum (6, handleEven, handleOdd)
handleNum (9, handleEven, handleOdd)
handleNum (0, handleEven, handleOdd)
