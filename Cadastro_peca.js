let readlineSync = require('readline-sync');
var nome_peca;
var pesoPeca;
var capacidade = 10;

nome_peca = readlineSync.question("Digite o nome da peça: ");
pesoPeca = readlineSync.question("Digite o peso da peça: ");

if(pesoPeca > 100){
    if(capacidade > 10){
        console.log("não Cadastrar!! Capacidade MAX. Atingida!!!");
    } else if(nome_peca.length < 3){
        console.log("Não cadastrar!! Nome inválido!!!");
    }else{
        console.log("PEÇA CADASTRADA COM SUCESSO!!!");
    }
}else{
    console.log("não Cadastrar!! peso insuficiente!!!");
}
