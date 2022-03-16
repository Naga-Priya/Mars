import React, { Component } from 'react';

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            num1:0,
            num2:0,
            res:0
        }
    }
    render() {
        return (
            <div class="centercomp">
                <h1> Simple Calculator</h1>
                <div class="numblock">
                    <input type="number" id="oper1"></input>
                    <label for="oper1">Enter 1st Number:</label>
                </div>
                <div class="numblock">
                    <input type="number" id="oper2"></input>
                    <label for="oper2">Enter 2nd Number:</label>
                </div>
                <div class="numblock">
                    <input type="number" id="result" value={this.state.res}></input>
                    <label for="result">Result :</label>
                </div>
                <div class="operations">
                    <button id="add" class="operator" onClick={this.add}>+</button>
                    <button id="sub" class="operator" onClick={this.sub}>-</button>
                    <button id="mul" class="operator" onClick={this.mul}>*</button>
                    <button id="div" class="operator" onClick={this.divn}>&#247;</button>
                </div>
            </div>
        );
    }
    add = () =>{
        console.log("Before :",Number(document.getElementById("oper1").value));
        this.setState({num1:Number(document.getElementById("oper1").value)});
        this.setState({num2:Number(document.getElementById("oper2").value)});
        this.setState((state, props) => {
            return {res:state.num1+state.num2};
          });
    };
    sub = () =>{
        console.log("Before :",Number(document.getElementById("oper1").value));
        this.setState({num1:Number(document.getElementById("oper1").value)});
        this.setState({num2:Number(document.getElementById("oper2").value)});
        this.setState((state, props) => {
            return {res:state.num1-state.num2};
          });
        if(this.state.res<0){
            document.getElementById("result").style.color="red";
        }
    };
    mul = () =>{
        console.log("Before :",Number(document.getElementById("oper1").value));
        this.setState({num1:Number(document.getElementById("oper1").value)});
        this.setState({num2:Number(document.getElementById("oper2").value)});
        this.setState((state, props) => {
            return {res:state.num1*state.num2};
          });
    };
    divn = () =>{
        console.log("Before :",Number(document.getElementById("oper1").value));
        this.setState({num1:Number(document.getElementById("oper1").value)});
        this.setState({num2:Number(document.getElementById("oper2").value)});
        this.setState((state, props) => {
            return {res:state.num1/state.num2};
          });
    };
}



// exporting as default Component, can be imported under new name.
export default Calculator;