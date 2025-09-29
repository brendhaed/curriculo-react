import './Experience.css';

export function Experience(){
    return(
        <>
        <div className="experience">
            <h1>Experiência</h1>
        <h3 className='experience-title'>Estágio em Dados | Mérito Engenharia de Software </h3>
        <p>Ijuí /RS março 2022 - setembro 2022</p>
        <div className='experience-description'>
            <ul>
                <li>Desenvolvimento e manutenção de consultas SQL, com foco na otimização de buscas e melhoria de desempenho
                em banco de dados PostgreSQL.</li>
                <li>Criação de procedures, views e rotinas automatizadas.</li>
                <li>Análise e resolução de problemas relacionados à integridade e performance do banco de dados.</li>
            </ul>
        </div>
        </div>
        </>
    )
}