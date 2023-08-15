import React, { createContext, useContext, useEffect, useState } from "react";

interface GameContextData {
  status: "initial" | "playing" | "finished";
  setStatus: React.Dispatch<
    React.SetStateAction<"initial" | "playing" | "finished">
  >;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

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

  useEffect(() => {
    if (status === "playing") {
      if (time > 0) {
        const timeout = setTimeout(() => setTime(time - 1), 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [status, time]);

  const contextValue: GameContextData = {
    status,
    setStatus,
    time,
    setTime,
    score,
    setScore,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}
