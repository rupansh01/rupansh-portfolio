"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Activity, Zap, FileText, User, GitMerge } from "lucide-react";
import Link from "next/link";

const navItems = [
  { id: "home", icon: Home, label: "Home", path: "/#home" },
  { id: "expertise", icon: Zap, label: "Expertise", path: "/#expertise" },
  { id: "impact", icon: Activity, label: "Impact", path: "/#impact" },
  { id: "projects", icon: Briefcase, label: "Projects", path: "/#projects" },
  { id: "workflow", icon: GitMerge, label: "Workflow", path: "/#workflow" },
  { id: "about", icon: User, label: "About", path: "/about" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the top half of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4"
    >
      <div className="glass-card rounded-full py-4 px-2 flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.id} 
              href={item.path || `#${item.id}`}
              className="relative group flex items-center justify-center w-10 h-10 rounded-full"
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-cyan-500/20 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon 
                className={`w-5 h-5 transition-colors relative z-10 ${
                  isActive ? "text-cyan-400" : "text-muted-foreground group-hover:text-white"
                }`} 
              />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1.5 rounded-md bg-popover border border-white/10 text-xs font-medium text-white opacity-0 -translate-x-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0">
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
