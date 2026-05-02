import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Stats.css';

const STATS = [
  { value: 10, suffix: '+', label: 'frentes de serviço' },
  { value: 100, suffix: '%', label: 'compromisso com prazo' },
  { value: 24, suffix: 'h', label: 'pronta resposta' },
  { value: 1, suffix: '', label: 'parceria pra longa duração', display: 'parceria' },
];

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
}

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const headRef = useReveal<HTMLDivElement>();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stats" id="clientes">
      <div className="container">
        <div className="stats__head reveal" ref={headRef}>
          <span className="eyebrow eyebrow--light">Confiança em números</span>
          <h2 className="section-title section-title--light">
            Conheça alguns dos<br />
            <span className="accent">nossos clientes</span>
          </h2>
          <p className="stats__lede">
            Atendemos condomínios, empresas e instituições — sempre com a mesma
            entrega cuidadosa que valoriza cada gestor.
          </p>
        </div>

        <div className="stats__grid" ref={ref}>
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  inView,
}: {
  stat: (typeof STATS)[number];
  inView: boolean;
}) {
  const value = useCountUp(stat.value, inView);
  return (
    <div className="stat-card">
      <strong className="stat-card__value">
        {stat.display ?? value}
        <span className="stat-card__suffix">{stat.suffix}</span>
      </strong>
      <span className="stat-card__label">{stat.label}</span>
    </div>
  );
}
