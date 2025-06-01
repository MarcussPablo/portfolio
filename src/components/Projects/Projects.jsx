import './Projects.css'


export default function Projects({handleAlert}) {

  return (
    <section id="projects" className="py-5 bg-primar text-light ">
      <div className="container bg-primar">
        <h2 className="text-center mb-5">Projetos relevantes</h2>
        <div className="row g-4">

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/ecommerce.png" className="card-img-top"style={{height:'200px'}} alt="Projeto 1" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">E-commerce React</h5>
                <p className="card-text">Projeto de loja online com React, consumo de API e carrinho funcional.</p>
                <div className="mx-auto">
               <a href="https://github.com/MarcussPablo/2-Ecoomerce-Complete" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                  Ver no GitHub
                </a>
                <a href="https://clever-torrone-4b25b7.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info ms-1 btn-sm">
                  Ver online
                </a>
                </div>
                <div className='mx-auto mt-2'>
                <button className="btn btn-outline-success ms-1 btn-sm">
                  Detalhes do projeto
                </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/landing-page.png" className="card-img-top" style={{height:'200px'}} alt="Projeto 2" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title ">Landing Page Responsiva</h5>
                <p className="card-text ">Página institucional feita com React e Bootstrap, totalmente responsiva.</p>
                <div className='mx-auto'>
                <a href="https://github.com/seuusuario/landing-page" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                  Ver no GitHub
                </a>
               <button 
               onClick={handleAlert}
               className="btn btn-outline-info ms-1 btn-sm">
               Ver online
                </button> 
                </div>
                <div className='mx-auto mt-2'>
                <button className="btn btn-outline-success ms-1 btn-sm">
                  Detalhes do projeto
                </button>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-md-6 col-lg-4">
            <div className="card  h-100 shadow-sm">
              <img src="/images/task-list-apu.png" className="card-img-top" style={{height:'200px'}} alt="Projeto 1" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">Task-list React/API</h5>
                <p className="card-text ">Task-list com 3/4 de CRUD(get/update/delete) com API simulada Jsonplaceholder.</p>
                <div className='mx-auto'>
                <a href="https://github.com/MarcussPablo/TaskLIst-Api-3-4-crud" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark  btn-sm">
                  Ver no GitHub
                </a>
                <a href="https://task-list-api.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info ms-1 btn-sm">
                  Ver online
                </a>
                </div>
                <div className='mx-auto mt-2'>
                <button className="btn btn-outline-success ms-1 btn-sm">
                  Detalhes do projeto
                </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
