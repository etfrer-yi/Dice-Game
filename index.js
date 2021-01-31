// generateDiceResult() generates a random number between 1 and 6 inclusive
function generateDiceResult(){
  return Math.floor(1 + Math.random()*6);
}

let dice1 = generateDiceResult();
let dice2 = generateDiceResult();

// loadDiceImage(imgNumber) loads the dice image associated with the number
//   provided
function loadDiceImg(imgNumber){
  return diceImg = "images/dice" + imgNumber + ".png"
}

// uploadDiceImg(dice1, dice2) uploads the dice images with query selectors
function uploadDiceImg(dice1, dice2){
  document.querySelector("img.dice1").setAttribute("src", loadDiceImg(dice1));
  document.querySelector("img.dice2").setAttribute("src", loadDiceImg(dice2));
}

// winnerMessage(dice1, dice2) prints out a winning message depending on the
//   results of the numbers shown on dice1 and dice2
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
