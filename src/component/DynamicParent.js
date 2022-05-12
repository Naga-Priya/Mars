import React from 'react';
import UserA from './UserA';
import UserB from './UserB';

const components = {
    userA : UserA,
    userB : UserB
}



function DynamicParent(props) {

    const SelectUser = components[props.user];
    const listItems = props.numbers;
    const numbers=listItems.map((number)=>
    <li>{number}</li>)
    return (
        <div>
            <h1>This is Parent Component</h1>
            <h2>{numbers}</h2>
            <SelectUser />
        </div>
    );
}

export default DynamicParent;