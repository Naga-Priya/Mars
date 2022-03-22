import React from 'react';

function DisplaySubmission(props) {
    return (
        <div>
            <h1>Submission Confirmed</h1>
            <h2>First Name: </h2> <b>{props.fname}</b> 
            <h2>Last Name: </h2> <b>{props.lname}</b>
            <h2>Age: </h2> <b>{props.age}</b>
            {/* <p>{props.hobbies.join(", ")}</p> */}
            <h3> Hobbies are :</h3>
            <ol>
            {props.hobbies.map((value) => {return <b><li key={value}>{value}</li></b>})}
            </ol>
            {/* <h3> End of child Component</h3> */}
        </div>
    );
}

export default DisplaySubmission;