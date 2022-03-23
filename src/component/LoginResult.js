import React from 'react';
import Errorpage from './Errorpage';
import Welcome from './Welcome';
import Empty from './Empty';

const components = {
    welcome : Welcome,
    errorpg : Errorpage,
    emptypg : Empty
  }
function LoginResult(props) {
    console.log({props});
    const ThePage = components[props.pagenum.pageNum];
    
    return (
        <div>
            
            <ThePage user={props.userName.uname}/>
        </div>
    );
}

export default LoginResult;