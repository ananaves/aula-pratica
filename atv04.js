/*
nome:ana carolina m. naves

Converta a temperatura x (entrada manual) FAHRENHEIT para CELSIUS,
 Segue a formula 5/9 (°F - 32).
 */
var teclado = require("prompt-sync")();
var FAHRENHEIT = parseFloat(teclado("digite um numero: "));
var CELSIUS = (5 / 9) * (FAHRENHEIT - 32);
console.log("convertendo para celsius ".concat(CELSIUS));
