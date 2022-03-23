import logo from './logo.svg';
import './App.css';
import {TodoComponent} from './component/TodoComponent';
import StylingComponent from './component/StylingComponent.js';
import  Component1  from './component/Component1.js';
import React, { useState } from 'react';
import DynamicParent from './component/DynamicParent';

import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Profile from './component/Profile';
import Errorpage from './component/Errorpage';
import Redirect from './component/Redirect';
import Signup from './component/Signup';
import Welcome from './component/Welcome';
import Empty from './component/Empty';
import LoginResult from './component/LoginResult';


function App() {
  const [user,changeUser] = useState('userA');
  const numbers=[1,2,3,4];
  const [pageNum,setPageNum] = useState('emptypg');
  const Pages = {
    welcome : Welcome,
    errorpg : Errorpage,
    emptypg : Empty
  };
  const [uname,setUname] = useState('user');

  const setPage = (num,name) => {
    //setPageNum(num);
    setPageNum(num);
    setUname(name);
    console.log("num is ",num)
  }
  const propsObj = {'pagenum':{pageNum},'userName':{uname}};
  console.log("In App: ",propsObj);
  <LoginResult {...propsObj}/>
  let ThePage = Pages[{pageNum}];
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
    {/* <Component1/> */}
    {/* <DynamicParent user={user}
    numbers={numbers}/>
    <button onClick={()=>changeUser("userA")}>Change Child B</button>
    <button onClick={()=>changeUser("userB")}>Change Child A</button> */}

    {/* Router Sample Code
    <Router>
      {/ * whatever value is put inside this tag becomes link to different page * /}
      <nav>
        <ul>
          <li>
            <Link to="/home">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/ * '/' specifies default route * /}
        <Route path ='/'element ={<Home/>}/>
        <Route path ='/home' element ={<Home/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path ="/profile" element ={<Profile/>}/>
        <Route path ="*" element ={<Errorpage/>}/>
      </Routes>
      <Redirect/>
    </Router>
    Router Sample Code */}
    <Signup setPage={setPage}/>
    <LoginResult {...propsObj}/>
    <Router>
            <div style={{display:'none'}}>
            
            <Link to="/success">Welcome</Link>
            <Link to="/fail">Access Denied</Link>
            <Routes>
            <Route path='/' element={<Empty/>}></Route>
            <Route path='/success' element={< Welcome />}></Route>
            <Route path='/fail' element={<Errorpage />}></Route>
            </Routes>
            </div>
        
        
    </Router>
    
    
    </div>
  );
}

export default App;
