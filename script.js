function getRandomResponse(outcome) {
  const highMessages = [
    "Whoa, too high! 🚀",
    "Not even close, aim lower! 👇",
    "You're flying too close to the sun! 🔥",
    "Lower! You're overshooting! 🎯",
  ];
  const lowMessages = [
    "Too low! Dig up! 🪓",
    "Try going higher! 🚁",
    "That's a mouse-sized guess. 🐭",
    "Not quite — reach for the stars! 🌟",
  ];
  const winMessages = [
    "🎉 NAILED IT! You're a genius!",
    "💥 Boom! You crushed it!",
    "🏆 Winner! The world is saved!",
    "🧠 Big brain time! Nice job!",
  ];

  let responses;

  if (outcome === "high") {
    responses = highMessages;
  } else if (outcome === "low") {
    responses = lowMessages;
  } else if (outcome === "win") {
    responses = winMessages;
  }

  // QUESTION ABOUT ELSE

  return responses[Math.floor(Math.random() * responses.length)];
}

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
      const message = getRandomResponse("win");
      console.log(message);
      alert(message);
      return;
    } else if (playerGuess > randomNumber) {
      const message = getRandomResponse("high");
      console.log(message);
      alert(message);
    } else {
      const message = getRandomResponse("low");
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
