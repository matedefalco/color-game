import { useGameContext } from "../GameContext";

export default function Initial() {
  const { setStatus, setTime, setScore } = useGameContext();

  function handlePlay() {
    setStatus("playing");
    setTime(60);
    setScore(0);
  }

  return (
    <div className="container">
      <header />
      <button onClick={handlePlay}>Play</button>
      <footer />
    </div>
  );
}
