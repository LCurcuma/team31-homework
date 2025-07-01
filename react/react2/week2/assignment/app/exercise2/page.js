"use client";

import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ukUA } from '@mui/material/locale';
import { enUS } from '@mui/material/locale';

const muiTheme = createTheme(
    {
        palette: {
            promary: {
                main: '#1976d2'
            },
        },
    },
    ukUA,
    enUS
);

const LanguageContext = createContext();

function LanguageProvider({ children }){
    const [language, setLanguage] = useState('english');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'english' ? 'ukrainian' : 'english'));
    }

    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}

function App(){
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <>
        <p>
            {language === 'english' ? 'Hello' : 'Привіт'}
        </p>
        <button onClick={toggleLanguage}>
            Change language
        </button>
        </>
    )
}

export default function Page(){
    return(
        <MuiThemeProvider theme={muiTheme}>
            <LanguageProvider>
                <App/>
            </LanguageProvider>
        </MuiThemeProvider>
    )
}