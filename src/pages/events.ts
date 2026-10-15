import { emptyState } from "../components/emptyState";
import { eventItem, listWrap } from "../components/lists";
import { events } from "../data/events";
import { qs } from "../utils/dom";
import { todayIso } from "../utils/date";

export function init(): void {
  const target = qs("#events-list");
  if (!target) return;

  const today = todayIso();
  const upcoming = events
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  target.innerHTML = upcoming.length
    ? listWrap(upcoming.map(eventItem).join(""))
    : emptyState("＋", "Coming up", "Team events and holidays will appear here.");
}
