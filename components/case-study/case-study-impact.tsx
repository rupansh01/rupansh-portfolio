"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { CheckCircle2, User, Building2 } from "lucide-react";

export function CaseStudyImpact({ project }: { project: Project }) {
  return (
    <section id="problem" className="py-20 bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Problem & Role */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <Building2 className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold">Business Problem</h2>
              </div>
              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                <p>{project.businessProblem}</p>
                {project.challenges && (
                  <>
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">Key Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <User className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold">My Role</h2>
              </div>
              <ul className="space-y-4">
                {project.myRole.map((role, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 text-lg text-muted-foreground"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: role.replace(/(human|Human)/g, '<span class="text-amber-400 font-semibold">$1</span>') }} />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact Cards */}
          <div id="impact">
            <div className="sticky top-32">
              <h2 className="text-2xl font-bold mb-8">Measurable Impact</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.impact.map((impact, i) => {
                  const isConfidential = impact.value === "Confidential";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="glass-card p-6 rounded-2xl flex flex-col justify-center border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.05)] transition-all group"
                    >
                      <div className={`text-3xl font-bold mb-2 tracking-tight ${isConfidential ? 'text-muted-foreground/50 blur-sm select-none' : 'text-white group-hover:text-cyan-400 transition-colors'}`}>
                        {impact.value}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {impact.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
