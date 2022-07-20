import React, { useContext } from "react";
import "./Gameplay.css";
import { AppContext } from "../../App";

const Gameplay = () => {
  const { setPlayerPick, viewGameplayResult, setViewGameplayResult } =
    useContext(AppContext);

  return (
    <div
      className={
        viewGameplayResult
          ? "gameplay_container fade_gameplay"
          : "gameplay_container"
      }
    >
      <div className="inner_gameplay_container">
        <div className="gameplay_triangle">
          <img
            className="triangle_img"
            src="./images/bg-triangle.svg"
            alt="triangle"
          />
          {/* ------------------- ROCK --------------------- */}
          <div
            className="gameplay_rock outer_ring"
            onClick={() => {
              setPlayerPick("rock");
              setViewGameplayResult(true);
            }}
          >
            <div className="inner_gameplay_rock inner_ring">
              <img src="./images/icon-rock.svg" alt="hand" />
            </div>
          </div>
          {/* ------------------- SCISSORS --------------------- */}
          <div
            className="gameplay_scissors outer_ring"
            onClick={() => {
              setPlayerPick("scissors");
              setViewGameplayResult(true);
            }}
          >
            <div className="inner_gameplay_scissors inner_ring">
              <img src="./images/icon-scissors.svg" alt="hand" />
            </div>
          </div>{" "}
          {/* ------------------- PAPER --------------------- */}
          <div
            className="gameplay_paper outer_ring"
            onClick={() => {
              setPlayerPick("paper");
              setViewGameplayResult(true);
            }}
          >
            <div className="inner_gameplay_paper inner_ring">
              <img src="./images/icon-paper.svg" alt="hand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
