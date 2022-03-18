import React from "react";
import MyFuncComponent from "./MyFuncComponent";
import './style.css';
import styles from './Mystyle.module.css';



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
            {/* Though App.css is not imported in this TodoComponent, still
            greenTextbg is used here. we dont have any error because when rendered
            this component is a part of App component which refers to App.css.
            If there is a conflicting style name in .style.css' and 'app.css'
            then only 'style.css' will have preference.
            When number of components grow, keeping track of styles might be difficult
            so we can use CSS Modules. */}
            <p className="greenText greenTextbg">Hello!! {this.props.name}</p>
            <p className={styles.greenText1}>From Styled Modules</p>
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