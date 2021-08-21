/*DESAFIO 3
Caixa eletrônico
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

console.log("Notas disponíveis: 1, 5, 10, 50 e 100\n"+
"Valor mínimo: 10 reais\n"+
"Valor máximo: 600 reais")

let retirada = Number(prompt("Qual o valor do saque?"))

let cem = parseInt(retirada / 100)

let num = retirada - (cem * 100)

let cinquenta = parseInt(num / 50)
num = num - (cinquenta * 50)

let dez = parseInt(num / 10)
num = num - (dez * 10)

let cinco = parseInt(num / 5)
num = num - (cinco * 5)

um = num

console.log(`Quantidade de notas de 100: ${cem}\n
Quantidade de notas de 50: ${cinquenta}\n
Quantidade de notas de 10: ${dez}\n
Quantidade de notas de 5: ${cinco}\n
Quantidade de notas de 1: ${um}`)
