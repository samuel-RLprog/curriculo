import { ExperienceItem, CertificationItem, TechStackCategory } from './types';

export const PERSONAL_INFO = {
  name: 'SAMUEL RODRIGUES LOPES',
  headline: 'Analista de Infraestrutura de TI',
  subheadline: 'Monitoramento • Observabilidade • Cloud • Segurança • Automação',
  mainQuote: 'Experiência para ambientes críticos. Confiabilidade para operações de TI. Observabilidade para decisões mais eficientes.',
  summary:
    'Profissional de Tecnologia da Informação com mais de 10 anos de experiência em ambientes corporativos, missão crítica, monitoramento, infraestrutura, Cloud Computing, segurança e automação.',
  location: 'Brasília – Distrito Federal – Brasil',
  phone: '(61) 9 9285-7256',
  phoneRaw: '5561992857256',
  email: 'samuelrodrigus@gmail.com',
  const linkedin = "linkedin.com/in/samuelrl",
  linkedinDisplay: 'linkedin.com/in/samuelr',
  github: 'https://github.com/samuel-RLprog?tab=repositories',
  githubUser: 'samuel-RLprog',
  youtubeVideoId: 'rtobo6UZgYs',
  youtubeUrl: 'https://www.youtube.com/watch?v=rtobo6UZgYs',
  englishLevel: 'Intermediário – B2',
  education: {
    degree: 'Tecnologia da Informação – Redes de Computadores',
    institution: 'Universidade Estácio',
    status: 'Conclusão prevista: 2027',
  },
};

export const EXPERIENCE_INDICATORS = [
  {
    value: '10+',
    label: 'ANOS DE EXPERIÊNCIA',
    detail: 'Trajetória sólida e contínua em TI corporativa',
  },
  {
    value: 'MISSÃO CRÍTICA',
    label: 'AMBIENTES CORPORATIVOS',
    detail: 'Atuação em data centers e operações de alta complexidade',
  },
  {
    value: 'OBSERVABILIDADE',
    label: 'MONITORAMENTO PROATIVO',
    detail: 'Identificação e mitigação antecipada de incidentes',
  },
  {
    value: 'CLOUD',
    label: 'AZURE / AWS',
    detail: 'Serviços em nuvem, Azure SaaS e infraestrutura virtualizada',
  },
  {
    value: 'INFRAESTRUTURA',
    label: 'SERVIDORES / STORAGE / BACKUP',
    detail: 'Ambientes Linux, Unix, Windows e políticas de contingência',
  },
];

export const CORE_FLOW_STEPS = [
  { step: '01', title: 'EXPERIÊNCIA', desc: 'Análise de histórico operacional e compreensão profunda do ecossistema de TI.' },
  { step: '02', title: 'MONITORAMENTO', desc: 'Coleta de telemetria contínua em servidores, redes, serviços e aplicações.' },
  { step: '03', title: 'OBSERVABILIDADE', desc: 'Correlação de métricas, traces e logs para entender a saúde dos serviços.' },
  { step: '04', title: 'ANÁLISE', desc: 'Investigação analítica de causa raiz, prevenindo recorrências de falhas.' },
  { step: '05', title: 'RESOLUÇÃO', desc: 'Ação técnica precisa, execução de runbooks e resolução de incidentes N1/N2.' },
  { step: '06', title: 'CONFIABILIDADE', desc: 'Sistemas estáveis, dados íntegros e operações de missão crítica resguardadas.' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'SONDA',
    role: 'Analista de Monitoramento e Cloud',
    period: 'Setembro de 2022 – Novembro de 2025',
    allocation: 'Alocado na Empresa Brasileira de Correios e Telégrafos (ECT)',
    badges: [
      'MONITORAMENTO',
      'CLOUD',
      'OBSERVABILIDADE',
      'ITSM',
      'AZURE',
      'STORAGE',
      'BACKUP',
      'DATA CENTER',
      'ACTIVE DIRECTORY',
    ],
    description: [
      'Monitoramento contínuo de ambientes críticos e data centers de grande porte.',
      'Controle rigoroso de incidentes e gestão de chamados através de plataforma ITSM corporativa.',
      'Atuação e resoluções técnicas N1/N2 com rapidez e foco na disponibilidade.',
      'Atuação técnica em ecossistemas integrados e relacionados a Cloud Computing.',
      'Administração e controle de acessos de usuários em plataforma Azure SaaS.',
      'Acompanhamento e validação diária de rotinas de storage corporativo e sistemas de backup.',
      'Verificação e gestão de servidores Unix e Windows remotamente via protocolo seguro SSH.',
      'Supervisão física e lógica de servidores de missão crítica instalados em sala cofre.',
      'Operação ativa com ferramentas líderes de observabilidade: Grafana e Zabbix.',
      'Administração operacional de permissões e diretórios via Active Directory (AD).',
    ],
    visualCategory: 'sonda',
  },
  {
    company: 'OI S.A.',
    role: 'Analista de Sistemas e Segurança da Informação',
    period: 'Maio de 2019 – Fevereiro de 2022',
    badges: [
      'CONTROL-M',
      'ITSM',
      'HEALTH CHECK',
      'BACKUP',
      'ORACLE',
      'MSSQL',
      'MYSQL',
      'NETBACKUP',
    ],
    description: [
      'Monitoramento e sustentação de processos corporativos críticos utilizando Control-M.',
      'Gestão ativa de incidentes de tecnologia e segurança via sistema ITSM.',
      'Realização periódica de health checks preventivos em ambientes corporativos e bancos de dados.',
      'Acompanhamento de jobs e execução de rotinas de backup corporativo com Veritas NetBackup.',
      'Suporte a ambientes com bancos de dados relacionais Oracle, MSSQL e MySQL.',
      'Atuação orientada à preservação da integridade de dados e conformidade das rotinas.',
    ],
    visualCategory: 'oi',
  },
  {
    company: 'GLOBALWEB CORP',
    role: 'Técnico de Suporte em Infraestrutura de TI',
    period: 'Janeiro de 2017 – Maio de 2019',
    allocation: 'Alocado – Cliente Oi S.A.',
    badges: [
      'INFRAESTRUTURA',
      'SERVIDORES',
      'BACKUP',
      'NETBACKUP',
      'CONTROL-M',
      'ITSM',
      'VMs',
      'BANCO DE DADOS',
      'EXCHANGE',
    ],
    description: [
      'Suporte operacional à infraestrutura de TI corporativa de telecomunicações.',
      'Administração e acompanhamento de servidores físicos e máquinas virtuais (VMs).',
      'Execução e monitoramento de políticas de backup corporativo com NetBackup.',
      'Operação de automação de processos batch via Control-M.',
      'Atendimento e encaminhamento de requisições e incidentes via ITSM.',
      'Apoio à infraestrutura de mensageria Exchange e bancos de dados.',
    ],
    visualCategory: 'globalweb',
  },
  {
    company: 'POLITEC',
    role: 'Técnico de Suporte em Sistemas Corporativos',
    period: 'Janeiro de 2006 – Novembro de 2009',
    badges: [
      'SUPORTE',
      'SISTEMAS CORPORATIVOS',
      'ATENDIMENTO',
      'RELATÓRIOS',
      'OTIMIZAÇÃO',
    ],
    description: [
      'Suporte técnico a usuários e sistemas corporativos em ambientes de grande escala.',
      'Atendimento qualificado de chamados e diagnóstico de inconsistências em rotinas.',
      'Elaboração de relatórios técnicos de acompanhamento operacional.',
      'Otimização contínua de rotinas operacionais e fluxos de atendimento.',
    ],
    visualCategory: 'politec',
  },
];

export const TECH_STACK: TechStackCategory[] = [
  {
    title: 'MONITORAMENTO & OBSERVABILIDADE',
    iconName: 'Activity',
    items: ['Zabbix', 'Grafana', 'Dynatrace', 'Control-M', 'ITSM', 'Remedy'],
  },
  {
    title: 'INFRAESTRUTURA',
    iconName: 'Server',
    items: ['Windows Server', 'Linux', 'Unix', 'Storage', 'NetBackup', 'Data Center / Sala Cofre'],
  },
  {
    title: 'CLOUD COMPUTING',
    iconName: 'Cloud',
    items: ['Microsoft Azure', 'AWS', 'Azure SaaS', 'Máquinas Virtuais (VMs)', 'Containers'],
  },
  {
    title: 'REDES & CONECTIVIDADE',
    iconName: 'Network',
    items: ['TCP/IP', 'VLAN', 'DNS', 'DHCP', 'NAT', 'VPN', 'SSH', 'Roteamento'],
  },
  {
    title: 'BANCO DE DADOS',
    iconName: 'Database',
    items: ['Oracle Database', 'Microsoft SQL Server (MSSQL)', 'MySQL'],
  },
  {
    title: 'AUTOMAÇÃO & INTELIGÊNCIA ARTIFICIAL',
    iconName: 'Cpu',
    items: [
      'Python',
      'Shell Script',
      'Google Gemini',
      'Google AI Studio',
      'APIs REST',
      'JSON / XML / CSV',
      'Engenharia de Prompt',
      'IA Multimodal',
      'Automação de Rotinas',
    ],
  },
  {
    title: 'SEGURANÇA DA INFORMAÇÃO',
    iconName: 'ShieldCheck',
    items: [
      'Controle de Acessos',
      'Firewall',
      'IPS',
      'Antivírus Corporativo',
      'EDR',
      'SIEM',
      'Zero Trust',
      'LGPD',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    issuer: 'Cisco',
    title: 'Introdução à Cibersegurança',
    year: '2026',
    category: 'cybersecurity',
  },
  {
    issuer: 'Fortinet',
    title: 'Getting Started in Cybersecurity 3.0',
    year: '2026',
    category: 'cybersecurity',
  },
  {
    issuer: 'Fortinet',
    title: 'Technical Introduction to Cybersecurity 3.0',
    year: '2026',
    category: 'cybersecurity',
  },
  {
    issuer: 'Fortinet',
    title: 'Introduction to the Threat Landscape 3.0',
    year: '2026',
    category: 'cybersecurity',
  },
  {
    issuer: 'Fortinet',
    title: 'Fortinet Certified Fundamentals in Cybersecurity',
    year: '2026',
    category: 'cybersecurity',
  },
  {
    issuer: 'Microsoft',
    title: 'Microsoft Virtual Training Day: Migrate and Modernize Foundation',
    year: '2026',
    category: 'cloud',
  },
  {
    issuer: 'Microsoft',
    title: 'Introdução ao Microsoft Azure',
    category: 'cloud',
  },
  {
    issuer: 'Udemy',
    title: 'Programação em Python',
    category: 'programming',
  },
  {
    issuer: 'Udemy',
    title: 'Formação Profissional Python',
    category: 'programming',
  },
  {
    issuer: 'Udemy',
    title: 'Monitoração Zabbix – Básico',
    category: 'infra',
  },
  {
    issuer: 'Udemy',
    title: 'Instalação e Configuração de Servidor Linux – Avançado',
    category: 'infra',
  },
  {
    issuer: 'Udemy',
    title: 'ITIL 4 Fundamentos',
    category: 'itil',
  },
  {
    issuer: 'Outro',
    title: 'Curso prático de Python com Tkinter e MySQL',
    category: 'programming',
  },
];

export const ACHIEVEMENTS = [
  {
    category: 'MONITORAMENTO PROATIVO',
    iconName: 'Eye',
    description:
      'Redução significativa de falhas recorrentes em ambientes críticos através de monitoramento proativo e observabilidade contínua.',
  },
  {
    category: 'AUTOMAÇÃO OPERACIONAL',
    iconName: 'Terminal',
    description:
      'Aumento da eficiência operacional através da criação de scripts e automações em Python para tratamento de dados e rotinas diárias.',
  },
  {
    category: 'INCIDENTES CRÍTICOS',
    iconName: 'AlertTriangle',
    description:
      'Atuação decisiva na resolução de incidentes de alto impacto corporativo, incluindo falhas de backup e restauração ágil de arquivos e VMs.',
  },
  {
    category: 'IA GENERATIVA APLICADA',
    iconName: 'Sparkles',
    description:
      'Aplicação prática de Inteligência Artificial Generativa para ganho consistente de produtividade técnica e otimização ágil de fluxos.',
  },
];

export const PROFESSIONAL_PILLARS = [
  {
    title: 'EXPERIÊNCIA',
    detail: 'Mais de 10 anos em ambientes corporativos de TI e data centers.',
    iconName: 'Clock',
  },
  {
    title: 'CONFIABILIDADE',
    detail: 'Atuação comprovada em operações corporativas de missão crítica.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'PERFIL ANALÍTICO',
    detail: 'Identificação estruturada de causas raiz e proposição de soluções definitivas.',
    iconName: 'Search',
  },
  {
    title: 'RESILIÊNCIA',
    detail: 'Postura equilibrada e resolutiva diante de incidentes e problemas críticos.',
    iconName: 'Shield',
  },
  {
    title: 'COMUNICAÇÃO',
    detail: 'Comunicação assertiva, alinhamento técnico e trabalho colaborativo.',
    iconName: 'Users',
  },
  {
    title: 'EXCELÊNCIA OPERACIONAL',
    detail: 'Foco contínuo em estabilidade, conformidade e eficiência de custos.',
    iconName: 'Award',
  },
];
