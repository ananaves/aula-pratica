const teclado = require (`prompt-sync`)();

let idade: number = parseFloat( teclado(`digite sua idade: `));

if (idade >= 18){
    console.log(`maior de idade!!`);
}
else{
    console.log(`menor de idade`);
}
