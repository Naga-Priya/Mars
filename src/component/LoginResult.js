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
    const ThePage = components[props.page];
    
    return (
        <div>
            
            <ThePage />
        </div>
    );
}

export default LoginResult;