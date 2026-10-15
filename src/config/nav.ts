import type { NavItem } from "../types";

export const SITE = {
  name: "Devexim",
  brand: "devexim",
  tagline: "TEAM INTRANET",
  initial: "D",
} as const;

// Single source of truth for the sidebar, breadcrumb and home-page quick access cards.
// To add a page: add an item here, create pages/<id>.html, and list it in vite.config.ts.
export const NAV_ITEMS: readonly NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "",
    icon: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    emoji: "🏠",
    description: "Your intranet start page",
    keywords: ["home", "start"],
  },
  {
    id: "people",
    label: "Our People",
    href: "pages/people.html",
    icon: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.3c2.2.7 3.5 2.6 3.5 5.7"/>',
    emoji: "👥",
    description: "Find your teammates",
    keywords: ["people", "employee", "team", "colleagues"],
  },
  {
    id: "announcements",
    label: "Announcements",
    href: "pages/announcements.html",
    icon: '<path d="M3 11v2a1 1 0 0 0 1 1h3l8 5V5L7 10H4a1 1 0 0 0-1 1z"/><path d="M18.5 9a4 4 0 0 1 0 6"/>',
    emoji: "📢",
    description: "Company news and updates",
    keywords: ["announcements", "news", "company", "updates", "notices"],
  },
  {
    id: "resources",
    label: "Resources",
    href: "pages/resources.html",
    icon: '<path d="M3 6a1 1 0 0 1 1-1h5l2 2h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>',
    emoji: "📁",
    cardTitle: "Company Resources",
    description: "Documents and policies",
    keywords: ["resources", "documents", "policies", "files"],
  },
  {
    id: "events",
    label: "Events",
    href: "pages/events.html",
    icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    emoji: "📅",
    cardTitle: "Events & Holidays",
    description: "Important dates and events",
    keywords: ["events", "holidays", "calendar", "birthdays"],
  },
];
