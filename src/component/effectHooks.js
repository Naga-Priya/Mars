import React, {useState,useRef, useEffect} from 'react';

function EffectHooks() {
    const [inputValue,setInputValue] = useState("");
    // const [icount,setICount] = useRef(0);
    const[count,setCount] = useState(0);
    const[calculation,setCalculation]=useState(0);

    // //Here use and effect updates same parameter
    // //hence it will run infinitely
    // useEffect(()=>{
    //     //This is first parameter to useEffect
    //     setCount((count)=>count*2);
    // },
    //     //if 2nd parameter is not passed, the UseEffect function is called for every rendering
    // [count]);

    // useEffect(()=>{
    //     //This is first parameter to useEffect
    //     setCalculation(()=>count*2);
    // },
    //     //if 2nd parameter is not passed, the UseEffect function is called for every rendering
    // [count]);

    // useEffect(()=>{
    //     //This is first parameter to useEffect
        
    //         setICount(()=>icount+1);
        
    // },[inputValue]);

    useEffect(()=>{
        //This is first parameter to useEffect
        setTimeout(()=>{
            setCount(()=>count+1);
        },1000);
    },[]);
    //This is second parameter dependency array
    //If it is empty array, then useEffect function is called only once during first rendering
    //if 2nd parameter is not passed, the UseEffect function is called for every rendering

    
    
    return (
        <div>
            <h1>This component has rendered {count} times!</h1>
            <button onClick={()=>setCount(()=>count+1)}>
                Increment Count</button>
                <input type="text" value ={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}>

                </input>
                {/* <p>{`Icount value is ${icount} `}</p> */}
        </div>
    );
}

export default EffectHooks;