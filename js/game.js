class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(this.gameScreen, 200, 500, 100, 100, "./images/car.png");
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60; 
  }

  start() {
    Object.assign(this.gameScreen.style, {
      height: `${this.height}px`,
      width: `${this.width}px`,
      display: "block",
    });

    this.startScreen.style.display = "none";

    this.gameIntervalId = setInterval(() => this.gameLoop(), this.gameLoopFrequency);
  }

  gameLoop() {
    if (this.gameIsOver) {
      this.endGame();
      return;
    }

    this.update();
  }

  update() {
    this.player.move();

    // Generate obstacles at random intervals
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    this.obstacles = this.obstacles.filter((obstacle, i) => {
      obstacle.move();

      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.lives--;

        if (this.lives === 0) {
          this.endGame();
          return false;
        }

        return false;
      }

      if (obstacle.top > this.height) {
        obstacle.element.remove();
        this.score++;
        return false;
      }

      return true;
    });
  }

  endGame() {
    this.gameIsOver = true;
    clearInterval(this.gameIntervalId);

    this.player.element.remove();
    this.obstacles.forEach(obstacle => obstacle.element.remove());

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
