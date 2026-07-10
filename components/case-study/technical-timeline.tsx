"use client";

import React from "react";
import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { Terminal, Database, Webhook, Briefcase, Bot, UserCheck, Calendar, CheckCircle2 } from "lucide-react";

export function TechnicalTimeline({ project }: { project: Project }) {
  if (project.locked || !project.timeline) return null;

  return (
    <section id="implementation" className="py-24 border-t border-white/5 bg-[#03050A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Implementation</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Step-by-step breakdown of the automation pipeline and the point of human handover.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line connecting everything */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-white/10 hidden md:block" />

          <div className="space-y-12 relative">
            {project.timeline.map((step, i) => {
              const isAuto = step.zone === "Automation Zone";
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10"
                >
                  <div className="md:w-64 shrink-0 flex items-center md:items-start md:justify-end gap-4 md:pt-3">
                    <div className="hidden md:block text-right">
                      <span className={`text-xs font-bold uppercase tracking-wider ${isAuto ? 'text-cyan-400' : 'text-amber-400'}`}>
                        {step.zone}
                      </span>
                      <div className="text-sm font-medium text-white/50">Step 0{i + 1}</div>
                    </div>
                    {/* Node Circle */}
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 border-[#03050A] shadow-xl shrink-0 ${isAuto ? 'bg-cyan-950 border-cyan-500/30' : 'bg-amber-950 border-amber-500/30'}`}>
                      {isAuto ? <Bot className="w-5 h-5 text-cyan-400" /> : <UserCheck className="w-5 h-5 text-amber-400" />}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 glass-card p-6 rounded-2xl border ${isAuto ? 'border-cyan-500/10 hover:border-cyan-500/30' : 'border-amber-500/10 hover:border-amber-500/30'} transition-colors`}>
                    <h3 className="text-xl font-bold text-white mb-2">{step.label}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
