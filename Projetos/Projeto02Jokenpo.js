/* Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.

O programa tem que:

Permitir que eu decida quantas rodadas iremos fazer;
Ler a minha escolha (Pedra, papel ou tesoura);
Decidir de forma aleatória a decisão do computador;
Mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa. */

function escolhaComputador() {
  var escolhaPc = Math.random();
  if (escolhaPc < 0.34) {
    return "pedra";
  }
  if (escolhaPc <= 0.67) {
    return "papel";
  }
  return "tesoura";
}

function compararResultados(resultado1, resultado2) {
  //Escolhas
  console.log(
    "Você escolheu: " + resultado1 + " e o computador: " + resultado2 + "!"
  );
  //Empate
  if (resultado1 === resultado2) {
    console.log("Você e o computador escolheram o mesmo! Próxima rodada!");
    return 0;
  }
  //Vitória
  if (
    (resultado1 === "pedra" && resultado2 === "tesoura") ||
    (resultado1 === "papel" && resultado2 === "pedra") ||
    (resultado1 === "tesoura" && resultado2 === "papel")
  ) {
    console.log("Você venceu a rodada!");
    return 1;
  }
  console.log("O computador venceu a rodada!");
  return 2;
}

let sair = 0, i = 1, escolhaJogador, numRodadas = 1, placarJogador = 0, placarComputador = 0, empates = 0;

while (sair == 0) {
  placarJogador = 0;
  placarComputador = 0;
  empates = 0;
  console.log("Vamos jogar algumas rodadas de pedra, papel e tesoura! Lembre-se das regras:\nPedra vence Tesoura\nTesoura vence Papel\nPapel vence Pedra");
  numRodadas = prompt("Digite o número de rodadas que você deseja jogar: ");

  while (i <= numRodadas) {
    escolhaJogador = prompt("Por favor, escolha pedra, papel ou tesoura: ");
    let escolhaPC = escolhaComputador();
    let somaPlacar = compararResultados(escolhaJogador, escolhaPC);
    if (somaPlacar == 1) {
      placarJogador = placarJogador + 1;
    } else if (somaPlacar == 2) {
      placarComputador = placarComputador + 1;
    } else {
      empates = empates + 1;
    }
    if (i == numRodadas) {
      console.log(
        "O computador ganhou " + placarComputador + " rodadas.\nVocê ganhou " + placarJogador + " rodadas.\nVocês empataram " + empates + " rodadas.");
      if (placarJogador > placarComputador) {
        console.log("Você venceu!");
      } else if (placarComputador > placarJogador) {
        console.log("Você perdeu!");
      } else {
        console.log("Você empatou com o computador.");
      }
      sair = prompt("Digite 1 para sair e digite 0 para jogar outra vez: ");
    }
    i = i + 1;
  }
}
