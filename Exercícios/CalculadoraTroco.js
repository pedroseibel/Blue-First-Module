// Defina uma variável para o valor de uma compra que custou R$100,98;
// Defina uma variável para o valor que o cliente pagou R$150,00;
// Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

let preço = 100.98;
let pagamento = 150;
let troco = pagamento - preço;

console.log(`Seu troco é de: R$` + troco.toFixed(2));
