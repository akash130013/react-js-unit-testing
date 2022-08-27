import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {

  const a=2,b=3;

  return (
    <div className="App">
      <header className="App-header">
       
        
      <ul className="list">
        <li className="list-item">Hii</li>
        <li className="list-item">Hey</li>
        <li className="list-item">Hello</li>
      </ul>
      <h1 data-testid="tests">Hi THis is a test</h1>
      <span title="sum">{a+b}</span>
      <Login />

      
      </header>
      
    </div>
  );
}

export default App;
