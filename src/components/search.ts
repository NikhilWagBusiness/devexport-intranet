import { qs } from "../utils/dom";

/** Filters the quick-access cards as the user types in the home-page search box. */
export function initShortcutSearch(): void {
  const input = qs<HTMLInputElement>("#site-search");
  const grid = qs("#shortcut-grid");
  const emptyMessage = qs("#no-results");
  if (!input || !grid || !emptyMessage) return;

  const cards = Array.from(grid.querySelectorAll<HTMLElement>(".shortcut-card"));

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    let visible = 0;

    for (const card of cards) {
      const haystack = `${card.dataset.search ?? ""} ${card.textContent ?? ""}`.toLowerCase();
      const matches = query === "" || haystack.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    }

    emptyMessage.hidden = visible > 0;
  });
}
