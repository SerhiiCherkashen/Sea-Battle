import { useState } from "react";

export const fnPlay = (state) => {
  state.player.arrayOneCells = [];
  state.computer.arrayOneCells = [];
  for (let y = 0; y < 10; y++) {
    for (let i = 0; i < 10; i++) {
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
  for (let y = 0; y < 10; y++) {
    for (let i = 0; i < 10; i++) {
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

export const fnClickOnCellPlayer = (state, player, x, y) => {
  let gamer;
  let antiGamer;
  // stateArea;
  if (player === "player") {
    gamer = state.player;
    antiGamer = state.computer;
    console.log("fnClickOnCellPlayer Gamer : ", "player");
  } else {
    gamer = state.computer;
    antiGamer = state.player;
    console.log("fnClickOnCellPlayer Gamer : ", "computer");
  }

  let arrayAreaCoordinate = [];
  let indexCell = gamer.arrayOneCells.findIndex(
    (elem) => elem.x === x && elem.y === y
  );
  gamer.arrayOneCells[indexCell].stateChose =
    !gamer.arrayOneCells[indexCell].stateChose;
  // gamer.arrayOneCells[indexCell].stateArea =
  //   !gamer.arrayOneCells[indexCell].stateArea;
  gamer.shipCoordinates.push({
    x: x,
    y: y,
    index: indexCell,
  });
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
    gamer.arrayOneCells[index].stateArea = true;
    antiGamer.myCoordinateEnemyAttacks.push(index);
  };

  if (leftXNumber > 0 && indexYInArrayLetters > 0) {
    fnIfContent(indexLeftUp);
  }
  if (indexYInArrayLetters > 0) {
    fnIfContent(indexUp);
  }
  if (rightXNumber < 11 && indexYInArrayLetters > 0) {
    fnIfContent(indexRightUp);
  }
  if (leftXNumber > 0) {
    fnIfContent(indexCell - 1);
  }
  if (rightXNumber < 11) {
    fnIfContent(indexCell + 1);
  }
  if (leftXNumber > 0 && indexYInArrayLetters < 9) {
    fnIfContent(indexLeftDown);
  }
  if (indexYInArrayLetters < 9) {
    fnIfContent(indexDown);
  }
  if (rightXNumber < 11 && indexYInArrayLetters < 9) {
    fnIfContent(indexRightDown);
  }
  // if (gamer.areaShipCoordinates.length > 0) {
  //   arrayAreaCoordinate.forEach((item) => {
  //     gamer.areaShipCoordinates.forEach((element) => {
  //       element.forEach((el) => {
  //         if (item === el) {
  //           gamer.arrayOneCells[item].stateArea = true;
  //         }
  //       });
  //     });
  //   });
  // }

  // gamer.areaShipCoordinates.push(arrayAreaCoordinate);
  // console.log(
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
  console.log("fnClickOnEnemyCell------------------------da");

  state.player.goAgain = true;
  state.player.myCoordinateEnemyAttacks.push(indexCell);
  state.computer.arrayOneCells[indexCell].attacked = true;
  state.computer.arrayOneCells[indexCell].backGround = "red";
  state.player.enemyShips -= 1;
  //
  //
  //
  let arrayAreaCoordinate = [];
  let gamer = state.computer;
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
    state.computer.arrayOneCells[index].stateArea = true;
    state.player.myCoordinateEnemyAttacks.push(index);
  };

  if (leftXNumber > 0 && indexYInArrayLetters > 0) {
    fnIfContent(indexLeftUp);
  }
  if (indexYInArrayLetters > 0) {
    fnIfContent(indexUp);
  }
  if (rightXNumber < 11 && indexYInArrayLetters > 0) {
    fnIfContent(indexRightUp);
  }
  if (leftXNumber > 0) {
    fnIfContent(indexCell - 1);
  }
  if (rightXNumber < 11) {
    fnIfContent(indexCell + 1);
  }
  if (leftXNumber > 0 && indexYInArrayLetters < 9) {
    fnIfContent(indexLeftDown);
  }
  if (indexYInArrayLetters < 9) {
    fnIfContent(indexDown);
  }
  if (rightXNumber < 11 && indexYInArrayLetters < 9) {
    fnIfContent(indexRightDown);
  }
  // state.player.goAgain = true;
};

export const fnComputerClickOnPlayerFalse = (state, randomIndex) => {
  let x = state.computer.arrayOneCells[randomIndex].x;
  let y = state.computer.arrayOneCells[randomIndex].y;

  state.computer.myCoordinateEnemyAttacks.push(randomIndex);
  state.player.arrayOneCells[randomIndex].attacked = true;
  state.player.arrayOneCells[randomIndex].backGround = "blue";
};

export const fnComputerClickOnPlayerTrue = (state, randomIndex) => {
  console.log("True enemy");
  let x = state.computer.arrayOneCells[randomIndex].x;
  let y = state.computer.arrayOneCells[randomIndex].y;
  state.computer.myCoordinateEnemyAttacks.push(randomIndex);
  state.player.arrayOneCells[randomIndex].attacked = true;
  state.player.arrayOneCells[randomIndex].backGround = "red";
  //
  //
  //
  let indexCell = randomIndex;
  let arrayAreaCoordinate = [];
  let gamer = state.computer;
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
    state.player.arrayOneCells[index].stateArea = true;
    state.computer.myCoordinateEnemyAttacks.push(index);
  };

  if (leftXNumber > 0 && indexYInArrayLetters > 0) {
    fnIfContent(indexLeftUp);
  }
  if (indexYInArrayLetters > 0) {
    fnIfContent(indexUp);
  }
  if (rightXNumber < 11 && indexYInArrayLetters > 0) {
    fnIfContent(indexRightUp);
  }
  if (leftXNumber > 0) {
    fnIfContent(indexCell - 1);
  }
  if (rightXNumber < 11) {
    fnIfContent(indexCell + 1);
  }
  if (leftXNumber > 0 && indexYInArrayLetters < 9) {
    fnIfContent(indexLeftDown);
  }
  if (indexYInArrayLetters < 9) {
    fnIfContent(indexDown);
  }
  if (rightXNumber < 11 && indexYInArrayLetters < 9) {
    fnIfContent(indexRightDown);
  }

  // if (gamer.areaShipCoordinates.length > 0) {
  // arrayAreaCoordinate.forEach((item) => {
  //   gamer.areaShipCoordinates.forEach((element) => {
  //     element.forEach((el) => {
  //       if (item === el) {
  //         gamer.arrayOneCells[item].stateArea = true;
  //       }
  //     });
  //   });
  // });
  // }

  // gamer.areaShipCoordinates.push(arrayAreaCoordinate);
  // console.log(
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
