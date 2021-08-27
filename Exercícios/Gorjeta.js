// Defina uma variável para o valor de uma refeição que custou R$ 42,54;
// Defina uma variável para o valor da taxa de serviço que é de 10%;
// Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

let preço = 42.54;
let gorjeta = 0.1;
let total = preço + preço * gorjeta;

console.log(`O valor total da sua conta foi: R$` + total.toFixed(2));
