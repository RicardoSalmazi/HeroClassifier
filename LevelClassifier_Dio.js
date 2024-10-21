// Aqui vamos definir o nome de um jogador e quantos pontos ele já possui (aleatorio)
// Ao preencher estas variáveis o sistema retornará a variável XP, informando o nível em que 
// esse jogador se enquadra segundo sua pontuação
// ctrl + shift + p para o Quokka.js

let nome = "Ricardo"
let points = 9000
let XP = ''

if(points <= 1000) {
    XP = "Ferro"
}else if(points > 1000 && points <=2000){
    XP = "Bronze" 
}else if(points > 2000 && points <=5000){
    XP = "Prata"  
}else if(points > 5000 && points <=7000){
    XP = "Ouro"
}else if(points > 7000 && points <=8000){
    XP = "Platina"
}else if(points > 8000 && points <=9000){
    XP = "Ascendente"
}else if(points > 9000 && points <=10000){
    XP = "Imortal"
}else {
    XP = "Radiante"
}

console.log("O Heroi de nome " + nome + " está em nível " + XP)
