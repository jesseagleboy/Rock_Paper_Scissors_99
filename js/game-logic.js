// All code should be written in this file.
//Player One Moves and Value Types
let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;

//Player Two Moves and Value Types
let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

function setPlayerMoves(
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) {
  if (
    !player ||
    !moveOneType ||
    !moveOneValue ||
    !moveTwoType ||
    !moveTwoValue ||
    !moveThreeType ||
    !moveThreeValue
  ) {
    return;
  }

  if (
    !isValidMove(moveOneType) ||
    !isValidMove(moveTwoType) ||
    !isValidMove(moveThreeType)
  ) {
    return;
  }

  if (
    !isValidValue(moveOneValue) ||
    !isValidValue(moveTwoValue) ||
    !isValidValue(moveThreeValue) ||
    !isValidTotal(moveOneValue, moveTwoValue, moveThreeValue)
  ) {
    return;
  }

  if (player === "Player One") {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
}

function isValidMove(move) {
  return move === "rock" || move === "scissors" || move === "paper";
}

function isValidValue(value) {
  return 1 <= value && value <= 99;
}

function isValidTotal(valueOne, valueTwo, valueThree) {
  const total = valueOne + valueTwo + valueThree;
  return total <= 99;
}

function getRoundWinner(round) {
  if (1 <= round && round < 4) {
    if (round === 1) {
      return gamePlayCheck(
        playerOneMoveOneType,
        playerTwoMoveOneType,
        playerOneMoveOneValue,
        playerTwoMoveOneValue
      );
    }

    if (round === 2) {
      return gamePlayCheck(
        playerOneMoveTwoType,
        playerTwoMoveTwoType,
        playerOneMoveTwoValue,
        playerTwoMoveTwoValue
      );
    }

    if (round === 3) {
      return gamePlayCheck(
        playerOneMoveThreeType,
        playerTwoMoveThreeType,
        playerOneMoveThreeValue,
        playerTwoMoveThreeValue
      );
    }
  }

  return null;
}

function gamePlayCheck(
  playerOneMove,
  playerTwoMove,
  playerOneValue,
  playerTwoValue
) {
  if (
    isValidMove(playerOneMove) &&
    isValidMove(playerTwoMove) &&
    isValidValue(playerOneValue) &&
    isValidValue(playerTwoValue)
  ) {
    if (
      (playerOneMove === "rock" && playerTwoMove === "scissors") ||
      (playerOneMove === "scissors" && playerTwoMove === "paper") ||
      (playerOneMove === "paper" && playerTwoMove === "rock")
    ) {
      return "Player One";
    } else if (
      (playerOneMove === "rock" && playerTwoMove === "rock") ||
      (playerOneMove === "scissors" && playerTwoMove === "scissors") ||
      (playerOneMove === "paper" && playerTwoMove === "paper")
    ) {
      if (playerOneValue > playerTwoValue) {
        return "Player One";
      } else if (playerTwoValue > playerOneValue) {
        return "Player Two";
      } else {
        return "Tie";
      }
    } else {
      return "Player Two";
    }
  }

  return null;
}

function getGameWinner() {
  let playerOneWin = 0;
  let playerTwoWin = 0;
  for (let i = 1; i < 4; i++) {
    if (getRoundWinner(i) === null) {
      return null;
    }
    if (getRoundWinner(i) === "Player One") {
      playerOneWin += 1;
    }

    if (getRoundWinner(i) === "Player Two") {
      playerTwoWin += 1;
    }
  }

  if (playerOneWin === playerTwoWin) {
    return "Tie";
  } else {
    return playerOneWin > playerTwoWin ? "Player One" : "Player Two";
  }

  return null;
}

function setComputerMoves() {
  const moves = ["rock", "paper", "scissors"];
  const setMoves = [];
  const setValues = [];
  let startingValue = 99;
  let randValue = 0;

  for (let i = 0; i < 2; i++) {
    setMoves.push(moves[Math.floor(Math.random() * moves.length)]);
    randValue = Math.floor(Math.random() * startingValue);
    startingValue -= randValue;
    setValues.push(randValue);
  }
  setMoves.push(moves[Math.floor(Math.random() * moves.length)]);
  setValues.push(startingValue);

//   return setValues[0] + setValues[1] + setValues[2];
  
  setPlayerMoves("Player Two", setMoves[0], setValues[0], setMoves[1], setValues[1], setMoves[2], setValues[2]);
}

// function test() {
    
//     for (let i = 0; i < 100; i++) {
//         const value =  setComputerMoves();
//         console.log(value);
//     }

//     return true;
// }

// console.log(test());
