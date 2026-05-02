import { useCallback, useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Showcase.css';

const SLIDES = [
  {
    src: '/imagens/slider01.jpg',
    title: 'Engenharia em ação',
    caption: 'Projetos elétricos, automação e inspeção técnica.',
  },
  {
    src: '/imagens/slider02.jpg',
    title: 'Obra cuidada',
    caption: 'Reformas, manutenção predial e acabamentos.',
  },
  {
    src: '/imagens/slider.jpg',
    title: 'Ambientes e estrutura',
    caption: 'Climatização, segurança e infraestrutura completa.',
  },
];

const AUTOPLAY_MS = 5500;

export function Showcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const titleRef = useReveal<HTMLDivElement>();

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  const startRef = useRef<number | null>(null);
  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(next, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, next]);

  return (
    <section className="showcase" id="empresa">
      <div className="container">
        <header className="showcase__head reveal" ref={titleRef}>
          <span className="eyebrow">Em ação</span>
          <h2 className="section-title">
            Realizações que <span className="accent">contam histórias</span>
          </h2>
        </header>

        <div
          className="showcase__stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            startRef.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const start = startRef.current;
            if (start == null) return;
            const dx = e.changedTouches[0].clientX - start;
            if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
            startRef.current = null;
          }}
        >
          <div
            className="showcase__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((slide) => (
              <figure key={slide.src} className="showcase__slide">
                <img src={slide.src} alt={slide.title} loading="lazy" />
                <figcaption>
                  <h3>{slide.title}</h3>
                  <p>{slide.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            className="showcase__nav showcase__nav--prev"
            onClick={prev}
            aria-label="Slide anterior"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="showcase__nav showcase__nav--next"
            onClick={next}
            aria-label="Próximo slide"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path d="M9 18l6-6-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="showcase__dots" role="tablist" aria-label="Selecionar slide">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir para slide ${i + 1}`}
                className={`showcase__dot${i === index ? ' is-active' : ''}`}
                onClick={() => go(i)}
              >
                <span
                  className="showcase__dot-fill"
                  style={{ animationDuration: paused ? '0s' : `${AUTOPLAY_MS}ms` }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
