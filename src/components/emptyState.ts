import { escapeHtml } from "../utils/dom";

export function emptyState(icon: string, title: string, text: string): string {
  return `
    <div class="empty-state">
      <span aria-hidden="true">${icon}</span>
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(text)}</p>
    </div>`;
}
