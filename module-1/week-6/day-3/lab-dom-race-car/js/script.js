window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let ourNewGame;
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
  //keydown listeners are for when you press the key
  document.addEventListener("keydown", (event) => {
    console.log("a key was pressed", event);
    if (event.code === "ArrowLeft") {
      ourNewGame.player.directionX = -3;
    }
    if (event.code === "ArrowRight") {
      ourNewGame.player.directionX = 3;
    }
    if (event.code === "ArrowUp") {
      ourNewGame.player.directionY = -3;
    }
    if (event.code === "ArrowDown") {
      ourNewGame.player.directionY = 3;
    }
  });
  //keyup listeners are for when you release the key
  document.addEventListener("keyup", (e) => {
    if (event.code === "ArrowLeft") {
      ourNewGame.player.directionX = 0;
    }
    if (event.code === "ArrowRight") {
      ourNewGame.player.directionX = 0;
    }
    if (event.code === "ArrowUp") {
      ourNewGame.player.directionY = 0;
    }
    if (event.code === "ArrowDown") {
      ourNewGame.player.directionY = 0;
    }
  });

  function startGame() {
    console.log("start game");
    ourNewGame = new Game();
    ourNewGame.start();
  }
};
