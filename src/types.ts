export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  allocation?: string;
  description: string[];
  badges: string[];
  visualCategory: 'sonda' | 'oi' | 'globalweb' | 'politec';
}

export interface CertificationItem {
  issuer: 'Cisco' | 'Fortinet' | 'Microsoft' | 'Udemy' | 'Outro';
  title: string;
  year?: string;
  category: 'cybersecurity' | 'cloud' | 'programming' | 'infra' | 'itil';
}

export interface TechStackCategory {
  title: string;
  iconName: string;
  items: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}
