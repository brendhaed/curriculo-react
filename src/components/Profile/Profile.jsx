import './Profile.css';
import {About} from '../About/About';
import {Skills} from '../Skills/Skills';
import {Education} from '../Education/Education';
import {Experience} from '../Experience/Experience';
import {Projects} from '../Projects/Projects';


export function Profile(){
    return (
       <>
        <img src="https://avatars.githubusercontent.com/u/136868276?v=4" alt="Minha foto" width={300} />
        <h3>Brendha E. Rodrigues</h3>
        <p>Desenvolvedora Front-End</p>
       <About />
       <Skills />
       <Education />
       <Experience />
       <Projects />
       </>
    )
}