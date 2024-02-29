const teclado = require(`prompt-sync`)();

let idade: number = 0;
let salario: number = 0
let totPessoasNaCondição: number = 0;
let PessoasComtabilizadas: number = 1;

while (PessoasComtabilizadas <= 10){

    idade = parseInt(teclado(`digite a idade do funciorário ${PessoasComtabilizadas}: `));
    salario = parseFloat(teclado(`digite o salario do funcionario ${PessoasComtabilizadas}: `));
    console.log(``);

    if (idade < 30 && salario > 3000){
    totPessoasNaCondição++;
    PessoasComtabilizadas++;
    }
    else{
    PessoasComtabilizadas++;
   }
}
console.log(`o total de pessoas que atende a consição é ${totPessoasNaCondição}`);
