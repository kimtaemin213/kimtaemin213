let direction = 'right';
let direction2 = 'right2';
let snake;
let time = 0;
let toggle = false;
let snake2;
let scoreElem;
let scoreElem2;
let timerValue =20;

let xFruit = 0;
let yFruit = 0;
let xFruit2 = 0;
let yFruit2 = 0;

let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');

  scoreElem2 = createDiv('Score = 0');
  scoreElem2.position(20, 50);
  scoreElem2.id = 'score';
  scoreElem2.style('color', 'white');
  textSize(15);
  textAlign(CENTER);
  setInterval(timeIt, 1000);



  snake = new Snake();
  snake2 = new Snake2();
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
  frameRate(15);
  stroke(255);
  strokeWeight(10);

  snake.head();
  snake2.head2();
  snake.updateFruitCoordinates();
  snake2.updateFruitCoordinates2();



}

function draw() {
  background(0);
  snake.move();
  snake.draw();
  snake.key();
  snake.checkgame();
  snake.checkForFruit();
  snake2.move2();
  snake2.draw2();
  snake2.key2();
  snake2.checkgame2();
  snake2.checkForFruit2();


  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, 30);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, 30);
  }
  if (timerValue == 0) {
    text('game over', width / 2, 45);
    noLoop();
  }





  /*let current_time = millis();
  if (current_time - time > 3000) {
    toggle = !toggle;
    time = current_time;
  }



  if (toggle) {
    fill(255);
    rect(0, 0, width, height);
  } else {}*/

}
function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}





class Snake {
  constructor() {
    this.xFruit = 0;
    this.yFruit = 0;
    this.numSegments = 10;
    this.xCor = [];
    this.yCor = [];
    this.diff = 10;
    this.xStart = 0;
    this.yStart = 250;


  }
  move() {
    for (let i = 0; i < this.numSegments - 1; i++) {
      this.xCor[i] = this.xCor[i + 1];
      this.yCor[i] = this.yCor[i + 1];
    }
    switch (direction) {
      case 'right':
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] + this.diff;
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
        break;
      case 'up':
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] - this.diff;
        break;

      case 'left':
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] - this.diff;
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
        break;
      case 'down':
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] + this.diff;
        break;
    }
  }
  draw() {
    for (let i = 0; i < this.numSegments - 1; i++) {
      line(this.xCor[i], this.yCor[i], this.xCor[i + 1], this.yCor[i + 1]);
    }
  }
  head() {
    for (let i = 0; i < this.numSegments; i++) {
      this.xCor.push(this.xStart + i * this.diff);
      this.yCor.push(this.yStart);
    }
  }
  key() {
    switch (keyCode) {
      case 65:
        if (direction !== 'right') {
          direction = 'left';
        }
        break;
      case 68:
        if (direction !== 'left') {
          direction = 'right';
        }
        break;
      case 87:
        if (direction !== 'down') {
          direction = 'up';
        }
        break;
      case 83:
        if (direction !== 'up') {
          direction = 'down';
        }
        break;
    }
  }
  checkgame() {
    if (
      this.xCor[  this.xCor.length - 1] > width ||
      this.xCor[  this.xCor.length - 1] < 0 ||
      this.yCor[  this.yCor.length - 1] > height ||
      this.yCor[  this.yCor.length - 1] < 0 ||
      this.collision()
  ) {
    noLoop();
    const scoreVal = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Game ended! 1p score was : ' + scoreVal);

   }
  }
  collision() {
  const snakeHeadX = this.xCor[this.xCor.length - 1];
  const snakeHeadY = this.yCor[this.yCor.length - 1];
  for (let i = 0; i < this.xCor.length - 1; i++) {
    if (this.xCor[i] === snakeHeadX && this.yCor[i] === snakeHeadY) {
      return true;
    }
   }
  }
  updateFruitCoordinates() {
    xFruit = floor(random(10, (width - 100) / 10)) * 10;
    yFruit = floor(random(10, (height - 100) / 10)) * 10;
    xFruit2 = floor(random(10, (width - 100) / 10)) * 10;
    yFruit2 = floor(random(10, (height - 100) / 10)) * 10;
  }
  checkForFruit() {
    point(xFruit, yFruit);
    point(xFruit2, yFruit2);
  if (this.xCor[this.xCor.length - 1] === xFruit && this.yCor[this.yCor.length - 1] === yFruit||
  this.xCor[this.xCor.length - 1] === xFruit2 && this.yCor[this.yCor.length - 1] === yFruit2) {
    const prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore + 1));
    this.xCor.unshift(this.xCor[0]);
    this.yCor.unshift(this.yCor[0]);
    this.numSegments++;
    this.updateFruitCoordinates();
  }
  }
}











///////////////////////////////////////////////////////////////////

class Snake2 {
  constructor() {
    this.numSegments2 = 10;
    this.xCor2 = [];
    this.yCor2 = [];
    this.diff2 = 10;
    this.xStart2 = 0;
    this.yStart2 = 250;

  }

  move2() {
    for (let i = 0; i < this.numSegments2 - 1; i++) {
      this.xCor2[i] = this.xCor2[i + 1];
      this.yCor2[i] = this.yCor2[i + 1];
    }


    switch (direction2) {
      case 'right2':
        this.xCor2[this.numSegments2 - 1] = this.xCor2[this.numSegments2 - 2] + this.diff2;
        this.yCor2[this.numSegments2 - 1] = this.yCor2[this.numSegments2 - 2];
        break;
      case 'up2':
        this.xCor2[this.numSegments2 - 1] = this.xCor2[this.numSegments2 - 2];
        this.yCor2[this.numSegments2 - 1] = this.yCor2[this.numSegments2 - 2] - this.diff2;
        break;
      case 'left2':
        this.xCor2[this.numSegments2 - 1] = this.xCor2[this.numSegments2 - 2] - this.diff2;
        this.yCor2[this.numSegments2 - 1] = this.yCor2[this.numSegments2 - 2];
        break;
      case 'down2':
        this.xCor2[this.numSegments2 - 1] = this.xCor2[this.numSegments2 - 2];
        this.yCor2[this.numSegments2 - 1] = this.yCor2[this.numSegments2 - 2] + this.diff2;
        break;

    }
  }
  draw2() {
    for (let i = 0; i < this.numSegments2 - 1; i++) {
      line(this.xCor2[i], this.yCor2[i], this.xCor2[i + 1], this.yCor2[i + 1]);
    }
  }
  head2() {
    for (let i = 0; i < this.numSegments2; i++) {
      this.xCor2.push(this.xStart2 + i * this.diff2);
      this.yCor2.push(this.yStart2);
    }
  }
  key2() {
    switch (keyCode) {
      case LEFT_ARROW:
        if (direction2 !== 'right2') {
          direction2 = 'left2';
        }
        break;
      case RIGHT_ARROW:
        if (direction2 !== 'left2') {
          direction2 = 'right2';
        }
        break;
      case UP_ARROW:
        if (direction2 !== 'down2') {
          direction2 = 'up2';
        }
        break;
      case DOWN_ARROW:
        if (direction2 !== 'up2') {
          direction2 = 'down2';
        }
        break;
    }
  }
  checkgame2() {
    if (
      this.xCor2[  this.xCor2.length - 1] > width ||
      this.xCor2[  this.xCor2.length - 1] < 0 ||
      this.yCor2[  this.yCor2.length - 1] > height ||
      this.yCor2[  this.yCor2.length - 1] < 0 ||
      this.collision2()
  ) {
    const scoreVal2 = parseInt(scoreElem2.html().substring(8));
    scoreElem2.html('Game ended! 2p score was : ' + scoreVal2);

    noLoop();

   }
  }
  collision2() {
  const snakeHeadX2 = this.xCor2[this.xCor2.length - 1];
  const snakeHeadY2 = this.yCor2[this.yCor2.length - 1];
  for (let i = 0; i < this.xCor2.length - 1; i++) {
    if (this.xCor2[i] === snakeHeadX2 && this.yCor2[i] === snakeHeadY2) {
      return true;
    }
   }
  }
  updateFruitCoordinates2() {
    xFruit = floor(random(10, (width - 100) / 10)) * 10;
    yFruit = floor(random(10, (height - 100) / 10)) * 10;
  }
  checkForFruit2() {
    point(xFruit, yFruit);
    point(xFruit2, yFruit2);
  if (this.xCor2[this.xCor2.length - 1] === xFruit && this.yCor2[this.yCor2.length - 1] === yFruit||
  this.xCor2[this.xCor2.length - 1] === xFruit2 && this.yCor2[this.yCor2.length - 1] === yFruit2) {
    const prevScore2 = parseInt(scoreElem2.html().substring(8));
    scoreElem2.html('Score = ' + (prevScore2 + 1));
    this.xCor2.unshift(this.xCor2[0]);
    this.yCor2.unshift(this.yCor2[0]);
    this.numSegments2++;
    this.updateFruitCoordinates2();
  }
  }
  }
