"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const agents = [
  { label: "AI Recruiter", delay: 0 },
  { label: "Resume Parser", delay: 1 },
  { label: "Email Agent", delay: 2 },
  { label: "WhatsApp Agent", delay: 3 },
  { label: "Scheduling Agent", delay: 4 },
  { label: "CRM Agent", delay: 5 },
  { label: "Lead Research", delay: 6 },
  { label: "Decision Agent", delay: 7 },
];

export function AiAgentFeatureCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Slow continuous rotation for the nodes
  useAnimationFrame((time) => {
    setRotation(time / 200); // adjust speed
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full max-w-[420px] mx-auto aspect-square rounded-[2rem] overflow-hidden group transition-transform duration-500 hover:-translate-y-2 cursor-crosshair"
      style={{
        boxShadow: isHovered 
          ? "0 30px 60px -10px rgba(0, 229, 255, 0.2), inset 0 0 0 1px rgba(0, 229, 255, 0.5)" 
          : "0 20px 40px -10px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-[#050816] z-0" />
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-700"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 184, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          opacity: isHovered ? 1 : 0.5
        }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Mouse Parallax Light Sweep */}
      {isHovered && (
        <div 
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 420 + 210}px ${mousePosition.y * 420 + 210}px, rgba(0, 229, 255, 0.1), transparent 40%)`,
          }}
        />
      )}

      {/* Animated Light Sweep (Linear style) */}
      <motion.div 
        animate={{ 
          x: ["-100%", "200%"],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        className="absolute top-0 bottom-0 w-[20%] bg-gradient-to-r from-transparent via-[#00FFFF]/20 to-transparent skew-x-[-20deg] z-10 pointer-events-none"
      />

      {/* Inner Content Container (Parallaxed) */}
      <motion.div 
        className="absolute inset-0 z-20 flex flex-col items-center justify-between p-8"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 15 }}
      >
        {/* Top Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-[#00FFFF]/30 bg-[#00FFFF]/10 mb-3 backdrop-blur-md">
            <span className="text-[#00FFFF] text-[10px] font-bold tracking-[0.2em]">AI AGENT ENGINEERING</span>
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <h2 className="text-5xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              15<span className="text-[#00FFFF]">+</span>
            </h2>
            <span className="text-sm font-semibold text-[#A5F3FC] tracking-wide">Production Agents</span>
          </div>
        </div>

        {/* Center Visual (Orbital Network) */}
        <div className="relative w-full flex-1 my-4 flex items-center justify-center">
          
          {/* Orbital Paths (SVG lines) */}
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(0, 229, 255, 0.5)" />
                <stop offset="100%" stopColor="rgba(0, 229, 255, 0)" />
              </radialGradient>
              <linearGradient id="neonLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 229, 255, 0)" />
                <stop offset="50%" stopColor="rgba(0, 229, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(0, 229, 255, 0)" />
              </linearGradient>
            </defs>

            {/* Glowing connecting lines */}
            {agents.map((_, i) => {
              const angle = (i * (360 / agents.length)) * (Math.PI / 180);
              const r = 90; // radius of orbit
              const x = 210 - 32 + Math.cos(angle + rotation * (Math.PI / 180)) * r; // assuming 420x420 container, center is roughly 210, minus padding
              const y = 140 - 32 + Math.sin(angle + rotation * (Math.PI / 180)) * r; 
              // Note: exact SVG line tracing to DOM elements is tricky without fixed sizes. 
              // We will just draw a stationary dashed orbit ring to look techy instead of tracking moving nodes precisely, 
              // or use framer-motion inside SVG to rotate the lines too.
              return null; 
            })}

            {/* Concentric rings */}
            <motion.circle 
              cx="50%" cy="50%" r="70" 
              fill="none" stroke="url(#neonLine)" strokeWidth="1" strokeDasharray="4 8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="origin-center"
            />
            <motion.circle 
              cx="50%" cy="50%" r="95" 
              fill="none" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1"
            />
          </svg>

          {/* Orbiting Nodes */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {agents.map((agent, i) => {
              const angle = i * (360 / agents.length);
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    rotate: rotation + angle, // Rotate the container
                  }}
                >
                  <motion.div
                    className="w-20 -mt-[190px] flex justify-center"
                    style={{
                      rotate: -(rotation + angle), // Counter-rotate the text so it stays upright
                    }}
                  >
                    <div className="bg-[#050816]/90 border border-[#00FFFF]/30 backdrop-blur-md px-2 py-1 rounded shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                      <span className="text-[8px] font-bold text-[#A5F3FC] tracking-wider whitespace-nowrap">{agent.label}</span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Central AI Core */}
          <div className="relative flex items-center justify-center">
            {/* Pulsing ring */}
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#00FFFF]/20"
            />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00E5FF]/20 to-[#00B8FF]/10 border border-[#00FFFF]/50 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.4)] relative overflow-hidden z-10 group-hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] transition-shadow duration-500">
              <BrainCircuit className="w-8 h-8 text-[#00FFFF]" strokeWidth={1.5} />
            </div>
          </div>

        </div>

        {/* Bottom Details */}
        <div className="w-full mt-2 text-center">
          <p className="text-[11px] leading-relaxed text-[#A5F3FC]/70 font-light mb-4">
            Designed, deployed and maintained autonomous AI workflows integrating LLMs, APIs, CRM platforms and business automation pipelines.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {["Production Ready", "LLM Powered", "Autonomous", "API Integrated"].map((tag, i) => (
              <span key={i} className="text-[9px] font-semibold tracking-wider text-[#00B8FF] uppercase bg-[#00FFFF]/5 border border-[#00FFFF]/10 px-2 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
