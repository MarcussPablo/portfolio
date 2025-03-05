import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "5581986236056";
  const message = "Olá! Gostaria de mais informações?"; 
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
       <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
