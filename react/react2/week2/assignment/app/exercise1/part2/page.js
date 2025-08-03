"use client";

import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import {ThemeProvider as MuiThemeProvider} from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ThemeToggleContext = createContext();

export function useThemeToggle(){
    return useContext(ThemeToggleContext);
}

export function ThemeProvider({ children }){
    const [mode, setMode] = useState('light');

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    const theme = useMemo(
        () => 
            createTheme({
                palette: {
                    mode,
                },
                spacing: 8,
            }),
            [mode]
    );
    
    return (
        <ThemeToggleContext.Provider value={{ mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeToggleContext.Provider>
    );
}

function DeepChild(){
    const theme = useMuiTheme();
    return <span>{`spacing ${theme.spacing(1)}`}</span>
}

function PageComponent(){
    const {mode, toggleTheme} = useThemeToggle();
    const theme = useMuiTheme();

    return (
        <Box
        sx={{
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            minHeight: "100vh",
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>Theme: {mode}</h1>
            <Button
            variant="contained"
            onClick={toggleTheme}>
                Change Theme
            </Button>
            <DeepChild></DeepChild>
        </Box>
    )
}

export default function Page(){
    return(
        <ThemeProvider>
            <PageComponent/>
        </ThemeProvider>
    )
}