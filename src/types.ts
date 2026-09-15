export type ScreenId = 'inicio' | 'sobre-mi' | 'proyectos-y-codigo' | 'maternidad-y-vida' | 'contacto';

export interface ArchetypeFacet {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  description: string;
  quote?: string;
  details?: string;
}

export interface LiturgicTimeItem {
  id: string;
  time: string;
  tag: string;
  dotColor: string;
  description: string;
  extendedNotes?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Sistemas & Kernel' | 'Bases de Datos' | 'Audio & Web' | 'Algoritmos';
  status: 'Producción' | 'Académico' | 'En Desarrollo';
  description: string;
  stack: string[];
  githubUrl?: string;
  demoSnippet?: string;
  metrics: string;
}

export interface MotherhoodReflection {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  fullText: string;
  lesson: string;
}

export interface ResilienceTranslation {
  maternalSkill: string;
  engineeringSkill: string;
  explanation: string;
}
