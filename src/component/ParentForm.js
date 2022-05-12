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
        <div>
            <center><h1 className='headingStyle'>Personal Information</h1></center>
        <div className='Gridcontainer'>
            <b className="Labelstyle">FirstName: </b> 
            <input className="fields" type="name" id ="fn"></input>
            
            <b className="Labelstyle">LastName: </b> 
            <input className="fields" type="name" id ="ln"></input>
            
            <b className="Labelstyle">Age: </b> 
            <input className="fields" type="name" id="age"></input>
            
            <b className="Labelstyle">Address:</b>
            <textarea className="fields" id="address" rows="100vw" cols="30vw"></textarea>
            
            <b className="Labelstyle">Hobbies:</b>
            <select id="Hobbies" multiple>
                <option className="fields" key="pnt">Painting</option>
                <option className="fields" key="ply">Playing Instruments</option>
                <option className="fields" key="vdo">Video Games</option>
                <option className="fields" key="hik">Hiking</option>
                <option className="fields" key="swm">Swimming</option>
                <option className="fields" key="Dnc">Dancing</option>
            </select>
            
            <button className="buttonstyle" onClick={submitBtn}>Submit</button>
            
            
            {/* <h3>{fname} - {lname} - {age} - {addr} - </h3>
            <ol>
            //Use map to render array in react
            {hobbies.map((option) => {return <li key={option}>{option}</li>})}
            </ol> */}
            <div id="childcomp" className="SubmissionText" style={{backgroundColor:'pink', display:'none'}} >
            {/* //Use object and destruct in child */}
            <DisplaySubmission fname={fname}
                            lname={lname}
                            age={age} 
                            addr={addr}
                            hobbies = {hobbies}/>
                            </div>
        </div>
        </div>
    );
}

export default ParentForm;