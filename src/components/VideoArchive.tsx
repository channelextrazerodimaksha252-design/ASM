/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { INITIAL_VIDEOS } from "../data";
import { Video } from "../types";
import { Search, Filter, Play, Clock, Youtube, Plus, Check, Calendar, Film } from "lucide-react";
import { motion } from "motion/react";

export default function VideoArchive() {
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  // Suggesting form states
  const [newTitle, setNewTitle] = useState("");
  const [newYtId, setNewYtId] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newCat, setNewCat] = useState<"Sports" | "Academic" | "Cultural" | "Announcements">("Announcements");
  const [suggestSuccess, setSuggestSuccess] = useState(false);

  useEffect(() => {
    // Check if we have suggested videos in local storage
    const stored = localStorage.getItem("asm_suggested_videos");
    let initialArr = [...INITIAL_VIDEOS];
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Video[];
        initialArr = [...initialArr, ...parsed];
      } catch (err) {
        console.error("Failed to parse suggested videos", err);
      }
    }
    setVideoList(initialArr);
    // Set first video active initially on the cinema dashboard
    if (initialArr.length > 0) {
      setActiveVideo(initialArr[0]);
    }
  }, []);

  const handleSuggestVideo = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newYtId.trim()) return;

    // Extract youtube ID if they pasted a full link
    let extractedId = newYtId.trim();
    if (extractedId.includes("v=")) {
      extractedId = extractedId.split("v=")[1]?.split("&")[0] || extractedId;
    } else if (extractedId.includes("youtu.be/")) {
      extractedId = extractedId.split("youtu.be/")[1]?.split("?")[0] || extractedId;
    }

    const item: Video = {
      id: `v-custom-${Date.now()}`,
      youtubeId: extractedId,
      title: newTitle,
      category: newCat,
      description: newDesc || "No additional description was provided.",
      duration: "Calculated",
      publishedAt: new Date().toISOString().split("T")[0],
      viewCount: "Recently Added"
    };

    const stored = localStorage.getItem("asm_suggested_videos");
    let currentStored: Video[] = [];
    if (stored) {
      try {
        currentStored = JSON.parse(stored);
      } catch (e) {
        currentStored = [];
      }
    }
    const updated = [item, ...currentStored];
    localStorage.setItem("asm_suggested_videos", JSON.stringify(updated));

    // Update state
    setVideoList([item, ...videoList]);
    setActiveVideo(item); // Load the recommended video into the player!

    // Reset fields
    setNewTitle("");
    setNewYtId("");
    setNewDesc("");
    setSuggestSuccess(true);
    setTimeout(() => setSuggestSuccess(false), 4400);
  };

  const categories = ["All", "Sports", "Academic", "Cultural", "Announcements"];

  const filteredVideos = videoList.filter((yt) => {
    const matchesSearch =
      yt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      yt.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "All" || yt.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="video-hub" className="py-20 bg-stone-50 text-stone-800 scroll-mt-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 md:px-6"
      >

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-rose-900 font-extrabold text-xs uppercase tracking-[0.25em] block mb-2">
            The Digital Voice
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight">
            Sastralian Premium Video Archive
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-stone-600 mt-4 text-xs md:text-sm font-semibold">
            Tune into high quality live stream recordings, student films, announcements and inter-house athletics coverages produced completely by ASM tech sub-units.
          </p>
        </div>

        {/* Master Active Cinema Theatre */}
        {activeVideo && (
          <div className="mb-12 bg-stone-950 text-stone-100 rounded-3xl overflow-hidden border-2 border-amber-500 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Screen Player Left (Col 1-8) */}
              <div className="lg:col-span-8 bg-black relative aspect-video select-none">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
                  title={activeVideo.title}
                  className="w-full h-full border-0 absolute top-0 left-0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>

              {/* Theatre Sidebar Right (Col 9-12) */}
              <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-stone-900/90 hover:bg-stone-900 transition-colors">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-1 rounded bg-amber-500 text-stone-950 text-[10px] font-black uppercase">
                      Playing Cinema {activeVideo.category}
                    </span>
                    <span className="text-stone-400 text-xs font-mono font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      {activeVideo.duration}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-white leading-snug mb-3">
                    {activeVideo.title}
                  </h3>

                  <p className="text-xs text-stone-300 leading-relaxed max-height-[160px] overflow-y-auto pr-1">
                    {activeVideo.description}
                  </p>
                </div>

                <div className="border-t border-stone-800 pt-5 mt-6 flex justify-between items-center text-xs font-semibold text-stone-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Published: {activeVideo.publishedAt}
                  </span>
                  <span className="text-amber-500 uppercase tracking-wider text-[10px] font-bold">
                    {activeVideo.viewCount || "Live Broadcast"}
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Search, Filters and Suggester Form Panel */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* Main Video Search + Listing (Col 1-8) */}
          <div className="xl:col-span-8 space-y-6">
            
            {/* Control Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white px-5 py-4 rounded-2xl border border-stone-200">
              
              {/* Search Field */}
              <div className="relative w-full sm:max-w-xs">
                <Search className="w-4.5 h-4.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Query titles, terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-4 py-2 text-xs font-bold font-sans text-stone-700 outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold tracking-wide transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-rose-900 text-white shadow"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>

            {/* Live Filter Grid List */}
            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => {
                      setActiveVideo(video);
                      const hubEl = document.getElementById("video-hub");
                      if (hubEl) {
                        window.scrollTo({ top: hubEl.offsetTop - 70, behavior: "smooth" });
                      }
                    }}
                    className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${
                      activeVideo?.id === video.id
                        ? "border-amber-500 ring-2 ring-amber-500/25"
                        : "border-stone-200"
                    }`}
                  >
                    <div>
                      {/* Image Thumbnail with Youtube watermark */}
                      <div className="relative aspect-video bg-stone-900 overflow-hidden">
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-stone-950 ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-2.5 right-2.5 bg-rose-950 text-white font-mono text-[9px] font-black px-2 py-0.5 rounded">
                          {video.duration === "Calculated" ? "HD" : video.duration}
                        </span>
                      </div>

                      <div className="p-4">
                        <span className="text-[9px] font-black tracking-widest text-amber-500 uppercase block mb-1">
                          {video.category}
                        </span>
                        <h4 className="font-extrabold text-sm text-stone-900 text-stone-950 group-hover:text-rose-900 transition-colors leading-snug line-clamp-2">
                          {video.title}
                        </h4>
                        <p className="text-xs text-stone-500 mt-1.5 leading-relaxed line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 py-3 bg-stone-50 border-t border-stone-100 flex justify-between text-[10px] text-stone-500 font-bold">
                      <span>📅 {video.publishedAt}</span>
                      <span className="text-rose-900">{video.viewCount}</span>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-stone-200">
                <Film className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h4 className="font-extrabold text-stone-700">No Videos Match Filter</h4>
                <p className="text-xs text-stone-500 mt-1 leading-none">Try modifying your query tags.</p>
              </div>
            )}

          </div>

          {/* Suggester Link Card Right (Col 9-12) */}
          <div className="xl:col-span-4 bg-stone-900 text-white rounded-3xl p-6 border border-stone-800 shadow-xl space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-rose-950 rounded-xl text-amber-400">
                <Youtube className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-sm tracking-tight text-white uppercase uppercase-widest">
                  Recommend School Video
                </h3>
                <p className="text-[10px] text-stone-400 font-semibold">Publish student-led coverage links</p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              If our sub-teams covered school sports encounters or dynamic science exhibitions, you can add the public YouTube ID here to showcase it immediately on our index board.
            </p>

            <form onSubmit={handleSuggestVideo} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase font-black text-stone-400 tracking-wider block mb-1">
                  Video Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sastralians Cricket Championship"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-xs font-medium text-stone-200 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-black text-stone-400 tracking-wider block mb-1">
                  YouTube Video Link or ID *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. dQw4w9WgXcQ or YouTube URL"
                  value={newYtId}
                  onChange={(e) => setNewYtId(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-xs font-medium text-stone-200 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-black text-stone-400 tracking-wider block mb-1">
                  Category *
                </label>
                <select
                  value={newCat}
                  onChange={(e) => setNewCat(e.target.value as any)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-xs font-semibold text-stone-300 outline-none focus:border-amber-400"
                >
                  <option value="Sports">Sports</option>
                  <option value="Academic">Academic</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Announcements">Announcements</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-black text-stone-400 tracking-wider block mb-1">
                  Short Description
                </label>
                <textarea
                  placeholder="Briefly state production parameters, directors, and dynamic milestones..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-xs font-medium text-stone-200 outline-none focus:border-amber-400 outline-none h-18 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Publish to Hub</span>
              </button>

              {suggestSuccess && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-2 text-emerald-400 animate-fadeIn text-xs">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Success! Recommended video is online. Check the board player!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
