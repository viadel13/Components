import Index from "./components/Button/Index";
import ScrollText from "./components/ScrollText/Index";
import TextAnim from "./components/TextAnim/Index";
import TextRotate from "./components/TextRotate/Index";
import TextScroll from "./components/TextScroll/Index";
import Works from "./components/Works/Index";


function App() {
  return (
    <div className="App">
      <ScrollText />
      <TextAnim/>
      <TextScroll />
      <Works />
      <Index />
      <TextRotate />
    </div>
  );
}

export default App;
