import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useScrolled } from '../hooks/useScrolled';
import { SocialIcons } from './SocialIcons';
import './Header.css';

const NAV = [
  { to: '/#empresa', label: 'Nossa empresa' },
  { to: '/#servicos', label: 'Serviços' },
  { to: '/#clientes', label: 'Clientes' },
  { to: '/trabalhe-conosco', label: 'Contato' },
];

export function Header() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 880) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner container">
        <Link to="/" className="site-header__logo" onClick={() => setOpen(false)}>
          <img src="/imagens/logo.png" alt="F. H. Ribeiro" />
        </Link>

        <nav className={`site-header__nav${open ? ' is-open' : ''}`} aria-label="Principal">
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                {item.to.startsWith('/#') ? (
                  <a href={item.to} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="site-header__nav-social">
            <SocialIcons />
          </div>
        </nav>

        <div className="site-header__actions">
          <SocialIcons compact />
          <Link to="/trabalhe-conosco" className="btn btn--small">
            Trabalhe conosco
            <span className="arrow" aria-hidden>→</span>
          </Link>
          <button
            type="button"
            className={`burger${open ? ' is-active' : ''}`}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
