import { announcementItem, eventItem, listWrap } from "../components/lists";
import { emptyState } from "../components/emptyState";
import { initShortcutSearch } from "../components/search";
import { NAV_ITEMS } from "../config/nav";
import { announcements } from "../data/announcements";
import { events } from "../data/events";
import { escapeHtml, qs } from "../utils/dom";
import { todayIso } from "../utils/date";
import { url } from "../utils/url";

const PANEL_LIMIT = 3;

function renderShortcuts(): void {
  const grid = qs("#shortcut-grid");
  if (!grid) return;

  grid.innerHTML = NAV_ITEMS.filter((item) => item.id !== "home")
    .map(
      (item) => `
      <a class="shortcut-card" href="${url(item.href)}" data-search="${escapeHtml(item.keywords.join(" "))}">
        <span class="shortcut-icon" aria-hidden="true">${item.emoji}</span>
        <span class="card-arrow" aria-hidden="true">↗</span>
        <strong>${escapeHtml(item.cardTitle ?? item.label)}</strong>
        <small>${escapeHtml(item.description)}</small>
      </a>`,
    )
    .join("");
}

function renderAnnouncements(): void {
  const target = qs("#announcements-panel");
  if (!target) return;

  const latest = [...announcements]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, PANEL_LIMIT);

  target.innerHTML = latest.length
    ? listWrap(latest.map(announcementItem).join(""))
    : emptyState("✉", "Nothing new just yet", "Company announcements will appear here.");
}

function renderEvents(): void {
  const target = qs("#events-panel");
  if (!target) return;

  const today = todayIso();
  const upcoming = events
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, PANEL_LIMIT);

  target.innerHTML = upcoming.length
    ? listWrap(upcoming.map(eventItem).join(""))
    : emptyState("＋", "Coming up", "Team events and holidays will appear here.");
}

export function init(): void {
  renderShortcuts();
  renderAnnouncements();
  renderEvents();
  initShortcutSearch();
}
