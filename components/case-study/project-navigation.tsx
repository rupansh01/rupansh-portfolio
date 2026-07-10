"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ProjectNavigation() {
  return (
    <section className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/projects" className="group flex flex-col">
          <span className="text-sm text-muted-foreground mb-1 group-hover:text-cyan-400 transition-colors">Previous Project</span>
          <span className="text-lg font-bold text-white flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            View All
          </span>
        </Link>
        
        <Link href="/projects/enterprise-property-intelligence" className="group flex flex-col text-right">
          <span className="text-sm text-muted-foreground mb-1 group-hover:text-emerald-400 transition-colors">Next Project</span>
          <span className="text-lg font-bold text-white flex items-center gap-2 justify-end">
            Property Intelligence
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
}
