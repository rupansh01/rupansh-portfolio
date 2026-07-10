"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { allProjects } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Lock, Search, ArrowRight, ArrowLeft, Calendar, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const allCategories = Array.from(new Set(allProjects.flatMap(p => p.categories)));

export default function ProjectsIndex() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.overview.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || project.categories.includes(activeCategory as any);
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      
      <div className="flex-1 w-full pt-16 pb-24 container mx-auto px-6 md:px-12">
        
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home page
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Engineering <span className="text-gradient">Case Studies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            I don't just automate workflows. I design production systems that solve measurable business problems.
          </motion.p>
        </div>

        {/* Filters & Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-end"
        >
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search case studies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-muted-foreground"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] relative">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-emerald-500/5 transition-all duration-700 z-0" />

                    <div className="relative h-56 overflow-hidden z-10">
                      <div className="absolute inset-0 bg-background/40 z-10 group-hover:bg-background/20 transition-colors duration-500" />
                      <img 
                        src={project.heroImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      <div className="absolute top-4 left-4 z-20">
                        <Badge variant={project.locked ? "destructive" : "emerald"} className="backdrop-blur-md px-3 py-1 gap-1.5 shadow-xl">
                          {project.locked ? <Lock className="w-3 h-3" /> : <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1 z-10 bg-[#0D1220]">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed flex-1 text-sm line-clamp-3 mb-4">
                        {project.overview}
                      </p>

                      {/* Tech Badges & Details */}
                      <div className="flex flex-col gap-3 mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.slice(0, 4).map(tech => (
                            <span key={tech} className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded-md border border-cyan-500/20">
                              {tech}
                            </span>
                          ))}
                          {project.technologies && project.technologies.length > 4 && (
                            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-white/5 px-2 py-1 rounded-md border border-white/10">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                          {project.implementationDuration && (
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-emerald-400" /> {project.implementationDuration}</span>
                          )}
                          {project.complexity && (
                            <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-amber-400" /> {project.complexity}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                        <span className="text-sm font-medium text-white flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                          {project.locked ? 'View Technical Breakdown' : 'Read Case Study'}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            No case studies found matching your criteria.
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
