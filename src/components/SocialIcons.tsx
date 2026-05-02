import { company, whatsappLink } from '../data/company';
import './SocialIcons.css';

type Props = {
  compact?: boolean;
  tone?: 'light' | 'dark';
};

const ICONS = [
  { href: company.social.facebook, src: '/imagens/facebook.png', label: 'Facebook' },
  { href: company.social.instagram, src: '/imagens/insta.png', label: 'Instagram' },
  { href: whatsappLink, src: '/imagens/whats.png', label: 'WhatsApp' },
  { href: company.social.youtube, src: '/imagens/youtube.png', label: 'YouTube' },
];

export function SocialIcons({ compact = false, tone = 'light' }: Props) {
  return (
    <ul className={`social-icons${compact ? ' is-compact' : ''} tone-${tone}`}>
      {ICONS.map((icon) => (
        <li key={icon.label}>
          <a
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.label}
          >
            <img src={icon.src} alt="" loading="lazy" />
          </a>
        </li>
      ))}
    </ul>
  );
}
