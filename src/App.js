import React, {useState } from "react";
import styled, {ThemeProvider} from "styled-components";
import {ResetCss} from './ResetCss';
import {ligth, dark} from "./Styles";
import {Header} from './components';
import {
  Switch,
  Route,
} from "react-router-dom";
import {Home, DetailPage} from './containers';
import {Context} from './Context';
import './App.css';



function App() {
  const themeLocal = localStorage.getItem('theme')
  const [themeMode, setThemeMode] = useState(themeLocal ? themeLocal: "light");
  const [country, setCountry] = useState("all");
  const value = { themeMode, setThemeMode, country, setCountry};

  return (
    <ThemeProvider theme={themeMode === "dark" ? dark : ligth}>
      <ResetCss />
      <Context.Provider value={value}>

      <Container>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail/:name">
            <DetailPage />
          </Route>
        </Switch>

      </Container>
      </Context.Provider>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme.colors.bg};
  width: 100%;
  min-height: 100%;
  position: absolute;
`;

export default App;
