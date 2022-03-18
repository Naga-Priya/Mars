import React, {useState, useContext} from 'react';
import {UserContext} from './Component1';
//when context is used, the prop can be removed
// function Component4({user})
function Component4() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>In Component 4!!</h1>
            <p>{`Welcome ${user}`}</p>
        </div>
    );
}

export default Component4;