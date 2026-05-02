import { Link } from 'react-router-dom';
import { company } from '../data/company';
import { SocialIcons } from './SocialIcons';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src="/imagens/logo-nova.png" alt="F. H. Ribeiro" />
          <p>
            Engenharia, manutenção e gestão para condomínios, empresas e
            instituições — com a entrega cuidadosa que valoriza cada gestor.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Rodapé">
          <h4>Navegue</h4>
          <ul>
            <li><a href="/#empresa">Nossa empresa</a></li>
            <li><a href="/#servicos">Serviços e produtos</a></li>
            <li><a href="/#clientes">Clientes</a></li>
            <li><Link to="/trabalhe-conosco">Trabalhe conosco</Link></li>
          </ul>
        </nav>

        <div className="site-footer__contact">
          <h4>Contato</h4>
          <p>{company.legalName}</p>
          <p>CNPJ: {company.cnpj}</p>
          <p>{company.address}</p>
          <p>{company.phone}</p>
          <SocialIcons tone="dark" compact />
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <img className="site-footer__type" src="/imagens/logo-tipo.png" alt="" aria-hidden />
          <span>
            © {year} F. H. Ribeiro. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
