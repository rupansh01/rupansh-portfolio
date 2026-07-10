import { getProjectBySlug, allProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { CaseStudyHero } from "@/components/case-study/case-study-hero";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudyImpact } from "@/components/case-study/case-study-impact";
import { ArchitectureViewer } from "@/components/case-study/architecture-viewer";
import { TechnicalTimeline } from "@/components/case-study/technical-timeline";
import { CodeExplorer } from "@/components/case-study/code-explorer";
import { ScreenshotGallery } from "@/components/case-study/screenshot-gallery";
import { ProjectNavigation } from "@/components/case-study/project-navigation";
import { RecruitmentDashboard } from "@/components/case-study/recruitment-dashboard";

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative flex min-h-screen flex-col bg-background selection:bg-cyan-500/30">
      
      <div className="flex-1 w-full">
        <CaseStudyHero project={project} />
        <CaseStudyNav locked={project.locked} />
        <CaseStudyImpact project={project} />
        <ArchitectureViewer project={project} />
        <TechnicalTimeline project={project} />
        <ScreenshotGallery project={project} />
        {project.hasDashboard && (
          <div className="container mx-auto px-6 md:px-12 py-12">
            <RecruitmentDashboard />
          </div>
        )}
        <CodeExplorer project={project} />
        <ProjectNavigation />
      </div>

      <Footer />
    </main>
  );
}
