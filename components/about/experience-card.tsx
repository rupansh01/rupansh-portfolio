"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, Cpu, GitFork, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react';

const nexusExperience = {
  role: "AI Automation Engineer & Systems Architect",
  company: "Nexus Value Partners OÜ (PassBeyond / Greece Golden Visa)",
  period: "Jan 2026 – May 2026",
  description: "Designed, deployed, and maintained production AI automation systems spanning recruitment, CRM, lead generation, data processing, and internal business operations.",
  categories: [
    {
      id: "architecture",
      label: "Architecture & AI Systems",
      icon: Cpu,
      points: [
        "Architected an AI-powered recruitment platform capable of processing over 2,000 CVs per week across candidate pools exceeding 10,000 applications.",
        "Developed LLM-driven candidate evaluation pipelines integrating Hireflix interviews, structured scoring models, and automated decision-support workflows.",
        "Engineered intelligent resume parsing pipelines that automatically generated approximately 30 structured evaluation attributes including competency scoring, credibility assessment, strengths, risk indicators, and hiring recommendations.",
        "Built an AI-powered analytics platform that processed and analyzed more than 10,000 student and market records, enabling data-driven business expansion and market research."
      ]
    },
    {
      id: "automation",
      label: "Workflow Automation & CRM",
      icon: GitFork,
      points: [
        "Automated candidate ranking, evaluation, and reporting workflows, reducing an estimated 30–65+ hours of manual review effort per week while supporting the onboarding of 40+ Relationship Managers.",
        "Integrated Zoho CRM with external APIs, business systems, and automated synchronization workflows to improve lead lifecycle management and operational efficiency.",
        "Developed AI-powered business assistant workflows using n8n, Supabase, vector embeddings, semantic retrieval, and LLM agents for context-aware task automation.",
        "Built WhatsApp Business API automation pipelines supporting lead engagement, follow-ups, and real-time customer communication.",
        "Developed automated property intelligence pipelines for collecting, enriching, validating, and structuring real-estate market data used in lead generation."
      ]
    },
    {
      id: "infrastructure",
      label: "Infrastructure & QA",
      icon: ShieldCheck,
      points: [
        "Established production monitoring, logging, structured error handling, debugging, and QA processes across automation systems, improving deployment reliability and operational stability.",
        "Collaborated with engineering and business teams on automation architecture, API integrations, workflow design, and technical documentation to ensure maintainable production systems."
      ]
    },
    {
      id: "impact",
      label: "Selected Business Impact",
      icon: Activity,
      points: [
        "Delivered production AI automation systems that continue supporting business operations beyond the completion of the engagement.",
        "Automated high-volume recruitment workflows, accelerating candidate evaluation while improving consistency across hiring decisions.",
        "Reduced repetitive operational workload by replacing manual business processes with scalable AI-assisted automation pipelines.",
        "Improved CRM synchronization, reporting, and operational visibility through reliable API-driven workflow orchestration.",
        "Enabled scalable processing of high-volume datasets through production-ready AI workflows, centralized reporting, and intelligent decision-support systems."
      ]
    }
  ]
};

export function ExperienceCard() {
  const [activeTab, setActiveTab] = useState(nexusExperience.categories[0].id);

  return (
    <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative group bg-[#0A101D]">
      {/* Header */}
      <div className="p-8 md:p-10 border-b border-white/5 bg-gradient-to-br from-cyan-950/20 to-transparent relative overflow-hidden">

        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 p-3 flex items-center justify-center overflow-hidden shrink-0">
                <img src="/nexus_logo.png" alt="Nexus VP Logo" className="w-full h-full object-contain invert mix-blend-screen" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{nexusExperience.role}</h3>
                <div className="text-lg text-emerald-400 font-medium mt-1">
                  {nexusExperience.company}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-cyan-400 font-medium bg-cyan-950/50 px-4 py-2 rounded-full border border-cyan-500/20 shadow-inner w-max shrink-0">
              <Calendar className="w-4 h-4" />
              {nexusExperience.period}
            </div>
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
            {nexusExperience.description}
          </p>
        </div>
      </div>

      {/* Body: Tabs & Content */}
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Tabs Sidebar */}
        <div className="lg:w-72 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01] p-6 space-y-2 shrink-0 flex lg:flex-col overflow-x-auto no-scrollbar">
          {nexusExperience.categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 w-full text-left shrink-0 lg:shrink whitespace-nowrap lg:whitespace-normal ${
                  isActive 
                    ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.05)]" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-white border border-transparent"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : "text-muted-foreground"}`} />
                <span className="font-medium text-sm">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-6 md:p-10 relative overflow-hidden bg-gradient-to-br from-transparent to-black/40">
          <AnimatePresence mode="wait">
            {nexusExperience.categories.map((cat) => {
              if (cat.id !== activeTab) return null;
              
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <cat.icon className="w-6 h-6 text-cyan-400" />
                    {cat.label}
                  </h4>
                  
                  <ul className="space-y-4">
                    {cat.points.map((point, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0 opacity-80 group-hover/item:opacity-100 transition-opacity" />
                        <span className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover/item:text-gray-300 transition-colors">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
