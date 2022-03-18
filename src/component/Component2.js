import React, {useState} from 'react';
import  Component3  from './Component3.js';

//when context is used, the prop can be removed
// function Component2({user})
function Component2() {
    
    return (
        <div>
            <h1>In Component 2!!</h1>
            <Component3/>
        </div>
    );
}

export default Component2;