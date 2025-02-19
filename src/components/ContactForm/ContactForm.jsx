import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./ContactForm.css"; // Importa o CSS

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h2>Contato</h2>

      <div className="contact-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
          <h3>Envie um email</h3>
      <form className="contact-form">
        <label>Nome:</label>
        <input type="text" name="name" required />

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Mensagem:</label>
        <textarea name="message" required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
