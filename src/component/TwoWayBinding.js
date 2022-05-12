import React, {useState} from 'react';

function TwoWayBinding(props) {
    const [data,setData] = useState('');
    const handleChange =(e)=>{
        setData(e.target.value);
    }
    return (
        <div>
            <inoput onChange ={handleChange} value = {data}/>
            <h2>{data}</h2>
        </div>
    );
}

export default TwoWayBinding;