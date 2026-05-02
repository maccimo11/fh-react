export type Service = {
  id: string;
  title: string;
  tagline: string;
  items: string[];
  icon: ServiceIcon;
};

export type ServiceIcon =
  | 'engineering'
  | 'general'
  | 'plumbing'
  | 'electrical'
  | 'security'
  | 'tech'
  | 'misc'
  | 'climate'
  | 'paint'
  | 'garden';

export const services: Service[] = [
  {
    id: 'engenharia',
    title: 'Engenharia',
    tagline: 'Projetos técnicos e visitas especializadas',
    icon: 'engineering',
    items: [
      'Serviços de Engenharia',
      'Visita técnica de Engenharia',
      'Elaboração de Projeto de Automação',
      'Elaboração de Projeto Elétrico',
    ],
  },
  {
    id: 'gerais',
    title: 'Gerais',
    tagline: 'Reformas e acabamentos completos',
    icon: 'general',
    items: [
      'Serviços de Reforma',
      'Serralheria',
      'Marcenaria',
      'Vidraçaria',
      'Limpeza',
    ],
  },
  {
    id: 'hidraulica',
    title: 'Hidráulica',
    tagline: 'Soluções para água e cobertura',
    icon: 'plumbing',
    items: [
      'Manutenção Hidráulica',
      'Limpeza de Caixa d’água',
      'Manutenção de Piscinas',
      'Instalação de Telhados e Calhas',
      'Manutenção em Calhas e Rufos',
    ],
  },
  {
    id: 'eletrica',
    title: 'Elétrica',
    tagline: 'Adequação e infraestrutura energética',
    icon: 'electrical',
    items: [
      'Manutenção e Adequação Elétrica',
      'Projeto Elétrico',
      'Projeto de Automação',
      'Reforma de Infraestrutura',
    ],
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    tagline: 'Monitoramento e proteção patrimonial',
    icon: 'security',
    items: [
      'Sistemas de CFTV',
      'Cerca Elétrica',
      'Câmeras',
      'Alarme',
    ],
  },
  {
    id: 'tecnologia',
    title: 'Tecnologia',
    tagline: 'Redes, dispositivos e ambientes digitais',
    icon: 'tech',
    items: [
      'Manutenção em Redes',
      'Manutenção de Dispositivos',
      'Salas de Informática',
      'Salas de Multimídia',
    ],
  },
  {
    id: 'climatizacao',
    title: 'Climatização',
    tagline: 'Conforto térmico para qualquer ambiente',
    icon: 'climate',
    items: [
      'Projeto de Climatização',
      'Instalação de Ar-Condicionado',
      'Manutenção de Ar-Condicionado',
    ],
  },
  {
    id: 'pintura',
    title: 'Pintura',
    tagline: 'Acabamento e impermeabilização',
    icon: 'paint',
    items: [
      'Serviços de Pintura',
      'Impermeabilização de Calhas',
      'Impermeabilização de Telhados',
    ],
  },
  {
    id: 'outros',
    title: 'Outros',
    tagline: 'Acessibilidade e ambientes especiais',
    icon: 'misc',
    items: [
      'Sistema para Raio (SPDA)',
      'Adequação e Acessibilidade',
      'Sala Sensorial',
    ],
  },
  {
    id: 'jardinagem',
    title: 'Jardinagem & Ambientes',
    tagline: 'Paisagismo e organização de espaços',
    icon: 'garden',
    items: [
      'Limpeza e Conservação de Áreas Comuns',
      'Montagem e Desmontagem de Móveis',
      'Mudança e Adequação de Ambientes',
      'Jardinagem e Paisagismo',
      'Manutenção em Áreas de Lazer',
    ],
  },
];
