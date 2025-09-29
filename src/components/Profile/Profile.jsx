import './Profile.css';
import FotoPerfil from '../../assets/profile-picture/foto-perfil-3.jpg';
import {About} from '../About/About';
import {Skills} from '../Skills/Skills';
import {Education} from '../Education/Education';
import {Experience} from '../Experience/Experience';
import {Projects} from '../Projects/Projects';


export function Profile(){
    return (
       <>
        <div className="profile">
        <div className="header">
        <div className="name">
          <h1 id='myname'>Brendha E.  Rodrigues</h1>
          <p className=''>Desenvolvedora Front-End</p>
        </div>
        <img src={FotoPerfil} alt="Minha foto" width={300} className="profile-pic"/>
      </div>
      </div> 
       <About /> 
       <Skills />
       <Education />
       <Experience />
       <Projects />
       </>
    )
}