/*
NOME: Ana carolina m. naves

2-Faça a média de 10 número (entrada via teclado) e exiba o resultado.
*/
var teclado = require('prompt-sync')();
var numero01 = parseFloat(teclado("Digite o primeiro numero: "));
var numero02 = parseFloat(teclado("Digite o segundo numero: "));
var numero03 = parseFloat(teclado("Digite o terceiro numero: "));
var numero04 = parseFloat(teclado("Digite o quarto numero: "));
var numero05 = parseFloat(teclado("Digite o quinto numero: "));
var numero06 = parseFloat(teclado("Digite o sexto numero: "));
var numero07 = parseFloat(teclado("Digite o setimo numero: "));
var numero08 = parseFloat(teclado("Digite o oitavo numero: "));
var numero09 = parseFloat(teclado("Digite o nono numero: "));
var numero10 = parseFloat(teclado("Digite o decimo numero: "));
var media = (numero01 + numero02 + numero03 + numero04 + numero05 + numero06 + numero07 + numero08 + numero09 + numero10) / 10;
console.log("a media dos 10 numeros \u00E9 ".concat(media));
