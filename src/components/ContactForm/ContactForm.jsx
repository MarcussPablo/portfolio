import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./ContactForm.css"; // Importa o CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email, // Garante que o e-mail do usuário seja enviado corretamente
      message: formData.message,
      to_name: "Nome do Destinatário", // Aqui você pode ajustar ou adicionar dinamicamente
    };

    emailjs
      .send("service_6n9ouog", "template_zizwy2f", templateParams, "2M9RpIcIdXrEwvCC8")
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          console.log(result.text);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Ocorreu um erro ao enviar a mensagem.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contato</h2>

      <div className="contact-icons">
        <a href="https://github.com/MarcussPablo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/marcus-lins-83216a313/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>

      <h3>Envie um e-mail</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Mensagem:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
