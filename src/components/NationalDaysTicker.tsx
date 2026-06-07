/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Flame, Stars, ShieldAlert, Award, Clock, ArrowLeft, ArrowRight, Sparkles, Compass } from "lucide-react";

interface NationalDayEvent {
  id: string;
  titleEn: string;
  titleSi: string;
  dateStr: string; // "MM-DD" style
  month: number; // 1-indexed
  day: number;
  category: "National" | "School" | "Cultural" | "Religious";
  descriptionEn: string;
  descriptionSi: string;
  accentColor: string; // Tailwind border/text color class
  bgGradient: string; // Tailwind background gradient
  decorEmoji: string;
}

const EVENTS_DATA: NationalDayEvent[] = [
  {
    id: "e1",
    titleEn: "Sri Lanka Independence Day",
    titleSi: "ශ්‍රී ලංකා ජාතික නිදහස් දිනය",
    dateStr: "02-04",
    month: 2,
    day: 4,
    category: "National",
    descriptionEn: "Commemorating national sovereignty, political freedom, and unified cultural heritage of Sri Lanka.",
    descriptionSi: "ශ්‍රී ලංකාවේ ස්වෛරීභාවය හා නිදහස අගයමින් පවත්වන උත්කර්ෂවත් ජාතික අභිමානවත් සැමරුම.",
    accentColor: "text-amber-500 border-amber-500",
    bgGradient: "from-amber-950/40 via-stone-900 to-rose-950/40",
    decorEmoji: "🦁",
  },
  {
    id: "e2",
    titleEn: "Annual Inter-House Sports Meet",
    titleSi: "වාර්ෂික නිවාසන්තර ක්‍රීඩා උළෙල",
    dateStr: "03-10",
    month: 3,
    day: 10,
    category: "School",
    descriptionEn: "High-intensity athletic speedways, house parades, and traditional Sastralian sports matches.",
    descriptionSi: "ශාස්ත්‍රාලයීය ක්‍රීඩකයන්ගේ දක්ෂතා ඔප්නංවන වාර්ෂික මහා නිවාසන්තර ක්‍රීඩා මහෝත්සවය.",
    accentColor: "text-rose-500 border-rose-500",
    bgGradient: "from-rose-955/40 via-stone-900 to-amber-950/30",
    decorEmoji: "🏆",
  },
  {
    id: "e3",
    titleEn: "Sinhala & Tamil New Year",
    titleSi: "සිංහල සහ දෙමළ අලුත් අවුරුද්ද",
    dateStr: "04-13",
    month: 4,
    day: 13,
    category: "Cultural",
    descriptionEn: "Traditional cultural solar cycle transition, sweets feasts, oil anointing, and school folk games.",
    descriptionSi: "සූර්ය සංක්‍රාන්තිය මුල් කරගත් සිංහල හා දෙමළ සංස්කෘතික අනන්‍යතාවය විදහාපාන ජාතික මංගල්‍යය.",
    accentColor: "text-emerald-500 border-emerald-500",
    bgGradient: "from-emerald-950/40 via-stone-900 to-amber-950/30",
    decorEmoji: "🌾",
  },
  {
    id: "e4",
    titleEn: "Vesak Poya Buddha Commemoration",
    titleSi: "වෙසක් පුර පසළොස්වක පෝය උත්සවය",
    dateStr: "05-27",
    month: 5,
    day: 27,
    category: "Religious",
    descriptionEn: "Sastralians light giant organic lanterns and hold devotional Bhakthi Gee choral evenings.",
    descriptionSi: "තෙමඟුල සැමරීමට සිසුන් විසින් නිර්මාණය කරන වෙසක් කූඩු, තොරණ සහ බැතිගී ප්‍රසංගය.",
    accentColor: "text-sky-400 border-sky-400",
    bgGradient: "from-sky-950/40 via-stone-900 to-indigo-950/40",
    decorEmoji: "🪔",
  },
  {
    id: "e5",
    titleEn: "Poson Maha Poya Festival",
    titleSi: "පොසන් පුර පසළොස්වක පෝය සැමරුම",
    dateStr: "06-26",
    month: 6,
    day: 26,
    category: "Religious",
    descriptionEn: "Arrival of Arahant Mahinda. Showcasing special Poson Thorana built by ASMU engineering guild.",
    descriptionSi: "මහින්දාගමනය සිහිපත් කරමින් සාදන දැවැන්ත පොසන් තොරණ හා මිහිඳු පෙරහැර ආවරණය.",
    accentColor: "text-yellow-400 border-yellow-400",
    bgGradient: "from-yellow-950/30 via-stone-900 to-rose-950/30",
    decorEmoji: "🌸",
  },
  {
    id: "e6",
    titleEn: "School Founders Commemoration Day",
    titleSi: "ශාස්ත්‍රාලයීය ආදිකතෘ දින සැමරුම",
    dateStr: "07-18",
    month: 7,
    day: 18,
    category: "School",
    descriptionEn: "Established in 1942. Expressing gratitude to school pioneers who lit our intellectual flame.",
    descriptionSi: "1942 දී පාසල ඉදිකළ ආදිකතෘවරුන් ගෞරවයෙන් සැමරීම හා විශේෂ ප්‍රණාම පුද පූජාවන්.",
    accentColor: "text-amber-500 border-amber-500",
    bgGradient: "from-rose-950/40 via-stone-900 to-amber-950/40",
    decorEmoji: "🏛️",
  },
  {
    id: "e7",
    titleEn: "G.C.E. Advanced Level Welcoming Day",
    titleSi: "උසස් පෙළ නවක සිසුන් පිළිගැනීමේ දින",
    dateStr: "08-25",
    month: 8,
    day: 25,
    category: "School",
    descriptionEn: "Welcoming prospective Sastralians into high-tier science, tech, and arts advanced pipelines.",
    descriptionSi: "උසස් පෙළ හැදෑරීම සඳහා නවකයින් පිළිගැනීමේ උත්සවය සජීවී විඩියෝ විකාශනය.",
    accentColor: "text-purple-400 border-purple-400",
    bgGradient: "from-purple-950/40 via-stone-900 to-indigo-950/40",
    decorEmoji: "📖",
  },
  {
    id: "e8",
    titleEn: "National Teachers' Commemoration",
    titleSi: "ජාතික ගුරු දින සැමරුම",
    dateStr: "10-06",
    month: 10,
    day: 6,
    category: "School",
    descriptionEn: "Tribute to the dedicated faculty of Sastralya delivering moral and intellectual blueprints.",
    descriptionSi: "සිසුන්ට සිප්සතර කියාදෙන ගුරු මව්පියන් වෙනුවෙන් උපහාර දක්වන විශේෂ ගුරු දින ප්‍රණාමය.",
    accentColor: "text-teal-450 border-teal-400",
    bgGradient: "from-teal-950/40 via-stone-900 to-stone-950",
    decorEmoji: "🎓",
  }
];

export default function NationalDaysTicker() {
  const [events, setEvents] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const containerRef = useRef<HTMLDivElement>(null);

  // Sri Lanka current date is June 7, 2026
  const CURRENT_YEAR = 2026;
  const current_date = new Date(CURRENT_YEAR, 5, 7); // June is month index 5 (0-indexed)

  useEffect(() => {
    // Calculate status of each event for year 2026
    const calculatedEvents: any[] = EVENTS_DATA.map((evo) => {
      // Month parameter in Date is 0-indexed, so month - 1
      const eventDate = new Date(CURRENT_YEAR, evo.month - 1, evo.day);
      let daysDiff = 0;
      let status: "Upcoming" | "Happening Today" | "Completed" | "Next Event" = "Upcoming";
      
      const timeDiff = eventDate.getTime() - current_date.getTime();
      daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if (daysDiff === 0) {
        status = "Happening Today";
      } else if (daysDiff < 0) {
        status = "Completed";
      } else {
        status = "Upcoming";
      }

      return {
        ...evo,
        eventDate,
        daysDiff,
        status,
      };
    });

    // Find the next upcoming event (the one with the smallest positive daysDiff)
    let nextEventIndex = -1;
    let minPositiveDiff = Infinity;

    calculatedEvents.forEach((evt, idx) => {
      if (evt.daysDiff > 0 && evt.daysDiff < minPositiveDiff) {
        minPositiveDiff = evt.daysDiff;
        nextEventIndex = idx;
      }
    });

    // Mark that specific event as "Next Event"
    if (nextEventIndex !== -1) {
      calculatedEvents[nextEventIndex].status = "Next Event";
    }

    setEvents(calculatedEvents);
    
    // Set active index to the next closest event
    if (nextEventIndex !== -1) {
      setActiveIndex(nextEventIndex);
    }
  }, []);

  const slideLeft = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  // Auto-play the slider
  useEffect(() => {
    if (events.length === 0) return;
    const interval = setInterval(() => {
      slideRight();
    }, 6000); // Slid every 6 seconds

    return () => clearInterval(interval);
  }, [events, activeIndex]);

  if (events.length === 0) {
    return <div className="h-20 bg-stone-900 border-y border-amber-600/30 animate-pulse" />;
  }

  const currentEvent = events[activeIndex];

  return (
    <section className="bg-stone-950 text-white py-14 overflow-hidden border-y-3 border-amber-500/80 relative">
      {/* Decorative vector grid backing */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
      
      {/* Laser glow elements */}
      <div className="absolute -left-20 top-0 w-80 h-80 bg-rose-900/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -right-20 bottom-0 w-80 h-80 bg-amber-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Widget Top Title Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-stone-800">
          <div className="space-y-1.5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rose-950/80 border border-rose-800/60 text-[10px] font-black uppercase text-amber-400 tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CULTURAL TIMELINE</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-black font-display tracking-tight leading-none text-white">
              National & School <span className="text-amber-500">Commemorative Days</span>
            </h2>
            <p className="text-[11px] sm:text-xs font-semibold text-stone-400 max-w-xl">
              ශ්‍රී ලංකා ජාතික දිනයන් සහ අනන්‍ය වූ ශාස්ත්‍රාලයීය උත්සව දින දර්ශනය. මාධ්‍ය ඒකකයේ සජීවී ආවරණ පුවත් මෙතැනින්.
            </p>
          </div>

          {/* Controller buttons for side-to-side slider */}
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block mr-2">
              <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest block leading-none">
                TIMEPULSE HUD
              </span>
              <span className="text-xs font-bold text-amber-500">
                Active Year: {CURRENT_YEAR}
              </span>
            </div>

            <button
              onClick={slideLeft}
              className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-350 hover:text-white hover:bg-stone-800 transition-all cursor-pointer shadow-md"
              aria-label="Slide Previous Card"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={slideRight}
              className="p-2.5 rounded-xl bg-stone-900 border border-stone-850 text-amber-500 hover:text-white hover:bg-stone-800 transition-all cursor-pointer shadow-md"
              aria-label="Slide Next Card"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Master Slider Area: Slide from side to side animate */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: direction * 250, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -direction * 250, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -60) {
                  slideRight();
                } else if (swipe > 60) {
                  slideLeft();
                }
              }}
              whileTap={{ scale: 0.98 }}
              className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br ${currentEvent.bgGradient} rounded-3xl p-6 md:p-10 border-2 border-stone-850/90 shadow-2xl relative overflow-hidden cursor-grab active:cursor-grabbing select-none`}
            >
              
              {/* Floating Large watermark backdrop */}
              <div className="absolute -right-16 -bottom-16 text-[150px] font-sans font-black opacity-5 select-none pointer-events-none uppercase">
                {currentEvent.category}
              </div>

              {/* Colorful ribbon top indicator */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

              {/* Column 1: Graphic and Time status (Col 1-4) */}
              <div className="lg:col-span-4 flex flex-col items-center text-center lg:text-left lg:items-start space-y-4">
                
                {/* Event State Ribbon badge */}
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider
                  ${currentEvent.status === "Next Event" 
                    ? "bg-amber-500 text-stone-950 animate-bounce ring-4 ring-amber-950/60" 
                    : currentEvent.status === "Happening Today"
                    ? "bg-emerald-500 text-white animate-pulse"
                    : currentEvent.status === "Completed"
                    ? "bg-stone-800 text-stone-400 border border-stone-700" 
                    : "bg-stone-900 text-stone-300 border border-stone-800"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentEvent.status === "Next Event" ? "📅 NEXT UPCOMING EVENT" : currentEvent.status}</span>
                </span>

                {/* Big decorative circular graphic */}
                <div className={`relative w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-stone-950 border-3 border-stone-850 flex items-center justify-center text-5xl md:text-6xl shadow-inner`}>
                  {currentEvent.decorEmoji}
                  {/* Subtle orbital ring for premium detail */}
                  <div className="absolute inset-0 rounded-3xl border border-amber-500/10 animate-spin" style={{ animationDuration: "12s" }}></div>
                </div>

                {/* Date highlight Box */}
                <div className="text-center lg:text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-500 block leading-none">
                    ANNUAL TIMELINE DATE
                  </span>
                  <span className="text-3xl font-black font-mono text-amber-500">
                    {currentEvent.month.toString().padStart(2, "0")}/{currentEvent.day.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs font-bold text-stone-400 block mt-1">
                    {new Date(CURRENT_YEAR, currentEvent.month - 1, currentEvent.day).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric"
                    })}
                  </span>
                </div>
              </div>

              {/* Column 2: Titles and Descriptions (Col 5-12) */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left relative z-15">
                
                {/* Titles */}
                <div>
                  <span className="text-[10px] font-black tracking-[0.25em] uppercase text-stone-450 block leading-none mb-1.5">
                    {currentEvent.category} CATEGORY PROFILE
                  </span>
                  
                  <h3 className="text-2xl sm:text-4.5xl font-black text-white font-display tracking-tight leading-none mb-2">
                    {currentEvent.titleEn}
                  </h3>
                  
                  <h4 className="text-lg sm:text-2xl font-bold text-amber-400 leading-tight tracking-wide font-sans mt-1">
                    {currentEvent.titleSi}
                  </h4>
                </div>

                {/* Split descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-stone-800/80">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest block font-mono">
                      English Broadcast Context &bull;
                    </span>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-semibold">
                      {currentEvent.descriptionEn}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block font-mono">
                      සිංහල මාධ්‍ය තොරතුරු &bull;
                    </span>
                    <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-semibold">
                      {currentEvent.descriptionSi}
                    </p>
                  </div>
                </div>

                {/* Sub-strip for counts */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
                  {currentEvent.daysDiff > 0 ? (
                    <div className="px-5 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 flex items-center gap-2">
                      <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: "5s" }} />
                      <span>Countdown to celebration: <span className="text-white font-black text-sm font-mono">{currentEvent.daysDiff}</span> Days Remaining</span>
                    </div>
                  ) : currentEvent.daysDiff === 0 ? (
                    <div className="px-5 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 flex items-center gap-2 animate-pulse">
                      <Flame className="w-4 h-4" />
                      <span>Celebrating Today! Live feeds airing periodically.</span>
                    </div>
                  ) : (
                    <div className="px-5 py-2 rounded-2xl bg-stone-900 border border-stone-800 text-xs font-semibold text-stone-450">
                      Celebration concluded of year {CURRENT_YEAR} ({Math.abs(currentEvent.daysDiff)} days ago) &bull; Awaiting cycle repeat G.C.E
                    </div>
                  )}

                  {currentEvent.category === "School" && (
                    <span className="text-[10px] font-black text-stone-500 uppercase tracking-wider">
                      &bull; ASM EXCLUSIVE ANNOUNCEMENTS TEAM DEPLOYED
                    </span>
                  )}
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Micro Pips Navigation representing indices */}
        <div className="flex justify-center gap-2.5 mt-8">
          {events.map((evt, idx) => (
            <button
              key={evt.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex ? "w-8 bg-amber-500" : "w-2 bg-stone-800 hover:bg-stone-700"
              }`}
              title={`Step to ${evt.titleEn}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
