import { useReveal } from '../hooks/useReveal';
import './Manifesto.css';

export function Manifesto() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="manifesto" id="manifesto">
      <div className="container">
        <div className="manifesto__inner reveal" ref={ref}>
          <span className="eyebrow">Nossa essência</span>
          <h2 className="manifesto__title">
            Transformamos <span className="accent">possibilidades</span> em
            <br />
            <em>realidades</em> extraordinárias.
          </h2>
          <p className="manifesto__text">
            Engenharia, manutenção, tecnologia e gestão sob o mesmo cuidado.
            Atendemos empresas, condomínios e instituições com o rigor de quem
            entende que cada detalhe importa.
          </p>
        </div>
      </div>
    </section>
  );
}
