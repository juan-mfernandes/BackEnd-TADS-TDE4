/* 2. Utilize a função anterior para criar uma promise que tenha:
- then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e trazendo o número;
- catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.
Dica: Utilize uma promise com função (resolve, reject). */

const sucesso = (resultado) => {
    return "Operação concluída com sucesso! O número somado é par: " + resultado;
}

const erro = (resultado) => {
    return "Operação falhou! O número somado não é par: " + resultado;
}

function soma(num1, num2) {
    let resultado = num1 + num2;
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (resultado % 2 == 0) {
                resolve(sucesso(resultado));
            } else {
                reject(erro(resultado));
            }
        }, 500);
    }); 
}

soma(1,2).then(
    (message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});