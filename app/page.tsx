import { Navbar } from "@/components/navigation/navbar";
import { Sidebar } from "@/components/navigation/sidebar";
import { HeroSection } from "@/components/hero/hero-section";
import { HeroValuePanel } from "@/components/hero/hero-value-panel";
import { MetricCards } from "@/components/metrics/metric-cards";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { AiPipeline } from "@/components/workflow/ai-pipeline";
import { TechStrip } from "@/components/shared/tech-strip";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <Sidebar />
      
      <div className="flex-1 flex flex-col w-full xl:pl-20">
        <HeroSection />
        <HeroValuePanel />
        <MetricCards />
        <FeaturedProjects />
        <AiPipeline />
        <TechStrip />
      </div>

      <Footer />
    </main>
  );
}
