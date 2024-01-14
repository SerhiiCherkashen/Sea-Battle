import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clickOnCell,
  clickOnEnemyCell,
  clickOnEnemyShip,
} from "../../../../SeaBattleSlice";

const PlayerFields = () => {
  const dispatch = useDispatch();
  const {
    arrayNumbers,
    arrayLetters,
    player,
    computer,
    image,
    fight,
    fightOnEnemy,
  } = useSelector((state) => state.seaBattleReducer);
  return (
    <div>
      <h1>Player Fields</h1>
      <div className="content-block-game">
        <div className="content-wrap-one-number">
          {arrayNumbers.map((element, index) => {
            return (
              <div key={index + Date.now()} className="content-one-number">
                {element}
              </div>
            );
          })}
        </div>
        <div className="content-wrap-one-cell">
          {player.arrayOneCells.map((element, index) => {
            return (
              <div
                key={index + Date.now()}
                style={{
                  backgroundColor: element.backGround,
                  // (element.stateArea && "yellow") ||
                  // element.stateChose && "green",
                }}
                index={element.index}
                className="content-one-cell"
                onClick={() =>
                  setTimeout(() => {
                    if (fightOnEnemy) {
                      dispatch(
                        clickOnEnemyCell({
                          enemy: "enemy",
                          x: element.x,
                          y: element.y,
                          gamer: "player",
                        })
                      );
                    } else {
                      dispatch(
                        clickOnCell({
                          x: element.x,
                          y: element.y,
                          gamer: "player",
                        })
                      );
                    }
                  }, 300)
                }>
                {element.stateArea && <img src={image.miniX} />}
                {/* {element.x}" "{element.y} */}
              </div>
            );
          })}
        </div>
        <div className="content-wrap-one-letters">
          {arrayLetters.map((element, index) => {
            return (
              <div key={index + Date.now()} className="content-one-letter">
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayerFields;
