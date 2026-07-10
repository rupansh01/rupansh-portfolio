"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "2,000+", label: "CVs Processed Weekly", glow: "glow-cyan" },
  { value: "10,000+", label: "Records Analyzed", glow: "glow-emerald" },
  { value: "30+", label: "Structured Evaluation Fields", glow: "glow-purple" },
  { value: "30-65+", label: "Hours Saved Weekly", glow: "glow-cyan" },
  { value: "Human-in-the-Loop", label: "Decision Support", glow: "glow-emerald", isText: true },
  { value: "Production", label: "Workflow Automation", glow: "glow-purple", isText: true }
];

export function MetricCards() {
  return (
    <section id="impact" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }: { metric: { value: string, label: string, glow: string, isText?: boolean }, index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass-card p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:-translate-y-2 hover:${metric.glow}`}
    >
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + (index * 0.1), type: "spring" }}
        className={`font-bold mb-2 ${metric.isText ? 'text-3xl lg:text-4xl' : 'text-5xl lg:text-6xl'} text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 drop-shadow-sm`}
      >
        {metric.value}
      </motion.div>
      <p className="text-muted-foreground font-medium text-lg uppercase tracking-wider">
        {metric.label}
      </p>
    </motion.div>
  );
}
