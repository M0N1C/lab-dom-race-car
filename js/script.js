window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", restartGame);

  function startGame() {
    console.log("Starting game...");
    game = new Game();
    game.start();
    setKeyListeners();
  }

  function setKeyListeners() {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
  }

  function handleKeydown(event) {
    const directionMap = {
      ArrowLeft: () => (game.player.directionX = -1),
      ArrowRight: () => (game.player.directionX = 1),
      ArrowUp: () => (game.player.directionY = -1),
      ArrowDown: () => (game.player.directionY = 1),
    };

    const action = directionMap[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  }

  function handleKeyup(event) {
    const stopDirectionMap = {
      ArrowLeft: () => (game.player.directionX = 0),
      ArrowRight: () => (game.player.directionX = 0),
      ArrowUp: () => (game.player.directionY = 0),
      ArrowDown: () => (game.player.directionY = 0),
    };

    const action = stopDirectionMap[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  }

  function restartGame() {
    location.reload();
  }
};
