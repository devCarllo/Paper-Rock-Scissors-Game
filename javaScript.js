"use strict";
const gameValue = ["rock", "paper", "scissors"];
let userResult;
let botResult;
let you = 0;
let robot = 0;

function play() {
  const enterValue = prompt(
    "Enter Your Choose, Rock: 1 | Paper: 2 | Scissors: 3 "
  );
  const gamerValue = enterValue?.toLowerCase();
  if (gamerValue === "rock" || gamerValue === "1") {
    userResult = gameValue[0];
  } else if (gamerValue === "paper" || gamerValue === "2") {
    userResult = gameValue[1];
  } else if (gamerValue === "scissors" || gamerValue === "3") {
    userResult = gameValue[2];
  } else {
    alert("Wrong, Try again");
    return;
  }

  const botValue = Math.floor(Math.random() * 9);
  switch (botValue) {
    case 0:
    case 3:
    case 6:
      botResult = gameValue[0];
      break;
    case 1:
    case 4:
    case 7:
      botResult = gameValue[1];
      break;
    case 2:
    case 5:
    case 8:
      botResult = gameValue[2];
      break;
  }

  console.log("You Choice : ", userResult);

  console.log("Bot Choice : ", botResult);

  const comparisonResult = comparison(botResult, userResult);

  gameResult(comparisonResult);

  console.log("\n");

  finalResult(you, robot);

  while (you < 3 && robot < 3) {
    play();
  }
}

function comparison(res1, res2) {
  if (res1 === res2) {
    return "Draw";
  } else if (res2 === undefined) {
    return;
  } else if (res1 === "rock") {
    return res2 === "paper" ? "player" : "computer";
  } else if (res1 === "paper") {
    return res2 === "scissors" ? "player" : "computer";
  } else {
    return res2 === "rock" ? "player" : "computer";
  }
}

const gameResult = (cValue) => {
  if (cValue === "player") {
    console.log("You Win");
    you++;
  } else if (cValue === "computer") {
    console.log("You Lose");
    robot++;
  } else {
    console.log("Draw");
  }

  console.log(`Your Result: ${you}`);
  console.log(`Bot Result: ${robot}`);
};

function finalResult(fValue1, fValue2) {
  if (fValue1 === 3) {
    console.log("Finished, You Are Winner");
  } else if (fValue2 === 3) {
    console.log("Finished, You Are Loser");
  }
}

play();
