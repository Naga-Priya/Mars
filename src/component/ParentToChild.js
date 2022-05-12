import React, { useEffect, useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import ChildComponent from './ChildComponent';

const ThemeContext = React.createContext('Purple');

function ParentToChild(props) {

    const [data,setData] = useState('');
    const [childdata,setChildData] = useState('');
    const [message1,setMessage] = useState('Default');

    const [theme,setTheme] = useState({theme:"dark",user:"Priya"});
    const toChild = () =>{
        setData("This data is passed to child");
    } 
    
    const fromChild = (childdata) =>{
        setChildData(childdata);
    }

    
    return (
        <ThemeContext.Provider value ={theme}>
        <div>
            <h1>Parent Component</h1>
            <h3>Data to child1: {message1}</h3>
            {/* <ChildComponent data = {data}/> */}
            {/* <ChildComponent toParent = {fromChild}/> */}
            <Child1 msg={message1}/>
            <Child2 fnc={setMessage}/>
            <button onClick={() => setMessage("Parent sends new message")}>Parent Button!</button>
            <button onClick={()=>setTheme({...theme,theme:"light"})}>Toggle</button>
            <NewComp />

        </div>

        </ThemeContext.Provider>
    );
}


function NewComp() {
    const value = React.useContext(ThemeContext);
    useEffect(()=>{
        console.log("Context re-rendered");
    },[value.user])
    
    return(
        
        <div>
            <h1>{value.theme}</h1>
            <h1>{value.user}</h1>
        </div>
        
    )
}

export default ParentToChild;