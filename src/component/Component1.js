import React, {useState, createContext,useContext} from 'react';
import  Component2  from './Component2.js';
// instead of passing props to child of child we can store the value using useContext and read in component 4 when needed

export const UserContext = React.createContext();
function Component1(props) {
    const [user,setUser]= useState("Mani sharma");
    return (
        <UserContext.Provider value={user}>
        {/* <div> */}
            <h1>{`HEllO ${user}!!`}</h1>
            <Component2/>
        {/* </div> */}
        </UserContext.Provider>
    );
}

export default Component1;