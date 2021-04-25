import React from 'react'
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

export default function Header(props) {
    return (
        <Container>
            <Title>Where in the world?</Title>
            <ThemeToggle />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.cardBg};
    padding: 20px 40px 20px 40px;
    box-shadow: ${props => props.theme.shadow};

    @media ${(props) => props.theme.device.tablet} {
        padding: 20px 80px 20px 80px;
    }
`;

const Title = styled.h1`
    font-size: 16px;
    color: ${props => props.theme.colors.text};

    @media ${(props) => props.theme.device.tablet} {
        font-size: 24px;
    }
`;