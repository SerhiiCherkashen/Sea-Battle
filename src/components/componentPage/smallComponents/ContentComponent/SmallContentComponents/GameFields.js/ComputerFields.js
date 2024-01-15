import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clickComputerOnPlayerField,
  clickOnCell,
  clickOnEnemyCell,
  clickOnEnemyShip,
} from "../../../../SeaBattleSlice";
import { useStateAgain } from "../../../../stateFunction";

const ComputerFields = () => {
  const [stateAgain, setStateAgain] = useState(false);
  const dispatch = useDispatch();
  const {
    changesParametersGame,
    arrayNumbers,
    arrayLetters,
    image,
    player,
    computer,
    fightOnEnemy,
  } = useSelector((state) => state.seaBattleReducer);
  return (
    <div>
      <h1>Computer Fields</h1>
      <div className="content-block-game">
        <div
          className="content-wrap-one-number"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
          }}>
          {arrayNumbers.map((element, index) => {
            return (
              <div key={index + Date.now()} className="content-one-number">
                {element}
              </div>
            );
          })}
        </div>
        <div className="content-wrap-one-cell">
          {computer.arrayOneCells.map((element, index) => {
            return (
              <div
                key={index + Date.now()}
                style={{
                  backgroundColor: element.backGround,
                  // element.stateChose && "green",
                }}
                index={element.index}
                className="content-one-cell"
                onClick={() =>
                  setTimeout(() => {
                    console.log("----------stateAgain : ", stateAgain);
                    if (fightOnEnemy) {
                      dispatch(
                        clickOnEnemyCell({
                          x: element.x,
                          y: element.y,
                          gamer: "computer",
                          enemy: "enemy",
                        })
                      );
                      if (!player.goAgain) {
                        setTimeout(() => {
                          dispatch(clickComputerOnPlayerField());
                        }, 200);
                      }
                    } else {
                      dispatch(
                        clickOnCell({
                          x: element.x,
                          y: element.y,
                          gamer: "computer",
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

export default ComputerFields;
