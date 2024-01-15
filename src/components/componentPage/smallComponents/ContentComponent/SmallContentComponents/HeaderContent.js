import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFight,
  changeQuantityCells,
  changeQuantityCellsHeight,
  changeQuantityCellsWidth,
  changeQuantityShips,
  changeWhoseMove,
  play,
} from "../../../SeaBattleSlice";
import "./HeaderContent.css";

const HeaderContent = () => {
  const dispatch = useDispatch();
  const { image, whoseMove, player, computer, fight, changesParametersGame } =
    useSelector((state) => state.seaBattleReducer);
  // console.log("whoseMove : ", whoseMove);
  return (
    <div>
      <h1>Sea Battle</h1>
      <div className="content-wrap-button-start-stop">
        <button onClick={() => dispatch(play())}>play</button>
      </div>
      <hr></hr>
      <div className="content-wrap-wrap-changes-params">
        <div className="content-wrap-changes-params">
          <h1>Count Ships : {changesParametersGame.ships}</h1>
          <div className="wrap-button">
            <button onClick={() => dispatch(changeQuantityShips("up"))}>
              <img src={image.up} alt="..." />
            </button>
            <button onClick={() => dispatch(changeQuantityShips("down"))}>
              <img src={image.down} alt="..." />
            </button>
          </div>
        </div>
        <div className="content-wrap-changes-params">
          <h1>Width Field : {changesParametersGame.widthField}</h1>
          <div className="wrap-button">
            <button onClick={() => dispatch(changeQuantityCellsWidth("plus"))}>
              <img src={image.up} alt="..." />
            </button>
            <button onClick={() => dispatch(changeQuantityCellsWidth("minus"))}>
              <img src={image.down} alt="..." />
            </button>
          </div>
        </div>
        <div className="content-wrap-changes-params">
          <h1>Height Field : {changesParametersGame.heightField}</h1>
          <div className="wrap-button">
            <button onClick={() => dispatch(changeQuantityCellsHeight("plus"))}>
              <img src={image.up} alt="..." />
            </button>
            <button
              onClick={() => dispatch(changeQuantityCellsHeight("minus"))}>
              <img src={image.down} alt="..." />
            </button>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="content-wrap-text-up-fields">
        <div>
          {player.availableBoats !== 0 ? (
            <h1>Boats : {player.availableBoats} </h1>
          ) : (
            <div className="content-wrap-button-start-stop">
              <button
                style={{
                  backgroundColor: fight ? "rgb(25, 138, 236)" : "",
                }}
                onClick={() => dispatch(changeFight())}>
                Fight
              </button>
            </div>
          )}
        </div>
        <div>
          {/* <div className="content-wrap-button-start-stop">
            <button>Start</button>
            <button>Replay</button>
          </div> */}

          <div className="content-wrap-button-start-stop">
            <button
              style={{ backgroundColor: whoseMove ? "rgb(25, 138, 236)" : "" }}
              onClick={() => dispatch(changeWhoseMove())}>
              Player
            </button>
            <button
              style={{ backgroundColor: whoseMove ? "" : "rgb(25, 138, 236)" }}
              onClick={() => dispatch(changeWhoseMove())}>
              Computer
            </button>
          </div>
        </div>
      </div>
      {fight && (
        <div className="content-header-wrap-enemy-ships">
          <h1> Enemy Ships : {player.enemyShips}</h1>
          <h1> Enemy Ships : {computer.enemyShips}</h1>
        </div>
      )}
    </div>
  );
};

export default HeaderContent;
