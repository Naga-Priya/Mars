import React from "react";
import MyFuncComponent from "./MyFuncComponent";

class TodoComponent extends React.Component{
    constructor(){
        {/* In JS, create parent object first explicitly before creating child object*/}
        super();
        this.state={
            id:1,
            value:"placeholder"
        };
    }
    render(){

        return(
            <div>
            <h1>Class Component Demo</h1>
            {/* props Name passed from Parent is used here */}
            <p>Hello!! {this.props.name}</p>
            <p> Id is {this.state.id} and value is {this.state.value}</p>
            <input type="Number" id="operand1"></input>
            <button onClick={this.newfunc}>Button</button>
            </div>
        )
    }
    newfunc =() =>{
        console.log("I am here");
        this.setState({value:"New Value"});
    };
    
}

export {TodoComponent};