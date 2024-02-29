/*
nome: ana carolina m. naves

Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT,
Segue a formula (°C × 9/5) + 32.
*/
var teclado = require("prompt-sync")();
var CELSIUS = parseFloat(teclado("digite um numero: "));
var FAHRENHEIT = (CELSIUS + 9 / 5) + 32;
console.log("convertendo para fahrenheit ".concat(FAHRENHEIT));
