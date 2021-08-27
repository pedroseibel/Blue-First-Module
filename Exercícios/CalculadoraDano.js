// Escreva um programa que receba dois valores digitados pelo usuário:

// Quantidade de vida de um monstro;
// Valor do ataque do jogador por turno;
// Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.


console.log("Qual a quantidade de vida do monstro?");
let hpMonstro = prompt();

console.log("Quanto de dano o jogador causa por turno?");
let ataque = prompt();

let turnos = hpMonstro / ataque;

console.log(`O jogador derrotará o monstro em ${turnos} turnos.`);
