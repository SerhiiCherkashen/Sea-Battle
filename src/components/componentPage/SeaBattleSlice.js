import { createSlice } from "@reduxjs/toolkit";
import { state } from "./state";
import {
  fnClickOnCell,
  fnClickOnCellPlayer,
  fnClickOnEnemyCell,
  fnClickOnEnemyCellFalse,
  fnClickOnEnemyCellTrue,
  fnComputerClickOnPlayer,
  fnComputerClickOnPlayerFalse,
  fnComputerClickOnPlayerTrue,
  fnPlay,
} from "./stateFunction";

const seaBattleSlice = createSlice({
  name: "seaBattleSlice",
  initialState: state,
  reducers: {
    // addNumbersElements: (state) => {
    //   for (let i = 1; i < 10; i++) {
    //     state.arrayNumbers.push(1);
    //   }
    // },
    // addLettersElements: (state) => {
    //   for (let y = 1; y < 2; y++) {
    //     state.arrayAlphabet.forEach((element) => {
    //       let aaa = "";
    //       for (let x = 0; x < y; x++) {
    //         aaa += element;
    //       }
    //       state.arrayLetters.push(aaa);
    //     });
    //     // state.arrayNumbers.push(1);
    //   }
    // },
    addOneCell: (state, action) => {
      state.arrayOneCells.push(action.payload);
    },
    play: (state, action) => {
      state.count += action.payload;
      state.play = !state.play;
      fnPlay(state);
    },
    clickOnCell: (state, action) => {
      console.log("clickOnCell action : ", action.payload);
      let gamerNow;
      if (action.payload.gamer === "player") {
        gamerNow = state.player;
      } else {
        gamerNow = state.computer;
      }
      let x = action.payload.x;
      let y = action.payload.y;
      let indexCell = gamerNow.arrayOneCells.findIndex(
        (elem) => elem.x === x && elem.y === y
      );

      if (
        gamerNow.availableBoats >= 1 &&
        !gamerNow.arrayOneCells[indexCell].stateChose &&
        !gamerNow.arrayOneCells[indexCell].stateArea
      ) {
        fnClickOnCellPlayer(state, action.payload.gamer, x, y);
        gamerNow.availableBoats -= 1;
        state.player.arrayOneCells[indexCell].backGround = "pink";
      }
    },
    changeWhoseMove: (state) => {
      state.whoseMove = !state.whoseMove;
    },
    changeFight: (state, action) => {
      console.log("changeFight ");

      state.fight = !state.fight;
      state.player.arrayOneCells.forEach((element) => {
        element.stateArea = false;
      });
      let i = 1;
      while (i > 0) {
        let randomIndexCoordinate = Math.round(
          Math.random() *
            (state.changesParametersGame.widthField *
              state.changesParametersGame.heightField) -
            1
        );
        let x = state.computer.arrayOneCells[randomIndexCoordinate].x;
        let y = state.computer.arrayOneCells[randomIndexCoordinate].y;

        console.log(
          " changeFight in While -  randomIndexCoordinate : ",
          randomIndexCoordinate
        );
        console.log(" changeFight  x : ", x);
        console.log(" changeFight  y : ", y);
        console.log(
          "changeFight   availableBoats >= 1",
          state.computer.availableBoats >= 1,
          "     stateChose : ",
          !state.computer.arrayOneCells[randomIndexCoordinate].stateChose,
          "   stateArea-",
          !state.computer.arrayOneCells[randomIndexCoordinate].stateArea
        );

        if (
          state.computer.availableBoats >= 1 &&
          !state.computer.arrayOneCells[randomIndexCoordinate].stateChose &&
          !state.computer.arrayOneCells[randomIndexCoordinate].stateArea
        ) {
          fnClickOnCellPlayer(state, "computer", x, y);
          state.computer.arrayOneCells[randomIndexCoordinate].backGround =
            "yellow";
          // color cell computer
          state.computer.availableBoats -= 1;
        }

        // console.log("??? : ", state.computer.areaShipCoordinates.length);

        i = state.computer.availableBoats;
      }
      state.fightOnEnemy = !state.fightOnEnemy;
      state.computer.arrayOneCells.forEach((element) => {
        element.stateArea = false;
      });
    },
    clickOnEnemyCell: (state, action) => {
      console.log("clickOnEnemyCell action : ", action.payload);
      //
      // let gamerNow;
      // if (action.payload.gamer === "player") {
      //   gamerNow = state.computer;
      // } else {
      //   gamerNow = state.player;
      // }
      // console.log("after if 1");

      let x = action.payload.x;
      let y = action.payload.y;
      let indexCell = state.computer.arrayOneCells.findIndex(
        (elem) => elem.x === x && elem.y === y
      );
      console.log(
        "clickOnEnemyCell  attacked :  ",
        state.computer.arrayOneCells[indexCell].attacked,
        "  stateChose :  ",
        state.computer.arrayOneCells[indexCell].stateChose,
        "  stateArea :  ",
        state.computer.arrayOneCells[indexCell].stateArea
      );
      if (
        state.computer.arrayOneCells[indexCell].attacked === false &&
        state.computer.arrayOneCells[indexCell].stateArea === false
      ) {
        if (!state.computer.arrayOneCells[indexCell].stateChose) {
          fnClickOnEnemyCellFalse(state, x, y, indexCell);
        } else {
          fnClickOnEnemyCellTrue(state, x, y, indexCell);
        }
      } else {
        console.log(" ---yje---");
      }
    },
    clickComputerOnPlayerField: (state) => {
      let randomIndex = Math.ceil(
        Math.random() *
          (state.changesParametersGame.widthField *
            state.changesParametersGame.heightField) -
          1
      );
      let result = 1;

      while (result >= 0) {
        console.log("Random N index: ", randomIndex);
        result = state.computer.myCoordinateEnemyAttacks.findIndex(
          (element) => element === randomIndex
        );
        if (result !== -1) {
          randomIndex = Math.ceil(
            Math.random() *
              (state.changesParametersGame.widthField *
                state.changesParametersGame.heightField) -
              1
          );
        }
        console.log("Random N result: ", result);
      }
      console.log("randome : ", randomIndex);
      if (!state.player.arrayOneCells[randomIndex].stateChose) {
        fnComputerClickOnPlayerFalse(state, randomIndex);
      } else {
        fnComputerClickOnPlayerTrue(state, randomIndex);
      }
      let asd = state.computer.myCoordinateEnemyAttacks;
      console.log(
        "state.computer.myCoordinateEnemyAttacks.length : ",
        state.computer.myCoordinateEnemyAttacks.length,
        "-----",
        asd[0],
        asd[1],
        asd[2],
        asd[3],
        asd[4],
        asd[5],
        asd[6],
        asd[7],
        asd[8],
        asd[9],
        asd[10],
        asd[11],
        asd[12],
        asd[13],
        asd[14],
        asd[15],
        asd[16],
        asd[17]
      );
    },
    changeQuantityShips: (state, action) => {
      if (
        action.payload === "up" &&
        state.changesParametersGame.ships <
          state.changesParametersGame.widthField *
            state.changesParametersGame.heightField *
            0.12
      ) {
        state.changesParametersGame.ships += 1;
        state.player.availableBoats += 1;
        state.player.enemyShips += 1;
        state.computer.availableBoats += 1;
        state.computer.enemyShips += 1;
      } else if (
        action.payload === "down" &&
        state.changesParametersGame.ships > 1
      ) {
        state.changesParametersGame.ships -= 1;
        state.player.availableBoats -= 1;
        state.player.enemyShips -= 1;
        state.computer.availableBoats -= 1;
        state.computer.enemyShips -= 1;
      }
      console.log("qqq");
    },
    changeQuantityCellsWidth: (state, action) => {
      state.arrayNumbers = [];
      for (let i = 1; i < state.changesParametersGame.widthField + 10; i++) {
        state.arrayNumbers.push(i);
      }
      if (action.payload === "plus") {
        state.changesParametersGame.widthField += 1;
      } else if (
        action.payload === "minus" &&
        state.changesParametersGame.widthField > 1
      ) {
        if (
          state.changesParametersGame.ships >
          state.changesParametersGame.widthField *
            state.changesParametersGame.heightField *
            0.12
        ) {
          state.changesParametersGame.ships -= 1;
        }
        state.changesParametersGame.widthField -= 1;
      }
    },
    changeQuantityCellsHeight: (state, action) => {
      for (let y = 1; y < 5; y++) {
        state.arrayAlphabet.forEach((element) => {
          let aaa = "";
          for (let x = 0; x < y + 1; x++) {
            aaa += element;
          }
          state.arrayLetters.push(aaa);
        });
      }
      if (action.payload === "plus") {
        state.changesParametersGame.heightField += 1;
      } else if (
        action.payload === "minus" &&
        state.changesParametersGame.heightField > 1
      ) {
        if (
          state.changesParametersGame.ships >
          state.changesParametersGame.widthField *
            state.changesParametersGame.heightField *
            0.12
        ) {
          state.changesParametersGame.ships -= 1;
        }
        state.changesParametersGame.heightField -= 1;
      }
    },
  },
});

export const {
  addNumbersElements,
  addLettersElements,
  play,
  addOneCell,
  clickOnCell,
  changeWhoseMove,
  changeFight,
  clickOnEnemyCell,
  clickComputerOnPlayerField,
  changeQuantityShips,
  changeQuantityCellsWidth,
  changeQuantityCellsHeight,
} = seaBattleSlice.actions;
export default seaBattleSlice.reducer;

//
//
//

// if (player === "player") {
//   let playerNow = state.player;
// } else {
//   let playerNow = state.computer;
// }
// let arrayAreaCoordinate = [];
// let indexCell = state.player.arrayOneCells.findIndex(
//   (elem) => elem.x === x && elem.y === y
// );
// state.player.arrayOneCells[indexCell].stateChose =
//   !state.player.arrayOneCells[indexCell].stateChose;
// //
// //
// //
// let leftXNumber = x - 1;
// let rightXNumber = x + 1;

// let indexYInArrayLetters = state.arrayLetters.findIndex(
//   (element) => element === y
// );
// let upYLetter = state.arrayLetters[indexYInArrayLetters - 1];
// let downYLetter = state.arrayLetters[indexYInArrayLetters + 1];
// let indexUp = state.player.arrayOneCells.findIndex(
//   (element) => element.x === x && element.y === upYLetter
// );
// let indexLeftUp = state.player.arrayOneCells.findIndex(
//   (element) => element.x === leftXNumber && element.y === upYLetter
// );
// let indexRightUp = state.player.arrayOneCells.findIndex(
//   (element) => element.x === rightXNumber && element.y === upYLetter
// );
// let indexDown = state.player.arrayOneCells.findIndex(
//   (element) => element.x === x && element.y === downYLetter
// );
// let indexLeftDown = state.player.arrayOneCells.findIndex(
//   (element) => element.x === leftXNumber && element.y === downYLetter
// );
// let indexRightDown = state.player.arrayOneCells.findIndex(
//   (element) => element.x === rightXNumber && element.y === downYLetter
// );
// //
// //   console.log("leftXNumber : ", leftXNumber);
// //   console.log("rightXNumber : ", rightXNumber);
// //   console.log("upYLetter : ", upYLetter);
// //   console.log("downYLetter : ", downYLetter);
// //   console.log("indexYInArrayLetters : ", indexYInArrayLetters);
// if (leftXNumber > 0 && indexYInArrayLetters > 0) {
//   state.player.arrayOneCells[indexLeftUp].stateArea =
//     !state.player.arrayOneCells[indexLeftUp].stateArea;
//   arrayAreaCoordinate.push(indexLeftUp);
// }
// if (indexYInArrayLetters > 0) {
//   state.player.arrayOneCells[indexUp].stateArea =
//     !state.player.arrayOneCells[indexUp].stateArea;
//   arrayAreaCoordinate.push(indexUp);
// }
// if (rightXNumber < 11 && indexYInArrayLetters > 0) {
//   state.player.arrayOneCells[indexRightUp].stateArea =
//     !state.player.arrayOneCells[indexRightUp].stateArea;
//   arrayAreaCoordinate.push(indexRightUp);
// }
// if (leftXNumber > 0) {
//   state.player.arrayOneCells[indexCell - 1].stateArea =
//     !state.player.arrayOneCells[indexCell - 1].stateArea;
//   arrayAreaCoordinate.push(indexCell - 1);
// }
// if (rightXNumber < 11) {
//   state.player.arrayOneCells[indexCell + 1].stateArea =
//     !state.player.arrayOneCells[indexCell + 1].stateArea;
//   arrayAreaCoordinate.push(indexCell + 1);
// }
// if (leftXNumber > 0 && indexYInArrayLetters < 9) {
//   state.player.arrayOneCells[indexLeftDown].stateArea =
//     !state.player.arrayOneCells[indexLeftDown].stateArea;
//   arrayAreaCoordinate.push(indexLeftDown);
// }
// if (indexYInArrayLetters < 9) {
//   state.player.arrayOneCells[indexDown].stateArea =
//     !state.player.arrayOneCells[indexDown].stateArea;
//   arrayAreaCoordinate.push(indexDown);
// }
// if (rightXNumber < 11 && indexYInArrayLetters < 9) {
//   state.player.arrayOneCells[indexRightDown].stateArea =
//     !state.player.arrayOneCells[indexRightDown].stateArea;
//   arrayAreaCoordinate.push(indexRightDown);
// }
// if (state.player.areaShipCoordinates.length > 0) {
//   arrayAreaCoordinate.forEach((item) => {
//     state.player.areaShipCoordinates.forEach((element) => {
//       element.forEach((el) => {
//         if (item === el) {
//           state.player.arrayOneCells[item].stateArea = true;
//         }
//       });
//     });
//   });
// }
// state.player.areaShipCoordinates.push(arrayAreaCoordinate);
// console.log(
//   " state.player.areaShipCoordinates : ",
//   state.player.areaShipCoordinates.length,
//   "  [0]",
//   state.player.areaShipCoordinates[0],
//   "   [1]",
//   state.player.areaShipCoordinates[1],
//   "   [2]",
//   state.player.areaShipCoordinates[2]
// );

// state.computer.availableBoats -= 1;
//
//
//
//
//
//
// let indexCellPoX = state.player.arrayOneCells.findIndex(
//   (elem) => elem.x === x && elem.y === y
// );

// state.player.availableBoats -= 1;
// state.player.shipCoordinates.push({ x, y });
// console.log(
//   " state.player.shipCoordinates  : ",
//   state.player.shipCoordinates,
//   state.player.availableBoats
// )
//
//
// console.log(
//   "state.player.areaShipCoordinates.length ---: ",
//   state.player.areaShipCoordinates.length,
//   "   [0]",
//   state.player.areaShipCoordinates[0],
//   "   [1]",
//   state.player.areaShipCoordinates[1],
//   "   [2]",
//   state.player.areaShipCoordinates[2],
//   "   [3]",
//   state.player.areaShipCoordinates[3],
//   "   [4]",
//   state.player.areaShipCoordinates[4],
//   "   [5]",
//   state.player.areaShipCoordinates[5],
//   "   [6]",
//   state.player.areaShipCoordinates[6],
//   "   [7]",
//   state.player.areaShipCoordinates[7],
//   state.player.areaShipCoordinates
// );
//
//
// console.log(
//   "Area left : ",
//   state.player.arrayOneCells[indexCell - 1].x,
//   state.player.arrayOneCells[indexCell - 1].y
// );
// console.log(
//   "NOW CELL --- : ",
//   state.player.arrayOneCells[indexCell].x,
//   state.player.arrayOneCells[indexCell].y
// );
// console.log(
//   "Area right : ",
//   state.player.arrayOneCells[indexCell + 1].x,
//   state.player.arrayOneCells[indexCell + 1].y
// );
// console.log(
//   "Area LeftUp : ",
//   state.player.arrayOneCells[indexLeftUp].x,
//   state.player.arrayOneCells[indexLeftUp].y
// );
// console.log(
//   "Area Up: ",
//   state.player.arrayOneCells[indexUp].x,
//   state.player.arrayOneCells[indexUp].y
// );
// console.log(
//   "Area  RightUp : ",
//   state.player.arrayOneCells[indexRightUp].x,
//   state.player.arrayOneCells[indexRightUp].y
// );
// console.log(
//   "Area  LeftDown : ",
//   state.player.arrayOneCells[indexLeftDown].x,
//   state.player.arrayOneCells[indexLeftDown].y
// );
// console.log(
//   "Area  Down : ",
//   state.player.arrayOneCells[indexDown].x,
//   state.player.arrayOneCells[indexDown].y
// );
// console.log(
//   "Area  RightDown : ",
//   state.player.arrayOneCells[indexRightDown].x,
//   state.player.arrayOneCells[indexRightDown].y
// );
