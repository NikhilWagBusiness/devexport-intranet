import { emptyState } from "../components/emptyState";
import { announcementItem, listWrap } from "../components/lists";
import { announcements } from "../data/announcements";
import { qs } from "../utils/dom";

export function init(): void {
  const target = qs("#announcements-list");
  if (!target) return;

  const sorted = [...announcements].sort((a, b) => b.date.localeCompare(a.date));

  target.innerHTML = sorted.length
    ? listWrap(sorted.map(announcementItem).join(""))
    : emptyState("✉", "Nothing new just yet", "Company announcements will appear here.");
}
