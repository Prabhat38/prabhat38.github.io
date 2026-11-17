export interface Metric {
  label: string;
  value: string;
  suffix?: string;
}

export interface TechTag {
  name: string;
  color?: 'cyan' | 'purple' | 'default';
}

export interface ExperienceEntry {
  id: string;
  type?: 'work' | 'break' | 'education';
  role: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
  metrics: Metric[];
  tags: string[];
}

export interface ContributionSection {
  heading: string;
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  metrics: Metric[];
  techStack: string[];
  category: 'realtime' | 'messaging' | 'backend' | 'infra' | 'search' | 'ml' | 'notification';
  size: 'large' | 'medium';
  accentColor: 'cyan' | 'purple';
  archDiagramPath?: string;
  contributions?: ContributionSection[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: string[];
}

export interface ContactLink {
  type: 'email' | 'linkedin' | 'github';
  href: string;       // base64-encoded when encoded: true
  label: string;      // base64-encoded when encodedLabel: true
  encoded?: boolean;
  encodedLabel?: boolean;
}
