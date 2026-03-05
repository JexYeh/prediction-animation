import { IconDemo } from './components/AnimatedIcons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Icon Animations</h1>
        <p>Success and Error Icons with Bounce Effect</p>
      </header>
      <main>
        <IconDemo />
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => window.location.reload()}>Replay Animation</button>
        </div>
      </main>
    </div>
  );
}

export default App;
