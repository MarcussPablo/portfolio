import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <p>Esta seção irá mostrar meus projetos mais recentes e as tecnologias que utilizei para desenvolvê-los.</p>

      <div className="project">
        <img src="src/images/mundo-invertido.png" alt="Projeto 1" className="project-image" />
        <div className="project-info">
          <h3>Mundo Invertido</h3>
          <p>Projeto desenvolvido em bootcamp da DIO. Utiliza HTML, CSS e JAVASCRIPT puros. Explora conceitos
            de background e inversão de tema claro para escuro dentre outros.
          </p>
          <a href="https://mundo-invertido-marcus.netlify.app/">Ver projeto online</a>
        </div>
      </div>

    </section>
  );
};

export default Projects;
