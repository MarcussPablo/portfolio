import './Services.css'

const Services = () =>{
    return(
<section id="services" className="bg-light text-dark">
<div class="container ">
  <h2 className="text-center service-title">Serviços</h2>
  <div class="row g-4">
    
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm ">
        <div class="card-body  ">
          <h5 class="card-title">Criação de Sites Responsivos</h5>
          <p class="card-text">Desenvolvimento de landing pages e sites institucionais modernos com HTML, CSS e Bootstrap.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Customização com Bootstrap</h5>
          <p class="card-text">Adapto templates ou crio componentes personalizados com Bootstrap para visual moderno e responsivo.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Sites com React</h5>
          <p class="card-text">Desenvolvo sites com React usando componentes reutilizáveis e estilização com Bootstrap.</p>
        </div>
      </div>
    </div>

  

  </div>
</div>
</section>
    )
}

export default Services