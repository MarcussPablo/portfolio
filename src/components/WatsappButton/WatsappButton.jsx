import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <div className="text-center" style={{
            position: 'fixed',
            top: '200px',
            right: '10px',
            zIndex: 1000,
        }}>

            <a
                href="https://wa.me/5581986236056?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success  rounded-5"
            >
                <FaWhatsapp />
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
