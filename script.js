function getRandomMessage(outcome) {
  const winMessages = [
    "Congrats! You won! The World is now saved!",
    "Boom! You crushed it! The devil AI is now defeated!",
    "WOAH! You big brained it and won! The World is now saved!",
    "Winner! You are smarter than the AI!",
  ];

  const highMessages = [
    "You are aiming too high! Fly lower!",
    "Whoah, too high!",
    "You almost reached the sun, care not to be burned!",
    "Not even close! Go lower!",
  ];

  const lowMessages = [
    "Too low, go higher!",
    "That's a ground-sized guess! Go higher!",
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
  } else {
    responses = [
      "🤖 Unexpected outcome. Please reboot your brain and try again.",
    ];
  }

  return responses[Math.floor(Math.random() * responses.length)];
}

function game() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  let didWin = false;
  console.log(randomNumber);

  const wantsToPlay = confirm(
    "🤖 WELCOME, HUMAN! Try to guess the number I've locked in my quantum circuits. You have 10 chances... or face the consequences! 💣"
  );

  if (!wantsToPlay) {
    alert("You just accepted defeat... and everyone is dead. ☠️");
    return;
  }

  for (let i = 10; i > 0; i--) {
    const input = prompt(
      `Enter a number between 1 and 100. Attempts left: ${i}`
    );

    if (input === null) {
      alert("🚪 You chose to walk away... The AI remains undefeated. ❌");
      return;
    }

    const playerGuess = Number(input);

    if (
      isNaN(playerGuess) ||
      !Number.isInteger(playerGuess) ||
      playerGuess < 1 ||
      playerGuess > 100
    ) {
      alert(
        "Don't try to cheat! Only whole numbers between 1 and 100 are allowed! ❌"
      );
      console.log("❌ Invalid input: must be an integer between 1 and 100");
      i++;
      continue;
    }

    if (playerGuess === 69) {
      alert(
        "🎉 🎉  You entered a MEME number that is older than the AI itself. The AI cannot deal with and and it will self-destruct!🎉 🎉 "
      );
      console.log(
        `🌶️ That number's too hot to handle. The AI short-circuited! The actual number was ${randomNumber}`
      );
      break;
    }

    if (playerGuess === randomNumber) {
      const message = getRandomMessage("win");
      alert(message);
      console.log(message);
      didWin = true;
      break;
    } else if (playerGuess > randomNumber) {
      const message = getRandomMessage("high");
      console.log(message);
    } else {
      const message = getRandomMessage("low");
      console.log(message);
    }
  }

  const playAgain = confirm("🔁 Do you want to play again?");
  if (playAgain) {
    game();
  } else {
    alert("👋 Thanks for playing. The AI will be waiting...");
    console.log("👋 Thanks for playing. The AI will be waiting...");
  }
}

game();
