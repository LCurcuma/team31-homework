"use client";

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }){
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

export function PageComponent() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
        <div style={{
            background: theme === 'light' ? '#fff' : '#222', 
            color: theme === 'light' ? '#222' : '#fff', 
            minHeight: '100vh',
            padding: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column'
            }}>
                <h1>Theme: {theme}</h1>
                <button onClick={toggleTheme} style={{
                    background: theme === 'light' ? '#fff' : '#222',
                    color: theme === 'light' ? '#222' : '#fff',
                    height: 50,
                    width: 100,
                    borderRadius: 25
                }}>
                    Change Theme
                </button>
            </div>
        </>
    )
}

export default function Page(){
    return(
        <ThemeProvider>
            <PageComponent/>
        </ThemeProvider>
    )
}