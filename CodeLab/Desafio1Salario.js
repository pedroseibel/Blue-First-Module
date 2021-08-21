/*DESAFIO 01
Reajuste salarial
As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento."
 */

let salario;
let salarionovo;
let aumento; 

salario = +prompt('Digite seu salário:');
if (salario <= 280) {
  aumento = (salario * 20/100);
  salarionovo = aumento + salario;
  console.log('Salario antes do reajuste: R$' + salario + '.\n!Aumento de 20% aplicado!\nValor do aumento: R$ ' + aumento + '.\nSalário após o aumento: R$ ' + salarionovo + '.')
}

else if (salario > 280 && salario <=700){
  aumento = (salario * 15/100);
  salarionovo = aumento + salario;
  console.log('Salario antes do reajuste: R$' + salario + '.\n!Aumento de 15% aplicado!\nValor do aumento: R$ ' + aumento + '.\nSalário após o aumento: R$ ' + salarionovo + '.')
}

else if (salario > 700 && salario <=1500){
  aumento = (salario * 10/100);
  salarionovo = aumento + salario;
  console.log('Salario antes do reajuste: R$' + salario + '.\n!Aumento de 10% aplicado!\nValor do aumento: R$ ' + aumento + '.\nSalário após o aumento: R$ ' + salarionovo + '.')
} 

else if (salario > 1500){
  aumento = (salario * 5/100);
  salarionovo = aumento + salario;
  console.log('Salario antes do reajuste: R$' + salario + '.\n!Aumento de 5% aplicado!\nValor do aumento: R$ ' + aumento + '.\nSalário após o aumento: R$ ' + salarionovo + '.')
}