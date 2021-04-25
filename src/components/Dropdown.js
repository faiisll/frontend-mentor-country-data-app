import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components';
import {IoChevronDown, IoClose} from 'react-icons/io5';
import {Context} from '../Context';

export default function Dropdown(props) {
    const [show, setShow] = useState(false);
    const {country, setCountry } = useContext(Context);

    const handleItem = (e) => {
        setShow(false);
        setCountry(e.target.innerText.toLowerCase());
    }

    useEffect(() => {
        if(country === "all"){
            setShow(false);
        }
    },[country])
    return (
        <Container>
            <BarContainer onClick={() => setShow(!show)}>
                <Text>{country === "all" ? "Filter by region" : country}</Text>
                {country === "all" ? <IoChevronDown /> : <IoClose onClick={() => setCountry("all")} /> }

            </BarContainer>
            {show && <OptionContainer>
                <OptionItem onClick={handleItem}>Africa</OptionItem>
                <OptionItem onClick={handleItem}>Americas</OptionItem>
                <OptionItem onClick={handleItem}>Asia</OptionItem>
                <OptionItem onClick={handleItem}>Europe</OptionItem>
                <OptionItem onClick={handleItem}>Oceania</OptionItem>
            </OptionContainer>}
            
        </Container>
    )
}

const Container = styled.div`
    background-color: ${props => props.theme.colors.cardBg};
    padding: 5px 20px 5px 20px;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadow};
    position: relative;

`;

const BarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

`;

const Text = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: 12px;
`;

const OptionContainer = styled.div`
    width: 200px;
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadow};
    padding: 5px 20px 5px 20px;
    background-color: ${props => props.theme.colors.cardBg};
    position:absolute;
    left: 0;
    top: 60px;
    display: flex;
    flex-direction: column;
    z-index: 99;
`;

const OptionItem = styled.p`
    font-size: 12px;
    color: ${props => props.theme.colors.text};
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;

    &:hover{
        background-color: ${props => props.theme.colors.bg};
    }
`;