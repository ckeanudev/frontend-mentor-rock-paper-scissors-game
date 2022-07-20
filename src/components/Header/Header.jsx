import React, { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../App";

const Header = () => {
  const { playerScore } = useContext(AppContext);

  return (
    <div className="header_container">
      <div className="left_header">
        <img src="./images/logo.svg" alt="game_logo" />
      </div>
      <div className="right_header">
        <p className="score_p">SCORE</p>
        <h1 className="score_result">{playerScore}</h1>
      </div>
    </div>
  );
};

export default Header;
