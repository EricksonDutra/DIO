// let xp = 1000;
// let nome = "Erickson";

let nivel = "";



 function winsBalance(wins, loss) {
  let result = wins - loss;
  return result;
};

let amountWins = winsBalance(200, 130);


switch (true) {
  case amountWins < 10:
    nivel = "Ferro";
    break;
  case amountWins < 20:
    nivel = "Bronze";
    break;
  case amountWins < 50:
    nivel = "Prata";
    break;
  case amountWins < 80:
    nivel = "Ouro";
    break;
  case amountWins < 90:
    nivel = "Platina";
    break;
  case amountWins < 100:
    nivel = "Ascendente";
    break;
  default:
    nivel = "Imortal";
    break;
}

console.log(`O Herói tem saldo de ${amountWins} está no nível de ${nivel} `);
