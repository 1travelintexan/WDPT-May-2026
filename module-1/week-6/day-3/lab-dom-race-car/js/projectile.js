class Projectile {
  constructor(gameScreen, left, top) {
    this.gameScreen = gameScreen;
    this.top = top;
    this.left = left;
    this.width = 20;
    this.height = 60;
    this.element = document.createElement("img");
    this.element.src = "../images/bullet.png";
    this.element.style.position = "absolute";
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top -= 4;
    this.update();
  }
  update() {
    this.element.style.top = this.top + "px";
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
