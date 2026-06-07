/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { SCHOOL_LOGO, MEDIA_LOGO } from "../data";
import { Clock, Tv, Menu, X, Calendar, Globe } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [slTime, setSlTime] = useState("");
  const [slDate, setSlDate] = useState("");

  // Colombo time is UTC + 5:30
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const updateClock = () => {
      const now = new Date();
      // Calculate Colombo time by adding 5.5 hours to the UTC time
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const colomboTime = new Date(utc + 3600000 * 5.5);

      const timeString = colomboTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      const dateString = colomboTime.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      setSlTime(timeString);
      setSlDate(dateString);
    };

    window.addEventListener("scroll", handleScroll);
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-900/95 text-white shadow-lg backdrop-blur-md border-b-3 border-amber-600 py-3"
          : "bg-white text-stone-900 shadow-md border-b-4 border-rose-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Wrapper */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <img
                src={SCHOOL_LOGO}
                alt="Matugama Ananda Sastralaya Crest"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-3 border-amber-500 shadow-md object-contain p-0.5 bg-white animate-pulse"
                referrerPolicy="no-referrer"
              />
              <img
                src={MEDIA_LOGO}
                alt="ASM Media Unit Logo"
                className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-rose-800 shadow-md absolute -bottom-1 -right-1 bg-stone-900 p-0.5 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-extrabold text-base md:text-xl tracking-tight leading-none text-rose-900 dark:text-inherit">
                ANANDA SASTRALAYA
              </span>
              <span className="text-[10px] md:text-xs font-semibold tracking-wider text-amber-500 uppercase mt-1">
                Media Unit &bull; ASM Digital Network
              </span>
            </div>
          </div>

          {/* Central Desktop Menus */}
          <nav className="hidden lg:flex items-center gap-6">
            {[
              { label: "Home", target: "hero-top" },
              { label: "School Profile", target: "school-profile" },
              { label: "Media Wings", target: "media-wings" },
              { label: "Video Hub", target: "video-hub" },
              { label: "Photo Storylines", target: "photo-storylines" },
              { label: "Live Desk", target: "live-desk" },
              { label: "FAQ Desk", target: "faq-desk" },
            ].map((menuItem) => (
              <button
                key={menuItem.target}
                onClick={() => scrollToSection(menuItem.target)}
                className={`font-bold text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  scrolled
                    ? "text-stone-300 hover:text-amber-400"
                    : "text-stone-700 hover:text-rose-950"
                }`}
              >
                {menuItem.label}
              </button>
            ))}
          </nav>

          {/* Colombo Date & Time HUD (Extremely Premium Context) */}
          <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800/80 border border-stone-200/50 dark:border-stone-700">
            <div className="flex items-center justify-center p-1 rounded-full bg-amber-500 text-stone-950">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs font-bold font-mono tracking-tight text-amber-600">
                {slTime || "00:00:00 AM"}
              </span>
              <span className="text-[9px] font-semibold text-stone-500 tracking-tight leading-none">
                {slDate || "Ceylon Local Time"}
              </span>
            </div>
          </div>

          {/* Mobile Hamburgers */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Tiny live clocks for mobile */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-stone-100 dark:bg-stone-800 text-xs font-bold font-mono text-amber-500">
              <Clock className="w-3.5 h-3.5" />
              <span>{slTime.split(":")[0]}:{slTime.split(":")[1]}</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 cursor-pointer"
              aria-label="Toggle Navigation Screen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-stone-950 border-t-3 border-amber-500 shadow-2xl py-6 px-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Home Base", target: "hero-top" },
              { label: "School Profile", target: "school-profile" },
              { label: "Media Wings", target: "media-wings" },
              { label: "Video Showcase", target: "video-hub" },
              { label: "Photo Stories", target: "photo-storylines" },
              { label: "Announcements & Booking", target: "live-desk" },
              { label: "FAQs Desk", target: "faq-desk" },
            ].map((menuItem) => (
              <button
                key={menuItem.target}
                onClick={() => scrollToSection(menuItem.target)}
                className="w-full text-left py-3 px-3 uppercase tracking-wider text-[11px] font-bold text-stone-300 hover:text-amber-400 bg-stone-900 border-l-2 border-stone-800 rounded transition-all cursor-pointer"
              >
                {menuItem.label}
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-500">
            <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-amber-500 animate-spin" /> Sri Lanka Standard Time</span>
            <span>{slDate}</span>
          </div>
        </div>
      )}
    </header>
  );
}
