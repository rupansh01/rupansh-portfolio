"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/types/project";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

export function ScreenshotGallery({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (project.locked || !project.gallery || project.gallery.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.gallery!.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + project.gallery!.length) % project.gallery!.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % project.gallery!.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + project.gallery!.length) % project.gallery!.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, project.gallery]);

  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Implementation Gallery</h2>
          <p className="text-muted-foreground text-lg">Screenshots, logs, and workflow executions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {project.gallery.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => openLightbox(i)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden glass-card border-white/10 aspect-video"
            >
              <img 
                src={item.url} 
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">{item.category}</span>
                <p className="text-white font-medium mt-1">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white z-50 transition-colors">
              <X className="w-8 h-8" />
            </button>

            {project.gallery.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50 p-4 rounded-full hover:bg-white/10 transition-colors">
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-50 p-4 rounded-full hover:bg-white/10 transition-colors">
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <div className="relative w-full max-w-7xl px-12 md:px-24 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={project.gallery[currentIndex].url}
                alt={project.gallery[currentIndex].caption}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">{project.gallery[currentIndex].category}</span>
                <p className="text-white text-lg font-medium mt-2">{project.gallery[currentIndex].caption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
