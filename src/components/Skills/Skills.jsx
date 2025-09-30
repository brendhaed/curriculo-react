import './Skills.css'
import { SiGit, SiTailwindcss,  SiGithub, SiNextdotjs, } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';

export function Skills(){
    return(
      <>
      <div className='skills'>
      <div className="hard-skills">
        <h3>Hard Skills</h3>
        <FaHtml5 color="#E34F26" size={40} />
        <FaCss3Alt color="#1572B6" size={40} />
        <SiTailwindcss color="#38BDF8" size={40} />
        <FaJs color="#F7DF1E" size={40} />
        <FaPython color="#3776AB" size={40} />
        <FaReact color="#61DAFB" size={40} />
        <SiNextdotjs color="#000000" size={40} />
        <SiGit color="#F05032" size={40} />
        <SiGithub color="#000000" size={40} />
      </div>

      <div id="soft-skills">
        <h3>Soft Skills</h3>
         <p>Proatividade, Comunicação, Metodologias ágeis, Flexidade, Adaptalidade </p>
       </div>
      </div>
      </>
         
    )
}