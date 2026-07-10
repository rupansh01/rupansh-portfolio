"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Lock, Clock, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0F1C] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background z-10" />
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-full object-cover opacity-20 filter blur-sm scale-105"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-cyan-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6 flex-wrap"
          >
            <Badge variant={project.locked ? "destructive" : "emerald"} className="gap-1.5 px-3 py-1">
              {project.locked ? <Lock className="w-3 h-3" /> : <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
              {project.status}
            </Badge>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5" />
              {project.readingTime}
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
          >
            {project.overview}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
