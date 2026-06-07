/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { INITIAL_NOTICES } from "../data";
import { Notice, Booking } from "../types";
import { Bell, Calendar, Mail, FileText, Check, Plus, AlertCircle, Sparkles, Shield, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LiveInteractionDesk() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Daily Ceylon Routine
  const [dailyRoutine, setDailyRoutine] = useState("");

  // Teacher Notice Form states
  const [showPostNotice, setShowPostNotice] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");
  const [noticeCat, setNoticeCat] = useState<"Urgent" | "General" | "Schedule">("General");
  const [noticeAuthor, setNoticeAuthor] = useState("");
  const [noticeSuccess, setNoticeSuccess] = useState(false);

  // Booking Form states
  const [clubName, setClubName] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [requirements, setRequirements] = useState<string[]>([]);
  const [bookingDesc, setBookingDesc] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // Determine daily Routine based on Ceylon local day
    const day = new Date().getDay();
    const routines: Record<number, string> = {
      0: "Sunday Focus: Media cloud database synchronization, server maintenance and image archive backups.",
      1: "Monday Routine: School morning assembly documentation, microphone sound staging, and live anthem relays.",
      2: "Tuesday Update: Graphic design bootcamp sessions and typography workshops in the Media Lab.",
      3: "Wednesday Activity: Coverages for local Inter-House athletic training schedules and cricket games.",
      4: "Thursday Focus: Announcer voice coaching, scriptwriting audits, and bilingual translation setups.",
      5: "Friday Review: Compiling photography data, raw video file grading, and publishing weekly archives.",
      6: "Saturday Standby: Design overlays composition, RTMP testing streams, and hardware backup audits."
    };
    setDailyRoutine(routines[day] || "Media operations running smoothly on national standards.");

    // Retrieve notices
    const storedNotices = localStorage.getItem("asm_board_notices");
    if (storedNotices) {
      try {
        setNotices(JSON.parse(storedNotices));
      } catch (e) {
        setNotices(INITIAL_NOTICES);
      }
    } else {
      setNotices(INITIAL_NOTICES);
    }

    // Retrieve bookings
    const storedBookings = localStorage.getItem("asm_event_bookings");
    if (storedBookings) {
      try {
        setBookings(JSON.parse(storedBookings));
      } catch (e) {
        setBookings([]);
      }
    } else {
      setBookings([]);
    }
  }, []);

  const handleRequirementToggle = (req: string) => {
    if (requirements.includes(req)) {
      setRequirements(requirements.filter((r) => r !== req));
    } else {
      setRequirements([...requirements, req]);
    }
  };

  const submitNotice = (e: FormEvent) => {
    e.preventDefault();
    setPinError("");

    // Founding year of Ananda Sastralaya Matugama is 1942. Let's use it as pin!
    if (pin !== "1942") {
      setPinError("Invalid Admin Authorization PIN. (Hint: Found in 1942)");
      return;
    }

    if (!noticeTitle.trim() || !noticeContent.trim() || !noticeAuthor.trim()) {
      return;
    }

    const item: Notice = {
      id: `notice-${Date.now()}`,
      title: noticeTitle,
      content: noticeContent,
      category: noticeCat,
      date: new Date().toISOString().split("T")[0],
      author: noticeAuthor
    };

    const updated = [item, ...notices];
    setNotices(updated);
    localStorage.setItem("asm_board_notices", JSON.stringify(updated));

    // Reset
    setNoticeTitle("");
    setNoticeContent("");
    setNoticeAuthor("");
    setPin("");
    setNoticeSuccess(true);
    setTimeout(() => {
      setNoticeSuccess(false);
      setShowPostNotice(false);
    }, 2000);
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clubName.trim() || !eventName.trim() || !eventDate.trim() || !contactName.trim() || !contactEmail.trim()) {
      return;
    }

    const item: Booking = {
      id: `booking-${Date.now()}`,
      clubName,
      eventName,
      eventDate,
      eventTime: eventTime || "Full Day",
      requirements: requirements.length > 0 ? requirements : ["Photography Feed"],
      description: bookingDesc || "No dynamic specification parameters provided.",
      status: "In Review",
      createdAt: new Date().toLocaleString(),
      contactName,
      contactEmail
    };

    const updated = [item, ...bookings];
    setBookings(updated);
    localStorage.setItem("asm_event_bookings", JSON.stringify(updated));

    // Reset
    setClubName("");
    setEventName("");
    setEventDate("");
    setEventTime("");
    setContactName("");
    setContactEmail("");
    setRequirements([]);
    setBookingDesc("");
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 4000);
  };

  return (
    <section id="live-desk" className="py-20 bg-stone-900 text-stone-100 scroll-mt-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 md:px-6"
      >

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-500 font-extrabold text-xs uppercase tracking-[0.25em] block mb-2">
            The Interaction Desk
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Live Bulletin & Booking Desk
          </h2>
          <div className="w-16 h-1 bg-rose-700 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-400 mt-4 text-xs md:text-sm font-semibold">
            Access immediate daily rotative routine announcements, submit certified teacher bulletins, and request high-dynamic media coverages for upcoming school events directly.
          </p>
        </div>

        {/* Master Double-Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Daily Notices Board (Col 1-6) */}
          <div className="lg:col-span-6 bg-stone-950/80 border border-stone-850 p-6 md:p-8 rounded-3xl space-y-6 shadow-xl">
            <div className="flex items-center justify-between gap-4 border-b border-stone-850 pb-5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-500 rounded-xl text-stone-950 shrink-0">
                  <Bell className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base md:text-lg">Daily Notice Bulletin</h3>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest font-black">Official announcements board</p>
                </div>
              </div>

              <button
                onClick={() => setShowPostNotice(!showPostNotice)}
                className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-750 text-xs font-extrabold tracking-wider text-amber-400 transition-colors uppercase cursor-pointer"
              >
                {showPostNotice ? "Hide Poster" : "Post Notice"}
              </button>
            </div>

            {/* Daily Rotave Banner */}
            <div className="p-4 bg-rose-950/20 border-l-4 border-amber-500 rounded-r-xl">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-extrabold text-white block mb-0.5">Today's Operating Routine:</span>
                  <p className="text-stone-300 font-medium leading-relaxed">{dailyRoutine}</p>
                </div>
              </div>
            </div>

            {/* PIN protected announcement poster form */}
            {showPostNotice && (
              <form onSubmit={submitNotice} className="bg-stone-900 border border-stone-800 p-5 rounded-2xl space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-rose-400 font-extrabold text-xs uppercase pb-2 border-b border-stone-850">
                  <Shield className="w-4 h-4" />
                  <span>Teacher / Prefect Panel</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Author Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. Kravita"
                      value={noticeAuthor}
                      onChange={(e) => setNoticeAuthor(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-200 outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Authority PIN *</label>
                    <input
                      type="password"
                      required
                      placeholder="e.g. Founding Year"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-200 outline-none focus:border-amber-500"
                      title="Hint: Founding year of Ananda Sastralaya"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-1">
                    <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Notice Heading *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Room Change"
                      value={noticeTitle}
                      onChange={(e) => setNoticeTitle(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-200 outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Classification *</label>
                    <select
                      value={noticeCat}
                      onChange={(e) => setNoticeCat(e.target.value as any)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-300 outline-none focus:border-amber-500 font-bold"
                    >
                      <option value="Urgent">🔴 Urgent alert</option>
                      <option value="General">🔵 General report</option>
                      <option value="Schedule">🟢 Schedule timing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Detailed Message *</label>
                  <textarea
                    required
                    placeholder="Type official details clearly..."
                    value={noticeContent}
                    onChange={(e) => setNoticeContent(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-200 outline-none focus:border-amber-500 h-16 resize-none"
                  />
                </div>

                {pinError && (
                  <div className="p-2.5 bg-rose-950/40 border border-rose-900 rounded-lg flex items-center gap-1.5 text-rose-400 font-medium text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{pinError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2 bg-rose-900 hover:bg-rose-850 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                >
                  Publish Notice
                </button>

                {noticeSuccess && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold rounded-lg text-xs flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Validated notice published onto the public board successfully!</span>
                  </div>
                )}
              </form>
            )}

            {/* List Notices */}
            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
              {notices.map((not) => (
                <div
                  key={not.id}
                  className="p-4 rounded-2xl bg-stone-900/60 border border-stone-850/80 space-y-2 hover:border-stone-800 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${
                        not.category === "Urgent"
                          ? "bg-rose-900/80 text-rose-200"
                          : not.category === "Schedule"
                          ? "bg-emerald-950/80 text-emerald-200"
                          : "bg-sky-950/80 text-sky-200"
                      }`}
                    >
                      {not.category} Notice
                    </span>
                    <span className="text-[10px] text-stone-500 font-bold">{not.date}</span>
                  </div>

                  <h4 className="font-extrabold text-sm text-stone-100">{not.title}</h4>
                  <p className="text-xs text-stone-400 leading-relaxed font-sans">{not.content}</p>

                  <div className="border-t border-stone-850/50 pt-2 flex justify-between text-[9px] text-stone-500 font-bold uppercase tracking-wider">
                    <span>By: {not.author}</span>
                    <span className="text-amber-500">Official Channel Post</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Quick Coverage Booking Module (Col 7-12) */}
          <div className="lg:col-span-6 bg-stone-950/80 border border-stone-850 p-6 md:p-8 rounded-3xl space-y-6 shadow-xl">
            <div className="flex items-center gap-2.5 border-b border-stone-850 pb-5">
              <div className="p-2 bg-rose-900 rounded-xl text-white shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base md:text-lg">Event Coverage Booking Form</h3>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-black">Schedule photographers and audio engineers</p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Plan ahead! Register your club, sports guild, or school board event. Once logged on the stream queue below, executive officers will deploy a qualified technical sub-crew.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs font-semibold">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Organizing Body *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Science Society / Sports House"
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-200 outline-none focus:border-amber-400 font-medium"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Event Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Annual Chess League / Parades"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-200 outline-none focus:border-amber-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Target Date *</label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-200 outline-none focus:border-amber-400 font-medium"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Staging Time</label>
                  <input
                    type="text"
                    placeholder="e.g. 08:30 AM / Afternoon"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-stone-200 outline-none focus:border-amber-400 font-medium"
                  />
                </div>
              </div>

              {/* Requirement Checkboxes */}
              <div>
                <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-2">Technical Services Needed</label>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
                  {["Photography Highlights", "Cinematic Video/Drone", "Live RTMP Streaming", "P.A. Sound Systems Setup"].map((option) => {
                    const isChecked = requirements.includes(option);
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => handleRequirementToggle(option)}
                        className={`py-2 px-3 rounded-lg border text-left flex items-center gap-2 transition-all cursor-pointer ${
                          isChecked
                            ? "bg-amber-500/10 border-amber-500 text-amber-400"
                            : "bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-750"
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                            isChecked ? "bg-amber-500 border-amber-500" : "bg-stone-950 border-stone-700"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-stone-950 font-black strike-width-[3px]" />}
                        </div>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Contact Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suvin Lakmana"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-9 pr-4 py-2.5 text-stone-200 outline-none focus:border-amber-400 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Contact Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. science@asm.edu"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-9 pr-4 py-2.5 text-stone-200 outline-none focus:border-amber-400 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[9px] uppercase font-black text-stone-400 tracking-wider block mb-1">Technical Parameters / Scope</label>
                <textarea
                  placeholder="State the audience size, expected guests, indoor/outdoor bounds..."
                  value={bookingDesc}
                  onChange={(e) => setBookingDesc(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2 text-stone-200 outline-none focus:border-amber-400 h-16 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-500 text-stone-950 hover:bg-amber-400 font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Submit Booking Request
              </button>

              {bookingSuccess && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold rounded-xl text-xs flex items-center gap-2">
                  <Check className="w-4.5 h-4.5 shrink-0" />
                  <span>Success! Event Booking registered and visible on stream logs below.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Live Booking registry queue logs section */}
        {bookings.length > 0 && (
          <div className="mt-12 bg-stone-950 p-6 md:p-8 rounded-3xl border border-stone-850 animate-fadeIn">
            <h3 className="font-extrabold text-white text-base md:text-lg mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Staged Media Bookings queue</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {bookings.map((bk) => (
                <div key={bk.id} className="p-5 rounded-2xl bg-stone-900 border border-stone-800/80 hover:border-stone-750 transition-all text-xs font-semibold">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-amber-500 text-stone-950 text-[9px] font-black uppercase">
                      Status: {bk.status}
                    </span>
                    <span className="text-stone-500 text-[10px]">{bk.eventDate}</span>
                  </div>

                  <h4 className="font-black text-sm text-stone-100">{bk.eventName}</h4>
                  <p className="text-xs text-rose-400 mt-1 uppercase tracking-tight">By: {bk.clubName}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3 py-2 border-y border-stone-800">
                    {bk.requirements.map((req, idx) => (
                      <span key={idx} className="bg-stone-950 px-2 py-0.5 border border-stone-850 text-stone-400 rounded text-[9px]">
                        {req}
                      </span>
                    ))}
                  </div>

                  <p className="text-stone-400 font-medium leading-relaxed font-sans text-[11px] mt-3 line-clamp-2">
                    {bk.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-[9px] text-stone-500">
                    <Calendar className="w-3.5 h-3.5" /> Registered: {bk.createdAt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </motion.div>
    </section>
  );
}
