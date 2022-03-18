import React from 'react';
import styled from "styled-components"

const StyledButton = styled.button`
    background-color:blue;
    color: white;
    font-size:32px; 
`;
function StylingComponent(props) {
    return (
        <div>
            <h1> From Styled Component Demo</h1>
            <StyledButton>This is a styled button</StyledButton>
        </div>
    );
}

export default StylingComponent;