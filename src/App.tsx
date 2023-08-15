import { useGameContext } from "./GameContext";
import Finished from "./views/Finished";
import Playing from "./views/Playing";
import Initial from "./views/Initial";

function App() {
  const { status } = useGameContext();

  return (
    <main>
      <header></header>
      <section>
        {status === "initial" && <Initial />}
        {status === "playing" && <Playing />}
        {status === "finished" && <Finished />}
      </section>
      <footer></footer>
    </main>
  );
}

export default App;
