export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  techStack: string[];
  year: number;
  featured: boolean;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
}
