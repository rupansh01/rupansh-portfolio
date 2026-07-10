"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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
            <span className="font-semibold text-xl tracking-tight hidden sm:block">
              Rupansh.sys
            </span>
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
          <a href="mailto:rrupanshkumar@gmail.com">
            <Button variant="premium" className="rounded-full px-6">
              Let&apos;s Work Together
              </Button>
            </a>
          </div>
        )}
      </div>
    </motion.header>
  );
}
