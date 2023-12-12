// Exercises

//1. Convert Minutes into Seconds.
let minutes = prompt ("Ingresa los minutos a convertir");
function seconds(minutes) {
    return minutes * 60;
}
document.write(`tus minutos convertidos a segundos son: ${seconds(minutes)}`);


//2. Return the Next Number from the Integer Passed.**
let number = prompt ("Ingresa el numero que quieras aumentarle 1");
function suma(number) {
    return number + 1;
}
document.write(`<br> Tu numero ahora es: ${suma(number)}`);


//3. Area of a Triangle.
function triArea(base, height) {
    let area = 0.5 * base * height;
    return area;
}

// Console
console.log(triArea(2, 3));    // Output: 3
console.log(triArea(8, 3));    // Output: 12
console.log(triArea(5, 11));  // Output: 27.5

//4. Convert Age to Days.
function calcAge(ageInYears) {
    let ageInDays = ageInYears * 365;
    return ageInDays;
}

// console
console.log(calcAge(65));  // Output:   23725
console.log(calcAge(18));   // Output:  6570
console.log(calcAge(28));  // Output:   10220

//5. Power Calculator.
function circuitPower(voltage, current) {
    let power = voltage * current;
    return power;
}

// Console
console.log(circuitPower(220, 15));  // Output: 2300
console.log(circuitPower(110, 5));   // Output: 330
console.log(circuitPower(120, 10));  // Output: 9600

//6. Return Something to Me!.
function giveMeSomething(a) {
    return "something " + a;
}

// Console
console.log(giveMeSomething("is better than nothing"));  // Output: "something is better than nothing"
console.log(giveMeSomething("Bob Jane"));               // Output: "something Bob Jane"
console.log(giveMeSomething("something"));              // Output: "something something"


//7. Sum of Polygon Angles.


//8. Convert Hours and Minutes into Seconds.