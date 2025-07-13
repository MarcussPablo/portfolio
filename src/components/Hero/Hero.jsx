import './Hero.css'

const Hero = () => (
  <section role="banner" aria-label="Seção principal com chamada para ação">
    <div className="hero-background d-flex justify-center align-items-center text-center">
      <div className="d-flex  flex-column faixa-hero container rounded text-center justify-content-center">
        <div className="container d-flex text-center mx-auto  ">
          <h1>Criação de sites profissionais e landing pages customizadas</h1>
        </div>
        <div className='buttons'>

          <a
            href="https://wa.me/5581986236056?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <button aria-label="Clique para contratar">
              <img src="images/whatsapp_logo_icon_147205.svg" alt="" />
              Contrate
            </button>
          </a>


          <a href="#projects">
            <button aria-label="Clique para ver projetos">
              Veja meus projetos
            </button>
          </a>
        </div>
        <div class="scroll-indicator">
          <span>&#x2193;</span>
        </div>
      </div>
    </div>
{/* <a href="/blog">Acesse o blog de mistérios e assombrações</a>  */}

  </section>
);
export default Hero;