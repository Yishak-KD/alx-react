import holberton from "./Holberton.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <hr />
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
      </footer>
    </div>
  );
}

export default App;
