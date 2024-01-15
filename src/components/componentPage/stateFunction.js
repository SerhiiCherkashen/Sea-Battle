export const fnPlay = (state) => {
  state.player.arrayOneCells = [];
  state.computer.arrayOneCells = [];
  for (let y = 0; y < state.changesParametersGame.heightField; y++) {
    // 1  2  3
    // state.changesParametersGame.widthField
    for (let i = 0; i < state.changesParametersGame.widthField; i++) {
      // A B C
      state.player.arrayOneCells.push({
        x: i + 1,
        y: state.arrayLetters[y],
        stateChose: false,
        stateArea: false,
        attacked: false,
        backGround: "",
      });
    }
  }
  for (let y = 0; y < state.changesParametersGame.heightField; y++) {
    for (let i = 0; i < state.changesParametersGame.widthField; i++) {
      state.computer.arrayOneCells.push({
        x: i + 1,
        y: state.arrayLetters[y],
        stateChose: false,
        stateArea: false,
        attacked: false,
        backGround: "",
      });
    }
  }
};
export const fnClickLogic = (state, indexCell, x, y, gamer, enemyGamer) => {
  let leftXNumber = x - 1;
  let rightXNumber = x + 1;
  //
  let indexYInArrayLetters = state.arrayLetters.findIndex(
    (element) => element === y
  );
  let upYLetter = state.arrayLetters[indexYInArrayLetters - 1];
  let downYLetter = state.arrayLetters[indexYInArrayLetters + 1];

  let indexUp = gamer.arrayOneCells.findIndex(
    (element) => element.x === x && element.y === upYLetter
  );
  let indexLeftUp = gamer.arrayOneCells.findIndex(
    (element) => element.x === leftXNumber && element.y === upYLetter
  );
  let indexRightUp = gamer.arrayOneCells.findIndex(
    (element) => element.x === rightXNumber && element.y === upYLetter
  );
  let indexDown = gamer.arrayOneCells.findIndex(
    (element) => element.x === x && element.y === downYLetter
  );
  let indexLeftDown = gamer.arrayOneCells.findIndex(
    (element) => element.x === leftXNumber && element.y === downYLetter
  );
  let indexRightDown = gamer.arrayOneCells.findIndex(
    (element) => element.x === rightXNumber && element.y === downYLetter
  );

  let fnIfContent = (index) => {
    gamer.myCoordinateEnemyAttacks.push(index);
    enemyGamer.arrayOneCells[index].stateArea = true;
  };
  //
  //

  if (leftXNumber > 0 && indexYInArrayLetters > 0) {
    fnIfContent(indexLeftUp);
  }
  if (indexYInArrayLetters > 0) {
    fnIfContent(indexUp);
  }
  if (
    rightXNumber < state.changesParametersGame.widthField + 1 && //  < 11
    indexYInArrayLetters > 0
  ) {
    fnIfContent(indexRightUp);
  }
  if (leftXNumber > 0) {
    fnIfContent(indexCell - 1);
  }
  if (rightXNumber < state.changesParametersGame.widthField + 1) {
    // < 11
    fnIfContent(indexCell + 1);
  }
  if (
    leftXNumber > 0 &&
    indexYInArrayLetters < state.changesParametersGame.heightField - 1 //  <  9
  ) {
    fnIfContent(indexLeftDown);
  }
  if (indexYInArrayLetters < state.changesParametersGame.heightField - 1) {
    // < 9
    fnIfContent(indexDown);
  }
  if (
    rightXNumber < state.changesParametersGame.widthField + 1 &&
    indexYInArrayLetters < state.changesParametersGame.heightField - 1
  ) {
    //  < 11  /  <  9
    fnIfContent(indexRightDown);
  }
  //
  //
  //

  // if (leftXNumber > 0 && indexYInArrayLetters > 0) {
  //   fnIfContent(indexLeftUp);
  // }
  // if (indexYInArrayLetters > 0) {
  //   fnIfContent(indexUp);
  // }
  // if (rightXNumber < 11 && indexYInArrayLetters > 0) {
  //   fnIfContent(indexRightUp);
  // }
  // if (leftXNumber > 0) {
  //   fnIfContent(indexCell - 1);
  // }
  // if (rightXNumber < 11) {
  //   fnIfContent(indexCell + 1);
  // }
  // if (leftXNumber > 0 && indexYInArrayLetters < 9) {
  //   fnIfContent(indexLeftDown);
  // }
  // if (indexYInArrayLetters < 9) {
  //   fnIfContent(indexDown);
  // }
  // if (rightXNumber < 11 && indexYInArrayLetters < 9) {
  //   fnIfContent(indexRightDown);
  // }
};

export const fnClickOnCellPlayer = (state, player, x, y) => {
  console.log("action : ", player, x, y);
  let gamer;
  let antiGamer;
  if (player === "player") {
    gamer = state.player;
    antiGamer = state.computer;
    console.log("fnClickOnCellPlayer Gamer : ", "player");
  } else {
    gamer = state.computer;
    antiGamer = state.player;
    console.log("fnClickOnCellPlayer Gamer : ", "computer");
  }

  let indexCell = gamer.arrayOneCells.findIndex(
    (elem) => elem.x === x && elem.y === y
  );
  gamer.arrayOneCells[indexCell].stateChose =
    !gamer.arrayOneCells[indexCell].stateChose;
  gamer.shipCoordinates.push({
    x: x,
    y: y,
    index: indexCell,
  });
  //
  //
  //
  // fnClickLogic(state, indexCell, x, y, gamer, antiGamer);
  //
  //
  //

  let leftXNumber = x - 1;
  let rightXNumber = x + 1;
  //
  let indexYInArrayLetters = state.arrayLetters.findIndex(
    (element) => element === y
  );
  let upYLetter = state.arrayLetters[indexYInArrayLetters - 1];
  let downYLetter = state.arrayLetters[indexYInArrayLetters + 1];

  let indexUp = gamer.arrayOneCells.findIndex(
    (element) => element.x === x && element.y === upYLetter
  );
  let indexLeftUp = gamer.arrayOneCells.findIndex(
    (element) => element.x === leftXNumber && element.y === upYLetter
  );
  let indexRightUp = gamer.arrayOneCells.findIndex(
    (element) => element.x === rightXNumber && element.y === upYLetter
  );
  let indexDown = gamer.arrayOneCells.findIndex(
    (element) => element.x === x && element.y === downYLetter
  );
  let indexLeftDown = gamer.arrayOneCells.findIndex(
    (element) => element.x === leftXNumber && element.y === downYLetter
  );
  let indexRightDown = gamer.arrayOneCells.findIndex(
    (element) => element.x === rightXNumber && element.y === downYLetter
  );

  let fnIfContent = (index) => {
    antiGamer.myCoordinateEnemyAttacks.push(index);
    gamer.arrayOneCells[index].stateArea = true;
  };

  if (leftXNumber > 0 && indexYInArrayLetters > 0) {
    fnIfContent(indexLeftUp);
  }
  if (indexYInArrayLetters > 0) {
    fnIfContent(indexUp);
  }
  if (
    rightXNumber < state.changesParametersGame.widthField + 1 && //  < 11
    indexYInArrayLetters > 0
  ) {
    fnIfContent(indexRightUp);
  }
  if (leftXNumber > 0) {
    fnIfContent(indexCell - 1);
  }
  if (rightXNumber < state.changesParametersGame.widthField + 1) {
    // < 11
    fnIfContent(indexCell + 1);
  }
  if (
    leftXNumber > 0 &&
    indexYInArrayLetters < state.changesParametersGame.heightField - 1 //  <  9
  ) {
    fnIfContent(indexLeftDown);
  }
  if (indexYInArrayLetters < state.changesParametersGame.heightField - 1) {
    // < 9
    fnIfContent(indexDown);
  }
  if (
    rightXNumber < state.changesParametersGame.widthField + 1 &&
    indexYInArrayLetters < state.changesParametersGame.heightField - 1
  ) {
    //  < 11  /  <  9
    fnIfContent(indexRightDown);
  }
  //   "  gamer.areaShipCoordinates --- :  ",
  //   gamer.areaShipCoordinates.length
  // );
  // console.log(
  //   "  gamer.shipCoordinates --- !!! :  ",
  //   gamer.shipCoordinates.length
  // );
  // console.log(
  //   " gamer.areaShipCoordinates : ",
  //   gamer.areaShipCoordinates.length,
  //   "  [0]",
  //   gamer.areaShipCoordinates[0],
  //   "   [1]",
  //   gamer.areaShipCoordinates[1],
  //   "   [2]",
  //   gamer.areaShipCoordinates[2]
  // );
};

export const fnClickOnEnemyCellFalse = (state, x, y, indexCell) => {
  state.player.goAgain = false;
  state.player.myCoordinateEnemyAttacks.push(indexCell);
  state.computer.arrayOneCells[indexCell].attacked = true;
  state.computer.arrayOneCells[indexCell].backGround = "blue";
};
export const fnClickOnEnemyCellTrue = (state, x, y, indexCell) => {
  state.player.goAgain = true;
  state.player.myCoordinateEnemyAttacks.push(indexCell);
  state.computer.arrayOneCells[indexCell].attacked = true;
  state.computer.arrayOneCells[indexCell].backGround = "red";
  state.player.enemyShips -= 1;

  let gamer = state.player;
  let enemyGamer = state.computer;

  fnClickLogic(state, indexCell, x, y, gamer, enemyGamer);
};

export const fnComputerClickOnPlayerFalse = (state, randomIndex) => {
  state.computer.myCoordinateEnemyAttacks.push(randomIndex);
  state.player.arrayOneCells[randomIndex].attacked = true;
  state.player.arrayOneCells[randomIndex].backGround = "blue";
};
export const fnComputerClickOnPlayerTrue = (state, randomIndex) => {
  let x = state.computer.arrayOneCells[randomIndex].x;
  let y = state.computer.arrayOneCells[randomIndex].y;
  state.computer.myCoordinateEnemyAttacks.push(randomIndex);
  state.computer.enemyShips -= 1;
  state.player.arrayOneCells[randomIndex].attacked = true;
  state.player.arrayOneCells[randomIndex].backGround = "red";

  let indexCell = randomIndex;
  let gamer = state.computer;
  let enemyGamer = state.player;

  fnClickLogic(state, indexCell, x, y, gamer, enemyGamer);
};
