var numSecreto = Math.floor(Math.random() * 1000)  + 1;

var chute = prompt('Digite um número entre 1 e 1000')
var cont = 1

while (chute != numSecreto) {
    if(chute > numSecreto) {
        alert('Tentativa de número '+cont)
        alert('O numero é menor que '+chute+', try again!')
        chute = prompt('Digite novamente um número entre 1 e 1000')
    } else {
        alert('Tentativa de número '+cont)
        alert('O número é maior que '+chute+', try again!!')
        chute = prompt('Digite novamente um número entre 1 e 1000')
    }
    cont++
} 
    alert("Parabéns, você acertou!!")


    //DESAFIOS:

    //1º ERROU, O NUMERO É MAIOR DO QUE X OU MENOR QUE X
    //2º CONTADOR DE CHUTES
    //3º QUAL O PIOR CENÁRIO POSSÍVEL? O MAXIMO DE VEZES QUE POSSO CHUTAR