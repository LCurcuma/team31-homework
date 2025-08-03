"use client";

import React from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';

const CounterContext = createContext();

function counterReducer(state, action){
    switch(action.type){
        case 'increment':
            return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
                default: 
                throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function CounterProvider({children}){
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}

export function useCounter(){
    return useContext(CounterContext);
}

function CounterComponent(){
    const {state, dispatch} = useCounter();

    return(
        <>
        <h2>
            Count: {state.count}
        </h2>
        <button
        onClick={() => dispatch({type: 'increment'})}
        >
            Increment
        </button>
        <button 
        onClick={() => dispatch({type: 'decrement'})}>
            Decrement
        </button>
        </>
    )
}

export default function Page(){
    return (
        <CounterProvider>
            <CounterComponent/>
        </CounterProvider>
    )
}