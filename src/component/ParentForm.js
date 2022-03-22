import React, {useState} from 'react';
import DisplaySubmission from './DisplaySubmission.js'

function ParentForm(props) {

    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [age,setAge] = useState(0);
    const [addr,setAddr] = useState('');
    const [hobbies,setHobbies] = useState([]);
    const arr=[1,2,3,4,5];
    const person={age:10,name:"Priya"};
    const SelOptions=[];
    

    const submitBtn =()=>{
        setFname(document.getElementById("fn").value);
        setLname(document.getElementById("ln").value);
        setAge(document.getElementById("age").value);
        setAddr(document.getElementById("address").value);

        //Collection of elements has to be converted to array before applying map or filters
        const options = Array.from(document.getElementById("Hobbies").options)
        .filter((option)=> {return (option.selected)});

        // const options = document.getElementById("Hobbies").selectedOptions;

        // const selList=Array.from(document.getElementById("Hobbies").options)
        // .filter((option)=> {return (option.selected)});
        // const maplist = selList.filter((option)=> {return (option.selected)});
        // console.log("Selected List: ",selList);
        // options.map((option) => {<li>key={option.innerText}.{option.innerText}</li>});
        
        for(let option of options){
            // console.log(option.innerText);
            SelOptions.push(option.innerText);
            
        }
        //set State is a reduction function.
        //Array.push returns length of array so when setstate of array uses push, the return
        //value is int hence we get type error as int is assigned to array
        //Instead of push use concat in setState.
        setHobbies(hobbies.concat(SelOptions));
        
        // let selected = options.filter((option)=>{return(option.selected)});
        // for(let option in selected){
        //     console.log(option);
        // }
        // setAddr();
         document.getElementById("childcomp").style.display='block';

    }
    return (
        <div className=''>
            <b>FirstName: </b> 
            <input type="name" id ="fn"></input>
            <br></br>
            <b>LastName: </b> 
            <input type="name" id ="ln"></input>
            <br></br>
            <b>Age: </b> 
            <input type="name" id="age"></input>
            <br></br>
            <b>Address:</b>
            <textarea id="address" rows="100vw" cols="30vw"></textarea>
            <br></br>
            <b>Hobbies:</b>
            <select id="Hobbies" multiple>
                <option key="pnt">Painting</option>
                <option key="ply">Playing Instruments</option>
                <option key="vdo">Video Games</option>
                <option key="hik">Hiking</option>
                <option key="swm">Swimming</option>
                <option key="Dnc">Dancing</option>
            </select>
            <br></br>
            <button onClick={submitBtn}>Submit</button>
            <br></br>
            
            {/* <h3>{fname} - {lname} - {age} - {addr} - </h3>
            <ol>
            //Use map to render array in react
            {hobbies.map((option) => {return <li key={option}>{option}</li>})}
            </ol> */}
            <div id="childcomp" style={{backgroundColor:'pink', display:'none'}} >
            <DisplaySubmission fname={fname}
                            lname={lname}
                            age={age} 
                            hobbies = {hobbies}/>
                            </div>
        </div>
    );
}

export default ParentForm;