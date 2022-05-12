import React from 'react';
//rsf
// function ChildComponent(props) {
//     return (
//         <div>
//             <h1>{props.data}</h1>
//         </div>
//     );
// }

function ChildComponent({childToParent}) {
    const data = "From child to parent";
    return (
        <div>
            <button onClick={()=>childToParent(data)}>Click child button</button>
        </div>
    );
}

export default ChildComponent;