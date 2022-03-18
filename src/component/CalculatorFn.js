//Goal is to replace class component with function component and use hooks to handle states

import React,{useState} from 'react';

function CalculatorFn() {

    //Remove constructor and Replace state object type initialization
    // with setState Hook
        const [num1,setNum1] = useState(0);
        const [num2,setNum2] = useState(0);
        const [res,setRes] = useState(0);
    // constructor(){
    //     super();
        
    //     this.state = {
    //         num1:0,
    //         num2:0,
    //         res:0
    //     }
    // }

    //function component doesn't render

    //render() {
    return (
        <div className="centercomp">
            <h1> Simple Calculator</h1>
            <div className="numblock">
                <input type="number" id="oper1" onChange={(e)=>setNum1(e.target.value)}></input>
                <label htmlFor="oper1">Enter 1st Number:</label>
            </div>
            <div className="numblock">
                <input type="number" id="oper2" onChange={(e)=>setNum2(e.target.value)}></input>
                <label htmlFor="oper2">Enter 2nd Number:</label>
            </div>
            <div className="numblock">
                {/* <input type="number" id="result" value={this.state.res}></input> */}
                {/* <input type="number" id="result"  ></input>
                <label htmlFor="result">Result :</label> */}
                <p> Result is: {res}</p>
            </div>
            <div className='operations'>
                <button id="add" className="operator" onClick={() => {
                    setRes(res=>Number(num1)+Number(num2));
                }}>+</button>
                <button id="sub" className="operator" onClick={()=>{
                    setRes(res=>num1-num2);
                }}>-</button>
                <button id="mul" className="operator" onClick={()=>{
                    setRes(res=>num1*num2);
                }}>*</button>
                <button id="div" className="operator" onClick={()=>{
                    setRes(res=>num1/num2);
                }}>&#247;</button>
            </div>
        </div>
    );
    //}
    // add = () =>{
    //     console.log("Before :",Number(document.getElementById("oper1").value));
    //     this.setState({num1:Number(document.getElementById("oper1").value)});
    //     this.setState({num2:Number(document.getElementById("oper2").value)});
    //     this.setState((state) => {
    //         return {res:state.num1+state.num2};
    //       });
    // };
    // sub = () =>{
    //     console.log("Before :",Number(document.getElementById("oper1").value));
    //     this.setState({num1:Number(document.getElementById("oper1").value)});
    //     this.setState({num2:Number(document.getElementById("oper2").value)});
    //     this.setState((state) => {
    //         return {res:state.num1-state.num2};
    //       });
    //     if(this.state.res<0){
    //         document.getElementById("result").style.color="red";
    //     }
    // };
    // mul = () =>{
    //     console.log("Before :",Number(document.getElementById("oper1").value));
    //     this.setState({num1:Number(document.getElementById("oper1").value)});
    //     this.setState({num2:Number(document.getElementById("oper2").value)});
    //     this.setState((state) => {
    //         return {res:state.num1*state.num2};
    //       });
    // };
    // divn = () =>{
    //     console.log("Before :",Number(document.getElementById("oper1").value));
    //     this.setState({num1:Number(document.getElementById("oper1").value)});
    //     this.setState({num2:Number(document.getElementById("oper2").value)});
    //     this.setState((state) => {
    //         return {res:state.num1/state.num2};
    //       });
    // };
}



// exporting as default Component, can be imported under new name.
export default CalculatorFn;