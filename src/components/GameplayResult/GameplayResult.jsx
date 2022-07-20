import React, { useContext, useState, useEffect } from "react";
import "./GameplayResult.css";
import { AppContext } from "../../App";
import { FaSpinner } from "react-icons/fa";

const GameplayResult = () => {
  const [viewResult, setViewResult] = useState(false);
  const [housePicked, setHousePicked] = useState("");
  const [gameResult, setGameResult] = useState("");

  const arrayPick = ["rock", "scissors", "paper"];

  const {
    playerPick,
    setPlayerPick,
    viewGameplayResult,
    setViewGameplayResult,
    playerScore,
    setPlayerScore,
  } = useContext(AppContext);

  useEffect(() => {
    setGameResult("");
    setHousePicked("");

    let temp = Math.floor(Math.random() * 3);
    let tempResult = "";

    if (playerPick.length > 0) {
      let housePicked = arrayPick[temp];

      if (playerPick === housePicked) {
        tempResult = "draw";
      } else if (playerPick === "rock") {
        if (housePicked === "paper") {
          tempResult = "lose";
        } else if (housePicked === "scissors") {
          tempResult = "win";
        }
      } else if (playerPick === "paper") {
        if (housePicked === "scissors") {
          tempResult = "lose";
        } else if (housePicked === "rock") {
          tempResult = "win";
        }
      } else if (playerPick === "scissors") {
        if (housePicked === "rock") {
          tempResult = "lose";
        } else if (housePicked === "paper") {
          tempResult = "win";
        }
      }

      setTimeout(() => {
        if (tempResult === "win") {
          setPlayerScore(playerScore + 1);
        } else if (tempResult === "lose") {
          if (playerScore !== 0) {
            setPlayerScore(playerScore - 1);
          }
        } else {
          setPlayerScore(playerScore);
        }

        setGameResult(tempResult);
      }, 1000);

      setTimeout(() => {
        setHousePicked(housePicked);
      }, 1000);

      setTimeout(() => {
        setViewResult(true);
      }, 1200);
    } else {
      setHousePicked("");
    }
  }, [playerPick]);

  return (
    <div
      className={
        viewGameplayResult
          ? "fade_gameplay_result"
          : "gameplay_result_container"
      }
    >
      <div className="inner_gameplay_result">
        <div className="player_pick_content">
          <p className="pick_p_p">YOU PICKED</p>

          <div className="inner_content">
            {playerPick.length === 0 && <div className="black_circle"></div>}

            {playerPick === "rock" && (
              <div className="rock_content outer_pick_content">
                <div className="inner_pick_content">
                  <img src="./images/icon-rock.svg" alt="hand" />
                </div>
              </div>
            )}
            {playerPick === "scissors" && (
              <div className="scissors_content outer_pick_content">
                <div className="inner_pick_content">
                  <img src="./images/icon-scissors.svg" alt="hand" />
                </div>
              </div>
            )}
            {playerPick === "paper" && (
              <div className="paper_content outer_pick_content">
                <div className="inner_pick_content">
                  <img src="./images/icon-paper.svg" alt="hand" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={
            viewResult ? "result_content wide_result" : "result_content"
          }
        >
          <div className="inner_result">
            <h1>
              {gameResult === "win" && "YOU WIN"}
              {gameResult === "lose" && "YOU LOSE"}
              {gameResult === "draw" && "DRAW"}
            </h1>
            <button
              className="play_again_btn"
              onClick={() => {
                setViewGameplayResult(false);

                setTimeout(() => {
                  setViewResult(false);
                  setPlayerPick("");
                }, 400);
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>

        <div className="house_pick_content">
          <p className="pick_p_p">THE HOUSE PICKED</p>

          <div className="inner_content">
            {housePicked.length === 0 && (
              <div className="black_circle">
                <p>
                  <FaSpinner size={"4rem"} />
                </p>
              </div>
            )}

            {housePicked === "rock" && (
              <div className="rock_content outer_pick_content">
                <div className="inner_pick_content">
                  <img src="./images/icon-rock.svg" alt="hand" />
                </div>
              </div>
            )}
            {housePicked === "scissors" && (
              <div className="scissors_content outer_pick_content">
                <div className="inner_pick_content">
                  <img src="./images/icon-scissors.svg" alt="hand" />
                </div>
              </div>
            )}
            {housePicked === "paper" && (
              <div className="paper_content outer_pick_content">
                <div className="inner_pick_content">
                  <img src="./images/icon-paper.svg" alt="hand" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameplayResult;
