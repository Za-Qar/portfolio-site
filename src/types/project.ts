export type ProjectStatus = "live" | "in-progress" | "private";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  techStack: string[];
  year: number;
  featured: boolean;
  status: ProjectStatus;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  availabilityNote?: string;
}
