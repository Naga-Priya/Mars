import React from 'react';

import {red} from './ColorAction.js';
import {useSelector,useDispatch} from 'react-redux';

function ColorPicker(props) {
    const color = useSelector((store)=>{return store.color});
    const dispatch = useDispatch();

    const handleChange =(e)=>{
        dispatch({
          type:'CHANGE_COLOR',
          payload:e.target.value
        })
      }


    return (
        <div>
            <h1>Selected Color is: {color} </h1>
            <h3>Choose another color</h3>
            <input type="radio" name="colors" id="red" onClick={()=>dispatch(red())}/>Red
            <br></br>
            <input type="radio" name="colors" value="Green" onClick={handleChange}/>Green
        </div>
    );
}

export default ColorPicker;