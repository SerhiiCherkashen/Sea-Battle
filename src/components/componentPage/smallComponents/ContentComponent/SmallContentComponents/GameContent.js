import React from "react";
// import PlayerFields from "./GameFields.js/ComputerFields";
// import ComputerFields from "./GameFields.js/PlayerFields";
import "./GameContent.css";
import PlayerFields from "./GameFields.js/PlayerFields";
import ComputerFields from "./GameFields.js/ComputerFields";
import { useSelector } from "react-redux";

const GameContent = () => {
  const { player, computer } = useSelector((state) => state.seaBattleReducer);

  return (
    <div>
      {player.enemyShips === 0 ? (
        <h1> "You Win"</h1>
      ) : computer.enemyShips === 0 ? (
        <h1>"You Lose"</h1>
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
