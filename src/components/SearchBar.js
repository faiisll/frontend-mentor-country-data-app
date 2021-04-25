import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar(props) {
    return (
        <Container>
            <IoSearchOutline />
            <Input placeholder="Search by country..." {...props} />
        </Container>
    )
}

const Container = styled.div`
    background-color: ${props => props.theme.colors.cardBg};
    display: flex;
    align-items: center;
    padding: 5px 20px 5px 20px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 30px;
    margin-right: 0;
    box-shadow: ${props => props.theme.shadow};
    color: ${props => props.theme.colors.text};

    @media ${(props) => props.theme.device.tablet} {
        margin-bottom: 0;
        margin-right: 10px;
        width: 400px;
  }

`;

const Input = styled.input`
    background-color: ${props => props.theme.colors.cardBg};
    border: 0;
    outline: none;
    width: 100%;
    margin-left: 20px;
    color: ${props => props.theme.colors.text}
`;

