"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Expertise", href: "#expertise" },
  { name: "Impact", href: "#impact" },
  { name: "Projects", href: "#projects" },
  { name: "Workflow", href: "/#workflow" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {isAboutPage ? (
          <Link 
            href="/"
            className="inline-flex items-center text-lg font-medium text-muted-foreground hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-3 transition-transform group-hover:-translate-x-1" />
            Back to Home page
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.3)] overflow-hidden">
              <img src="/profile.png" alt="Rupansh" className="w-full h-full object-cover" />
            </div>
          </Link>
        )}

        {!isAboutPage && (
          <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
          </nav>
        )}

        {!isAboutPage && (
          <div className="flex items-center gap-4">
            <a href="mailto:rrupanshkumar@gmail.com">
              <Button variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-white">
                Contact
              </Button>
            </a>
            <a href="mailto:rrupanshkumar@gmail.com" className="hidden sm:block">
              <Button variant="premium" className="rounded-full px-6">
                Let&apos;s Work Together
              </Button>
            </a>
            
            <button 
              className="lg:hidden text-muted-foreground hover:text-white ml-2 p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {!isAboutPage && mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-6"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <a href="mailto:rrupanshkumar@gmail.com" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="premium" className="w-full rounded-full px-6">
              Let&apos;s Work Together
            </Button>
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
