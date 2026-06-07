/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  category: "Sports" | "Academic" | "Cultural" | "Announcements";
  description: string;
  duration: string;
  publishedAt: string;
  viewCount?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Sports" | "Aesthetics" | "Academic" | "Exhibitions" | "Portraits";
  imageUrl: string;
  description: string;
  driveLink: string;
  date: string;
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  subUnit: "Cinematography" | "Announcing & Voice" | "Graphic Core" | "Engineering & Ops";
  bio: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  category: "Urgent" | "General" | "Schedule";
  date: string;
  author: string;
}

export interface Booking {
  id: string;
  clubName: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  requirements: string[]; // e.g. "Photography", "Video", "Live Audio", "Social Cover"
  description: string;
  status: "Pending" | "Approved" | "In Review" | "Completed";
  createdAt: string;
  contactName: string;
  contactEmail: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Auditions" | "Hardware" | "Event Coverage";
}
