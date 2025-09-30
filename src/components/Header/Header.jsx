import './Header.css';
import  {useState, useEffect} from 'react';
import { FaCode, FaMoon, FaSun } from "react-icons/fa";

export function Header(){
      const [theme, setTheme] = useState(() => {
    try {
      if (typeof window === "undefined") return "dark";
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch (e) {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    } catch (e) {
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  };
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