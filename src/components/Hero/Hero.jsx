import Services from "../Services/Services";

const Hero = () => (
  <section className=" text-white text-center p-5">
    <div className="container ">
      <div className="row d-flex justify-content-between text-start flex-column-reverse flex-md-row">
        <div className="col  my-auto">
          <h2 id="home">Bem-vindo ao meu portfólio.</h2>
          <p className="">Eu sou Marcus Lins. Desenvolvedor web Front-End focado em desenvolvimento com React.</p>
        </div>
        <div className="col-md-6 mx-3">
          <img className="img-fluid " src="/images/sem_marca_dagua.png" alt=""
          />
        </div>
      </div>
      <div className=" text-start">
        <h3>Seu site responsivo*, rápido, otimizado para SEO**,
          com total foco em conversão de leads*** e experiência do usuário.
        </h3>
        <ul className="list-group w-75 mx-auto mt-3 ">
          <li className="list-group-item ms-auto bg-transparent">
                    <p className="mt-1 " style={{
          fontSize: '1em',
         
          
        }}>*Adapta-se a qualquer tamanho de tela.</p>
          </li>
          <li className="list-group-item ms-auto border bg-transparent">
                    <p className="mt-1" style={{
          fontSize: '1em',
          
          
        }}>**Será mostrado ao buscar palavras relacionadas no Google.</p>
          </li>
          <li className="list-group-item ms-auto border bg-transparent">
                    <p className="mt-1" style={{
          fontSize: '1em',
          
          
        }}>***Botões e forms que facilitam a comunicação entre empresa e cliente 
        com um conteúdo exposto de forma atratativa e impactante. </p>
          </li>
        </ul>



      </div>
    </div>


  </section>
);
export default Hero;