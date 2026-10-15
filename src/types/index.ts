export interface NavItem {
  id: string;
  label: string;
  /** Path relative to the site root, without a leading slash. Empty string = home. */
  href: string;
  /** Inner markup of a 24x24 stroke SVG icon. */
  icon: string;
  emoji: string;
  /** Title shown on the home page quick-access card (defaults to `label`). */
  cardTitle?: string;
  description: string;
  keywords: string[];
}

export interface Announcement {
  id: string;
  title: string;
  summary: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  author?: string;
}

export type EventType = "event" | "holiday" | "birthday";

export interface CompanyEvent {
  id: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  type: EventType;
  location?: string;
}
