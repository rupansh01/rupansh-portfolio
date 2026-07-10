"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  Database, 
  Wrench, 
  Webhook, 
  Send, 
  GitFork,
  Cpu
} from "lucide-react";

const nodes = [
  { id: "trigger", title: "TRIGGER", subtitle: "Webhook / API", icon: Webhook, x: 20, y: 25 },
  { id: "llm", title: "LLM ENGINE", subtitle: "OpenAI / GPT-4", icon: Cpu, x: 50, y: 15 },
  { id: "memory", title: "MEMORY", subtitle: "Vector Store", icon: Database, x: 80, y: 25 },
  { id: "tools", title: "TOOLS", subtitle: "API Calls / Functions", icon: Wrench, x: 85, y: 55 },
  { id: "output", title: "OUTPUT", subtitle: "Notify / CRM", icon: Send, x: 80, y: 85 },
  { id: "db", title: "DATABASE", subtitle: "Supabase / PostgreSQL", icon: Database, x: 50, y: 92 },
  { id: "workflow", title: "WORKFLOW", subtitle: "n8n Automation", icon: GitFork, x: 20, y: 85 },
];

export function WorkflowVisualization() {
  return (
    <div className="w-full h-full bg-[#050814] flex items-center justify-center relative font-sans overflow-hidden border-none">
      
      {/* Subtle Linear Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Radial vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050814_100%)] pointer-events-none" />

      {/* Connecting SVG Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {nodes.map((node) => (
          <g key={`line-${node.id}`}>
            {/* Base geometric line */}
            <line 
              x1={`${node.x}%`} y1={`${node.y}%`} 
              x2="50%" y2="50%" 
              stroke="#00FFFF" 
              strokeWidth="1.5"
              strokeOpacity="0.2"
            />
            {/* Animated data particle traveling to center */}
            <motion.circle
              r="2.5"
              fill="#00FFFF"
              style={{ filter: "drop-shadow(0 0 4px #00FFFF)" }}
              initial={{ cx: `${node.x}%`, cy: `${node.y}%`, opacity: 0 }}
              animate={{ 
                cx: ["50%", `${node.x}%`], 
                cy: ["50%", `${node.y}%`],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            />
          </g>
        ))}
        {/* Subtle geometric circles around center */}
        <circle cx="50%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="50%" cy="50%" r="240" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
      </svg>

      {/* Peripheral Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="absolute z-10 hidden sm:flex flex-col items-center justify-center"
          style={{ 
            left: `${node.x}%`, 
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="bg-[#0A101D] border border-white/5 rounded-[2rem] px-4 py-2.5 flex items-center gap-3 shadow-lg hover:border-[#00FFFF]/30 hover:bg-[#0F172A] transition-all">
            <node.icon className="w-4 h-4 text-[#00FFFF]" strokeWidth={2} />
            <div className="flex flex-col min-w-max">
              <span className="text-white font-bold text-[10px] tracking-wide">{node.title}</span>
              <span className="text-[#00FFFF] text-[9px] font-medium">{node.subtitle}</span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Central AI AGENT Core */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="bg-[#0A1220] border border-white/5 rounded-3xl w-40 h-40 sm:w-48 sm:h-48 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <BrainCircuit className="w-12 h-12 text-[#00FFFF] mb-4" strokeWidth={1.5} />
          <span className="text-white font-bold text-xl tracking-widest">AI AGENT</span>
        </div>
      </motion.div>
      
    </div>
  );
}
