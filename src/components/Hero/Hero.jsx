import { DiResponsive } from "react-icons/di";
import { RiSeoLine } from "react-icons/ri";
import { TbContract } from "react-icons/tb";

const Hero = () => (
  <section className=" text-dark text-center mx-auto p-5 container-fluid">
    <div className="container ">
      <div className="row d-flex justify-content-between text-start flex-column flex-md-row">
        <div className="col container-fluid my-auto">
          <h1 className=' mt-2'>Seu site responsivo, rápido, otimizado para SEO,
            com total foco em conversão de leads e experiência do usuário.
          </h1>

        </div>
        <div className="row mx-auto g-4 justify-content-between">

          <div className="col-10 card m-1 col-sm-4 col-md-3">
            <div className=" border text-center rounded shadow-sm bg-dark text-light">
              <DiResponsive size={100} className="mb-2 " />
            </div>
            <h4 className="mb-0">Responsivo</h4>
            <p className="text-light">Se adapta a qualquer tamanho de tela</p>
          </div>
          <div className="col-10 card m-1 col-sm-4 col-md-3">
            <div className=" border text-center rounded shadow-sm bg-dark text-light">
              <RiSeoLine  size={100} className="mb-2 " />
            </div>
              <h4 className="mb-0">SEO</h4>
              <p className="text-light">Auxilia os buscadores a encontrar seu site</p>
          </div>
          <div className="col-10 card m-1 col-sm-4 col-md-3">
            <div className="border text-center rounded shadow-sm bg-dark text-light">
              <TbContract  size={100} className="mb-2 " />
            </div>
            <h4 className="mb-0">Conversão de Leads</h4>
            <p className="text-light">Ajuda a transformar visitantes em possíveis clientes.</p>
          </div>
        </div>

      </div>

<div className="row align-items-center justify-content-center bg-dark text-light rounded p-4 mt-4" id="sobre">
  <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
    <img className="img-fluid border rounded-circle " style={{ width: "300px" }} src="/images/sem_marca_dagua.png" alt="Marcus Lins" />
  </div>

  <div className="col-12 col-md-6">
    <p className="fs-5 m-0 text-md-start text-start">
      Eu sou Marcus Lins, desenvolvedor Front-End especializado em React. Crio interfaces modernas com foco em performance e usabilidade.
    </p>
  </div>
</div>

 
    </div>


  </section>
);
export default Hero;