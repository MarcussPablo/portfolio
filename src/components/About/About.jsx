import './About.css'

const About = () => {
    return (
        <section className="">
            <h2 className="sobre-autor">Sobre o autor</h2>
            <div className="hero-display" id="sobre">
                <div className="image-container">
                    <img className="img-fluid  " style={{ width: "300px" }} src="/images/sem_marca_dagua.png" alt="Marcus Lins" />
                </div>
                <div className="texto-top">
                    <p>
                        Eu sou Marcus Lins, desenvolvedor Front-End <strong>especializado em React</strong>. Crio interfaces modernas com foco em performance e usabilidade.
                        Minha missão é transformar ideias em experiências digitais impactantes, com código limpo, responsivo e centrado no usuário.
                        Há mais de 3 anos atuando no desenvolvimento de soluções web, venho aprimorando minha expertise em performance, acessibilidade e boas práticas de desenvolvimento. Tenho um olhar apurado para detalhes, o que me permite entregar projetos que combinam eficiência técnica com estética refinada.</p>
                </div>
                <div className="texto-bottom">
                    <p> Acredito que cada projeto é uma oportunidade de inovar, aprender e agregar valor. Estou sempre em busca das melhores soluções para atender às necessidades dos meus clientes com excelência, comprometimento e profissionalismo.
                        Se você busca alguém que une técnica, criatividade e responsabilidade para tirar seu projeto do papel — com qualidade real —, conte comigo.
                    </p>
                </div>
            </div>
            <hr />
        </section>
    )

}
export default About