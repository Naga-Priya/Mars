import React, {useState} from 'react';
import  Component4  from './Component4.js';

//when context is used, the prop can be removed
// function Component3({user})
function Component3() {
    
    return (
        <div>
            <h1>In Component 3!!</h1>
            <Component4/>
        </div>
    );
}

export default Component3;