import { useGameContext } from "./GameContext";
import Finished from "./views/Finished";
import Playing from "./views/Playing";
import Initial from "./views/Initial";

function App() {
  const { status } = useGameContext();

  return (
    <main>
      <section>
        {status === "initial" && <Initial />}
        {status === "playing" && <Playing />}
        {status === "finished" && <Finished />}
      </section>
    </main>
  );
}

export default App;
