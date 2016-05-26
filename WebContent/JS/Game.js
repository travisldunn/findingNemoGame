var myGamePiece;
var myObstacles = [];
var myFish = [];
var jellyFish = [];
var blowFish = [];
var bubbles = [];
var schoolFish = [];
var dude = [];
var smallDude = [];




var myScore;
var body = document.querySelector("body");




function startGame() {

  console.log("inside startGame");
  myGamePiece = new component(55, 40, "Fish/fish.png", 10, 120, "image");
  myGameArea.start();
  myScore = new component("30px", "Consolas", "green", 5, 565, "text");
}

var myGameArea = {

  canvas: document.createElement("canvas"),
  start: function() {

    this.canvas.width = 980;
    this.canvas.height = 570;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('keydown', function(e) {
      myGameArea.key = e.keyCode;
    });
    window.addEventListener('keyup', function(e) {
      myGameArea.key = false;
    });
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },  
  stop: function() {
    clearInterval(this.interval);
  }
  
};

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    }
    if (type == "image") {
      ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop + 3) || (mytop > otherbottom - 3) || (myright < otherleft + 3) || (myleft > otherright - 3)) {
      crash = false;
    }
    return crash;
  };
}

function updateGameArea() {
  var x, height, width, gap, minHeight, maxHeight, minGap, maxGap;

  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      myGameArea.stop();
      endGame();

      console.log(myScore.text);
      return;
    }
  }
  for (i = 0; i < jellyFish.length; i += 1) {
    if (myGamePiece.crashWith(jellyFish[i])) {
      myGameArea.stop();
      endGame();
      console.log(myScore.text);
      return;
    }
  }

  for (i = 0; i < blowFish.length; i += 1) {
    if (myGamePiece.crashWith(blowFish[i])) {
      myGameArea.stop();
      endGame();
      console.log(myScore.text);
      return;
    }
  }

  for (i = 0; i < myFish.length; i += 1) {
    if (myGamePiece.crashWith(myFish[i])) {
      myGameArea.stop();
      endGame();
      console.log(myScore.text);
      return;
    }
  }
  myGameArea.frameNo += 1;
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(200)) {
    x = myGameArea.canvas.width;
    minHeight = 50;
    maxHeight = 200;
    height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    minGap = 150;
    maxGap = 400;
    gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new component(20, height, "Fish/seaweed2.png", x, 0, "image"));
    myObstacles.push(new component(20, x - height - gap, "Fish/seaweed.png", x, height + gap, "image"));

  }

  if (myGameArea.frameNo == 1 || everyinterval(800)) {
    x = myGameArea.canvas.width;
    minHeight = 25;
    maxHeight = 100;
    height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    minWidth = 25;
    maxWidth = 50;
    width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    blowFishWidth = Math.random() * 900;
    blowFish.push(new component(width, height, "Fish/blowFish.png", blowFishWidth, x, "image"));
  }


  if (myGameArea.frameNo == 1 || everyinterval(650)) {
    x = myGameArea.canvas.width;
    FishHeight = Math.random() * 500;
    myFish.push(new component(225, 126, "Fish/shark.png", x, FishHeight, "image"));

  }

  if (myGameArea.frameNo == 1 || everyinterval(750)) {
    x = myGameArea.canvas.width;
    jellyFishHeight = Math.random() * 700;
    jellyFish.push(new component(70, 150, "Fish/jellyFish.png", x, jellyFishHeight, "image"));
  }

  if (myGameArea.frameNo == 1 || everyinterval(1150)) {
    x = myGameArea.canvas.width;
    schoolFishHeight = Math.random() * 700;
    schoolFish.push(new component(175, 125, "Fish/schoolFish.png", -176, schoolFishHeight, "image"));
  }


  if (myGameArea.frameNo == 1 || everyinterval(1550)) {
    x = myGameArea.canvas.width;
    schoolFishHeight = Math.random() * 700;
    dude.push(new component(175, 125, "Fish/dude.png", -176, schoolFishHeight, "image"));
  }

  if (myGameArea.frameNo == 1 || everyinterval(1850)) {
    x = myGameArea.canvas.width;
    FishHeight = Math.random() * 500;
    smallDude.push(new component(100, 63, "Fish/smallDude.png", x, FishHeight, "image"));

  }



  if (myGameArea.frameNo == 1 || everyinterval(850)) {
    x = myGameArea.canvas.width;
    minHeight = 50;
    maxHeight = 200;
    height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    minWidth = 50;
    maxWidth = 200;
    width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    bubblesWidth = Math.random() * 900;
    bubbles.push(new component(width, height, "Fish/bubbles.png", bubblesWidth, x, "image"));
  }

  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
  for (i = 0; i < myFish.length; i += 1) {
    myFish[i].x += -3;
    myFish[i].update();
  }
  for (i = 0; i < jellyFish.length; i += 1) {
    jellyFish[i].x += -2;
    myFish[i].y += -3;
    jellyFish[i].update();
  }

  for (i = 0; i < blowFish.length; i += 1) {
    blowFish[i].y += -2;
    jellyFish[i].y += 1;
    blowFish[i].update();
  }

  for (i = 0; i < bubbles.length; i += 1) {
    bubbles[i].y += -1;
    bubbles[i].x += -1;
    bubbles[i].update();
  }

  for (i = 0; i < schoolFish.length; i += 1) {
    schoolFish[i].x += 1;
    blowFish[i].x += 2;
    schoolFish[i].update();
  }

  for (i = 0; i < dude.length; i += 1) {
    dude[i].x += 1;
    dude[i].update();
  }

  for (i = 0; i < smallDude.length; i += 1) {
    smallDude[i].x += -2;
    dude[i].y += -1;
    smallDude[i].update();
  }

  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (myGameArea.key && myGameArea.key == 37) {
    myGamePiece.speedX = -7;
    myGamePiece.image.src = "Fish/fishleft.png";
    myGamePiece.height = 40;
    myGamePiece.width = 55;

  }
  if (myGameArea.key && myGameArea.key == 39) {
    myGamePiece.speedX = 6;
    myGamePiece.image.src = "Fish/fish.png";
    myGamePiece.height = 40;
    myGamePiece.width = 55;
  }
  if (myGameArea.key && myGameArea.key == 38) {
    myGamePiece.speedY = -5;
    myGamePiece.image.src = "Fish/fishup.png";
    myGamePiece.height = 55;
    myGamePiece.width = 40;
  }
  if (myGameArea.key && myGameArea.key == 40) {
    myGamePiece.speedY = 5;
    myGamePiece.image.src = "Fish/fishdown.png";
    myGamePiece.height = 55;
    myGamePiece.width = 40;
  }

  myScore.text = "SCORE: " + myGameArea.frameNo;
  myScore.update();
  myGamePiece.newPos();
  myGamePiece.update();
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 === 0) {
    return true;
  }
  return false;
}
