"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Briefcase, 
  Webhook, 
  Database, 
  BrainCircuit, 
  Target, 
  Table, 
  UserCheck, 
  Video, 
  CheckCircle2,
  Globe2
} from "lucide-react";

const pipelineNodes = [
  { id: 1, title: "LinkedIn Job Post", desc: "Global sourcing initiated across major financial hubs.", icon: Briefcase, type: "ai" },
  { id: 2, title: "Webhook Trigger", desc: "Real-time candidate application payload capture.", icon: Webhook, type: "ai" },
  { id: 3, title: "Resume ETL Process", desc: "OCR parsing and standardisation of unstructured PDFs.", icon: Database, type: "ai" },
  { id: 4, title: "LLM Evaluation", desc: "Deep semantic analysis against precise job requirements.", icon: BrainCircuit, type: "ai" },
  { id: 5, title: "Scoring Engine", desc: "Calculating objective fit scores across 30+ dimensions.", icon: Target, type: "ai" },
  { id: 6, title: "Google Sheets Sync", desc: "Curated analytics dashboard delivered to recruitment teams.", icon: Table, type: "ai" },
  { id: 7, title: "Recruiter Review", desc: "Human evaluation of the top 5% AI-shortlisted talent.", icon: UserCheck, type: "human" },
];

export function AiPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });


  const splitOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  return (
    <section id="workflow" ref={containerRef} className="py-24 relative overflow-hidden bg-[#03050A]">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-cyan-500/5 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* LEFT COLUMN: Sticky Dashboard & Market Analysis */}
        <div className="w-full lg:w-5/12">
          <div className="sticky top-32 space-y-12">
            
            {/* Header */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Global <span className="text-gradient">Scale</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By automating the extreme top-of-funnel, we can effortlessly tap into high-value Relationship Manager markets worldwide, radically accelerating revenue acquisition while maintaining pristine hiring quality.
              </p>
            </div>

            {/* Automation vs Human Split */}
            <div className="glass-card p-8 rounded-3xl border-white/10 bg-[#0a101e] shadow-2xl">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-6">Workload Distribution</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-cyan-400">AI Automation Zone</span>
                    <span className="font-bold text-cyan-400">85%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.5)] rounded-full"
                      style={{ width: useTransform(scrollYProgress, [0, 0.5], ["0%", "85%"]) }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-amber-400">Human Decision Zone</span>
                    <span className="font-bold text-amber-400">15%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.5)] rounded-full"
                      style={{ width: useTransform(scrollYProgress, [0.5, 0.8], ["0%", "15%"]) }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Market Analysis Dashboard */}
            <div className="glass-card p-8 rounded-3xl border-white/10 bg-[#0a101e] shadow-2xl space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest">RM Market Potential</h3>
                <Globe2 className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                {/* CSS Conic Gradient Pie Chart */}
                <div 
                  className="relative w-40 h-40 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.15)] shrink-0 animate-in zoom-in duration-700"
                  style={{ background: "conic-gradient(#3b82f6 0% 35%, #10b981 35% 60%, #a855f7 60% 80%, #f59e0b 80% 92%, #f43f5e 92% 100%)" }}
                >
                  <div className="absolute inset-3 bg-[#0a101e] rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">14K</div>
                      <div className="text-[10px] text-muted-foreground uppercase">Candidates</div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex-1 w-full space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"/> Engineering (35%)</div>
                    <span className="text-white font-mono">4.9K</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"/> Sales (25%)</div>
                    <span className="text-white font-mono">3.5K</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"/> Operations (20%)</div>
                    <span className="text-white font-mono">2.8K</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"/> Executive (12%)</div>
                    <span className="text-white font-mono">1.6K</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e]"/> Design (8%)</div>
                    <span className="text-white font-mono">1.1K</span>
                  </div>
                </div>
              </div>

              {/* Bar Charts for Efficiency */}
              <div className="pt-4 border-t border-white/5">
                <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Projected Efficiency Gains</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Time-to-Hire Reduction</span>
                      <span className="text-emerald-400 font-bold">65%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" style={{ width: useTransform(scrollYProgress, [0, 0.4], ["0%", "65%"]) }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Screening Cost Reduction</span>
                      <span className="text-blue-400 font-bold">80%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" style={{ width: useTransform(scrollYProgress, [0, 0.6], ["0%", "80%"]) }} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Disclaimer */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[10px] text-muted-foreground leading-relaxed text-justify">
                  * <strong className="text-white/70">Illustrative Example:</strong> The market sizing, revenue potential, and efficiency metrics presented above are strictly illustrative scenarios demonstrating the scalable value of AI recruitment systems. They do not represent, claim, or relate to any actual client exposure, historical revenues, or active NDAs.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Flowchart */}
        <div className="w-full lg:w-7/12 relative mt-12 lg:mt-0">
          
          <div className="relative pb-12">
            {/* Vertical Track Background */}
            <div className="absolute left-[39px] top-8 bottom-0 w-[2px] bg-white/10" />
            
            {/* Animated Fill Track */}
            <motion.div 
              className="absolute left-[39px] top-8 w-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] origin-top z-0"
              style={{ height: useTransform(scrollYProgress, [0, 0.75], ["0%", "100%"]) }}
            />

            {/* Flowchart Nodes */}
            <div className="space-y-12 relative z-10">
              {pipelineNodes.map((node, i) => (
                <PipelineNodeItem key={node.id} node={node} i={i} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>

          {/* The Split Branch (Hireflix vs Human) */}
          <motion.div style={{ opacity: splitOpacity }} className="mt-4 flex flex-col md:flex-row gap-8 relative pt-12">
            
            {/* Elegant curved CSS lines for branching (Desktop) */}
            <div className="absolute top-0 left-0 w-full h-12 hidden md:block z-0 pointer-events-none">
              {/* Path to Hireflix (Red) */}
              <div className="absolute left-[39px] top-0 w-[calc(25%-39px)] h-6 border-l-2 border-b-2 border-red-500/40 rounded-bl-xl border-dashed" />
              <div className="absolute left-[calc(25%-1px)] top-6 w-[2px] h-6 border-l-2 border-red-500/40 border-dashed" />
              
              {/* Path to Human (Amber) */}
              <div className="absolute left-[39px] top-0 w-[calc(75%-39px)] h-6 border-l-2 border-b-2 border-amber-500/40 rounded-bl-xl border-dashed" />
              <div className="absolute left-[calc(75%-1px)] top-6 w-[2px] h-6 border-l-2 border-amber-500/40 border-dashed" />
            </div>

            {/* Path A: Hireflix (Failure) */}
            <div className="flex-1 glass-card p-6 rounded-3xl border border-red-500/30 bg-red-950/10 shadow-[0_0_30px_rgba(239,68,68,0.05)] relative z-10 md:mt-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <Video className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Hireflix AI</h4>
                  <span className="text-[10px] text-red-400 font-semibold uppercase tracking-widest">Experiment Failed</span>
                </div>
              </div>
              <p className="text-sm text-red-200/70 leading-relaxed">
                Attempted to fully automate video interviews. Result: high candidate drop-off. Candidates did not take AI screening seriously.
              </p>
            </div>

            {/* Path B: Human (Success) */}
            <div className="flex-1 glass-card p-6 rounded-3xl border border-amber-500/30 bg-amber-950/10 shadow-[0_0_30px_rgba(251,191,36,0.1)] relative z-10 md:mt-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Human Interview</h4>
                  <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-widest">Production Path</span>
                </div>
              </div>
              <p className="text-sm text-amber-200/70 leading-relaxed">
                Final interviews remain strictly human. The AI system provides data, but humans secure the relationship and close the hire.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

function PipelineNodeItem({ node, i, scrollYProgress }: { node: { id: number, title: string, desc: string, icon: React.ElementType, type: string }, i: number, scrollYProgress: import("framer-motion").MotionValue<number> }) {
  const Icon = node.icon;
  const isAI = node.type === "ai";
  
  // Map opacity to scroll so nodes fade in as the line hits them
  const nodeStart = i * 0.1;
  const opacity = useTransform(scrollYProgress, [nodeStart, nodeStart + 0.05], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [nodeStart, nodeStart + 0.05], [0.95, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="flex gap-6 items-start">
      <div className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center border ${isAI ? 'bg-cyan-950/40 border-cyan-500/40 shadow-[0_0_30px_rgba(0,255,255,0.15)]' : 'bg-amber-950/40 border-amber-500/40 shadow-[0_0_30px_rgba(251,191,36,0.15)]'} backdrop-blur-md bg-[#0D1220]`}>
        <Icon className={`w-8 h-8 ${isAI ? 'text-cyan-400' : 'text-amber-400'}`} />
      </div>
      
      <div className="pt-2 flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-white">{node.title}</h3>
          <div className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${isAI ? 'text-cyan-400 border-cyan-500/20 bg-cyan-950/50' : 'text-amber-400 border-amber-500/20 bg-amber-950/50'}`}>
            {isAI ? 'Automation' : 'Human'}
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{node.desc}</p>
      </div>
    </motion.div>
  );
}
