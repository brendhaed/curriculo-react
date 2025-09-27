import {Skills} from './Skills';
export function Profile(){
    return (
       <>
        <img src="https://avatars.githubusercontent.com/u/136868276?v=4" alt="Minha foto" width={300} />
        <h3>Brendha E. Rodrigues</h3>
        <p>Desenvolvedora Front-End</p>
       <Skills />
       </>
    )
}