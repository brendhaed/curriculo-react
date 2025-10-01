import './About.css';
import Arrow from '../../assets/svg-icons/circled-arrow.svg';
export function About(){
    return(
        <> 
        <div className="about">
        <img src={Arrow} alt="Flecha" className='arrow' />
        <h1>Sobre mim</h1> 
        <p>Sou Brendha Rodrigues, com mais de 3 anos de experiência em desenvolvimento Front-End. Com
       conhecimentos sólidos em HTML, CSS e Javascript, além de criar interfaces modernas e responsivas, prezando
       pela experiência do usuário e pelas boas práticas de desenvolvimento.</p>
        </div>
        </>

    )
}