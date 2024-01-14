import bs from "../image/BS.jpg";
import x from "../image/x.png";
import miniX from "../image/miniX.png";

export const state = {
  changesParametersGame: {
    ships: 2,
    width: 10,
    height: 10,
  },
  image: {
    battleSheepLogo: bs,
    x: x,
    miniX: miniX,
  },
  whoseMove: true,
  arrayNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  arrayLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
  fight: false,
  fightOnEnemy: false,
  player: {
    arrayOneCells: [],
    availableBoats: 2,
    shipCoordinates: [],
    areaShipCoordinates: [],
    enemyShips: 5,
    myCoordinateEnemyAttacks: [],
    goAgain: false,
  },
  computer: {
    arrayOneCells: [],
    availableBoats: 15,
    shipCoordinates: [],
    areaShipCoordinates: [],
    enemyShips: 5,
    myCoordinateEnemyAttacks: [],
    goAgain: false,
  },
  arrayOneCells: [],
  nazva: "seaBatle2",
  count: 111,
  play: false,
};
