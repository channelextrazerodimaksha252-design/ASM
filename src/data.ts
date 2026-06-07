/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Video, GalleryItem, CrewMember, Notice, FAQItem } from "./types";

export const SCHOOL_LOGO = "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/874fff253e55410c8e61cd62fc74d667c6c8d172.jpg";
export const MEDIA_LOGO = "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c61fb9004af2672d9f5f5ee81d07bef863168f7f.jpg";

export const INITIAL_VIDEOS: Video[] = [
  {
    id: "v1",
    youtubeId: "XvD6tccLUWA",
    title: "Sastralians' Sports Meet 2025 - Official After Movie",
    category: "Sports",
    description: "The official high-dynamic recap video capturing the peak moments, track finals, and house celebrations of the Sastralians Inter-House Sports Meet 2025.",
    duration: "4:56",
    publishedAt: "2025-03-15",
    viewCount: "3.2K Views"
  },
  {
    id: "v2",
    youtubeId: "SDlyDyd7QfA",
    title: "Sastralians' Inter-House Sports Meet 2025 - Live Broadcast (Part 1)",
    category: "Sports",
    description: "Tune into the professional multi-cam and drone live stream of the athletics meet part 01, featuring the opening parade and track matches of Anura and Rohana houses.",
    duration: "33:00",
    publishedAt: "2025-03-01",
    viewCount: "4.8K Views"
  },
  {
    id: "v3",
    youtubeId: "aXpoL-gvvZ4",
    title: "Sastralians' Sashtra Music Concert 2024 - Full Program",
    category: "Cultural",
    description: "A spectacular showcase of classic aesthetic orchestra, choral harmonies, and traditional dances presented by local school student ensembles.",
    duration: "3:09:00",
    publishedAt: "2024-10-20",
    viewCount: "5.5K Views"
  },
  {
    id: "v4",
    youtubeId: "ZxmYJaskoAk",
    title: "Ananda Sastralaya Mathugama - 84th Anniversary Jubilee Commemoration",
    category: "Announcements",
    description: "Celebrating 84 glorious years of educational legacy, heritage tribute, and leadership building in Mathugama town.",
    duration: "3:37",
    publishedAt: "2025-02-14",
    viewCount: "2.1K Views"
  },
  {
    id: "v5",
    youtubeId: "U7cuo6Mb-eM",
    title: "Student Parliament Guild Election & Investiture Ceremony",
    category: "Academic",
    description: "Multi-camera broadcast capturing the investiture oath of the school's high-command student parliament delegates.",
    duration: "1:03",
    publishedAt: "2024-07-22",
    viewCount: "1.2K Views"
  },
  {
    id: "v6",
    youtubeId: "rIfHLO2blZU",
    title: "Sastralian's Media Unit Official App (ASMU APP) Debut Details",
    category: "Announcements",
    description: "Official guide video showing capabilities, tech stack, and content flow of the brand-new school media application.",
    duration: "3:26",
    publishedAt: "2024-05-10",
    viewCount: "950 Views"
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: "Sastralians Inter House Sports Meet 2025",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&q=80&w=1200",
    description: "High-speed track capture, vibrant house parades, and emotional finishes of our young athletes from Anura and Rohana houses. Covered live by Sastralians Photography.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2025-03-01"
  },
  {
    id: "g2",
    title: "ASM Road Race Championship 2025",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=1200",
    description: "Adrenaline-fueled early morning coverage across Mathugama highways during the annual school marathon. Full photo series edited and presented by the Photography Wing.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2025-02-20"
  },
  {
    id: "g3",
    title: "Sashtra Music Concert 2024 Orchestrals",
    category: "Aesthetics",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    description: "Mesmerizing stage views, traditional fusion instrumentation, and orchestral ensembles showcasing artistic brilliance at our premier auditory event night.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2024-10-20"
  },
  {
    id: "g4",
    title: "Anada Sara Web Radio Station Inauguration",
    category: "Academic",
    imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200",
    description: "Launch party, live desk operations, student broadcaster portraits, and technical setup shots of Sri Lanka's leading All Island Web Radio Station.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2024-11-12"
  },
  {
    id: "g5",
    title: "National Cadet Corps High Guard Badging",
    category: "Portraits",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    description: "A series of high-contrast, prestigious portraits celebrating our 12th Battalion Senior Non-Commissioned Officers (RQ) and cadet squad members in active field gear.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2024-09-08"
  },
  {
    id: "g6",
    title: "World Children's Day 2024 Festival",
    category: "Exhibitions",
    imageUrl: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=1200",
    description: "Full event captures featuring delightful faces, stage plays, talent forums, and gift distributions at the Mathugama town-hall celebrations.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2024-10-01"
  }
];

export const CREW_MEMBERS: CrewMember[] = [
  {
    id: "c1",
    name: "Mr. Kumara Kravita",
    role: "Teacher-in-Charge",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    subUnit: "Engineering & Ops",
    bio: "Guiding the digital transformation of Ananda Sastralaya's Media Unit. Specializes in audio-visual curriculum building and national broadcasting ethics."
  },
  {
    id: "c2",
    name: "Suhada Nimsara",
    role: "President",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300",
    subUnit: "Cinematography",
    bio: "Oversees general operations, live stream integrations, and camera-to-cloud workflows. Focused on cinematic video storytelling and multi-camera sports setups."
  },
  {
    id: "c3",
    name: "Thisula Pansilu",
    role: "Co-President & Head of Audio",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    subUnit: "Announcing & Voice",
    bio: "Primary public announcer for high-profile school assemblies and local matches. Managing voice training programs and radio broadcast consoles."
  },
  {
    id: "c4",
    name: "Dilitha Insadu",
    role: "Vice President & Lead Designer",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    subUnit: "Graphic Core",
    bio: "Directs all UI layouts, social media posters, overlays, and color palettes. Enthusiastic about Swiss modernism and clean visual layout structures."
  },
  {
    id: "c5",
    name: "Rashmika Dananjaya",
    role: "Chief Editor & Colorist",
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300",
    subUnit: "Cinematography",
    bio: "Fascinated by advanced non-linear editing pipelines, grading raw sports footages, and synchronizing rich school orchestra backtracks."
  },
  {
    id: "c6",
    name: "Menuli Senara",
    role: "Head of Public Relations",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
    subUnit: "Announcing & Voice",
    bio: "Coordinates event bookings, social updates, and invitations. Ensures Sastralians stay closely connected to every single announcement."
  }
];

export const INITIAL_NOTICES: Notice[] = [
  {
    id: "n1",
    title: "Urgent: Sports Meet Photo Gallery Archive Online",
    content: "The complete UHD photo vault of the 2026 Inter-House Sports Meet has been cataloged onto our designated Cloud Drive. Students can capture and extract photos using the secure gallery cards.",
    category: "Urgent",
    date: "2026-06-06",
    author: "Suhada Nimsara (President)"
  },
  {
    id: "n2",
    title: "Media Recruitment Term 2 Orientation",
    content: "Interviews for the Digital Design Grid & Cinematography Wing for Grade 8, 9, and 10 students will be held on Tuesday, June 9th at the main Media Lab starting from 2:00 PM.",
    category: "General",
    date: "2026-06-05",
    author: "Mr. Kumara Kravita (TIC)"
  },
  {
    id: "n3",
    title: "A/L Commerce Seminar Broadcast Schedule",
    content: "The upcoming National-level A/L Economics seminars will be live-streamed directly over our ASM Network Youtube handle. Sub-crews are assigned to final checks on incoming audio channels.",
    category: "Schedule",
    date: "2026-06-03",
    author: "Dilitha Insadu (VP)"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "f1",
    question: "How can a student apply to join the Media Unit?",
    answer: "Formal student recruitments take place at the start of each academic term, with general orientation sessions in January and June. Registered students starting from Grade 6 can attend auditions, showcasing skills in announcing, drawing, or technical computing.",
    category: "Auditions"
  },
  {
    id: "f2",
    question: "Do students receive certified technical training?",
    answer: "Absolutely. Under Mr. Kumara Kravita and external media veterans, we coordinate structured weekend engineering bootcamps. Students learn high-dynamic cinematography, micro-mixing audio desks, and advanced design softwares.",
    category: "General"
  },
  {
    id: "f3",
    question: "How do we request the Media Unit to cover an upcoming event?",
    answer: "Clubs, school sports leagues, or guest coordinate bodies should complete the 'Coverage Booking Request' form at least 5 business days prior. Our operations board reviews availability and deploys a sub-crew of photography and sound techs.",
    category: "Event Coverage"
  },
  {
    id: "f4",
    question: "What hardware infrastructure does the ASM Network operate with?",
    answer: "We operate multiple 4K action cameras, professional prime lenses, modular drone setups, and a digital master control switcher featuring high-bandwidth network pipelines to support smooth live streaming.",
    category: "Hardware"
  }
];
