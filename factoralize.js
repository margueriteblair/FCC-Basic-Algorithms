// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.
// 0! = 1;
function factorialize(val) {
    if (val === 0 || val === 1) {
        console.log(1);
    } for (i = val-1; i > 1; i--) {
        val = val*i;
        console.log(val)
    }
}

function factorialize2(num) {
    let factorization = num;
    if (num === 0 || num === 1) {
        console.log(1);
    } 
    while (num > 1) {
        num--;
        factorization *= num;
    }
    console.log(factorization);
}
factorialize2(8);