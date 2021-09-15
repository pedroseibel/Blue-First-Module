//Inacabado

class Item {
    constructor (nome, estado){ // A propriedade "estado" diz se o item está fora do jogo (0), dentro do jogo, mas ainda não foi encontrado (1), está com o jogador (2), o jogador pegou e largou (3)
        this.nome = nome;
        this.estado = estado;
    }
}

class Carteira extends Item {
    constructor(nome, real, centavo, estado){
        super(nome, estado); // Super() é usado para acessar a classe pai de uma classe
        this.real = real;
        this.centavo = centavo;
    }
}

var objetos = [
   
    carteira = new Carteira ("carteira", 5,25,3),
    chaves = new Item ("chaves", 3)
];

carteira.descricao = "Sua carteira. Você pode usá-la para carregar dinheiro.";
chaves.descricao = "Suas chaves de casa. A vermelha abre a primeira fechadura."

var bolso = [];

for (let i of objetos){ // percorre todos os itens em objetos e adiciona os que tem estado 3 ao bolso com push() 
    if (i.estado === 3){
        bolso.push(i.nome);
    }
}

function contarDinheiro(obj) { // Melhorar a sintaxe de reais/real centavo/centavos quando for mais de um de cada
    let reply = `Sua ${obj.nome} contém `;
    if (obj.real) {
        reply = reply + `${obj.real} reais`;
        if (obj.centavo) {
            reply = reply + " e ";
        };
    };
    if (obj.centavo) {
        reply = reply + `${obj.centavo} centavos`;
    };
    reply = reply + "."
    console.log(reply);
};

function examinarObjeto(obj) { // Mostra o nome do item "em mãos"/após ter pegado
    console.log(obj.nome.toUpperCase()); 
    console.log(obj.descricao);
    switch (obj.estado) { // Switch que separa 
        case 0:
            console.log(`O mercado está com falta de ${obj.nome}.`);
            break;
        case 1:
            console.log(`Você ainda não encontrou este item no mercado, mas ele está em alguma prateleira.`);
            break;
        case 2:
            console.log(`Você encontrou, mas resolveu não comprar o ${obj.nome}.`);
            break;
        case 3:
            console.log(`Você está com o(a) ${obj.nome}.`);
            break;
        default:
            console.log(`Estado do item, ${obj.nome}: desconhecido.`);
    };
    if ("centavo" in obj) {
        contarDinheiro(obj);
    };
};


while (true){
  var padaria = String(prompt("Você acorda, são 6:30 da manhã, você precisa comprar pão. Gostaria de ir até a padaria? [S/N]")).toUpperCase();
  if (padaria[0] == "S" || padaria[0] == "N"){
    break
  }
}

if (padaria == "S"){
console.log("Não esqueça sua carteira.")
} else if (padaria == "N"){
  console.log("Você volta para a cama e continua dormindo.");
}

while(true){
  var pegarCarteira = String(prompt("Deseja pegar sua carteira? [S/N]")).toUpperCase()
  if (pegarCarteira[0] == "S" || pegarCarteira[0] == "N"){
    break
  }
}

if (pegarCarteira == "S"){
  console.log("Você pegou sua carteira.");
  examinarObjeto(carteira);
} else {
  console.log("Como vai comprar seu dinheiro, seu espertinho?")
}

console.log("Você vai até a sala, as chaves estão em cima da mesa, não esqueça de pegá-las.")

while (true) {
  var pegarChaves = String(prompt("Deseja pegar as chaves? [S/N] ")).toUpperCase();
  if (pegarChaves[0] == "N" || pegarChaves[0] == "S") {
    break;
  }
}

if (pegarChaves == "S"){
  console.log("Você pegou as chaves.")
  examinarObjeto(chaves)
} else if (pegarChaves == "N"){
  console.log("Você deixa as chaves em cima da mesa e senta no sofá.")
  console.log("Sua barriga começa a roncar.")
  }
