window.onload = function() {

  init();
};

function init() {
  createButtons();
  start.addEventListener("click", function() {
    clearButtons();
    startGame();
  });
  score.addEventListener("click", function() {
    table = document.getElementById("myTable");
    if (table) {
      table.parentNode.removeChild(table);
    }
    getData();
  });
}


function endGame() {
  gameOver();
}


function send(){
var xhr = new XMLHttpRequest();
var obj = {
  name: letters,
  score: myGameArea.frameNo
};
console.log(obj);
xhr.open("PUT", "rest/score");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function() {
  console.log(xhr.readyState);
};
xhr.send(JSON.stringify(obj));
}


function getData() {
  console.log("inside getdata");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "rest/score", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status < 400) {
      display(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
}


function display(info) {
  console.log("inside of display");
  var displayDiv = document.getElementById("displayDiv");
  var body = document.querySelector("body");
  var table = document.createElement("table");
  table.setAttribute("id", "myTable");
  for (var i = 0; i < info.length; i++) {
    var tr = document.createElement("tr");
    for (var propt in info[i]) {
      if(propt == "id"){
      }
      else{
      var td = document.createElement("td");
      td.innerHTML = info[i][propt];
      tr.appendChild(td);
    }
    }
    table.appendChild(tr);
  }
  displayDiv.appendChild(table);
}


var enterScoreDiv = document.getElementById("enterScoreDiv");
var gameOverText;



// var points;
// var wordUser;
// var table;
var start;
// var myScore = myGameArea.frameNo;
// var input;
// var submit;
var gamePoints;
var gameOverText;
var enter;
var again;
var letters;



function createButtons() {
  start = document.createElement("button");
  start.setAttribute("class", "buttons");
  start.innerHTML = "Play";
  buttonsDiv.appendChild(start);
  score = document.createElement("button");
  score.setAttribute("class", "buttons");
  score.innerHTML = "High Scores";
  buttonsDiv.appendChild(score);
}

function clearButtons() {
  table = document.getElementById("myTable");
  if (table) {
    table.parentNode.removeChild(table);
  }
  start.parentNode.removeChild(start);
  score.parentNode.removeChild(score);
}

function gameOver() {
  console.log("in game over");
  var gameOverDiv = document.getElementById('gameOverDiv');
  gameOverText = document.createElement("p");
  gameOverText.setAttribute("id", "gameOverText");
  gameOverText.innerHTML = "GAME OVER";
  gameOverDiv.appendChild(gameOverText);
  popLetters();
  enter = document.createElement("button");
  enter.setAttribute("class", "buttons");
  enter.setAttribute("id", "enter");
  enter.innerHTML = "Enter Initials";
  enterScoreDiv.appendChild(enter);
  enter.addEventListener("click", function() {
    var fi = document.getElementById("select0");
    var mi = document.getElementById("select1");
    var li = document.getElementById("select2");
    letters = fi.value + mi.value + li.value;
    console.log(letters);
    enter.parentNode.removeChild(enter);
    fi.parentNode.removeChild(fi);
    mi.parentNode.removeChild(mi);
    li.parentNode.removeChild(li);
    send();
    getData();
    again = document.createElement("button");
    again.setAttribute("class", "buttons");
    again.setAttribute("id", "again");
    again.innerHTML = "Play Again";
    enterScoreDiv.appendChild(again);
    again.addEventListener("click", function() {
      myGameArea.clear();
      myGameArea.frameNo += 1;
      restart();
    });
  });

}

function restart() {
  var gameOverText = document.getElementById("gameOverText");
  var table = document.getElementById("myTable");
  var again = document.getElementById("again");
  if (table) {
    table.parentNode.removeChild(table);
  }
  again.parentNode.removeChild(again);
  gameOverText.parentNode.removeChild(gameOverText);
  startGame();
}



function popLetters() {
  for (var i = 0; i < selects.length; i++) {
    var select = document.createElement("select");
    select.setAttribute("id", "select" + [i]);
    select.setAttribute("class", "buttons");
    for (var j = 0; j < characters.length; j++) {
      var option = document.createElement("option");
      option.innerHTML = characters[j].character;
      select.appendChild(option);
    }
    enterScoreDiv.appendChild(select);
  }
}

var selects = [{
  name: 'fI'
}, {
  name: 'mI'
}, {
  name: 'lI'
}];

var characters = [{
  character: '-'
}, {
  character: 'A'
}, {
  character: 'B'
}, {
  character: 'C'
}, {
  character: 'D'
}, {
  character: 'E'
}, {
  character: 'F'
}, {
  character: 'G'
}, {
  character: 'H'
}, {
  character: 'I'
}, {
  character: 'J'
}, {
  character: 'K'
}, {
  character: 'L'
}, {
  character: 'M'
}, {
  character: 'N'
}, {
  character: 'O'
}, {
  character: 'P'
}, {
  character: 'Q'
}, {
  character: 'R'
}, {
  character: 'S'
}, {
  character: 'T'
}, {
  character: 'U'
}, {
  character: 'V'
}, {
  character: 'W'
}, {
  character: 'X'
}, {
  character: 'Y'
}, {
  character: 'Z'
}, ];
