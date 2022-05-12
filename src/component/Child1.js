import React from 'react';

function Child1(props) {
    return (
        <div style={{backgroundColor:'pink'}}>
            <h1>Child 1</h1>
            <h3> Message : {props.msg}</h3>
        </div>
    );
}

export default Child1;