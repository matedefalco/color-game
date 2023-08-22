import React, { createContext, useContext, useState } from "react";
import { Colors, GameContextData } from "./types";

const GameContext = createContext<GameContextData | undefined>(undefined);

export function useGameContext() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }

  return context;
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"initial" | "playing" | "finished">(
    "initial"
  );
  const [time, setTime] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [maxScore, setMaxScore] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);

  const contextValue: GameContextData = {
    status,
    setStatus,
    time,
    setTime,
    score,
    setScore,
    maxScore,
    setMaxScore,
    counter,
    setCounter,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}
