import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4 text-dark">Habilidades</h2>
        <div className="row g-4 justify-content-center">
          
          <div className="col-6 col-sm-4 col-md-3">
            <div className="p-3 border rounded shadow-sm bg-dark text-light">
              <FaHtml5 size={40} className="mb-2 text-danger" />
              <p className="mb-0">HTML5</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <div className="p-3 border rounded shadow-sm bg-dark text-light">
              <FaCss3Alt size={40} className="mb-2 text-primary" />
              <p className="mb-0">CSS3</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <div className="p-3 border rounded shadow-sm bg-dark text-light">
              <SiJavascript size={40} className="mb-2 text-warning" />
              <p className="mb-0">JavaScript</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <div className="p-3 border rounded shadow-sm bg-dark text-light">
              <FaReact size={40} className="mb-2 text-cyan-400" />
              <p className="mb-0">React</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <div className="p-3 border rounded shadow-sm bg-dark text-light">
              <FaBootstrap size={40} className="mb-2 text-purple-500" />
              <p className="mb-0">Bootstrap</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3">
            <div className="p-3 border rounded shadow-sm bg-dark text-light">
              <FaGithub size={40} className="mb-2" />
              <p className="mb-0">GitHub</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
