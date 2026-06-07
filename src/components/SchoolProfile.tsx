/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BookOpen, Award, GraduationCap, School, Milestone, HelpCircle, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SchoolProfile() {
  const [activeTab, setActiveTab ] = useState<"history" | "academics" | "sports" | "admissions">("history");

  const tabs = [
    { id: "history", label: "History & Foundation", icon: Milestone },
    { id: "academics", label: "Academic Hub", icon: GraduationCap },
    { id: "sports", label: "Sports & House Spirit", icon: Award },
    { id: "admissions", label: "Admissions & Intake", icon: BookOpen },
  ];

  return (
    <section id="school-profile" className="py-20 bg-stone-50 text-stone-800 scroll-mt-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 md:px-6"
      >
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-rose-900 font-extrabold text-xs uppercase tracking-[0.2em] block mb-2">
            The Golden Institution of Matugama
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            Ananda Sastralaya National School
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-stone-600 mt-4 text-sm md:text-base leading-relaxed">
            Founded in 1942 during a pivotal global era, Ananda Sastralaya Matugama has stood as a crown jewel of educational enlightenment in Western Province Sri Lanka, nurturing leaders, innovators, and creators.
          </p>
        </div>

        {/* Master Bento Layout & Dynamic Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Tabs (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col gap-2.5 w-full">
            {tabs.map((tab, idx) => {
              const IconComp = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-3.5 px-5 py-4 rounded-xl text-left font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                    activeTab === tab.id
                      ? "bg-rose-950 text-white border-rose-950 shadow-md translate-x-2"
                      : "bg-white text-stone-700 border-stone-200/80 hover:bg-stone-150/50 hover:border-stone-300"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      activeTab === tab.id ? "bg-amber-500 text-stone-950" : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}

            {/* General Fast Info Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 hidden lg:block"
            >
              <div className="flex items-center gap-2 mb-3">
                <School className="w-5 h-5 text-amber-600" />
                <span className="font-extrabold text-xs text-rose-950 uppercase tracking-wider">Fast Facts</span>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-stone-700">
                <li className="flex justify-between py-1 border-b border-amber-900/10">
                  <span>Type:</span>
                  <span className="text-rose-900">National School</span>
                </li>
                <li className="flex justify-between py-1 border-b border-amber-900/10">
                  <span>Grades:</span>
                  <span className="text-rose-900">Grade 1 - 13</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>District:</span>
                  <span className="text-rose-900">Kalutara (Matugama)</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Content Tab Container (Col 5-12 with luxurious details) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200/80 p-6 md:p-8 shadow-xl min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === "history" && (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🏛️</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-rose-950">Grand Foundation since 1942</h3>
                      <p className="text-xs text-stone-500 font-bold">Matugama's Academic Pioneer</p>
                    </div>
                  </div>

                  <p className="text-stone-600 leading-relaxed text-sm md:text-base font-medium">
                    Established with the vision of offering high-quality English and regional education to students in Pasdun Korale, Ananda Sastralaya Mathugama evolved rapidly from a small regional institute into a prominent national school facility. The institution was initiated by Buddhist educational pioneers who sought to uplift rural cultural foundations.
                  </p>

                  {/* Key Historic milestones */}
                  <div className="relative border-l-2 border-stone-150 pl-5 space-y-4 pt-2">
                    <div className="relative">
                      <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-amber-500 border-2 border-white ring-4 ring-amber-100"></div>
                      <span className="text-xs font-black text-rose-950">1942 - The Inauguration</span>
                      <p className="text-xs text-stone-500 mt-1">First operations launched with modest class structures and high enthusiasm in Kalutara.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-rose-900 border-2 border-white ring-4 ring-rose-100"></div>
                      <span className="text-xs font-black text-rose-950">1970s - State Administration Shift</span>
                      <p className="text-xs text-stone-500 mt-1">Officially integrated into national educational platforms, leading to building expansions and scientific laboratory modules.</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-amber-500 border-2 border-white ring-4 ring-amber-100"></div>
                      <span className="text-xs font-black text-rose-950">Present Day - National School Upgrade</span>
                      <p className="text-xs text-stone-500 mt-1">A highly modern tech-infused national campus with prominent visual wings, multi-sport stadiums, and 3000+ roster students.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "academics" && (
                <motion.div
                  key="academics"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🎓</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-rose-950">Academic Innovation & Streams</h3>
                      <p className="text-xs text-stone-500 font-bold">Nurturing Intellectual Frontiers</p>
                    </div>
                  </div>

                  <p className="text-stone-600 leading-relaxed text-sm md:text-base font-medium">
                    Ananda Sastralaya is equipped with fully fledged educational divisions supporting thousands of candidates preparing for General Certificate of Education (G.C.E.) Ordinary and Advanced level testing tracks.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/50">
                      <h4 className="font-extrabold text-sm text-amber-600 uppercase tracking-tight">Main Stream Modules</h4>
                      <ul className="text-xs font-bold text-stone-700 mt-2 space-y-1.5 list-disc pl-4">
                        <li>Grade 6 - 11 Sinhala Medium</li>
                        <li>Grade 6 - 11 English Medium Tracks</li>
                        <li>G.C.E. Ordinary Level Mastery focus</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/50">
                      <h4 className="font-extrabold text-sm text-amber-600 uppercase tracking-tight">Advanced Level Streams</h4>
                      <ul className="text-xs font-bold text-stone-700 mt-2 space-y-1.5 list-disc pl-4">
                        <li>Physical Science (Maths & Physics)</li>
                        <li>Biological Science & Agricultural Tech</li>
                        <li>Commerce & Arts divisions</li>
                        <li>Engineering & Bio systems Technology (Engineering stream)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "sports" && (
                <motion.div
                  key="sports"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🏆</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-rose-950">The Great Inter-House Rivalry</h3>
                      <p className="text-xs text-stone-500 font-bold">Sportsmanship & Cultural Integration</p>
                    </div>
                  </div>

                  <p className="text-stone-600 leading-relaxed text-sm font-medium">
                    Athletics are core to Sastralian colors. Every year, sports arenas ignite with competitive zeal during the Annual Inter-House Sports Meets. Our houses celebrate legendary kingdoms of ancient Ceylon:
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-4">
                    <div className="p-4 rounded-xl border shadow-sm bg-purple-50 border-purple-200 hover:scale-105 transition-transform duration-300">
                      <span className="text-purple-900 font-extrabold text-lg block tracking-wider">ANURA</span>
                      <span className="text-[10px] text-purple-500 uppercase tracking-widest font-black block mt-1">House Color: Purple</span>
                    </div>
                    <div className="p-4 rounded-xl border shadow-sm bg-amber-50 border-amber-200 hover:scale-105 transition-transform duration-300">
                      <span className="text-amber-600 font-extrabold text-lg block tracking-wider">ROHANA</span>
                      <span className="text-[10px] text-amber-600 uppercase tracking-widest font-black block mt-1">House Color: Yellow</span>
                    </div>
                    <div className="p-4 rounded-xl border shadow-sm bg-emerald-50 border-emerald-200 hover:scale-105 transition-transform duration-300">
                      <span className="text-emerald-700 font-extrabold text-lg block tracking-wider">THISSA</span>
                      <span className="text-[10px] text-emerald-600 uppercase tracking-widest font-black block mt-1">House Color: Green</span>
                    </div>
                    <div className="p-4 rounded-xl border shadow-sm bg-sky-50 border-sky-300 hover:scale-105 transition-transform duration-300">
                      <span className="text-sky-700 font-extrabold text-lg block tracking-wider">WIJITHA</span>
                      <span className="text-[10px] text-sky-500 uppercase tracking-widest font-black block mt-1">House Color: Blue</span>
                    </div>
                  </div>

                  <p className="text-stone-500 text-xs italic">
                    * Note: The ASM Media Unit works around the clock during athletic month, conducting live drone observations, broadcast feeds, and publishing instant UHD photograph storyboards.
                  </p>
                </motion.div>
              )}

              {activeTab === "admissions" && (
                <motion.div
                  key="admissions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">📝</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-rose-950">Intake Norms & Allocations</h3>
                      <p className="text-xs text-stone-500 font-bold">Government-Regulated Standard Entrance</p>
                    </div>
                  </div>

                  <p className="text-stone-600 leading-relaxed text-sm md:text-base font-medium">
                    As our school holds premier "National School" status, standard student admission complies with circular directives set forth by the Ministry of Education Sri Lanka.
                  </p>

                  <div className="space-y-3 font-semibold text-stone-700 text-xs">
                    <div className="flex items-start gap-2 p-3 bg-stone-50 rounded-lg">
                      <div className="w-5 h-5 flex items-center justify-center bg-rose-900 text-white rounded-full font-bold text-[10px]">1</div>
                      <p className="flex-1 mt-0.5"><span className="font-extrabold text-rose-955">Grade 1 Admission:</span> Primary intake controlled via standard circular distances and certified alumni preference protocols.</p>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-stone-50 rounded-lg">
                      <div className="w-5 h-5 flex items-center justify-center bg-rose-900 text-white rounded-full font-bold text-[10px]">2</div>
                      <p className="flex-1 mt-0.5"><span className="font-extrabold text-rose-955">Grade 5 Scholarship:</span> Entrance threshold score limits for Grade 6 allocation are released annually by the Department of Examinations.</p>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-stone-50 rounded-lg">
                      <div className="w-5 h-5 flex items-center justify-center bg-rose-900 text-white rounded-full font-bold text-[10px]">3</div>
                      <p className="flex-1 mt-0.5"><span className="font-extrabold text-rose-955">Advanced Level Enrolment:</span> Admission based on G.C.E O/L examination standards in respective science, arts, or commercial subjects.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
