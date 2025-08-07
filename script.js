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

  switch (outcome) {
    case "win":
      responses = winMessages;
      break;
    case "high":
      responses = highMessages;
      break;
    case "low":
      responses = lowMessages;
      break;
    default:
      responses = [
        "🤖 Unexpected outcome. Please reboot your brain and try again.",
      ];
  }

  return responses[Math.floor(Math.random() * responses.length)];
}

function getValidatedInput(attemptsLeft) {
  const input = prompt(
    `Enter a number between 1 and 100. Attempts left: ${attemptsLeft}`
  );

  if (input === null) {
    return { type: "cancel" };
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
    return { type: "invalid" };
  }

  return { type: "valid", value: playerGuess };
}

function game() {
  alert(
    "🖥️ To fully experience this game, please open your browser's **Developer Console**.\n\n" +
      "💡 Shortcuts to open the Console:\n" +
      "• Windows/Linux: Ctrl + Shift + J\n" +
      "• macOS: Cmd + Option + J"
  );

  const randomNumber = Math.floor(Math.random() * 100 + 1);

  const wantsToPlay = confirm(
    "🤖 WELCOME, HUMAN! Try to guess the number I've locked in my quantum circuits. You have 10 chances... or face the consequences! 💣"
  );

  if (!wantsToPlay) {
    alert("You just accepted defeat... and everyone is dead. ☠️");
    return;
  }

  for (let i = 10; i > 0; i--) {
    const result = getValidatedInput(i);

    if (result.type === "cancel") {
      alert("🚪 You chose to walk away... The AI remains undefeated. ❌");
      return;
    }

    if (result.type === "invalid") {
      i++; // Invalid input doesn’t count as a try
      continue;
    }

    const guess = result.value;

    if (guess === 69) {
      alert(
        "🎉 🎉  You entered a MEME number that is older than the AI itself. The AI cannot deal with it and will self-destruct! 🎉 🎉"
      );
      console.log(
        `🌶️ That number's too hot to handle. The AI short-circuited! The actual number was ${randomNumber}`
      );
      break;
    }

    if (guess === randomNumber) {
      const message = getRandomMessage("win");
      alert(message);
      console.log(message);
      break;
    } else if (guess > randomNumber) {
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
