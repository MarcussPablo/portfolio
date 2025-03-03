import React from 'react';
import './Projects.css';
import mundoInvertido from '../../images/mundo-invertido.png'
import todoSite from '../../images/siteTodoList.png'
todoSite
const Projects = () => {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <p>Esta seção irá mostrar meus projetos mais recentes e as tecnologias que utilizei para desenvolvê-los.</p>

      <div className="project">
      <img src={mundoInvertido} alt="Projeto 1" className="project-image" />
        <div className="project-info">
          <h3>Mundo Invertido</h3>
          <p>Projeto desenvolvido em bootcamp da DIO. Utiliza HTML, CSS e JAVASCRIPT puros. Explora conceitos
            de background e inversão de tema claro para escuro dentre outros.
          </p>
          <a href="https://mundo-invertido-marcus.netlify.app/" target='_blank'>Ver projeto online</a>
        </div>
        
      </div>
      <div className="project">
      <img src={todoSite} alt="Projeto 1" className="project-image" />
        <div className="project-info">
          <h3>Todo-list com localstorage</h3>
          <p>Todo-list simples que explora hooks React e conceitos de persistência em localStorage.
          </p>
          <a href="https://chic-torrone-d8da22.netlify.app/" target='_blank'>Ver projeto online</a>
        </div>
        
      </div>

    </section>
  );
};

export default Projects;
