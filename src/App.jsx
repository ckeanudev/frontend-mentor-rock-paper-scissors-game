import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import {
  Header,
  Gameplay,
  GameplayResult,
  Rules,
} from "./components/componentsIndex";

export const AppContext = createContext();

function App() {
  const [playerPick, setPlayerPick] = useState("");
  const [viewGameplayResult, setViewGameplayResult] = useState(false);
  const [viewRules, setViewRules] = useState(false);

  const [playerScore, setPlayerScore] = useState(0);

  return (
    <AppContext.Provider
      value={{
        playerPick,
        setPlayerPick,
        viewGameplayResult,
        setViewGameplayResult,
        viewRules,
        setViewRules,
        playerScore,
        setPlayerScore,
      }}
    >
      <div className="app_container">
        <button
          className="rules_btn"
          onClick={() => {
            setViewRules(true);
          }}
        >
          RULES
        </button>
        <div className="inner_app_container">
          <Header />
          {viewRules && <Rules />}
          <Gameplay />
          <GameplayResult />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
