import React from "react";
import { useSelector } from "react-redux";
import TitleC from "./smallComponents/TitleComponent/TitleC";
import ContentC from "./smallComponents/ContentComponent/ContentC";

const SeaBattleComponent = () => {
  const { play } = useSelector((state) => state.seaBattleReducer);
  return (
    <div>
      {/* {!play ? <TitleC /> : */}
      <ContentC />
      {/* // } */}
    </div>
  );
};

export default SeaBattleComponent;
