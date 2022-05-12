import React from 'react';

function Child2(props) {
    const setData = (data)=>{
        //console.log("From setData function");
        props.fnc(data);
    }
    return (
        <div>
            {/* <button onClick={()=>setData("From Sibling")}>Child 2</button> */}
            <button onClick={()=>props.fnc("Child2 passes data")}>Child 2</button>
        </div>
    );
}

export default Child2;