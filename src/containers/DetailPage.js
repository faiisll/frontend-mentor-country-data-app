import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import styled from "styled-components";
import {Button} from "../components";
import {PushSpinner} from "react-spinners-kit";
import {Link} from "react-router-dom";
import Wrapper from '../components/wrapper';

export default function DetailPage(props) {
  const [country, setCountry] = useState({
    currencies: [{name: "dummy"}],
    languages: [{name: "dummy"}],
    borders: [],
  });
  const [loading, setLoading] = useState(true);
  const fields =
    "?fields=name;capital;population;flag;region;alpha3Code;borders;subregion;currencies;topLevelDomain;languages;nativeName";
  const code = useParams();


  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${code.name + fields}`)
      .then((res) => {
        setCountry(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code.name]);

  

  return (
    <Wrapper>

    <Container>
      <Header>
        <Button>Back</Button>
        <PushSpinner size={30} color="#686769" loading={loading} />
      </Header>
      <Content>
        <FlagContainer flag={country.flag}></FlagContainer>
        <DescContainer>
          <Title>{country.name}</Title>
          <Description>
            <DescSection>
              <Detail>
                <b>Native Name</b>: {country.nativeName}
              </Detail>
              <Detail>
                <b>Popupation</b>: {country.population}
              </Detail>
              <Detail>
                <b>Region</b>: {country.region}
              </Detail>
              <Detail>
                <b>Sub Region</b>: {country.subregion}
              </Detail>
              <Detail>
                <b>Capital</b>: {country.capital}
              </Detail>
            </DescSection>
            <DescSection>
              <Detail>
                <b>Top Level Domain</b>: {country.topLevelDomain}
              </Detail>
              <Detail>
                <b>Currencies</b>: {country.currencies[0].name}
              </Detail>
              <Detail>
                <b>languages</b>:{" "}
                {country.languages.map((lang) => lang.name + ", ")}
              </Detail>
            </DescSection>
          </Description>
          <BorderContainer>
            <BDetail>
              <b>Border Contries: </b>
            </BDetail>

            {country.borders.map((b, index) => (
              <Link
                style={{textDecoration: "none"}}
                key={index}
                to={`/detail/${b}`}
              >
                <BorderItem>{b}</BorderItem>
              </Link>
            ))}
          </BorderContainer>
        </DescContainer>
      </Content>
    </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  padding: 20px;
  height: 100%;
  width: 100%;

  @media ${(props) => props.theme.device.tablet} {
    padding: 20px 80px 20px 80px;
  }

  @media ${(props) => props.theme.device.desktop} {
    padding: 20px 80px 20px 80px;
  }
`;

const FlagContainer = styled.div`
    width: 100%;
    max-height: 300px;
    background-image: url("${props => props.flag}");
    background-size: cover;
    background-position: center;
    height: 250px;
    box-shadow: ${props => props.theme.shadow};

    @media ${(props) => props.theme.device.desktop} {
      width: 40%;
      height: 300px;
  }
  `;

const Header = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 60px;
  justify-content: space-between;


  @media ${(props) => props.theme.device.desktop} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media ${(props) => props.theme.device.desktop} {
    flex-wrap: nowrap;
  }
`;

const DescContainer = styled.div`
  width: auto;

  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${(props) => props.theme.device.desktop} {
    width: 60%;
    padding: 40px 40px 60px 80px;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  margin-top: 50px;

  @media ${(props) => props.theme.device.desktop} {
    font-size: 16;
    margin-top: 0;
  }
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const DescSection = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media ${(props) => props.theme.device.desktop} {
    width: 50%;
  }
`;
const Detail = styled.p`
  color: ${(props) => props.theme.colors.text};
  padding-right: 10px;
  font-size: 12px;
  margin-bottom: 10px;
`;

const BorderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const BDetail = styled(Detail)`
  margin: 0;
`;

const BorderItem = styled.div`
  background-color: ${(props) => props.theme.colors.cardBg};
  color: ${(props) => props.theme.colors.text};
  padding: 5px 20px 5px 20px;
  border-radius: 5px;
  font-size: 12px;
  box-shadow: ${(props) => props.theme.shadow};
  cursor: pointer;
  margin-right: 5px;
  margin-top: 5px;

  &:hover {
    transform: translateY(-5px);
  }
`;
