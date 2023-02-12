import wip from './img/cone.png';
import underconst from './img/underconst.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wip} className="App-logo" alt="logo" />
        
        <p>
          <img src={underconst} alt="construction" width="30%"/>
          {/* Website Under Construction */}
        </p>
      </header>
    </div>
  );
}

export default App;
