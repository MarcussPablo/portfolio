import './Hero.css'

const Hero = () => (
  <section role="banner" aria-label="Seção principal com chamada para ação">
    <div className="hero-background d-flex justify-center align-items-center text-center">
      <div className="d-flex  flex-column faixa-hero container rounded text-center justify-content-center">
        <div className="container d-flex text-center mx-auto  ">
          <h1>Criação de sites profissionais e landing pages customizadas</h1>
        </div>
        <div className='buttons'>
          <button  aria-label="Clique para contratar">
            Contrate
          </button>
          <button  aria-label="Clique para ver projetos">
            Veja meus projetos
          </button>
        </div>
      </div>
    </div>

</section>
);
export default Hero;