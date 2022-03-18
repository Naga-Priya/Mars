import logo from './logo.svg';
import './App.css';
import {TodoComponent} from './component/TodoComponent';
import StylingComponent from './component/StylingComponent.js';
import  Component1  from './component/Component1.js';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello World!!</h1>
    {/* <TodoComponent/> */}
    {/*<StylingComponent/>*/}
    <Component1/>
    </div>
  );
}

export default App;
