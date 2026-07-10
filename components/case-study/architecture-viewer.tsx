"use client";

import React, { useState } from "react";
import { Project } from "@/types/project";
import { motion, AnimatePresence } from "framer-motion";
import { Workflow, Database, Layers, GitMerge } from "lucide-react";

export function ArchitectureViewer({ project }: { project: Project }) {
  const [activeView, setActiveView] = useState("system");

  const views = [
    { id: "system", label: "System Architecture", icon: Layers },
    { id: "workflow", label: "Workflow Nodes", icon: Workflow },
    { id: "database", label: "Database Schema", icon: Database },
    { id: "sequence", label: "Sequence Diagram", icon: GitMerge }
  ];

  if (project.locked || !project.architectureLayers) return null;

  return (
    <section id="architecture" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">System Architecture</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            High-level overview of the data flow and infrastructural components.
          </p>
        </div>

        <div className="glass-card rounded-2xl border-white/10 overflow-hidden shadow-2xl">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-white/10 bg-background/50">
            {views.map((view) => {
              const Icon = view.icon;
              return (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors relative whitespace-nowrap ${
                    activeView === view.id ? "text-cyan-400" : "text-muted-foreground hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {view.label}
                  {activeView === view.id && (
                    <motion.div
                      layoutId="arch-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Viewer Content */}
          <div className="p-8 md:p-12 bg-[#050812] min-h-[500px] flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl"
              >
                {activeView === "system" && (
                  <div className="flex flex-col items-center gap-4">
                    {project.architectureLayers.map((layer, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className={`px-6 py-3 rounded-xl border bg-background/80 backdrop-blur-md shadow-lg ${layer.color ? layer.color : 'text-white border-white/20'}`}>
                          <div className="flex items-center gap-3">
                            <span className="font-semibold">{layer.label}</span>
                          </div>
                        </div>
                        {i < project.architectureLayers!.length - 1 && (
                          <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-500/50 to-emerald-500/50 my-1 relative">
                            <motion.div 
                              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                              animate={{ top: ["0%", "100%"] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {activeView !== "system" && (
                  <div className="text-center py-20 border-2 border-dashed border-white/10 rounded-2xl bg-white/5">
                    <p className="text-muted-foreground">Interactive React Flow / Mermaid Viewer Placeholder.</p>
                    <p className="text-sm text-cyan-400 mt-2">Ready for dynamic SVG or Canvas injection.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
