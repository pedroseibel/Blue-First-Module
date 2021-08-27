// Calculadora de aumento de aluguel 
// A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado no IGPM de 31%.
// A calculadora deve apresentar o aluguel reajustado no formato R$9999.99

let aluguel = parseFloat(prompt("Qual o valor do aluguel para reajuste? "));
let aumento = 0.31;
let valorFinal = aluguel + aluguel * aumento;

console.log("O valor reajustado do seu aluguel é de R$ " + valorFinal.toFixed(2));
