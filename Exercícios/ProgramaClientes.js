/* Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.*/

console.log("Gostaria de receber novidades no email cadastrado:\n1 - Sim\n2 - Não");

let escolha = prompt();

if (escolha == 1) {
  console.log("Você escolheu sim e receberá novidades no seu email.");
} else {
  console.log("Você escolheu não e não receberá novidades no seu email.");
}
