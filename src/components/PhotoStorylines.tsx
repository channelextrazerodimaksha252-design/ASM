/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { INITIAL_GALLERY } from "../data";
import { GalleryItem } from "../types";
import { Image, ExternalLink, X, Calendar, FolderOpen, ChevronRight, Facebook, Camera } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PhotoStorylines() {
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };
    if (activeItem) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  const categories = ["All", "Sports", "Aesthetics", "Academic", "Exhibitions", "Portraits"];

  const filteredGallery = galleryList.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <section id="photo-storylines" className="py-20 bg-stone-50 text-stone-800 scroll-mt-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 md:px-6"
      >

        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-rose-900 font-extrabold text-xs uppercase tracking-[0.25em] block mb-2">
            The Visual Heritage
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight">
            Sastralian Photo Storylines
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 mt-4 text-xs md:text-sm font-semibold">
            Browse through real-time photographs capturing educational innovations, traditional festivals, and athletic track victories. Click any storyline card to reveal full narratives and obtain verified cloud-drive folders.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-rose-950 text-white shadow-md translate-y-[-2px]"
                  : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sastralians Photography Live Facebook Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#1877F2]/10 via-[#1877F2]/5 to-transparent border border-[#1877F2]/20 p-6 md:p-8 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-full bg-[#1877F2] text-white shrink-0 shadow-lg shadow-[#1877F2]/20">
              <Camera className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#1877F2] text-white px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider">
                  Official Photostream
                </span>
                <span className="text-[10px] text-stone-400 font-extrabold tracking-widest uppercase">
                  Sastralians Photography Hub
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-rose-950 mt-1">
                Explore Real-Time Coverage on Facebook
              </h3>
              <p className="text-stone-600 text-xs mt-1.5 leading-relaxed max-w-2xl font-semibold">
                Looking for specific event coverages, admissions photos, student portfolios, or sports championships? Sastralians Photography captures every emotion live. Visit our official Facebook photo page where all active high-resolution catalogs are synced daily.
              </p>
            </div>
          </div>
          <a
            href="https://www.facebook.com/sastraliansphotography/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1877F2] text-white font-black text-xs uppercase tracking-widest px-7 py-4 rounded-full shadow-md hover:bg-[#1565C0] transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer shrink-0 w-full lg:w-auto justify-center"
          >
            <Facebook className="w-4 h-4 fill-white" />
            <span>Open Sastralians Photos FB</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image card with creative zooming and dark overlay */}
                <div className="relative aspect-[4/3] bg-stone-300 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Category Chip */}
                  <span className="absolute top-4 left-4 bg-rose-950 text-amber-400 font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-lg border border-amber-500/25">
                    {item.category}
                  </span>

                  {/* Title overlay in image base */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] text-stone-300 flex items-center gap-1 font-semibold mb-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      {item.date}
                    </span>
                    <h3 className="font-extrabold text-sm leading-tight text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Short textual summary */}
                <div className="p-5">
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer linking Drive trigger */}
              <div className="px-5 py-3.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-rose-950 font-extrabold">
                <span className="text-[10px] font-black uppercase text-stone-400 tracking-wider">
                  Open Gallery Drive
                </span>
                <div className="flex items-center gap-1 text-rose-900 group-hover:text-amber-600 transition-colors">
                  <span className="text-[11px] font-bold">Access Folder</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Master Lightbox Modal overlay */}
        {activeItem && (
          <div
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 bg-stone-950/90 flex items-center justify-center p-4 xl:p-8 animate-fadeIn backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()} // Stop closing on card clicks
              className="bg-white text-stone-900 rounded-3xl max-w-3xl w-full overflow-hidden border-3 border-amber-500 shadow-2xl animate-scaleUp flex flex-col"
            >
              
              {/* Close Button Header */}
              <div className="relative aspect-video xl:aspect-[16/9] bg-black">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Control elements in image view */}
                <span className="absolute top-4 left-4 bg-stone-900 text-amber-400 font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-lg">
                  {activeItem.category}
                </span>

                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/90 text-white hover:bg-stone-950 transition-colors cursor-pointer"
                  aria-label="Close Lightbox Grid"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Informative details baseline */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center justify-between gap-4 flex-wrap pb-3 border-b border-stone-100">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-rose-950">
                      {activeItem.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-bold mt-1">
                      Event Date Logged: {activeItem.date}
                    </p>
                  </div>

                  <span className="text-stone-400 text-xs font-mono font-bold">
                    ID Reference: {activeItem.id}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                  {activeItem.description}
                </p>

                {/* Outbound Actions Linking drive and social streams */}
                <div className="pt-4 flex flex-col gap-4 border-t border-stone-100">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2.5 text-[11px] font-bold text-stone-500">
                      <FolderOpen className="w-4 h-4 text-amber-500 animate-pulse" />
                      <span>Multiple Photo Repositories Sync Live</span>
                    </div>
                    <span className="text-[10px] text-stone-400 font-extrabold uppercase">Choose Source</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={activeItem.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-rose-950 text-white font-black text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl hover:bg-rose-900 transition-colors justify-center text-center shadow-sm"
                    >
                      <FolderOpen className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>UHD Google Drive Archive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="https://www.facebook.com/sastraliansphotography/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#1877F2] text-white font-black text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl hover:bg-[#1565C0] transition-colors justify-center text-center shadow-sm"
                    >
                      <Facebook className="w-4 h-4 fill-white shrink-0" />
                      <span>Sastralians Photography FB</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </motion.div>
    </section>
  );
}
