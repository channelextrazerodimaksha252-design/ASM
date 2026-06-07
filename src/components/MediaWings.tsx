/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Camera, Radio, Palette, Cpu, Check, Users, ShieldAlert, Award } from "lucide-react";
import { motion } from "motion/react";

export default function MediaWings() {
  const operations = [
    {
      icon: Camera,
      title: "Cinematography Wing",
      subTitle: "Camera & Drone Flight Hub",
      color: "border-rose-900 bg-rose-50/30",
      iconColor: "text-rose-900 bg-rose-100",
      description: "Managing ultra-high-definition cameras, fast prime lenses, 3-axis stabilizer gimbals, and FPV drones during large school assemblies and grand sports alignments.",
      details: [
        "Multiple 4K UHD mirrorless workflows",
        "Dual-pilot drone mapping & aerial tracking",
        "Dynamic multi-cam switcher integration",
        "On-field color-profile adjustments (S-Log/C-Log)"
      ]
    },
    {
      icon: Radio,
      title: "Announcing & Voice Guild",
      subTitle: "Vocals & Live Public Broadcasters",
      color: "border-amber-600 bg-amber-50/20",
      iconColor: "text-amber-600 bg-amber-100",
      description: "Training the future voices of public assemblies, hosting academic panel debates, performing official commentary during cricket meets, and managing the public radio feeds.",
      details: [
        "Voice modulation & pronounciation tutorials",
        "Bilingual public commentary formats",
        "Podcast production & student interview setups",
        "Pre-event scriptwriting audits"
      ]
    },
    {
      icon: Palette,
      title: "Digital Design Grid",
      subTitle: "Visual Creators & UX Designers",
      color: "border-sky-700 bg-sky-50/20",
      iconColor: "text-sky-700 bg-sky-100",
      description: "Curating the aesthetic posture of Ananda Sastralaya. Designing high-impact posters, YouTube thumbnail templates, live screen graphics, and standard branding assets.",
      details: [
        "SVG vector school crest branding",
        "Typography pairings & color theory rules",
        "Figma layouts & print-media print configurations",
        "Social media grid arrangement pipelines"
      ]
    },
    {
      icon: Cpu,
      title: "Engineering & Operations",
      subTitle: "Broadcasting Switchboards & Storage Systems",
      color: "border-emerald-700 bg-emerald-50/20",
      iconColor: "text-emerald-700 bg-emerald-100",
      description: "Tuning continuous RTMP broadcast pipelines, server configurations, high bandwidth network setups, and secure backup cloud vaults containing school footage archives.",
      details: [
        "Low-latency YouTube stream distribution",
        "Local network sound board routing nodes",
        "RAID storage file system configuration",
        "Hardware backup grids and UPS systems"
      ]
    }
  ];

  return (
    <section id="media-wings" className="py-20 bg-stone-900 text-stone-100 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber-500 font-extrabold text-xs uppercase tracking-[0.25em] block mb-2">
            Inside Our Operations Room
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
            Media Sub-Wings & Craft
          </h2>
          <div className="w-16 h-1 bg-rose-700 mx-auto mt-4 rounded-full"></div>
          <p className="text-stone-400 mt-4 text-xs md:text-sm leading-relaxed">
            We operate in specialized sub-units that synchronize to provide real-time digital media services and premium coverage frameworks for all institutional activities.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {operations.map((wing, idx) => {
            const WingIcon = wing.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 md:p-8 rounded-3xl border-2 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-amber-500/5 hover:border-amber-550 flex flex-col justify-between ${wing.color}`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3.5 rounded-2xl ${wing.iconColor}`}>
                      <WingIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight">
                        {wing.title}
                      </h3>
                      <p className="text-xs text-amber-500 font-bold tracking-wider uppercase mt-0.5">
                        {wing.subTitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-stone-300 leading-relaxed">
                    {wing.description}
                  </p>
                </div>

                {/* Sub Features Bullet Grid */}
                <div className="mt-6 pt-6 border-t border-stone-800">
                  <span className="text-[10px] font-black tracking-widest text-stone-500 uppercase block mb-3">
                    Wing Core Protocols
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {wing.details.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-stone-400 font-medium">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Crew Meta Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-rose-950 to-stone-900 border border-rose-900/40 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex p-3 rounded-full bg-amber-500/20 text-amber-400 shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base md:text-lg font-black text-white">Adhering to High Production Frameworks</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed max-w-xl font-semibold">
                Every photograph, live video stream, and graphic vector layout undergo stringent review before publishing across the official ASM Digital Media Network.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-stone-950 px-4 py-2 rounded-2xl border border-stone-800 w-full md:w-auto text-center justify-center">
            <Users className="w-4 h-4 text-amber-400" />
            <span className="text-[11px] font-black text-amber-400 uppercase tracking-widest">
              Join Auditions This Term
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
