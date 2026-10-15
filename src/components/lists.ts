import type { Announcement, CompanyEvent } from "../types";
import { escapeHtml } from "../utils/dom";
import { formatDate } from "../utils/date";

export function announcementItem(item: Announcement): string {
  const author = item.author ? ` · ${escapeHtml(item.author)}` : "";
  return `
    <li class="item">
      <h3 class="item-title">${escapeHtml(item.title)}</h3>
      <p class="item-meta">${formatDate(item.date)}${author}</p>
      <p class="item-summary">${escapeHtml(item.summary)}</p>
    </li>`;
}

export function eventItem(item: CompanyEvent): string {
  const location = item.location ? ` · ${escapeHtml(item.location)}` : "";
  return `
    <li class="item">
      <h3 class="item-title">${escapeHtml(item.title)} <span class="badge">${item.type}</span></h3>
      <p class="item-meta">${formatDate(item.date)}${location}</p>
    </li>`;
}

export function listWrap(itemsHtml: string): string {
  return `<ul class="item-list">${itemsHtml}</ul>`;
}
