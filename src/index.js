import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './App';
//import {TodoComponent} from './component/TodoComponent';
import MyFuncComponent from './component/MyFuncComponent';
//default export hence imported under new name
import SimpleCalculator from './component/Calculator';
import reportWebVitals from './reportWebVitals';
import EffectHooks from './component/effectHooks';
import App from './App';
import Calculator from './component/Calculator';
import CalculatorFn from './component/CalculatorFn';

ReactDOM.render(
  <React.StrictMode>
    {/* name is props passed to child TodoComponent */}
    {/*<TodoComponent name="Priya"/>
    <MyFuncComponent name="Ram" age={37}/> */}
    {/* <MyFuncComponent />
    <SimpleCalculator/>
    <EffectHooks/> */}
    {/* <App/> */}
    {/* <Calculator/> */}
    <CalculatorFn/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
