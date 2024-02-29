/*
nome:ana carolina m. naves

Converta a temperatura x (entrada manual) FAHRENHEIT para CELSIUS,
 Segue a formula 5/9 (°F - 32).
 */

let teclado = require(`prompt-sync`)();
let FAHRENHEIT = parseFloat(teclado("digite um numero: "));
let CELSIUS: number = (5/9) * (FAHRENHEIT - 32);

console.log(`convertendo para celsius ${CELSIUS}`);

