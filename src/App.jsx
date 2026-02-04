import { Draggable } from "gsap/Draggable";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import gsap from "gsap";
import Terminal from "./windows/Terminal";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>
    </main>
  );
};

export default App;
