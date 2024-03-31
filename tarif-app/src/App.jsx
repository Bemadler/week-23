import "./App.css";
import Block from "./components/block/Block";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Block
          className="BlockOne"
          text="Безлимитный 300"
          price={300}
          speed="до 10 Мбит/сек"
        />
        <Block
          className="BlockTwo"
          text="Безлимитный 450"
          price={450}
          speed="до 50 Мбит/сек"
        />
        <Block
          className="BlockThree"
          text="Безлимитный 550"
          price={550}
          speed="до 100 Мбит/сек"
        />
        <Block
          className="BlockFour"
          text="Безлимитный 1000"
          price={1000}
          speed="до 200 Мбит/сек"
        />
      </div>
    </div>
  );
}

export default App;
