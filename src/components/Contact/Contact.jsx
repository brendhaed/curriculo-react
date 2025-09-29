import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contato.css'

export function Contact(){
    return(
        <>
        <h1>Contato</h1>
        <div className="contact">
            <div className="email">
            <h3>E-mail</h3>
            <p>brendhaed@outlook.com</p>
            </div>
            <div className="number">
            <h3>Telefone</h3>
            <p>(55) 55 991049932</p>
            </div>
            <div className="network">
            <h3>Redes</h3>
            <div className="network-icons">
                <a href="https://www.linkedin.com/in/brendhaed/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin color="#0077B5" size={30} /> </a>
                <a href="https://github.com/brendhaed" target="_blank" rel="noopener noreferrer">
                <FaGithub color="#000000" size={30} href='https://github.com/brendhaed' /> </a>
            </div>
            </div>
        </div>
        </>
    )
}