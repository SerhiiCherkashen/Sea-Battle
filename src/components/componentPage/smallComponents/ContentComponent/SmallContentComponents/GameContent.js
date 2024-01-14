import React from "react";
// import PlayerFields from "./GameFields.js/ComputerFields";
// import ComputerFields from "./GameFields.js/PlayerFields";
import "./GameContent.css";
import PlayerFields from "./GameFields.js/PlayerFields";
import ComputerFields from "./GameFields.js/ComputerFields";
import { useSelector } from "react-redux";

const GameContent = () => {
  const { fight, player, computer } = useSelector(
    (state) => state.seaBattleReducer
  );
  return (
    <div>
      {player.enemyShips === 0 ? (
        computer.enemyShips === 0 ? (
          <h1>"You Lose"</h1>
        ) : (
          <h1> "You Win"</h1>
        )
      ) : (
        <div className="content-wrap-fields">
          <PlayerFields />
          <ComputerFields />
        </div>
      )}
    </div>
  );
};

export default GameContent;

{
  /* <div className="content-block-game">
<div className="content-wrap-one-number">
  {arrayNumbers.map((element, index) => {
    return <div className="content-one-number">{element}</div>;
  })}
</div>
<div className="content-wrap-one-cell">
  {player.arrayOneCells.map((element) => {
    return (
      <div
        style={{ backgroundColor: element.stateChose && "green" }}
        index={element.index}
        className="content-one-cell"
        onClick={() =>
          setTimeout(() => {
            dispatch(
              clickOnCell({
                x: element.x,
                y: element.y,
              })
            );
          }, 300)
        }>
        {element.x}" "{element.y}
      </div>
    );
  })}
</div>
<div className="content-wrap-one-letters">
  {arrayLetters.map((element, index) => {
    return <div className="content-one-letter">{element}</div>;
  })}
</div>
</div> */
}
