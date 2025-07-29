function game() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);

  let playerGuess;

  console.log(playerGuess);

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
    `Out of attempts. The correct number was ${randomNumber}. The EVIL AI has taken over the world and we are all DEAD! 💀`
  );
}

game();
