class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.directionX = 0;
      this.directionY = 0;
  
      this.element = document.createElement("img");
      Object.assign(this.element.style, {
        position: "absolute",
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
      });
  
      this.element.src = imgSrc;
      gameScreen.appendChild(this.element);
    }
  
    move() {
      this.left = Math.max(10, Math.min(this.left + this.directionX, this.gameScreen.offsetWidth - this.width - 10));
      this.top = Math.max(10, Math.min(this.top + this.directionY, this.gameScreen.offsetHeight - this.height - 10));
      this.updatePosition();
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();
  
      return (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      );
    }
  }
  