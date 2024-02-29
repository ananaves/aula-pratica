var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totPessoasNaCondição = 0;
var PessoasComtabilizadas = 1;
while (PessoasComtabilizadas <= 10) {
    idade = parseInt(teclado("digite a idade do funcior\u00E1rio ".concat(PessoasComtabilizadas, ": ")));
    salario = parseFloat(teclado("digite o salario do funcionario ".concat(PessoasComtabilizadas, ": ")));
    console.log("");
    if (idade < 30 && salario > 3000) {
        totPessoasNaCondição++;
        PessoasComtabilizadas++;
    }
    else {
        PessoasComtabilizadas++;
    }
}
console.log("o total de pessoas que atende a consi\u00E7\u00E3o \u00E9 ".concat(totPessoasNaCondição));
