import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import {Context} from '../Context';

export default function ThemeToggle(props) {
    const {themeMode, setThemeMode } = useContext(Context);

    const changeTheme = () =>{
        setThemeMode(themeMode === "dark" ? "light" : "dark");
        
    }

    useEffect(() => {
        localStorage.setItem('theme', themeMode);
    }, [themeMode]);
    return (
        <Container onClick={changeTheme}>
            {themeMode === "dark" ?  <IoMoon color="#fff" /> : <IoMoonOutline />}
            <Text>Dark Mode</Text>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    cursor: pointer;
`;

const Text = styled.p`
    color: ${props => props.theme.colors.text};
    margin-left: 10px;
`;
