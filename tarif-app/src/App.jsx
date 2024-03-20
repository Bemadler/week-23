
import './App.css';
import BlockOne from './components/blockOne/BlockOne.jsx';
import BlockTwo from './components/blockTwo/BlockTwo.jsx';
import BlockThree from './components/blockThree/BlockThree.jsx';
import BlockFour from './components/blockFour/BlockFour.jsx';

function App() {
  return (
    <div className="App">
      <div className="row">
        <BlockOne/>
        <BlockTwo/>
        <BlockThree/>
        <BlockFour/>
      </div>
    </div>
  );
}

export default App;
