import './Projects.css'


export default function Projects({ handleAlert }) {

  return (
    <section id="projects" className="">
      <div className="container bg-primar ">
        <h2 className="text-center proj-title ">Projetos relevantes</h2>
        <div className="row g-4">

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/ecommerce.png" className="card-img-top" style={{ height: '200px' }} alt="Projeto 1" />
              <div className="card-body d-flex flex-column justify-content-between ">
                <h5 className="card-title ">E-commerce React</h5>
                <p className="card-text">Projeto de loja online com React, consumo de API e carrinho funcional.</p>
                <div className="mx-auto">
                  <a href="https://github.com/MarcussPablo/2-Ecoomerce-Complete" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                    Ver no GitHub
                  </a>
                  <a href="https://clever-torrone-4b25b7.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info ms-1 btn-sm">
                    Ver online
                  </a>
                </div>
                <div className='mx-auto mt-2' >
                  <button type='button' className="btn btn-outline-success ms-1 btn-sm" data-bs-toggle="modal" data-bs-target="#projeto_1">
                    Detalhes do projeto
                  </button>

                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 ">
            <div className="card h-100 shadow-sm">
              <img src="/images/landing-page.png" className="card-img-top" style={{ height: '200px' }} alt="Projeto 2" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title ">Site portfólio.</h5>
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
                  <button className="btn btn-outline-success ms-1 btn-sm" data-bs-toggle="modal" data-bs-target="#projeto_2">
                    Detalhes do projeto
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 ">
            <div className="card  h-100 shadow-sm ">
              <img src="/images/task-list-apu.png" className="card-img-top" style={{ height: '200px' }} alt="Projeto 1" />
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
                  <button className="btn btn-outline-success ms-1 btn-sm" data-bs-toggle="modal" data-bs-target="#projeto_3">
                    Detalhes do projeto
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 ">
            <div className="card  h-100 shadow-sm ">
              <img src="/images/pokereact.png" className="card-img-top" style={{ height: '200px' }} alt="Projeto 1" />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">Pokedex-React</h5>
                <p className="card-text ">Pokedex criada com React e Bootstrap, utilizando pokeapi.co</p>
                <div className='mx-auto'>
                  <a href="https://github.com/MarcussPablo/PokeDex-React" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark  btn-sm">
                    Ver no GitHub
                  </a>
                  <a href="https://pokreact.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info ms-1 btn-sm">
                    Ver online
                  </a>
                </div>
                <div className='mx-auto mt-2'>
                  <button className="btn btn-outline-success ms-1 btn-sm" data-bs-toggle="modal" data-bs-target="#projeto_4">
                    Detalhes do projeto
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="modal fade mt-5" id="projeto_1" tabindex="-1" aria-labelledby="projeto_1_modal_label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="projeto_1_modal_label">E-commerce React</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Projeto de loja online com React, consumo de API e carrinho funcional.
              <br />
              Estilizada com Bootstrap e com funções de <strong> adicionar e remover </strong>
              do carrinho.
              <br />
               O carrinho soma e subtrai automaticamente os valores a cada acão através 
              do hook <strong>UseState</strong>.
              <br />
              Ao clicar no incone de carrinho no canto superior direito, abre-se um acordeon feito com 
               <strong> CSS</strong> aproveitando novamente o hook <strong>UseState do React</strong>
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade mt-5" id="projeto_2" tabindex="-1" aria-labelledby="projeto_2_modal_label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="projeto_2_modal_label">Site portfólio</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Página institucional feita com React e Bootstrap, totalmente responsiva.
              <br />

            </div>

          </div>
        </div>
      </div>

      <div className="modal fade mt-5" id="projeto_3" tabindex="-1" aria-labelledby="projeto_3_modal_label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="projeto_3_modal_label">Task-list-Api</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Task-list com 3/4 de CRUD(get/update/delete) com API simulada Jsonplaceholder, e estilizada com 
              Bootstrap.
              <br />
              Este projeto explora conceitos de Fetch API e tenta simular um <strong>CRUD </strong>
              completo, não sendo possível por impossibilidades da própria API que não permite o post.
              <br />
              Também exolora conceitos de funçoes nativas do <strong>JavaScript </strong>
              como <strong>.map() e .filter() </strong> dentre outros.
            </div>

          </div>
        </div>
      </div>

      <div className="modal fade mt-5" id="projeto_4" tabindex="-1" aria-labelledby="projeto_3_modal_label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="projeto_3_modal_label">Pokedex-React</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              A aplicação se utiliza de fetch encadeados conectados a API <a href="http://pokeapi.co">pokeapi.co</a>, 
              componentização em React, bem como uso dos hooks <strong>useEfect-useState-useRef</strong> e <strong>Props</strong> para 
              encadear e conectar a componentização.
              <br />
              Também conta com <strong>Bootstrap</strong> para estilização e configuração e uso de <strong>Modais </strong>
              que são exibidos quando se clica em "ver detalhes". E com aproximadamente 700 linhas de <strong>CSS</strong> para 
              configurações adicionais de <strong>animações</strong>, posicionamento e cores. 
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
