import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, play } from "../../SeaBattleSlice";
import "./TitleC.css";

const TitleC = () => {
  const dispatch = useDispatch();
  const { image } = useSelector((state) => state.seaBattleReducer);
  return (
    <div>
      <div>
        <img className="title-img" src={image.battleSheepLogo} alt="..." />
      </div>
      <div>
        <button
          className="title-button"
          onClick={() => dispatch(play("-AAA-"))}>
          Play
        </button>
      </div>
    </div>
  );
};

export default TitleC;
