import React from "react";
import ReactDOM from "react-dom/client";
import { GameProvider } from "./GameContext.tsx";

import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
