import React from 'react'
import styled from 'styled-components'
import {IoArrowBack} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Button(props) {
    return (
        <Link style={{ textDecoration: 'none' }} to="/">
            <Container>
                <IoArrowBack size={16} /> {props.children}
            </Container>
        </Link>
    )
}

const Container = styled.button`
    background-color: ${props => props.theme.colors.cardBg};
    color: ${props => props.theme.colors.text};
    border: 0;
    width: 150px;
    padding: 10px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadow};
    cursor: pointer;

    &:hover{
        transform:translateY(-5px);
    }
`;