import { useGameContext } from "../GameContext";

export default function Initial() {
  const { setStatus, setTime } = useGameContext();

  return (
    <div className="container">
      <button
        onClick={() => {
          setStatus("playing");
          setTime(60);
        }}
      >
        Play
      </button>
    </div>
  );
}
