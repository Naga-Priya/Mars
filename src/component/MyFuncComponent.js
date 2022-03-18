import React, {useState} from "react";
//rsf creates func component

function MyFuncComponent(){
    //The parameter passed to useState becomes initial value of
    //property 'color'
    const[color,setColor]=useState("Red");
    const[car,setCar] = useState({
        brand:"VW",
        model:"M2019",
        year:"2019",
        color:"white"
    });
    return(
        <div>
            <h1>My favorite car's brand is {car.brand} and model {car.model}</h1>
            <h1>My car color is {car.color}</h1>
            {/* <h1>My favorite color is {car.color}</h1> */}
            {/* <button onClick={()=>setColor("yellow")}>
                Change Color
            </button> */}
            <button onClick={()=>setCar({...car,color:"yellow"})}>
                Change Color
            </button>
        </div>
    )
}

// function MyFuncComponent(props){
//     return(
//         <div>
//             <h1>Functional Component Demo</h1>
//             console.log(props);
//             <p>Hi, {props.name}, Age:{props.age}</p>
//         </div>
//     )
// }

export default MyFuncComponent;