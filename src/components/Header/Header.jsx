const Header = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-black bg-gradient mb-5 my-border rounded "
  id="top"
  >
    <div className="container">
      <p className="my-border">Marcuslins.com.br</p>

      {/* Botão Hamburguer */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" ></span>
      </button>

      {/* Links do menu */}
      <div className="collapse navbar-collapse justify-content-end " id="navbarMenu">
        <ul className="navbar-nav gap-3">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sobre">Sobre mim</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#services">Serviços</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Habilidades</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#projects">Projetos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Redes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
