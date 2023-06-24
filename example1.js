const prompt = require("prompt-sync")({sigint: true});

// Solution for a quadratic equation
let X, Y;

//Input values of a, b and c
let a = prompt("Enter the value of a: ");
let b = prompt("Enter the value of b: ");
let c = prompt("Enter the value of c: ");

// Let D be the Discriminant of the Quadratic equation
let D = b * b - 4 * a * c

// If D > 0,Then the roots are Real and different
if (D > 0) {
    X = (-b + Math.sqrt(D)) / (2 * a);
    Y = (-b - Math.sqrt(D)) / (2 * a);

    console.log(`The roots of the equation are ${X} and ${Y}. Real and Different`);
}
// If D = 0, Then the roots are Real and Equal
else if (D == 0) {
    X = Y = (-b / (2 * a));

    console.log(`The roots of the equation are ${X} and ${Y}. Real and Equal`);
}

//If D < 0, Then the roots are real and Imaginary
else {
    let realpart = (-b / (2 * a));
    let imagpart = Math.sqrt(-D) / (2 * a);

    console.log(`The roots of the equation are ${realpart} + ${imagpart}i and ${realpart} - ${imagpart}i.  Real and Imaginary`);
}

