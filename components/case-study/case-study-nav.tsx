"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const tabs = [
  { id: "problem", label: "Problem & Role" },
  { id: "architecture", label: "Architecture" },
  { id: "implementation", label: "Implementation" },
  { id: "impact", label: "Business Impact" }
];

export function CaseStudyNav({ locked }: { locked: boolean }) {
  const [activeTab, setActiveTab] = useState("problem");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const availableTabs = locked 
    ? tabs.filter(t => t.id !== "implementation" && t.id !== "architecture") 
    : tabs;

  useEffect(() => {
    const handleScroll = () => {
      let current = availableTabs[0].id;
      for (const tab of availableTabs) {
        const element = document.getElementById(tab.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80) {
            current = tab.id;
          }
        }
      }
      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [availableTabs]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-xl border-b border-white/10">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center overflow-x-auto no-scrollbar gap-2 py-4">
          {availableTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id ? "text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              {activeTab === tab.id && (
                <div
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
