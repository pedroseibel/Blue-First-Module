/* O programa tem que:

    Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
    Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)
    Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos) 
    Contabilizar os votos de acordo com os significados (3,0 pontos):
    1 = Candidato 1
    2 = Candidato 2
    3 = Candidato 3
    4 = Voto Nulo`
    5 = Voto em Branco
    Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
     - O total de votos para cada candidato 
     - O total de votos nulos
     - O total de votos em branco
     - Qual candidato venceu a votação */

let primeiroCandidato = { nome: "Pedro", quantidadeVotos: 0 };
let segundoCandidato = { nome: "Maria", quantidadeVotos: 0 };
let terceiroCandidato = { nome: "João", quantidadeVotos: 0 };
let votoEmBranco = 0;
let votoNulo = 0;
let anoAtual = new Date().getFullYear();

function inserirNumero(numInserido) {
  while (true) {
    if (numInserido % 1 == 0) {
      return numInserido;
    } else {
      numInserido = +prompt("Por favor, insira um número: ");
    }
  }
}

// Função que valida a idade eleitoral | 18 até 69 = obrigatório votar | 16, 17 e +70 = opcional | < 16 = proibido votar
function autorizaVoto(anoNascimento) {
  anoNascimento = inserirNumero(parseInt(prompt("Sua data de nascimento: ")));
  if (anoAtual - anoNascimento >= 18 && anoAtual - anoNascimento < 70) {
    console.log("Seu voto é obrigatório")
    return "Obrigatório";
  } else if (
    (anoAtual - anoNascimento >= 16 && anoAtual - anoNascimento <= 17) || anoAtual - anoNascimento > 70) {
    console.log("Seu voto é opcional.")
    return "Opcional";
  } else {
    console.log("Você não tem a idade eleitoral necessária para votar.");
  }
}

console.log(`
     
              _______________
             /              /|
            /              / |
           /_____________ /  |
          | _____________|   |
          ||            ||   |
          ||    Urna    ||   |
          || Eletrônica ||   |
          ||___________ ||   |
          |   _______    |  /
         /|  (_______)   | /
        ( |______________|/
         \
.=======================.
         | ::::::::::::::::  ::: |
         | ::::::::::::::[]  ::: |
         |   -----------     ::: |
         \`-----------------------'
       `);

console.log("Bem-vindo ao sistema de votação eletrônica, por favor, preencha os seguintes dados:);

// Ter uma função chamada votacao(autorizacao, voto)
function votacao(autorizacao, voto) {
  autorizacao = autorizaVoto();
  while (autorizacao) {
    console.log(`Suas opções de voto são:\n${primeiroCandidato.nome}, digite [1] para votar.\n${segundoCandidato.nome}, digite [2] para votar.\n${terceiroCandidato.nome}, digite [3] para votar.\nPara votar em branco digite [4].\nPara votar nulo digite [5]`);
    voto = inserirNumero(parseInt(prompt("Digite sua opção de voto: ")));
    if (voto == 1) {
      primeiroCandidato.quantidadeVotos++;
    } else if (voto == 2) {
      segundoCandidato.quantidadeVotos++;
    } else if (voto == 3) {
      terceiroCandidato.quantidadeVotos++;
    } else if (voto == 4) {
      votoEmBranco++;
    } else if (voto == 5) {
      votoNulo++;
    } else if (voto > 5) {
      console.log("Você digitou uma opção de voto inválida.");
    }
    while (true) {
      var novoVoto = String(
        prompt("Deseja cadastrar um novo voto? [S/N] ")
      ).toUpperCase();
      if (novoVoto[0] == "N" || novoVoto[0] == "S") {
        break;
      } else {
        console.log("Por favor, responda com sim ou não.");
      }
    }
    if (novoVoto == "N") {
      exibirResultados();
      break;
    }
  }
}
votacao();

// Ter uma função chamada exibirResultados()
function exibirResultados() {
  console.log("===============================");
  console.log("=====RESULTADO DA VOTAÇÃO=====");
  console.log("===============================");
  console.log(`${primeiroCandidato.nome} recebeu um total de ${primeiroCandidato.quantidadeVotos} votos.`);
  console.log(`${segundoCandidato.nome} recebeu um total de ${segundoCandidato.quantidadeVotos} votos.`);
  console.log(`${terceiroCandidato.nome} recebeu um total de ${terceiroCandidato.quantidadeVotos} votos.`);
  console.log(`Foram registrados ${votoEmBranco} votos brancos`);
  console.log(`Foram registrados ${votoNulo} votos nulos`);
  let candidatos = [primeiroCandidato, segundoCandidato, terceiroCandidato];
  let quantidadeVotos = Math.max(...candidatos.map((q) => q.quantidadeVotos));
  let vencedor = candidatos.filter((q) => q.quantidadeVotos == quantidadeVotos);
  console.log(`Quem venceu esta votação foi ${vencedor[0].nome}, com ${vencedor[0].quantidadeVotos} votos contabilizados.`);
}
