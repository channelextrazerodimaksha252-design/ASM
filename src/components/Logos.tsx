/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Matugama Ananda Sastralaya National School Crest (Vector Version)
 * Features 32 flame-like sunburst rays, maroon core, golden oil lamp (Pahana)
 * with animated flickering flame, and Sinhala text paths.
 */
export const SchoolLogo: React.FC<LogoProps> = ({ size = "100%", className, ...props }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Core Gradients */}
        <radialGradient id="school-maroon-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#aa1b33" />
          <stop offset="70%" stopColor="#7a0d1e" />
          <stop offset="100%" stopColor="#5c0612" />
        </radialGradient>

        <linearGradient id="school-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="30%" stopColor="#F5B041" />
          <stop offset="70%" stopColor="#DC7633" />
          <stop offset="100%" stopColor="#A04000" />
        </linearGradient>

        <linearGradient id="school-flame-grad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#E65100" />
          <stop offset="50%" stopColor="#F5B041" />
          <stop offset="85%" stopColor="#FFF9C4" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>

        <filter id="school-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Text Paths */}
        {/* Path for upper text: semi-circle curving over the top */}
        <path
          id="school-text-path-top"
          d="M 105,250 A 145,145 0 1,1 395,250"
          fill="none"
        />
        {/* Path for lower text: semi-circle curving under the bottom */}
        {/* We invert start and end to make bottom text read left-to-right */}
        <path
          id="school-text-path-bottom"
          d="M 105,250 A 145,145 0 0,0 395,250"
          fill="none"
        />

        {/* Single Wave-like Organic Ray of Sunburst Ring */}
        <path
          id="school-sunray"
          d="M 250,92 C 242,75 258,55 250,15 C 242,55 258,75 250,92 Z"
          fill="url(#school-gold-grad)"
        />
      </defs>

      <style>
        {`
          @keyframes schoolFlameFlicker {
            0% { transform: scale(1) rotate(0deg); opacity: 0.95; }
            20% { transform: scale(1.08, 0.95) rotate(-1deg); opacity: 1; }
            40% { transform: scale(0.96, 1.05) rotate(1deg); opacity: 0.90; }
            60% { transform: scale(1.05, 0.98) rotate(-0.5deg); opacity: 0.98; }
            80% { transform: scale(0.98, 1.02) rotate(0.5deg); opacity: 0.93; }
            100% { transform: scale(1) rotate(0deg); opacity: 0.95; }
          }
          .animate-school-flame {
            animation: schoolFlameFlicker 1.8s ease-in-out infinite;
            transform-origin: 250px 220px;
          }
          .school-crest-text {
            font-family: 'Inter', 'Noto Sans Sinhala', sans-serif;
            font-weight: 800;
            fill: #FFFFFF;
            letter-spacing: 0.15em;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }
          .school-sunburst {
            filter: drop-shadow(0px 2px 5px rgba(0,0,0,0.3));
          }
        `}
      </style>

      {/* 32 Golden Sunburst Flame Rays */}
      <g className="school-sunburst">
        {Array.from({ length: 32 }).map((_, i) => (
          <use
            key={i}
            href="#school-sunray"
            transform={`rotate(${i * 11.25}, 250, 250)`}
          />
        ))}
        {/* Outer Ring joining the rays */}
        <circle cx="250" cy="250" r="238" fill="none" stroke="url(#school-gold-grad)" strokeWidth="3" />
        <circle cx="250" cy="250" r="168" fill="none" stroke="url(#school-gold-grad)" strokeWidth="5.5" />
      </g>

      {/* Main Maroon Core Badge */}
      <circle
        cx="250"
        cy="250"
        r="165"
        fill="url(#school-maroon-grad)"
        stroke="#ffd54f"
        strokeWidth="3.5"
      />

      {/* Curved Text Layers */}
      <g className="school-crest-text">
        {/* Sinhala: ආලෝකෝ උදපාදි */}
        <text fontSize="26.5" dy="-3">
          <textPath href="#school-text-path-top" startOffset="50%" textAnchor="middle">
            ආලෝකෝ උදපාදි
          </textPath>
        </text>

        {/* Sinhala: මතු ආනන්ද ශාස්ත්‍රාලය */}
        <text fontSize="22" dy="25">
          <textPath href="#school-text-path-bottom" startOffset="50%" textAnchor="middle">
            මතු / ආනන්ද ශාස්ත්‍රාලය
          </textPath>
        </text>
      </g>

      {/* Central Oil Lamp (Pahana) Shape Group */}
      <g id="center-lamp">
        {/* Golden stand shadow/pedestal */}
        <path
          d="M 215,310 C 215,335 285,335 285,310 Z"
          fill="url(#school-gold-grad)"
          stroke="#4e1b00"
          strokeWidth="1.5"
        />
        <ellipse cx="250" cy="330" rx="30" ry="10" fill="url(#school-gold-grad)" stroke="#4e1b00" strokeWidth="1.5" />

        {/* Lamp Base Connection Cylinder */}
        <rect x="242" y="295" width="16" height="20" fill="url(#school-gold-grad)" stroke="#4e1b00" strokeWidth="1.5" />

        {/* Main Golden Oil Bowl */}
        <path
          d="M 170,270 C 170,305 200,312 250,312 C 300,312 330,305 330,270 C 330,255 170,255 170,270 Z"
          fill="url(#school-gold-grad)"
          stroke="#5e2b00"
          strokeWidth="2"
        />
        {/* Inner Oil Level Shape */}
        <ellipse cx="250" cy="265" rx="74" ry="12" fill="#E59866" opacity="0.8" />
        <ellipse cx="250" cy="263" rx="70" ry="9" fill="#FADBD8" opacity="0.5" />

        {/* Glowing aura around flame */}
        <circle
          cx="250"
          cy="195"
          r="48"
          fill="#FFF59D"
          opacity="0.15"
          filter="url(#school-glow)"
        />
        <circle
          cx="250"
          cy="195"
          r="28"
          fill="#FFD54F"
          opacity="0.25"
          filter="url(#school-glow)"
        />

        {/* The Animated Flickering Flame (Teardrop Shape) */}
        <path
          className="animate-school-flame"
          d="M 250,135 C 230,185 220,225 250,225 C 280,225 270,185 250,135 Z"
          fill="url(#school-flame-grad)"
          filter="url(#school-glow)"
        />
      </g>
    </svg>
  );
};


/**
 * ASMU Media Unit Logo Component (Vector Version)
 * Features brick-red core, golden circular rim, school name arching top,
 * central visual studio headphones wrapping a broadcaster microphone, and block ASMU MEDIA tags.
 */
export const MediaLogo: React.FC<LogoProps> = ({ size = "100%", className, ...props }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Rich Metallic Golds */}
        <linearGradient id="media-gold-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE07D" />
          <stop offset="40%" stopColor="#ECC14C" />
          <stop offset="70%" stopColor="#C49B28" />
          <stop offset="100%" stopColor="#8A6615" />
        </linearGradient>

        <linearGradient id="media-gold-bevel" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8A6615" />
          <stop offset="50%" stopColor="#ECC14C" />
          <stop offset="100%" stopColor="#FFF2B2" />
        </linearGradient>

        {/* Deep Brick Red (Media Theme) */}
        <radialGradient id="media-red-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7a101b" />
          <stop offset="70%" stopColor="#4c070e" />
          <stop offset="100%" stopColor="#2b0004" />
        </radialGradient>

        {/* Text Arc */}
        <path
          id="media-text-path"
          d="M 75,250 A 175,175 0 1,1 425,250"
          fill="none"
        />

        <filter id="media-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.4" />
        </filter>
        <filter id="media-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <style>
        {`
          @keyframes mediaMicPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
          }
          .animate-media-mic {
            animation: mediaMicPulse 2.5s ease-in-out infinite;
            transform-origin: 250px 220px;
          }
          .media-text-top {
            font-family: 'Inter', sans-serif;
            font-weight: 800;
            fill: url(#media-gold-bevel);
            letter-spacing: 0.12em;
          }
          .media-text-bold {
            font-family: 'Space Grotesk', 'Inter', sans-serif;
            font-weight: 900;
            fill: url(#media-gold-primary);
            letter-spacing: 0.05em;
          }
        `}
      </style>

      {/* Main Backing Badge Container with thick Golden Ring border */}
      <circle
        cx="250"
        cy="250"
        r="240"
        fill="url(#media-gold-primary)"
        filter="url(#media-shadow)"
      />
      <circle
        cx="250"
        cy="250"
        r="228"
        fill="url(#media-red-grad)"
        stroke="url(#media-gold-bevel)"
        strokeWidth="4"
      />

      {/* Arching Top English Text */}
      <g className="media-text-top" filter="url(#media-shadow)">
        <text fontSize="14" dy="-6">
          <textPath href="#media-text-path" startOffset="50%" textAnchor="middle">
            ANANDA SASTRALAYA NATIONAL SCHOOL MATHUGAMA
          </textPath>
        </text>
      </g>

      <circle cx="250" cy="250" r="195" fill="none" stroke="url(#media-gold-primary)" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.6" />

      {/* Center Broadcast Equipment (Broadcaster Mic + Studio Headphones) Group */}
      <g className="animate-media-mic" id="center-mic-headphones" filter="url(#media-shadow)">
        
        {/* 1. Broadcaster DJ/Studio headphones band */}
        <path
          d="M 152,228 A 110,110 0 0,1 348,228"
          fill="none"
          stroke="url(#media-gold-primary)"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M 162,215 A 98,98 0 0,1 338,215"
          fill="none"
          stroke="#1f0205"
          strokeWidth="3.5"
          opacity="0.8"
        />

        {/* Headband adjustment brackets */}
        <rect x="145" y="222" width="12" height="15" rx="3" fill="url(#media-gold-primary)" />
        <rect x="343" y="222" width="12" height="15" rx="3" fill="url(#media-gold-primary)" />

        {/* 2. Ear Cups (Left and Right) */}
        {/* Left earphone ear cup */}
        <g transform="translate(136, 218) rotate(15)">
          <rect x="-15" y="0" width="30" height="60" rx="15" fill="url(#media-gold-primary)" />
          <rect x="-8" y="5" width="16" height="50" rx="8" fill="#1f0205" />
          <circle cx="0" cy="30" r="4" fill="url(#media-gold-bevel)" />
        </g>
        {/* Right earphone ear cup */}
        <g transform="translate(364, 218) rotate(-15)">
          <rect x="-15" y="0" width="30" height="60" rx="15" fill="url(#media-gold-primary)" />
          <rect x="-8" y="5" width="16" height="50" rx="8" fill="#1f0205" />
          <circle cx="0" cy="30" r="4" fill="url(#media-gold-bevel)" />
        </g>

        {/* Inner golden ring for the mic */}
        <circle cx="250" cy="220" r="62" fill="none" stroke="url(#media-gold-primary)" strokeWidth="4" />
        <circle cx="250" cy="220" r="56" fill="#160103" opacity="0.4" />

        {/* 3. Broadcaster Condenser Mic */}
        {/* Mic Capsule Base / Mount */}
        <path
          d="M 218,220 L 218,245 C 218,265 282,265 282,245 L 282,220 Z"
          fill="none"
          stroke="url(#media-gold-primary)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <rect x="245" y="261" width="10" height="30" fill="url(#media-gold-primary)" />
        <ellipse cx="250" cy="291" rx="25" ry="7" fill="url(#media-gold-primary)" stroke="#220003" strokeWidth="1" />

        {/* Mic capsule cylinder body */}
        <rect x="228" y="170" width="44" height="65" rx="14" fill="url(#media-gold-bevel)" stroke="#2b0004" strokeWidth="2" />
        {/* Mic mesh grid background */}
        <rect x="232" y="174" width="36" height="42" rx="10" fill="#200003" />

        {/* Mic metal grilles (mesh lines) */}
        <g stroke="url(#media-gold-primary)" strokeWidth="1.5" opacity="0.85">
          {/* Horizontal grid wires */}
          <line x1="234" y1="181" x2="266" y2="181" />
          <line x1="233" y1="188" x2="267" y2="188" />
          <line x1="232" y1="195" x2="268" y2="195" />
          <line x1="233" y1="202" x2="267" y2="202" />
          <line x1="234" y1="209" x2="266" y2="209" />
          {/* Vertical wires */}
          <line x1="239" y1="174" x2="239" y2="216" />
          <line x1="244" y1="174" x2="244" y2="216" />
          <line x1="250" y1="174" x2="250" y2="216" />
          <line x1="256" y1="174" x2="256" y2="216" />
          <line x1="261" y1="174" x2="261" y2="216" />
        </g>

        {/* Mic Horizontal Metal Belt */}
        <rect x="227" y="212" width="46" height="8" fill="url(#media-gold-primary)" />
        <circle cx="250" cy="216" r="3" fill="#1f0205" />
      </g>

      {/* Massive Bold "ASMU" and "MEDIA" Typography at bottom */}
      <g filter="url(#media-shadow)">
        {/* ASMU block text */}
        <text
          x="250"
          y="370"
          textAnchor="middle"
          className="media-text-bold"
          fontSize="65"
          fill="url(#media-gold-bevel)"
        >
          ASMU
        </text>

        {/* Underline decorative bar */}
        <rect
          x="140"
          y="384"
          width="220"
          height="5.5"
          rx="2.5"
          fill="url(#media-gold-primary)"
        />

        {/* MEDIA text */}
        <text
          x="250"
          y="418"
          textAnchor="middle"
          className="media-text-bold"
          fontSize="26"
          letterSpacing="0.25em"
          fill="url(#media-gold-bevel)"
        >
          MEDIA
        </text>
      </g>
    </svg>
  );
};
