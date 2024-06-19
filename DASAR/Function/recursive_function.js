//kemampuan function memanggi dirinya sendiri

//factorial loop
function factorial(value) {
    let result = 1
    for (let i = 1; i <= value; i++) {
        result *= 2
    }

    return result
}

document.write(factorial(5))

//factorial recursive
function factorialRecursive(value) {
    if (value === 1) {
        return 1
    } else {
        return value * factorialRecursive(value - 1);
    }
}

document.write("<br>" + factorial(5))