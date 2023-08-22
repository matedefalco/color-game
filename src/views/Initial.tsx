import {useGameContext} from "../GameContext";

export default function Initial() {
  const {setStatus, setTime, setScore} = useGameContext();

  const imgUrls = [
    "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
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
        <h1 style={{fontSize: "32px"}}>THE COLOR GAME</h1>
        <button onClick={handlePlay}>Play</button>
      </div>
      <footer>
        <p>Made with:</p>
        <ul>
          {imgUrls.map((url, index) => (
            <li key={index} className="references">
              <img alt={`Image ${index}`} src={url} />
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
