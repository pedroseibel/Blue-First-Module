// Crie um programa que solicite um valor em real ao usuário e converta esse valor, para dólar.

let real = prompt("Insira o valor em reais que gostaria de converter para dólar: ");
let dolar = 5.19; //dia 27/08/2021
let valor = real / dolar;

console.log("R$ " + real + " equivalem a " + valor.toFixed(2) + " dólares na cotação de hoje.");
