import { whatsappLink } from '../data/company';
import './WhatsAppFab.css';

export function WhatsAppFab() {
  return (
    <a
      className="wa-fab"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
    >
      <span className="wa-fab__pulse" aria-hidden />
      <img src="/imagens/whats.png" alt="" />
      <span className="wa-fab__label">Fale conosco</span>
    </a>
  );
}
