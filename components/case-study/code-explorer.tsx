"use client";

import React, { useState } from "react";
import { Project } from "@/types/project";
import { Copy, Check, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function CodeExplorer({ project }: { project: Project }) {
  const [copied, setCopied] = useState(false);

  if (project.locked || !project.codeSnippets || project.codeSnippets.length === 0) return null;

  const snippet = project.codeSnippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-[#03050A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1117]">
            {/* Mac Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs font-mono text-muted-foreground">{snippet.filename}</span>
              </div>
              <button 
                onClick={handleCopy}
                className="text-muted-foreground hover:text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {/* Code Body */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm font-mono leading-relaxed text-[#c9d1d9]">
                <code>
                  {snippet.code.split('\n').map((line, i) => (
                    <div key={i} className="table-row">
                      <span className="table-cell pr-6 text-[#8b949e] select-none text-right">{i + 1}</span>
                      <span className="table-cell">{line}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
