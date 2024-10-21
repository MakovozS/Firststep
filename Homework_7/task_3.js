function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Error. Denominator shouldn't equal 0");
    } else if (isNaN(numerator) || isNaN(denominator)) {
        throw new Error("Error. Values must be numeric");
    }
    
    let result = numerator / denominator;
    return result;
}

try {
    console.log(divide(4, 2));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(4, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(0, 4));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide("a", 2));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(4, "o"));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide("a", 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}