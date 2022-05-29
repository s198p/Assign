import React from 'react'
import { useState } from "react"

export const Count = () => {

    const [counter, setCounter] = useState(0) 

    const click1 = () => {
        setCounter(counter+1)
    
    }
    const click3 = () => {
        setCounter(counter-1)
    }

    const click2 = () => {
        setCounter(counter*2)
    }
    

    return (
        <div style={{
        display: 'grid',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '200%',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '-15%',
        }}>
        
        <div style={{
            fontSize: '120%',
        }}>
            {counter}
        </div>
        <div className="buttons">
            <button style={{
            fontSize: '60%',
            marginRight: '5px',
            backgroundColor: 'green',
            color: 'white',
            }}
            onClick={click1}>Increment</button>
            <button style={{
            fontSize: '60%',
            marginLeft: '5px',
            backgroundColor: 'red',
            color: 'white',
                }}
            onClick={click3}>Decrement</button>
            <button style={{
            fontSize: '60%',
            marginLeft: '5px',
            backgroundColor: 'Yellow',
            color: 'white',
                }}
            onClick={click2}>Double</button>

        </div>
        </div>
    
);
}