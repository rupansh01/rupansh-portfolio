import React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center overflow-hidden">
                <img src="/profile.png" alt="Rupansh" className="w-full h-full object-cover" />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm text-center md:text-left">
              Building production-grade AI automation systems that scale operations and reduce costs.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://instagram.com/rupanshhhbeast007" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/rupanshkumar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:rrupanshkumar@gmail.com" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5" />
            </a>
            <a href="/Rupansh_AI_Automation_Engineer.pdf" download target="_blank" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              <span className="sr-only">Resume</span>
              <span className="font-medium text-sm border-b border-muted-foreground hover:border-cyan-400">CV</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-muted-foreground gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Available Worldwide</span>
          </div>
          <p>
            © {new Date().getFullYear()} Rupansh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
