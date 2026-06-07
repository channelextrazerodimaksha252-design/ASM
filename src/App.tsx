/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import SchoolProfile from "./components/SchoolProfile";
import MediaWings from "./components/MediaWings";
import VideoArchive from "./components/VideoArchive";
import PhotoStorylines from "./components/PhotoStorylines";
import LiveInteractionDesk from "./components/LiveInteractionDesk";
import { FAQ_ITEMS, SCHOOL_LOGO, MEDIA_LOGO } from "./data";
import NationalDaysTicker from "./components/NationalDaysTicker";
import { Globe, Users, Heart, Award, ArrowUp, ChevronDown, MessageSquare, Play, HelpCircle, ExternalLink, Bookmark } from "lucide-react";

export default function App() {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [faqOpenId, setFaqOpenId] = useState<string | null>(null);

  const announcements = [
    "🔥 EXCITING NEWS: The Annual Inter-House Sports Meet cinematic video recap is trending online! Open Video Hub to play.",
    "📢 ATTENTION: Student recruitment orientation for Term 2 begins on Tuesday afternoon. Grade 6+ are invited.",
    "✨ DAILY WATCH: The Sastralia devotional Bhakthi Gee evening is now archived on global cloud drives.",
    "⭐ ANNOUNCEMENT: Online Event Coverage Booking desk is now open for school sports houses and science clubs."
  ];

  const handleNextTicker = () => {
    setTickerIndex((prev) => (prev + 1) % announcements.length);
  };

  const toggleFaq = (id: string) => {
    setFaqOpenId(faqOpenId === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 font-sans leading-relaxed selection:bg-amber-500 selection:text-stone-950 flex flex-col justify-between">
      
      {/* 1. Header component */}
      <Header />

      {/* 2. Hero and Interactive Dynamic Space */}
      <main className="flex-grow pt-24 md:pt-32">
        
        {/* Dynamic Ticker Headline Line */}
        <div id="hero-top" className="bg-gradient-to-r from-rose-950 to-stone-900 border-y border-amber-600/30 py-3 text-stone-100 text-xs sm:text-sm font-semibold scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 overflow-hidden flex-1">
              <span className="bg-amber-500 text-stone-950 px-2 py-0.5 rounded text-[10px] font-black uppercase shrink-0 animate-pulse">
                Bulletin
              </span>
              <p className="text-stone-300 truncate tracking-wide select-none">
                {announcements[tickerIndex]}
              </p>
            </div>
            <button
              onClick={handleNextTicker}
              className="text-[10px] font-black text-amber-400 uppercase tracking-widest hover:text-white transition-colors shrink-0 cursor-pointer"
            >
              Next Alert &gt;
            </button>
          </div>
        </div>

        {/* Hero Banner Grid Section */}
        <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-br from-white via-stone-50/50 to-amber-50/10">
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Left Hero (Col 1-7) */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 space-y-6 text-left"
              >
                
                {/* School identity credentials */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-900 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shadow-sm"
                >
                  <Bookmark className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500" />
                  <span>Sri Lanka National School Network &bull; ASM Digital</span>
                </motion.div>
 
                <div className="space-y-3">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-stone-500 font-extrabold text-xs tracking-[0.3em] uppercase block leading-none"
                  >
                    Matugama Ananda Sastralaya
                  </motion.span>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-4xl sm:text-6xl font-black text-rose-950 font-display tracking-tight leading-[1.1] md:leading-[1.05]"
                  >
                    We broadcast the pulse of <span className="text-amber-500">Sastralians</span>.
                  </motion.h1>
                </div>
 
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="text-stone-600 text-xs sm:text-base leading-relaxed max-w-2xl font-medium"
                >
                  Documenting historical education milestones, cultural Vesak/Poson devotional evenings, athletic house achievements, and academic honor events since 1942. Operated and broadcast entirely by our student creators guild.
                </motion.p>
 
                {/* Primary Action Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <a
                    href="#photo-storylines"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-rose-950 to-rose-900 text-white font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-lg hover:from-rose-900 hover:to-rose-850 transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 duration-250 cursor-pointer"
                  >
                    <span>📸 Photo Storylines</span>
                  </a>
                  <a
                    href="#video-hub"
                    className="flex items-center justify-center gap-2 bg-white text-rose-950 font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow border-2 border-rose-900 hover:bg-rose-50 transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 duration-250 cursor-pointer"
                  >
                    <span>▶️ Watch Announcements</span>
                  </a>
                </motion.div>
 
                {/* Micro Statistics Blocks */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200"
                >
                  <div className="bg-white p-4 rounded-2xl border border-stone-150 text-center shadow-3d hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    <span className="text-2xl md:text-3.5xl font-black text-rose-900 font-display block leading-none mb-1">
                      45+
                    </span>
                    <span className="text-[9px] font-black uppercase text-stone-400 tracking-wider">
                      Active Crew
                    </span>
                  </div>
 
                  <div className="bg-white p-4 rounded-2xl border border-stone-150 text-center shadow-3d hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    <span className="text-2xl md:text-3.5xl font-black text-rose-900 font-display block leading-none mb-1">
                      250+
                    </span>
                    <span className="text-[9px] font-black uppercase text-stone-400 tracking-wider">
                      Events Covered
                    </span>
                  </div>
 
                  <div className="bg-white p-4 rounded-2xl border border-stone-150 text-center shadow-3d hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    <span className="text-2xl md:text-3.5xl font-black text-rose-900 font-display block leading-none mb-1">
                      4K UHD
                    </span>
                    <span className="text-[9px] font-black uppercase text-stone-400 tracking-wider">
                      Studio Output
                    </span>
                  </div>
                </motion.div>
 
              </motion.div>

              {/* Media Unit Showcase Card Right (Col 8-12) */}
              <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-rose-900 rounded-3xl blur-2xl opacity-20 transform -rotate-3 scale-102"></div>
                
                <div className="relative bg-stone-900 text-stone-100 rounded-3xl p-5 border border-stone-850 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-amber-500 overflow-hidden bg-stone-950 flex items-center justify-center p-0.5 shadow-sm">
                        <img
                          src={MEDIA_LOGO}
                          alt="ASM Media Unit Logo"
                          className="w-full h-full object-cover rounded-full"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-white font-black text-xs block leading-none">
                          ASM Channel Showcase
                        </span>
                        <span className="text-[8px] font-extrabold tracking-widest uppercase text-amber-500">
                          Verified Stream Link
                        </span>
                      </div>
                    </div>

                    <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-950 animate-pulse"></span>
                  </div>

                  {/* Elegant standard video thumbnail layer */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-stone-800">
                    <iframe
                      src="https://www.youtube.com/embed/3W1M6B6pE0g"
                      title="Ananda Sastralaya Official Channel Stream"
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="bg-stone-950/60 p-3 rounded-xl border border-stone-900/85">
                    <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
                      <span className="font-extrabold text-stone-200">Featured Video:</span> Ananda Sastralaya National School Main Channel Stream. Access real announcements, historic archives and live coverage blocks.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Follow Media Unit Social Banner Strip */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
          <div className="bg-white border border-stone-200 rounded-3xl px-6 py-6 md:py-8 md:px-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1">
              <h3 className="font-extrabold text-base md:text-lg text-rose-950 tracking-tight leading-none mb-1">
                Follow Ananda Sastralaya Digital Network
              </h3>
              <p className="text-stone-500 text-xs font-medium">
                Stay updated on daily highlights, sports encounters, admissions and certifications.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
              <a
                href="https://www.facebook.com/anandasastralayamathugama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1877F2] text-white font-black text-xs uppercase tracking-wider hover:scale-103 transition-transform shadow-md"
              >
                <span>🔵 AS School FB</span>
              </a>
              <a
                href="https://www.facebook.com/sastraliansphotography/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0080FF] text-white font-black text-xs uppercase tracking-wider hover:scale-103 transition-transform shadow-md"
              >
                <span>📸 Photography FB</span>
              </a>
              <a
                href="https://www.youtube.com/@SastraliansMediaOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF0000] text-white font-black text-xs uppercase tracking-wider hover:scale-103 transition-transform shadow-md"
              >
                <span>🔴 YouTube Broadcaster</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. National days and commemorative events slider ticker */}
        <NationalDaysTicker />

        {/* 5. School Profile Tabular Showcase */}
        <SchoolProfile />

        {/* 5. Sub functional Media Operation wings */}
        <MediaWings />

        {/* 6. Dynamic Video Hub & YouTube Suggester Archive */}
        <VideoArchive />

        {/* 8. Photo lightbox narrative archive */}
        <PhotoStorylines />

        {/* 9. Live interaction desk and bulletins posting */}
        <LiveInteractionDesk />

        {/* 10. FAQ accordion helper panel */}
        <section id="faq-desk" className="py-20 bg-stone-50 text-stone-800 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            {/* Header Title */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-rose-900 font-extrabold text-xs uppercase tracking-[0.25em] block mb-2">
                Information Desk
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight leading-none">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full"></div>
              <p className="text-stone-600 mt-4 text-xs md:text-sm">
                Get quick, transparent answers regarding student recruitments, media technical workshops, and camera equipment allocations of the unit.
              </p>
            </div>

            {/* Accordion List container */}
            <div className="max-w-3xl mx-auto space-y-4">
              {FAQ_ITEMS.map((faq) => {
                const isOpen = faqOpenId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left font-black text-stone-900 hover:text-rose-950 text-xs sm:text-sm uppercase tracking-wide cursor-pointer text-stone-950 select-none"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "transform rotate-180 text-rose-900" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-stone-100 text-stone-600 leading-relaxed text-xs sm:text-sm font-medium">
                            <p>{faq.answer}</p>
                            <span className="text-[10px] text-stone-400 font-bold block mt-3 uppercase tracking-wider">
                              Topic classification: {faq.category}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Inquiries Footer Callout */}
            <div className="max-w-3xl mx-auto mt-12 p-6 rounded-3xl bg-amber-500/10 border border-amber-500/20 text-center space-y-3 shadow-sm">
              <MessageSquare className="w-8 h-8 text-amber-600 mx-auto" />
              <h4 className="font-extrabold text-rose-950 text-sm">Have secondary inquiries or require urgent event support?</h4>
              <p className="text-xs text-stone-600 max-w-xl mx-auto leading-relaxed font-semibold">
                Submit an event coverage booking under the Booking Desk or visit our teacher-in-charge Mr. Kumara Kravita at the school's second-floor central Media Operations room during school layout hours.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* 11. Custom back-to-top button and professional footer */}
      <footer className="bg-stone-950 border-t-3 border-amber-500 py-12 text-stone-400 text-xs relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-stone-850">
            
            {/* Logo and citation block left */}
            <div className="md:col-span-6 flex items-center gap-4">
              <div className="relative shrink-0 bg-white p-1 rounded-full border border-stone-850 w-16 h-16 flex items-center justify-center overflow-hidden shadow">
                <img
                  src={SCHOOL_LOGO}
                  alt="Ananda Sastralaya National School Crest"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-black text-sm tracking-tight leading-none uppercase">
                  Ananda Sastralaya National School Matugama
                </h4>
                <p className="text-[11px] text-stone-500 font-bold uppercase tracking-wider mt-0.5">
                  Media Unit & Digital Broadcasters Guild &bull; Founded 1942
                </p>
              </div>
            </div>

            {/* Quick outbound citation block right */}
            <div className="md:col-span-6 flex md:justify-end gap-3 flex-wrap">
              <button
                onClick={() => {
                  const el = document.getElementById("school-profile");
                  if (el) window.scrollTo({ top: el.offsetTop - 85, behavior: "smooth" });
                }}
                className="bg-stone-900 border border-stone-800 text-stone-300 py-2.5 px-4.5 rounded-xl text-xs font-bold hover:bg-stone-850 cursor-pointer"
              >
                School Profile
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("live-desk");
                  if (el) window.scrollTo({ top: el.offsetTop - 85, behavior: "smooth" });
                }}
                className="bg-stone-900 border border-stone-850 text-amber-500 py-2.5 px-4.5 rounded-xl text-xs font-bold hover:bg-stone-850 cursor-pointer"
              >
                Reserve Crew Booking
              </button>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-semibold text-stone-500">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-rose-900 animate-spin" />
              <span>&copy; {new Date().getFullYear()} Ananda Sastralaya Matugama Media Unit. All Rights Reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <span>National School Educational Roster Project</span>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-full bg-stone-900/90 text-white border border-stone-800 hover:text-amber-400 transition-colors cursor-pointer"
                title="Scroll back to Top"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
