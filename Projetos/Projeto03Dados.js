// Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.

// O programa tem que:

// Perguntar quantas rodadas você quer fazer; (1,0 ponto)
// Perguntar quantos jogadores vão jogar; (1,5 pontos)
// Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
// Guarda todos os objetos em uma lista; (2,0 pontos)
// Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado. (2,0 pontos)
// Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão. (2,0 pontos)

function jogarDados() {
  return 1 + Math.floor(Math.random() * 6);
}

function inserirNumero(numInserido) {
  while (true) {
    if (numInserido % 1 == 0) {
      return numInserido;
    } else {
      numInserido = +prompt("Por favor, digite um número: ");
    }
  }
}

function capitalizarPrimeiraLetra(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function novoJogador(infoJogador, i) {
  let nome = prompt(`Insira o nome do ${i + 1}° jogador:\n`);
  infoJogador.push({
    nome: nome,
    dado: jogarDados(),
    vitoria: 0
  });
}

console.log("Jogo dos Dados");
console.log("Por favor, insira as seguintes informações:");
console.log();

var quantidadeRodadas = inserirNumero(+prompt("Quantas rodadas gostaria de jogar?\n"));
var quantidadeJogadores = inserirNumero(+prompt("Quantos jogadores vão jogar?\n"));
let infoJogador = [];

for (let i = 0; i < quantidadeJogadores; i++) {
  novoJogador(infoJogador, i);
}

for (let i = 0; i < quantidadeRodadas; i++) {
  for (let j = 0; j < quantidadeJogadores; j++) {
    infoJogador[j].dado = jogarDados();
  }
  infoJogador.sort((a, b) => a.dado - b.dado).reverse();
  infoJogador[0].vitoria += 1;
  // console.log(infoJogador); mostra os números jogados
  console.log(`${i + 1}ª rodada:`);
  console.log(`${capitalizarPrimeiraLetra(infoJogador[0].nome)} venceu a ${i+1}ª rodada com o número ${infoJogador[0].dado} no dado!\n`);}
infoJogador.sort((a, b) => a.vitoria - b.vitoria).reverse();
console.log(`O grande vencedor de todas as rodadas foi ${capitalizarPrimeiraLetra(infoJogador[0].nome)}!`);
