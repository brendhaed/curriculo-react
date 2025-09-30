import './Education.css';

export function Education(){
    return(
        <> 
        <div className="education">
        <h1>Educação</h1>
        <div className="educ-1">
        <h3>Análise e desenvolvimento de sistemas - 2024 - cursando</h3>
        <p>Instituição: PUCRS | Pontifícia Universidade Católica do Rio Grande do Sul</p>
        <p>
            Principais disciplinas: Desenvolvimento web, Engenharia de software, Ciência de Dados e Inteligência artificial,
            Lógica e programação, Programação orientada a objetos.
        </p>
        </div>

        <div className="educ-2">
        <h3>Técnico em Informática Integrado ao Ensino Médio - 2020 - 2022</h3>
        <p>Instituição: Escola Técnica Estadual 25 de Julho - Ijuí/RS</p>
        <p>Principais disciplinas: Lógica de programção, Redes, Manutenção de computadores, Desenvolvimento web</p>
        </div>

        <div className="courses">
          <h2>Cursos relevantes</h2>
        <p>
        JavaScript Avançado | Front-end para React | UX/UI para desenvolvedores | Versionamento de Código com Git e
        GitHub| Acessibilidades Web
        </p>
        </div>
        </div>
        </>
    )
}