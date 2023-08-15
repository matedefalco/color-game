import { useGameContext } from "../GameContext";

export default function Finished() {
  const { setStatus, setTime } = useGameContext();

  return (
    <div className="container">
      <header />
      <button
        onClick={() => {
          setStatus("playing");
          setTime(60);
        }}
      >
        Reset
      </button>
      <footer />
    </div>
  );
}
