"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  "n8n", "Python", "OpenAI", "Claude", "Supabase", "PostgreSQL", 
  "JavaScript", "Docker", "FastAPI", "REST APIs", "Google Sheets", 
  "Zoho CRM", "GitHub", "Slack", "Twilio", "Airtable", "Vector DB"
];

// Duplicate for infinite scroll effect
const scrollItems = [...technologies, ...technologies, ...technologies];

export function TechStrip() {
  return (
    <div className="w-full overflow-hidden bg-white/5 border-y border-white/10 py-6 relative flex items-center backdrop-blur-sm">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
        className="flex whitespace-nowrap items-center gap-16 w-fit"
      >
        {scrollItems.map((tech, i) => (
          <div key={i} className="flex items-center gap-3 group">
            <span className="text-lg font-bold text-muted-foreground group-hover:text-white transition-colors duration-300">
              {tech}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
