"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  GitMerge, 
  Workflow, 
  BrainCircuit, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

const capabilities = [
  {
    title: "Production AI Recruitment Pipeline",
    description: "End-to-end processing of candidates from sourcing to automated structured evaluation.",
    icon: Bot,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Human-in-the-Loop Decision Support",
    description: "Systems that prepare insights and data to empower human decision makers, not replace them.",
    icon: BrainCircuit,
    color: "from-purple-400 to-fuchsia-500"
  },
  {
    title: "Production Workflow Automation",
    description: "Enterprise-grade orchestrations combining n8n, custom Python scripts, and REST APIs.",
    icon: Workflow,
    color: "from-emerald-400 to-green-500"
  },
  {
    title: "LLM Assisted Candidate Evaluation",
    description: "Extracting complex, structured 30+ field data points from unstructured resumes.",
    icon: GitMerge,
    color: "from-orange-400 to-red-500"
  },
  {
    title: "API Driven Automation",
    description: "Seamless integration across ATS, CRM, Slack, and custom internal toolings.",
    icon: Zap,
    color: "from-yellow-400 to-amber-500"
  },
  {
    title: "Workflow Reliability",
    description: "Built with error handling, retries, and comprehensive monitoring for maximum professionalism.",
    icon: ShieldCheck,
    color: "from-blue-400 to-indigo-500"
  }
];

export function HeroValuePanel() {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            How My AI Systems Work
          </h2>
          <p className="text-lg text-muted-foreground">
            I don&apos;t just build scripts. I engineer resilient, production-ready AI automation systems that solve complex business operations at scale.
          </p>
        </div>

        <div className="flex flex-col gap-16 items-center">
          
          {/* Top Section: The Architecture Diagram */}
          <div className="w-full max-w-5xl mx-auto mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-2xl"
            >
              <img 
                src="/right-side.png" 
                alt="Architecture Diagram" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Bottom Section: 6 Capabilities in 2 rows (grid-cols-3) */}
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-2xl group/card hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${cap.color} bg-opacity-10 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover/card:text-cyan-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
