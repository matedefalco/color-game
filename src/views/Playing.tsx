import { useGameContext } from "../GameContext";
import Colors from "../colors";

export default function Playing() {
  const { status, setStatus, time, setTime, score, setScore } =
    useGameContext();

  return (
    <div className="container">
      <div>{time}</div>
      <div>{score}</div>
    </div>
  );
}
