import React from 'react'
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const StyledWrapper = styled.div`
    display: inherit;
    flex: inherit;
    flex-direction: inherit;
    animation: ${fadeIn} 0.5s;
`;

export default function Wrapper({children}) {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}
