class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 100;
    this.height = 150;
    this.left = Math.random() * (gameScreen.offsetWidth - this.width);
    this.top = 0;

    this.element = document.createElement("img");
    Object.assign(this.element.style, {
      position: "absolute",
      width: `${this.width}px`,
      height: `${this.height}px`,
      left: `${this.left}px`,
      top: `${this.top}px`,
    });

    this.element.src = "./images/redCar.png";
    gameScreen.appendChild(this.element);
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
