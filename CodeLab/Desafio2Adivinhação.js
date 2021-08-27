/*DESAFIO 02
Jogo da adivinhação
Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.*/

let numero = parseInt(prompt("Tente adivinhar o número que o computador escolherá: "));

let numeroPc = Math.floor(Math.random() * 10 + 1);

if (numero == numeroPc) {
  console.log("Você adivinhou o número!");
} else {
  console.log("Você errou! O número era: " + numeroPc);
}
