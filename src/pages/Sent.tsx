import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Sent.css';

export default function Sent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <main className="sent">
      <div className="container sent__inner">
        <span className="sent__check" aria-hidden>
          <svg viewBox="0 0 56 56" width="56" height="56">
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="sent__check-circle"
            />
            <path
              d="M16 29l8 8 16-18"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sent__check-mark"
            />
          </svg>
        </span>

        <span className="eyebrow">Recebido</span>
        <h1 className="sent__title">
          Mensagem <em>enviada</em><br />
          com sucesso!
        </h1>
        <p className="sent__lede">
          Obrigado pelo contato — em breve um membro do nosso time retorna pra você.
        </p>

        <div className="sent__actions">
          <Link to="/" className="btn">
            Voltar para o início
            <span className="arrow" aria-hidden>→</span>
          </Link>
          <Link to="/#servicos" className="btn btn--ghost">
            Ver serviços
          </Link>
        </div>
      </div>
    </main>
  );
}
