import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './CTABanner.css';

export function CTABanner() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner__inner reveal" ref={ref}>
          <div>
            <span className="eyebrow">Vamos conversar</span>
            <h2 className="cta-banner__title">
              Pronto pra transformar o<br />
              seu projeto em <em>realidade</em>?
            </h2>
          </div>

          <div className="cta-banner__actions">
            <Link to="/trabalhe-conosco" className="btn">
              Solicitar contato
              <span className="arrow" aria-hidden>→</span>
            </Link>
            <a href="#servicos" className="cta-banner__link">
              Conheça os serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
