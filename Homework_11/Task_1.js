function textWithDelay(text, delay) {
    setTimeout (() => {
    console.log(text);
}, delay);
}

textWithDelay ("Text appears in 5 seconds", 5000)

