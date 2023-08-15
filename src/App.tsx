import { useEffect, useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (time > 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timeout);
    }
  }, [time]);

  return (
    <main>
      <header></header>
      <section>
        {!isPlaying && (
          <button
            onClick={() => {
              setIsPlaying(true);
              setTime(60);
            }}
          >
            Jugar
          </button>
        )}
        {isPlaying && (
          <div className="container">
            <div>{time}</div>
            <div>{score}</div>
          </div>
        )}
      </section>
      <footer></footer>
    </main>
  );
}

export default App;
