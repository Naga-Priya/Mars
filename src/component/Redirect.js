import React from 'react';
import {useNavigate} from 'react-router';
let navigate;
function handleClick(){
    navigate('/profile');
}

function Redirect(props) {
    navigate = useNavigate();
    return (
        <div>
            <button onClick={handleClick}>Go to Profile</button>
        </div>
    );
}

export default Redirect;