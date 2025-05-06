import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-light py-4 mt-5 "id='contact'>
      <div className="container text-center">
        <p className="mb-2">&copy; {year} Marcus. Todos os direitos reservados.</p>

        <div className="d-flex justify-content-center gap-4 fs-4">
          <a href="https://github.com/MarcussPablo" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/marcus-lins-83216a313/" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
