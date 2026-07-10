"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "AI Recruitment Automation Platform",
    status: "Production",
    description: "End-to-end AI recruitment pipeline for CV ingestion, LLM evaluation, candidate scoring, structured Google Sheets output and recruiter decision support.",
    locked: false,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2850&auto=format&fit=crop"
  },
  {
    title: "Enterprise CRM Automation",
    status: "Confidential",
    description: "Protected under NDA. High-level architecture involves multi-stage data synchronization, LLM-based entity extraction, and automated workflow triggers.",
    locked: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2850&auto=format&fit=crop"
  },
  {
    title: "Enterprise Property Intelligence",
    status: "Confidential",
    description: "Protected under NDA. System architecture designed to ingest real estate unstructured data and convert it into structured intelligence using vector databases.",
    locked: true,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2850&auto=format&fit=crop"
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Production systems built to scale. Some projects are under strict NDAs and showcase high-level architecture only.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="rounded-full w-fit bg-transparent border-white/20 hover:bg-white/5 hover:text-white">
              View All Projects
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-background/60 z-10 group-hover:bg-background/40 transition-colors duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                    project.locked 
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {project.locked ? <Lock className="w-3 h-3" /> : <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link href={`/projects/${project.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`} className="w-full">
                    <Button 
                      variant={project.locked ? "ghost" : "premiumOutline"} 
                      className={`rounded-full ${project.locked ? 'text-muted-foreground hover:text-white pointer-events-none' : 'w-full gap-2'}`}
                    >
                      {project.locked ? 'Architecture Available' : 'View Case Study'}
                      {!project.locked && <ArrowRight className="w-4 h-4" />}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
