import { LucideIcon } from "lucide-react";

export type ProjectStatus = "Production" | "Confidential" | "Development";
export type ProjectCategory = "Automation" | "AI" | "Recruitment" | "CRM" | "Data" | "LLM";

export interface ProjectImpact {
  value: string;
  label: string;
  isText?: boolean;
}

export interface ArchitectureLayer {
  label: string;
  iconName: string; // We'll map string names to Lucide icons dynamically
  description?: string;
  color?: string;
}

export interface TimelineStep {
  label: string;
  description: string;
  zone: "Automation Zone" | "Human Decision Zone";
  iconName: string;
}

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: "Workflow" | "Google Sheets" | "Architecture" | "Dashboard" | "Evaluation" | "Logs" | "Execution History";
}

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  locked: boolean;
  categories: ProjectCategory[];
  heroImage: string;
  readingTime: string;
  overview: string;
  businessProblem: string;
  myRole: string[];
  impact: ProjectImpact[];
  technologies: string[];
  
  // Optional detailed sections (hidden if locked/NDA)
  architectureLayers?: ArchitectureLayer[];
  timeline?: TimelineStep[];
  codeSnippets?: CodeSnippet[];
  gallery?: GalleryItem[];
  challenges?: string[];
  lessons?: string[];
  future?: string[];
  faqs?: { question: string; answer: string }[];
  implementationDuration?: string;
  complexity?: string;
  hasDashboard?: boolean;
}
