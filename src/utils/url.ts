/** Build a URL that respects Vite's `base` setting (needed when deployed under a sub-path). */
export const url = (path = ""): string => `${import.meta.env.BASE_URL}${path}`;
