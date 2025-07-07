import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiStyledcomponents } from 'react-icons/si';
import { FaGitAlt } from "react-icons/fa6";
import './SkilsSection.css'
import styled from '/images/styled.png'
export default function SkillsSection() {
  return (
    <section id="skills" className="mb-5 text-dark">
      <div className="container text-center">
        <h2 className="mb-4 skills-title">Habilidades</h2>
        <div className="row g-4 justify-content-center">

          <div className="col-6 card col-sm-4 col-md-3">
            <div className="p-3 bg-hability text-dark">
              <FaHtml5 size={40} className="mb-2 text-danger" />
              <p className="mb-0">HTML5</p>
            </div>
          </div>

          <div className="col-6 card col-sm-4 col-md-3">
            <div className="p-3 bg-hability text-dark">
              <FaCss3Alt size={40} className="mb-2 text-primary" />
              <p className="mb-0">CSS3</p>
            </div>
          </div>

          <div className="col-6 card col-sm-4 col-md-3">
            <div className="p-3 bg-hability text-dark">
              <SiJavascript size={40} className="mb-2 text-warning" />
              <p className="mb-0">JavaScript</p>
            </div>
          </div>

          <div className="col-6 card col-sm-4 col-md-3">
            <div className="p-3  bg-hability text-dark">
              <FaReact size={40} className="mb-2 text-cyan" />
              <p className="mb-0">React</p>
            </div>
          </div>

          <div className="col-6 card col-sm-4 col-md-3">
            <div className="p-3   bg-hability purple">
              <FaBootstrap size={40} className="mb-2 text-purple-500" />
              <p className="mb-0 text-dark">Bootstrap</p>
            </div>
          </div>

          <div className="col-6 card col-sm-4 col-md-3">
            <div className="p-3  bg-hability text-dark">
              <FaGithub size={40} className="mb-2" />
              <p className="mb-0">GitHub</p>
            </div>
          </div>
          <div className="col-6 card col-sm-4 col-md-3">
            <div className="p-3  bg-hability text-dark">
              <FaGitAlt size={40} className="mb-2 text-git" />
              <p className="mb-0">Git</p>
            </div>
          </div>

          <div className="col-6 card col-sm-4 col-md-3">
            <div className="p-3  bg-hability text-dark">
              <img src={styled} className="mb-2 styled " />
              <p className="mb-0">Styled-components</p>
            </div>
          </div>

          <div className="col-6 card col-sm-4 col-md-3">
            <div className="p-3  bg-hability text-dark">
              <img src='images/figmasvg-removebg-preview.png'style={{
                height:'2.3rem'
              }} className="mb-2" />
              <p className="mb-0">Figma</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
