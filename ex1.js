// 1. Crie uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes callbacks:

// - callbackSucesso(): Mostre uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par (resultado da soma).
// - callBackError(): Mostre uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma).

function callbackSucesso() {
    console.log("Operação concluída com sucesso e o número somado é par.");
}

function callbackError() {
    console.log("Operação falhou, o número somando é impar.");
}

function soma(num1, num2, callbackSuccess, callBackError) {
    let resultado = num1 + num2;

    if (resultado % 2 === 0) {
        callbackSuccess();
    } else {
        callBackError();
    }
}

soma(1,2,callbackSucesso,callbackError);