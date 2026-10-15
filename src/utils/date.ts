/** Today's date as YYYY-MM-DD in the user's local time zone. */
export function todayIso(): string {
  return new Date().toLocaleDateString("sv-SE");
}

/** Format a YYYY-MM-DD string as e.g. "15 Oct 2026". */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
