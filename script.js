function getRandomMessage(outcome) {
  const winMessages = [
    "Congrats! You won! The World is now saved!",
    "Boom! You crushed it! The devil AI is now defeated!",
    "WOAH! You big brained it and won! The World is now saved!",
    "Winner! You are smarter than the AI!",
  ];

  const highMessages = [
    "You are aiming to high! Fly lower!",
    "Whoah, too high!",
    "You almost reached the sun, care not to be burned!",
    "Not even close! Go lower!",
  ];

  const lowMessages = [
    "Too low, Go higher!",
    "That's ground size guess! Go higher!",
    "Not quite accurate! Aim higher!",
    "Try going higher, maybe you'll win!",
  ];

  let responses;

  if (outcome === "win") {
    responses = winMessages;
  } else if (outcome === "high") {
    responses = highMessages;
  } else if (outcome === "low") {
    responses = lowMessages;
  }

  /// WHY ELSE IS NOT WORKING?!?!?!

  return responses[Math.floor(Math.random() * responses.length)];
}

function game() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  let playerGuess;

  const wantsToPlay = confirm(
    "🤖 WELCOME, HUMAN! Try to guess the number I've locked in my quantum circuits. You have 10 chances... or face the consequences! 💣"
  );

  if (!wantsToPlay) {
    alert("You just accepted defeat and the everyone is dead.");
    return;
  }

  for (let i = 10; i > 0; i--) {
    playerGuess = Number(
      prompt(`Enter a number between 0 and 100.  Number of attempts left: ${i}`)
    );

    if (playerGuess < 1 || playerGuess > 100 || isNaN(playerGuess)) {
      alert("Don't be cheecky, follow the instructions!");
      i++;
      continue;
    }

    if (playerGuess === randomNumber) {
      const message = getRandomMessage("win");
      console.log(message);
      alert(message);
      return;
    } else if (playerGuess > randomNumber) {
      const message = getRandomMessage("high");
      console.log(message);
      alert(message);
    } else {
      const message = getRandomMessage("low");
      console.log(message);
      alert(message);
    }
  }

  console.log("Out of attempts. Game over!");
  alert(
    `😈 MWAHAHA! You failed. The number was ${randomNumber}. Now the AI has claimed the planet! 💀🌍`
  );
}

game();
