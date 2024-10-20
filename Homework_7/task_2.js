function getZero (num) {
    console.log(num);
    if (num <= 0) {
        return;
    }
    getZero(num-1);
}

getZero (9)