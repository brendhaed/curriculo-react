import { useState } from "react";

export function ExemplesJSX(){
    const [count, setCount] = useState(0);
    const increment = () => {
        // setCount(count + 1); // funciona igual
        setCount((prevCount)=> prevCount + 1); //maneira mais correta
        console.log(count);
    }
    return(
        <>
        <h1>Exemplos de JSX</h1>
        <h2>Hooks: useState, useEffect, useContext, useReducer, useRef</h2>
        <h3>Contador:</h3>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>
        </>
    )
}