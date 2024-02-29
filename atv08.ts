const teclado = require(`prompt-sync`)();

let divisor: number = 2;
let dividendo: number = parseFloat(teclado(`digite o numero: `));
let resto: number = 0;

resto = dividendo % divisor;

if (resto == 0){
    console.log(`numero digitado ${dividendo} é par!`);
}
else if (resto == 1){
    console.log(`numero digitado ${dividendo} é impar!!`);
}
else{
    console.log(`algo deu errado!!`);
}