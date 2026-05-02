import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 400);
        el.style.setProperty('--parallax', `${y * 0.18}px`);
        el.style.setProperty('--parallax-fade', `${1 - y / 600}`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="hero" ref={ref} id="topo">
      <div className="hero__bg" aria-hidden>
        <img src="/imagens/fundo.png" alt="" />
        <div className="hero__bg-overlay" />
        <div className="hero__bg-grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow eyebrow--light">F. H. Ribeiro · Desde a fundação</span>
          <h1 className="hero__title">
            Nascemos de<br />
            <span className="hero__title-script">sonhos</span>
          </h1>
          <p className="hero__lede">
            O sonho de todo gestor é ser valorizado e criar um ambiente acolhedor,
            funcional e de sucesso. Reunimos engenharia, manutenção e gestão em
            <strong> soluções abrangentes e inovadoras </strong>
            para transformar esse sonho em realidade.
          </p>

          <div className="hero__cta">
            <a href="#servicos" className="btn">
              Ver serviços
              <span className="arrow" aria-hidden>→</span>
            </a>
            <Link to="/trabalhe-conosco" className="btn btn--ghost btn--ghost-light">
              Fale com a gente
            </Link>
          </div>

          <ul className="hero__metrics" aria-label="Pilares">
            <li>
              <strong>10+</strong>
              <span>frentes de serviço</span>
            </li>
            <li>
              <strong>360°</strong>
              <span>solução completa</span>
            </li>
            <li>
              <strong>SP</strong>
              <span>São José do Rio Preto</span>
            </li>
          </ul>
        </div>
      </div>

      <a href="#manifesto" className="hero__scroll" aria-label="Rolar para o conteúdo">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">scroll</span>
      </a>
    </section>
  );
}
