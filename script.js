"use strict";
const inputField = document.querySelector("input");
const td = document.querySelectorAll(".chess td");
const R_td = document.querySelectorAll(".result td");
var restart = document.querySelector(".rest");
var z = document.querySelector("#end");
var resentImagine = document.querySelector("button");
const R = document.querySelectorAll(".r th");
var opaChange = document.querySelector(".endTablifGameOver");
var finalBlack = document.querySelector(".makeWhite");
var Matrix = [];
Matrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];
var rezGame = 0;
addNumb();
doing();

z.onclick = function() {
  var html = rezGame;
  R[1].innerHTML = html;
  //и обновляем
  Matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  rezGame = 0;
  addNumb();
  doing();
};

restart.onclick = function() {
  Matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  rezGame = 0;
  addNumb();
  doing();
  opaChange.style.opacity = 0;
  finalBlack.style.opacity = 0;
};

resentImagine.onclick = function() {
  var html = rezGame;
  R[1].innerHTML = html;
  //и обновляем
  Matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  rezGame = 0;
  addNumb();
  doing();
  opaChange.style.opacity = 0;
  finalBlack.style.opacity = 0;
};

function addNumb() {
  var numPool = [2, 4],
    rand = numPool[Math.floor(Math.random() * numPool.length)];
  //создаю 2 масива которые будут в себе содержать порядковые номера строк и столбцов
  var XX = [0, 1, 2, 3];
  var YY = [0, 1, 2, 3];
  for (let i = XX.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const k = Math.floor(Math.random() * (i + 1));
    [XX[i], XX[j]] = [XX[j], XX[i]];
    [YY[i], YY[k]] = [YY[k], YY[i]];
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (Matrix[XX[i]][YY[j]] == 0) {
        Matrix[XX[i]][YY[j]] = rand;
        printMatrix();
        return;
      }
    }
  }
}

function printMatrix() {
  let inks = 0;
  let zn = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (Matrix[i][j] == 0) {
        var html = " ";
        td[inks].innerHTML = html;
        zn = 1;
        inks++;
      } else {
        var html = Matrix[i][j];
        td[inks].innerHTML = html;
        inks++;
      }
    }
  }

  //localStorage[0] = 0;
  if (zn == 0) {
    opaChange.style.opacity = 1;
    finalBlack.style.opacity = 0.5;
  }
  if (rezGame > localStorage[0]) {
    localStorage.setItem(0, rezGame);
  }
  var y = rezGame;
  R_td[0].innerHTML = y;

  var rek = localStorage.getItem(0);
  R_td[1].innerHTML = rek;

  for (let i = 0; i < td.length; i++) {
    if (Number(td[i].innerHTML) == 4) {
      td[i].style.background = "#FFDEAD";
    }
    if (Number(td[i].innerHTML) == 2) {
      td[i].style.background = "#FFF8DC";
    }
    if (Number(td[i].innerHTML) == 8) {
      td[i].style.background = "#FFED5A";
    }
    if (Number(td[i].innerHTML) == 6) {
      td[i].style.background = "#FFE623";
    }
    if (Number(td[i].innerHTML) == 12) {
      td[i].style.background = "#FFF933";
    }
    if (Number(td[i].innerHTML) == 16) {
      td[i].style.background = "#FFFF72";
    }
    if (Number(td[i].innerHTML) == 24) {
      td[i].style.background = "#FFA500";
    }

    if (Number(td[i].innerHTML) == 32) {
      td[i].style.background = "#FF6224";
    }
    if (Number(td[i].innerHTML) == 48) {
      td[i].style.background = "#F93B2A";
    }
    if (Number(td[i].innerHTML) == 64) {
      td[i].style.background = "#FF375C";
    }
    if (Number(td[i].innerHTML) == 128) {
      td[i].style.background = "#FF69B4";
    }
    if (Number(td[i].innerHTML) == 256) {
      td[i].style.background = "#C71585";
    }
    if (Number(td[i].innerHTML) > 256 && Number(td[i].innerHTML) < 512) {
      td[i].style.background = "#00d1c1";
    }
    if (Number(td[i].innerHTML) == 512) {
      td[i].style.background = "#191970";
    }
    if (Number(td[i].innerHTML) > 512) {
      td[i].style.background = "#b57edc";
    }
    if (Number(td[i].innerHTML) == 0) {
      td[i].style.background = "#fcdd76";
    }
  }

  var html = rezGame;
}
function RightKey() {
  for (let i = 0; i < 4; i++) {
    let it = 3;
    for (let j = 3; j != -1; j--) {
      if (Matrix[i][j] != 0) {
        [Matrix[i][it], Matrix[i][j]] = [Matrix[i][j], Matrix[i][it]];
        it--;
      }
    }
  }
  printMatrix();
}

function Right_MUCH() {
  for (let i = 0; i < 4; i++) {
    let sum = 1;
    let rez;
    let h = 3 - 1;
    let j = 3;
    let z = 0;
    while (j != -1) {
      if (Matrix[i][j] == Matrix[i][h]) {
        sum++;

        Matrix[i][h] = 0;
        h--;
        z = 1;
      }
      if (Matrix[i][j] != Matrix[i][h]) {
        rez = sum * Matrix[i][j];
        Matrix[i][j] = rez;
        if (z == 1) {
          rezGame = rezGame + rez;
          z = 0;
        }

        j = h;
        h--;
        sum = 1;
      }
    }
  }
  printMatrix();
}

function LeftKey() {
  for (let i = 0; i < 4; i++) {
    let it = 0;
    for (let j = 0; j < 4; j++) {
      if (Matrix[i][j] != 0) {
        [Matrix[i][it], Matrix[i][j]] = [Matrix[i][j], Matrix[i][it]];
        it++;
      }
    }
  }
  printMatrix();
}

function Left_MUCH() {
  for (let i = 0; i < 4; i++) {
    let sum = 1;
    let rez;
    let h = 0 + 1;
    let j = 0;
    let z = 0;
    while (j < 4) {
      if (Matrix[i][j] == Matrix[i][h]) {
        sum++;
        z = 1;
        Matrix[i][h] = 0;
        h++;
      }
      if (Matrix[i][j] != Matrix[i][h]) {
        rez = sum * Matrix[i][j];
        Matrix[i][j] = rez;
        if (z == 1) {
          rezGame = rezGame + rez;
          z = 0;
        }
        j = h;
        h++;
        sum = 1;
      }
    }
  }
  printMatrix();
}

function UpKey() {
  for (let i = 0; i < 4; i++) {
    let it = 0;
    for (let j = 0; j < 4; j++) {
      if (Matrix[j][i] != 0) {
        [Matrix[it][i], Matrix[j][i]] = [Matrix[j][i], Matrix[it][i]];
        it++;
      }
    }
  }
  printMatrix();
}
function Up_MUCH() {
  for (let j = 0; j < 4; j++) {
    let sum = 1;
    let rez;
    let h = 0 + 1;
    let i = 0;
    let z = 0;
    while (h < 4) {
      if (Matrix[i][j] == Matrix[h][j]) {
        sum++;
        Matrix[h][j] = 0;
        h++;
        z = 1;
      }
      if ((h != 4 && Matrix[i][j] != Matrix[h][j]) || h == 4) {
        rez = sum * Matrix[i][j];
        Matrix[i][j] = rez;
        if (z == 1) {
          rezGame = rezGame + rez;
          z = 0;
        }
        i = h;
        h++;
        sum = 1;
      }
    }
  }
  printMatrix();
}

function DownKey() {
  for (let i = 0; i < 4; i++) {
    let it = 3;
    for (let j = 3; j != -1; j--) {
      if (Matrix[j][i] != 0) {
        [Matrix[it][i], Matrix[j][i]] = [Matrix[j][i], Matrix[it][i]];
        it--;
      }
    }
  }
  printMatrix();
}

function Down_MUCH() {
  for (let j = 0; j < 4; j++) {
    let sum = 1;
    let rez;
    let h = 3 - 1;
    let i = 3;
    let z = 0;
    while (h >= 0) {
      if (h != -1 && Matrix[i][j] == Matrix[h][j]) {
        sum++;
        Matrix[h][j] = 0;
        h--;
        z = 1;
      }
      if ((h != -1 && Matrix[i][j] != Matrix[h][j]) || h == -1) {
        rez = sum * Matrix[i][j];
        Matrix[i][j] = rez;
        if (z == 1) {
          rezGame = rezGame + rez;
          z = 0;
        }
        i = h;
        h--;
        sum = 1;
      }
    }
  }
  printMatrix();
}
function doing() {
  document.onkeydown = function(event) {
    console.log(event);
    let e = 0;

    if (event.key == "ArrowRight" && finalBlack.style.opacity != 0.5) {
      RightKey();
      Right_MUCH();
      RightKey();
      addNumb();
    }
    if (event.key == "ArrowLeft" && finalBlack.style.opacity != 0.5) {
      LeftKey();
      Left_MUCH();
      LeftKey();
      addNumb();
    }
    if (event.key == "ArrowUp" && finalBlack.style.opacity != 0.5) {
      UpKey();
      Up_MUCH();
      UpKey();
      addNumb();
    }
    if (event.key == "ArrowDown" && finalBlack.style.opacity != 0.5) {
      DownKey();
      Down_MUCH();
      DownKey();
      addNumb();
    }
    return;
  };
}
