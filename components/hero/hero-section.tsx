"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-6 max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-cyan-400 mb-2"
          >
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse self-center"></span>
              Available for New Opportunities
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Building Production AI Systems <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              That Companies Actually Use
            </span>
          </h1>
          
          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl text-white font-medium">
              AI Agents • Workflow Automation • n8n • Python • APIs • LLM Systems
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto">
              I design and engineer intelligent automation systems that eliminate tedious manual work, accelerate business operations, and run reliably in real-world production environments.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link href="/projects">
              <Button size="lg" variant="premium" className="rounded-full gap-2 group">
                Explore Production Systems
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="/Rupansh_AI_Automation_Engineer.pdf" target="_blank">
              <Button size="lg" variant="premiumOutline" className="rounded-full gap-2 group bg-card hover:bg-white/5 text-white border-white/10">
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                View Resume
                </Button>
              </a>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
