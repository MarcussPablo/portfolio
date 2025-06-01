const About = () => {
    return (
        <section className="bg-primar text-light ">
            <h2 className="text-center fs-1 py-4">Sobre o autor</h2>
            <div className="row align-items-center justify-content-center container mx-auto  " id="sobre">
                
                <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
                    <img className="img-fluid  " style={{ width: "300px" }} src="/images/sem_marca_dagua.png" alt="Marcus Lins" />
                </div>
                <div className="col-12 col-md-6">
                    <p className="fs-3 m-0 text-md-start text-start">
                        Eu sou Marcus Lins, desenvolvedor Front-End <strong>especializado em React</strong>. Crio interfaces modernas com foco em performance e usabilidade.
                    </p>
                    <p className=" mt-3">
                       Minha missão é transformar ideias em experiências digitais impactantes, com código limpo, responsivo e centrado no usuário.

Há mais de 3 anos atuando no desenvolvimento de soluções web, venho aprimorando minha expertise em performance, acessibilidade e boas práticas de desenvolvimento. Tenho um olhar apurado para detalhes, o que me permite entregar projetos que combinam eficiência técnica com estética refinada.

Acredito que cada projeto é uma oportunidade de inovar, aprender e agregar valor. Estou sempre em busca das melhores soluções para atender às necessidades dos meus clientes com excelência, comprometimento e profissionalismo.

Se você busca alguém que une técnica, criatividade e responsabilidade para tirar seu projeto do papel — com qualidade real —, conte comigo.


                    </p>
                </div>
            </div>
        </section>
    )

}
export default About