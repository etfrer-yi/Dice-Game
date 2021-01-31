function generateDiceResult(){
  return Math.floor(1 + Math.random()*6);
}

let dice1 = generateDiceResult();
let dice2 = generateDiceResult();

function loadDiceImg(imgNumber){
  return diceImg = "images/dice" + imgNumber + ".png"
}

function uploadDiceImg(dice1, dice2){
  document.querySelector("img.dice1").setAttribute("src", loadDiceImg(dice1));
  document.querySelector("img.dice2").setAttribute("src", loadDiceImg(dice2));
}

function winnerMessage(dice1, dice2){
  if (dice1 === dice2) {
    document.querySelector("h1").textContent = "Draw!";
  } else if (dice1 > dice2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
  } else {
    document.querySelector("h1").textContent = "Player 2 wins!";
  }
}

uploadDiceImg(dice1, dice2);

winnerMessage(dice1, dice2);
