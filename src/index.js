// Defina o nome e qntde de XP
const nomeHeroi = "Thunderbolt"; // Escolha o nome do héroi
const xpHeroi = 12000; // Escolha o valor de xp

// Input

let nivelHeroi; 
    if (xpHeroi < 1000){
       nivelHeroi = "Ferro"
 }  else if  (xpHeroi <= 2000) {
       nivelHeroi = "Bronze";
 }  else if  (xpHeroi <= 5000) {
       nivelHeroi = "Prata";
 }  else if  (xpHeroi <= 7000) {
       nivelHeroi = "Ouro";
 }  else if  (xpHeroi <= 8000) {
       nivelHeroi = "Platina";
 }  else if  (xpHeroi <= 9000) {
       nivelHeroi = "Ascendente";
 }  else if  (xpHeroi <= 10000) {
       nivelHeroi = "Imortal";
 }  else {
        nivelHeroi = "Radiante";
}

// Output

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);