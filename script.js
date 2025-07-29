function game() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  let playerGuess;

  alert(
    "🤖 WELCOME, HUMAN! Try to guess the number I've locked in my quantum circuits. You have 10 chances... or face the consequences! 💣"
  );

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
      console.log("🎉 Congrats! You guessed it!");
      alert("🎉 Congrats! You guessed it!");
      return;
    } else if (playerGuess > randomNumber) {
      console.log("Too high! Guess lower");
      alert("Too high! Guess lower");
    } else {
      console.log("Too low! Guess higher");
      alert("Too low! Guess Higher");
    }
  }

  console.log("Out of attempts. Game over!");
  alert(
    `😈 MWAHAHA! You failed. The number was ${randomNumber}. Now the AI has claimed the planet! 💀🌍`
  );
}

game();
