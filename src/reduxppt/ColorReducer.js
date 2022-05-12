const initialState = {
    color: 'white'
}

const ColorReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'RED':
            const newState = {...state};
            newState.color = 'Red';
            console.log("Red Color");
            return (newState);
            break;
        case 'CHANGE_COLOR':
            return ({...state,color:action.payload});
            break;
        default:
            return {...state};
    }
}
export default ColorReducer