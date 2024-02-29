/*
nome: ana carolina m. naves

Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT, 
Segue a formula (°C × 9/5) + 32.
*/

let teclado = require(`prompt-sync`)();
let CELSIUS = parseFloat(teclado("digite um numero: "));
let FAHRENHEIT: number = (CELSIUS + 9/5)+32;
console.log(`convertendo para fahrenheit ${FAHRENHEIT}`);
