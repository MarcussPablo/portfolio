
import { MdOutlineFastRewind } from "react-icons/md";

export default function Projects({handleAlert}) {

  return (
    <section id="projects" className="py-5 text-light">
      <div className="container">
        <h2 className="text-center mb-5">Projetos relevantes</h2>
        <div className="row g-4">

          <div className="col-md-6 col-lg-4">
            <div className="card bg-secondary h-100 shadow-sm">
              <img src="/images/ecommerce.png" className="card-img-top" alt="Projeto 1" />
              <div className="card-body">
                <h5 className="card-title">E-commerce React</h5>
                <p className="card-text">Projeto de loja online com React, consumo de API e carrinho funcional.</p>
                <a href="https://github.com/MarcussPablo/2-Ecoomerce-Complete" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                  Ver no GitHub
                </a>
                <a href="https://clever-torrone-4b25b7.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info ms-1 btn-sm">
                  Ver online
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card bg-secondary h-100 shadow-sm">
              <img src="/images/landing-page.png" className="card-img-top" alt="Projeto 2" />
              <div className="card-body">
                <h5 className="card-title">Landing Page Responsiva</h5>
                <p className="card-text">Página institucional feita com React e Bootstrap, totalmente responsiva.</p>
                <a href="https://github.com/seuusuario/landing-page" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                  Ver no GitHub
                </a>
               <button 
               onClick={handleAlert}
               className="btn btn-outline-info ms-1 btn-sm">
               Ver online
                </button> 
              </div>
            </div>
          </div>



        </div>

      </div>
      <div
      
      className="topo">
        <a href="#top"
        style={{color:'#3b82f6',
        }}
        >
            <div className="topo-seta"><MdOutlineFastRewind /></div>
            <div>Voltar ao topo</div>
        </a>
      </div>
    </section>
  );
}
