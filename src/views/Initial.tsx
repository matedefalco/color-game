import React from "react";
import { useGameContext } from "../GameContext";
import colorsData from "../colors";

export default function Initial() {
  const { setStatus, setTime, setScore } = useGameContext();

  const imgUrls = [
    "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
  ];

  function handlePlay() {
    setStatus("playing");
    setTime(60);
    setScore(0);
  }

  return (
    <div className="container">
      <header />
      <div className="flex">
        <h1 style={{ fontSize: "32px" }}>THE COLOR GAME</h1>
        <button onClick={handlePlay}>Play</button>
      </div>
      <footer>
        <p className="text-sm">Made with:</p>
        <ul>
          {imgUrls.map((url, index) => (
            <li className="references" key={index}>
              <img src={url} alt={`Image ${index}`} />
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
