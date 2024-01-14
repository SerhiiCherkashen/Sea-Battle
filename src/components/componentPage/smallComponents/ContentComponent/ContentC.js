import React from "react";

import "./ContentC.css";
import HeaderContent from "./SmallContentComponents/HeaderContent";
import GameContent from "./SmallContentComponents/GameContent";

const ContentC = () => {
  return (
    <div className="wrap-lead-content">
      <HeaderContent />
      <GameContent />
    </div>
  );
};

export default ContentC;
