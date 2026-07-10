"use client";

import React from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { BrainCircuit, Workflow, Database, Briefcase, Zap, CheckCircle2, ChevronRight, Activity } from "lucide-react";
import Link from "next/link";
import { ExperienceCard } from "@/components/about/experience-card";

const skills = [
  {
    category: "AI & LLM Systems",
    icon: BrainCircuit,
    items: ["OpenAI API", "Claude API", "LLM Pipelines", "AI Agents", "Prompt Engineering", "Structured Outputs", "Vector Embeddings", "Semantic Search"]
  },
  {
    category: "Automation & Integration",
    icon: Workflow,
    items: ["n8n (Production)", "Workflow Orchestration", "REST APIs", "Webhooks", "Event-Driven Automation", "CRM Automation", "WhatsApp Business API"]
  },
  {
    category: "Backend & Data",
    icon: Database,
    items: ["Python", "JavaScript", "FastAPI", "Supabase", "PostgreSQL", "JSON Processing", "Data Pipelines", "Airtable"]
  }
];

const timeline = [
  {
    role: "AI Automation Engineer & Systems Architect",
    company: "Nexus Value Partners OÜ (PassBeyond / Greece Golden Visa)",
    period: "Jan 2026 – May 2026",
    description: "Designed, deployed, and maintained production AI automation systems spanning recruitment, CRM, lead generation, data processing, and internal business operations.",
    impact: [
      "Architected an AI-powered recruitment platform processing 2,000+ CVs per week across 10,000+ applications.",
      "Engineered intelligent resume parsing pipelines generating 30+ structured evaluation attributes using LLMs.",
      "Automated candidate ranking, evaluation, and reporting, reducing 30–65+ hours of manual review per week.",
      "Built an AI-powered analytics platform analyzing 10,000+ student and market records for data-driven expansion.",
      "Integrated Zoho CRM with external APIs and built WhatsApp Business API automation pipelines for lead engagement."
    ]
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Indian Institute of Information Technology, Lucknow",
    logo: "/Logo_IIITL.png",
    period: "Sept 2024 – Present",
    description: "Conducted laboratory sessions and assisted 200+ students in Object-Oriented Programming and System Design.",
    impact: [
      "Supported students during debugging sessions, practical evaluations, and technical problem-solving.",
      "Assisted faculty in academic evaluation and coordination of departmental activities."
    ]
  }
];

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background selection:bg-cyan-500/30">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-24 container mx-auto px-6 md:px-12">

        {/* Hero Section */}
        <div className="max-w-4xl mb-20 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm text-xs font-medium text-cyan-400 mb-6"
          >
            <Activity className="w-3 h-3 mr-2 animate-pulse" />
            Background & Expertise
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white"
          >
            My Background & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Experience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            I am an AI Automation Engineer and Systems Architect with experience designing production AI systems combining LLMs, Python, APIs and workflow orchestration to automate recruitment, CRM, business operations and intelligent decision making.
          </motion.p>
        </div>

        {/* Quantifiable Impact Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {[
            { value: "2,000+", label: "CVs Processed/Week" },
            { value: "10,000+", label: "Market Records Analyzed" },
            { value: "65+", label: "Hours Saved Weekly" },
            { value: "30+", label: "LLM Data Attributes" }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border-white/5 border text-center hover:border-cyan-500/30 transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.05)]">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">

          {/* Left Column: Experience */}
          <div className="lg:col-span-8 space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
              </div>

              <div className="space-y-12">
                <ExperienceCard />

                {/* Previous Roles (Timeline) */}
                <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent mt-16 pt-8">
                  {timeline.slice(1).map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0D1220] group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-300">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform"></div>
                      </div>

                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl border border-white/5 group-hover:border-cyan-500/20 transition-all">
                        <div className="flex flex-col gap-2 mb-4">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <div className="flex items-center gap-3">
                            {item.logo && (
                              <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                                <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                              </div>
                            )}
                            <div className="text-cyan-400 font-medium">{item.company}</div>
                          </div>
                          <div className="text-sm text-muted-foreground">{item.period}</div>
                        </div>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <ul className="space-y-3">
                          {item.impact.map((point, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Education & Distinction</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-2xl border border-white/5">
                    <div className="text-sm text-purple-400 font-medium mb-1">M.Tech AI & ML</div>
                    <h3 className="font-bold text-white mb-2">IIIT Lucknow</h3>
                    <div className="text-sm text-muted-foreground">July 2024 – July 2026</div>
                  </div>
                  <div className="glass-card p-6 rounded-2xl border border-white/5">
                    <div className="text-sm text-cyan-400 font-medium mb-1">B.Tech Computer Science (CGPA: 8.33)</div>
                    <h3 className="font-bold text-white mb-2">Graphic Era Deemed To Be University</h3>
                    <div className="text-sm text-muted-foreground">July 2020 – July 2024</div>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
                  <div className="text-sm text-emerald-400 font-medium mb-1">GATE CSE 2024</div>
                  <h3 className="font-bold text-white mb-2">Score: 505 | Rank: 5303</h3>
                  <div className="text-sm text-muted-foreground">All India Distinction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Projects */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">Technical Arsenal</h2>

            <div className="space-y-6">
              {skills.map((skillGroup, i) => {
                const Icon = skillGroup.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-white/5"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-5 h-5 text-cyan-400" />
                      <h3 className="font-bold text-white">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, j) => (
                        <span key={j} className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
