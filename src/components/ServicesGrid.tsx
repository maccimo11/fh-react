import { useState } from 'react';
import { services, type Service } from '../data/services';
import { ServiceIcon } from './ServiceIcon';
import { useReveal } from '../hooks/useReveal';
import './ServicesGrid.css';

export function ServicesGrid() {
  const [active, setActive] = useState<string | null>(null);
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section className="services" id="servicos">
      <div className="container">
        <header className="services__head reveal" ref={headRef}>
          <span className="eyebrow">Serviços e produtos</span>
          <h2 className="section-title">
            Conheça os nossos <span className="accent">serviços</span>
          </h2>
          <p className="lede">
            Dez frentes especializadas que atuam de forma integrada — gestão técnica,
            execução qualificada e suporte contínuo para o seu empreendimento.
          </p>
        </header>

        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={active === service.id}
              onToggle={() =>
                setActive((prev) => (prev === service.id ? null : service.id))
              }
              order={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isActive,
  onToggle,
  order,
}: {
  service: Service;
  isActive: boolean;
  onToggle: () => void;
  order: number;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`service-card reveal${isActive ? ' is-active' : ''}`}
      style={{ transitionDelay: `${(order % 6) * 60}ms` }}
    >
      <div className="service-card__icon">
        <ServiceIcon name={service.icon} />
      </div>
      <h3>{service.title}</h3>
      <p className="service-card__tagline">{service.tagline}</p>

      <ul className="service-card__list">
        {service.items.slice(0, isActive ? service.items.length : 3).map((item) => (
          <li key={item}>
            <span className="service-card__bullet" aria-hidden />
            {item}
          </li>
        ))}
      </ul>

      <button
        className="service-card__more"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        {isActive ? 'Ver menos' : 'Ver tudo'}
        <span className={`service-card__chev${isActive ? ' is-open' : ''}`} aria-hidden>
          ↓
        </span>
      </button>
    </article>
  );
}
