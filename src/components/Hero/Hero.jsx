import Services from "../Services/Services";

const Hero = () => (
  <section className=" text-white text-center p-5">
    <div className="container ">
      <div className="row d-flex justify-content-between flex-column-reverse flex-md-row">
        <div className="col text-center my-auto">
          <h2>Bem-vindo ao meu portfólio.</h2>
          <p>Eu sou Marcus Lins. Desenvolvedor web Front-End focado em desenvolvimento com React.</p>
        </div>
        <div className="col-md-6 mx-3">
          <img className="img-fluid " src="/images/sem_marca_dagua.png" alt=""
          />
        </div>
      </div>
      <div className="container">
        <h3>Seu site responsivo*, rápido, otimizado para SEO*,
          com total foco em conversão de leads* e experiência do usuário.
        </h3>
        <p className="mt-5" style={{
          fontSize: '1em',
          fontStyle: 'italic',
          
        }}>*1-(Adapta-se a qualquer tamanho de tela.)</p>
        <p className="mt-1" style={{
          fontSize: '1em',
          fontStyle: 'italic',
          
        }}>*2-(Será mostrado ao buscar palavras relacionadas no Google.)</p>
        <p className="mt-1" style={{
          fontSize: '1em',
          fontStyle: 'italic',
          
        }}>*3-(Botões e forms que facilitam a comunicação entre empresa e cliente <br />
        com um conteúdo exposto de forma atratativa e impactante. )</p>
      </div>
    </div>


  </section>
);
export default Hero;