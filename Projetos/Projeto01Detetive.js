/* Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As
perguntas são:
1. "Telefonou para a vítima?"
2. "Esteve no local do crime?"
3. "Mora perto da vítima?"
4. "Devia para a vítima?"
5. "Já trabalhou com a vítima?"

O programa deve no final emitir uma classificação sobre a participação da
pessoa no crime.

Se a pessoa responder positivamente a 2 questões ela deve ser classificada
como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso
contrário, ele será classificado como "Inocente". */


let p1 = resposta(String(prompt('Telefonou para a vítima?')));
let p2 = resposta(String(prompt('Esteve no local do crime?')));
let p3 = resposta(String(prompt('Mora perto da vítima?')));
let p4 = resposta(String(prompt('Devia para a vítima')));
let p5 = resposta(String(prompt('Já trabalhou com a vítima?')));


let soma = p1+p2+p3+p4+p5;
let entrevistados = ["inocente", "inocente", "suspeito", "cúmplice", "cúmplice", "assassino"];

function resposta(l1) {
if ((l1[0] == "S" || l1[0] == "s")){
return 1;

} 
else if ((l1[0] == "N" || l1[0] == "n")){
return 0;
}
else {
console.log("Por favor, responda com sim ou não.")
}
}

console.log("Você é " + entrevistados[soma] + ".")
