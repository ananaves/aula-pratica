var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("digite sua idade: "));
if (idade >= 18) {
    console.log("maior de idade!!");
}
else {
    console.log("menor de idade");
}
