import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Card({data ,...props}) {

    const {flag, population, name, region, capital, alpha3Code} = data;
    


    
    return (
        <Container>
        <Link style={{ textDecoration: 'none' }} to={`/detail/${alpha3Code}`} data={data}>
            <ImageContainer flag={flag}>
            </ImageContainer>
            <DescContainer>
                <Title>{name}</Title>
                <DescText><b>Population:</b> {population}</DescText>
                <DescText><b>Region:</b> {region}</DescText>
                <DescText><b>Capital:</b> {capital}</DescText>
            </DescContainer>
        </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${props => props.theme.colors.cardBg};
    box-shadow: ${props => props.theme.shadow};
    margin-bottom: 50px;
    border-radius: 5px;

    &:hover{
        transform:translateY(-10px);
    }

    @media ${(props) => props.theme.device.tablet} {
        width: 250px;
        
    }

    @media ${(props) => props.theme.device.desktopM} {
        width: 270px;
        height: 350px;
        
    }

    @media ${(props) => props.theme.device.desktopXl} {
        width: 370px;
        height: 350px;
        
    }

`;

const ImageContainer = styled.div`
        height: 50%;
        width: 100%;
        background-image: url(${props => props.flag});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        border-radius: 5px 5px 0 0;
    `;

const DescContainer = styled.div`
        height: 50%;
        width: 100%;
        padding: 20px;
    `;

    const Title = styled.h1`
        color: ${props => props.theme.colors.text};
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 20px;
    `;

    const DescText = styled.p`
        color: ${props => props.theme.colors.text};
        font-size: 12px;
        margin-bottom: 5px;
    `;