// Opdracht rest
const optellen = function(...args) {
    return args.reduce((total, current) => total + current);
}

console.log(optellen(1, 2, 3, 4, 5, 6))

//Opdracht spread
const arrayOptellen = function(num1, num2, num3) {
    return num1 + num2 + num3;
}

const nummers = [1, 2, 3];

console.log(arrayOptellen(...nummers));