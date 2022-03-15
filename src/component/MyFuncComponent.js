//import React from "react";

function MyFuncComponent(props){
    return(
        <div>
            <h1>Functional Component Demo</h1>
            console.log(props);
            <p>Hi, {props.name}, Age:{props.age}</p>
        </div>
    )
}

export default MyFuncComponent;