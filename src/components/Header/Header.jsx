import './Header.css';
import  {useState, useEffect} from 'react';
import { FaCode, FaMoon, FaSun } from "react-icons/fa";

export function Header(){
    const [theme, setTheme] = useState("dark");

    useEffect (() => {
        document.documentElement.setAttribute("data-theme", theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme (theme === "light" ? "dark" : "light");
    }

    return(
        <>
        <div className="header">
           <div className="title-header">
            <FaCode className="icon code"/>
             <h1 className='greeting'>Hello World</h1>
           </div>
            <div className="switch" onClick={toggleTheme}>
            <div className={`slider ${theme}`}></div>
            <FaSun className="icon sun" />
            <FaMoon className="icon moon" />
      </div>
    </div>
    </>
    )
}