import axios from "axios";
import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import {SearchBar, Dropdown, Card} from "../components";
import {Context} from "../Context";

import {PushSpinner} from "react-spinners-kit";
import Wrapper from '../components/wrapper';

export default function Home(props) {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search] = useState("");
  const {country} = useContext(Context);
  const [slice, setSlice] = useState(0);

  const fetchData = async () => {
    let url = "https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;region;alpha3Code;borders;subregion;currencies;topLevelDomain;languages";
    setLoading(true);

    // if (country === "all") {
    //   url =
    //     "https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;region;alpha3Code;borders;subregion;currencies;topLevelDomain;languages";
    // }
    // if (country !== "all") {
    //   url = `https://restcountries.eu/rest/v2/region/${country}?fields=name;capital;population;flag;region;alpha3Code;borders;subregion;currencies;topLevelDomain;languages`;
    // }

    axios
      .get(url)
      .then((res) => {
        setDatas([...datas, ...res.data.slice(slice, slice + 4)]);
        setLoading(false);
        setSlice((current) => current + 4);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const CardList = () => {
    let localData = [];
    if(country === "all"){
      localData = datas;
    }else{
      localData = datas.filter(data => data.region.toLowerCase() === country);
    }
    return localData.map((data, index) => <Card key={index} data={data} />);
  };


  const Searching = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      if (e.target.value !== "") {
        axios
          .get(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
          .then((res) => {
            setDatas(res.data);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(true);
            console.log(err);
          });
      }else{
        setDatas([]);
        fetchData();
      }
    }
  };

  const loadMore = () => {
    setLoading(true);
    fetchData();
  };


  return (
    <Wrapper>

    <Container>
      <Header>
        <SearchBar onKeyPress={Searching} />
        <Dropdown />
      </Header>
      <CardContainer loading={loading.toString()}>
        {loading ? (
          <PushSpinner size={30} color="#686769" loading={loading} />
        ) : (
          <CardList />
        )}
      </CardContainer>
      <Footer>
        {search === "" ? <BtnMore onClick={loadMore}>More</BtnMore> : ""}
      </Footer>
    </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  padding: 20px 20px 20px 20px;
  height: 100%;
  width: 100%;

  @media ${(props) => props.theme.device.tablet} {
    padding: 50px 80px 20px 80px;
  }

`;

const CardContainer = styled.div`
    display: flex;
    justify-content: ${props => props.loading === "true" ? "center" : "space-between"};
    flex-wrap: wrap;
    width: 100%;
    margin-top: 50px;
    padding-right: 10px;
    padding-left: 10px;

    @media ${(props) => props.theme.device.tablet} {
      padding-right: 0;
      padding-left: 0;
    }
  `;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;

  @media ${(props) => props.theme.device.tablet} {
    flex-wrap:nowrap;
  }
`;

const BtnMore = styled.button`
  background-color: ${(props) => props.theme.colors.cardBg};
  border: 0;
  color: ${(props) => props.theme.colors.text};
  padding: 10px 40px 10px 40px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 5px;

  &:hover {
    transform: translateY(-5px);
  }
`;
