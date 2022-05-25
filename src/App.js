import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Stopwatch from './component/Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter startTime={1} endTime={20}/>
        <Stopwatch/>
      </header>
    </div>
  );
}

export default App;
