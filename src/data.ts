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
    imageUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/653710892_1342910307858445_3664668031245211262_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1387&ctp=s2048x1387&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=e3aoy5SHl5QQ7kNvwGC2uwr&_nc_oc=AdoJc6mjgZY8C0VEqPYHsWkmzrSqmaABLz34cYyMU66U77ZwZYw3Ewz96dKJyGfzlvI&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=SbnIFqeTFbegZgHKfGyh5g&_nc_ss=7a289&oh=00_Af9yk7crFPnwOrmrbDMyQTaq2l8Vl_jF5w1POOgi6BzQHw&oe=6A2ACD72",
    description: "High-speed track capture, vibrant house parades, and emotional finishes of our young athletes from Anura and Rohana houses. Covered live by Sastralians Photography.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2025-03-01"
  },
  {
    id: "g2",
    title: "ASM Road Race Championship 2025",
    category: "Sports",
    imageUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/630872452_1314546794028130_270777615388225402_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x1000&ctp=s1500x1000&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7ZECk9CQMMkQ7kNvwGGC2RO&_nc_oc=AdqvVl9oB-pTGPhAWcp2CW161u6HhHOW13fARHI4H4mLhyRZ1cAyPe9ewcszDUCIeQQ&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=T07gIbocj_JVo1us4tssvA&_nc_ss=7a289&oh=00_Af8cjT6lO8L1tQsEN6WAHf10B43AR2L1vZL5SiFLWyNwgQ&oe=6A2AC79F",
    description: "Adrenaline-fueled early morning coverage across Mathugama highways during the annual school marathon. Full photo series edited and presented by the Photography Wing.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2025-02-20"
  },
  {
    id: "g3",
    title: "Sashtra Music Concert 2024 Orchestrals",
    category: "Aesthetics",
    imageUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/654433184_1342905027858973_2988668005743979430_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1387&ctp=s2048x1387&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fRsG1EuxktcQ7kNvwFLY9yZ&_nc_oc=AdqISXQbYk6sjTyiYutizMMun8WVbMDIizvR6ba4LZbI_onun06VI1QkAUq4eVA0f_Q&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=RhhsbxNqq1qMj898vZiCoQ&_nc_ss=7a289&oh=00_Af-NLbvPUhzK4mP4WmN3SjH5PRdjLZBl64WAbQ0sZ36hIQ&oe=6A2AB562",
    description: "Mesmerizing stage views, traditional fusion instrumentation, and orchestral ensembles showcasing artistic brilliance at our premier auditory event night.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2024-10-20"
  },
  {
    id: "g4",
    title: "Anada Sara Web Radio Station Inauguration",
    category: "Academic",
    imageUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/572274763_1230730029076474_3349472139845522043_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x809&ctp=s1200x809&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DVRhbCobFrQQ7kNvwHN-wYo&_nc_oc=AdrQseS2IQCMjlsAadinVjPcWZXJc4kf5sc1-wLlh_xKMKELK7x7t8WHsLwxiJeks2M&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=g4LYagSRO7R1nP4D0roeuw&_nc_ss=7a289&oh=00_Af9S-nShCgSQY8UkwS7wqgzkZsYIScSDDXRdWpH7QlkrlA&oe=6A2ADAF1",
    description: "Launch party, live desk operations, student broadcaster portraits, and technical setup shots of Sri Lanka's leading All Island Web Radio Station.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2024-11-12"
  },
  {
    id: "g5",
    title: "National Cadet Corps High Guard Badging",
    category: "Portraits",
    imageUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/653009613_1342904867858989_5454104379772455323_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1800&ctp=s1200x1800&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YhC2ex3qjqQQ7kNvwEntICW&_nc_oc=Adqo-cAPxqaXCuaodjw7YsTjOKKFXwheFM_YuoCwlTIPLfDOdbCyHM9vGv50EsDYJHM&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=zRsyS6X-K3AMyLU7XW9e5Q&_nc_ss=7a289&oh=00_Af88Sb4CdgG22vWN5Uk_OsqfYH5Z9W2mrn0zLbJ7v0B4Hw&oe=6A2AD8C9",
    description: "A series of high-contrast, prestigious portraits celebrating our 12th Battalion Senior Non-Commissioned Officers (RQ) and cadet squad members in active field gear.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2024-09-08"
  },
  {
    id: "g6",
    title: "World Children's Day 2024 Festival",
    category: "Exhibitions",
    imageUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/653705095_1344277747721701_4136075170715863429_n.jpg?stp=c342.0.1365.1365a_dst-jpg_tt6&cstp=mx1365x1365&ctp=s206x206&_nc_cat=103&ccb=1-7&_nc_sid=714c7a&_nc_ohc=5GVIPnSzg-kQ7kNvwE4FLhB&_nc_oc=AdrvARxmSZFnTECx9yC3xTd_DGDyXjdKU6fuj9A6YiSTqWWQKB1w7zqI14RhA508MvY&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=IuHIaof7Vm3DmfgxyIASPQ&_nc_ss=7a289&oh=00_Af-lOIm6xJom4Lj510XOtdD5EwF_ElPCtzi5ADywEPHog&oe=6A2AC3B6",
    description: "Full event captures featuring delightful faces, stage plays, talent forums, and gift distributions at the Mathugama town-hall celebrations.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2024-10-01"
  },
  {
    id: "g7",
    title: "Sastralians Photography Masterclass & Workshop",
    category: "Academic",
    imageUrl: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/562353488_1222351156581028_6306910743439097435_n.jpg?stp=dst-jpg_tt6&cstp=mx960x647&ctp=s960x647&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iCQDmkglAAIQ7kNvwHAWYK5&_nc_oc=AdpDVbXdsqBan6rVNBA9YVHvbEHVsZd79jY20VXQabTSQvOn88bQ6hsT7c2YG_F2_Ak&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=_hLq0bQ49tUcbbndN8qIwQ&_nc_ss=7a289&oh=00_Af8UPcY76-a_MON0dUFE4vRZHxmut8j-Fu8IYJ_PZygecA&oe=6A2ABBA0",
    description: "Practical outdoor camera training, lighting capture angles, and digital post-production clinics hosted by Ananda Sastralaya senior photography mentors.",
    driveLink: "https://www.facebook.com/sastraliansphotography/photos/",
    date: "2024-06-15"
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
