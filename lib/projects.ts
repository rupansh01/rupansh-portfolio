import { aiRecruitment } from "@/content/projects/ai-recruitment";
import { enterpriseCrm } from "@/content/projects/enterprise-crm";
import { propertyIntelligence } from "@/content/projects/property-intelligence";
import { Project } from "@/types/project";

export const allProjects: Project[] = [
  aiRecruitment,
  enterpriseCrm,
  propertyIntelligence
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find(p => p.slug === slug);
}
