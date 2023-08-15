import { useGameContext } from "../GameContext";
import colorsData from "../colors";

export default function Initial() {
  const { setStatus, setTime, setScore, setColor } = useGameContext();

  function getRandomColors() {
    const colorIndexes: number[] = [];

    while (colorIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * colorsData.length);

      if (!colorIndexes.includes(randomIndex)) {
        colorIndexes.push(randomIndex);
      }
    }
    const color1 = colorsData[colorIndexes[0]];
    const color2 = colorsData[colorIndexes[1]];

    return [color1, color2];
  }

  function handlePlay() {
    const [color1, color2] = getRandomColors();

    setStatus("playing");
    setTime(60);
    setScore(0);
    setColor([color1, color2]);
  }

  return (
    <div className="container">
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}
