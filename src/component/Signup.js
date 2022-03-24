import React from 'react';
import { BrowserRouter as Router,
            Routes,
            Route,
            Link, 
            Navigate,
            useNavigate} from 'react-router-dom';
import Welcome from './Welcome';
import Errorpage from './Errorpage'



function Signup(props) {
    function signIn(){
        //Validate the sign up information here
        let name = document.getElementById("uname").value;
        console.log(document.getElementById("uname").value,
        document.getElementById("pwd").value,
        document.getElementById("userId").value);
        if(name=="Priya" &&
        document.getElementById("pwd").value == "Priya" &&
        document.getElementById("userId").value =="priya@gmail.com"){
            //information matches
            {props.setPage("welcome",name)};
        }
        else
        {
            {props.setPage("errorpg")};
        }
    
    }

    function clearPage(){
        {props.setPage("emptypg")};
    }
    return (
        <div>
            <h1>Log in</h1>
            <h3>User Name: </h3>
            <input type="text" id="uname" placeholder='Enter user name'
            onChange={clearPage}></input>
            <h3>Password: </h3>
            <input type="password" id="pwd" placeholder='Enter Password'
            onChange={clearPage}></input>
            <h3>E-mail ID: </h3>
            <input type="email" id="userId" placeholder='Enter registered Email ID'
            onChange={clearPage}></input>
            <p>
            <button id="SignIn" onClick={signIn}>Sign In</button>
            </p>
        </div>
    );
}

export default Signup;