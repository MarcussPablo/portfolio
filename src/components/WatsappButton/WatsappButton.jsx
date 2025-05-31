import { FaWhatsapp } from "react-icons/fa";
import './WhatsappButton.css'

export default function WhatsAppButton() {
    return (
        <div className="text-center" style={{
            position: 'fixed',
            bottom: '0',
            right: '0',
            zIndex: 1000,
        }}>
            
            <a
                href="https://wa.me/5581986236056?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
            >
                <img src="images/whatsapp_logo_icon_147205.svg" alt="" />
            </a>
            
            <br />
            <a
                href="https://wa.me/5581986236056?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                className="orcamento"
            >
                Faça um orçamento
            </a>
        </div>

    );
}
