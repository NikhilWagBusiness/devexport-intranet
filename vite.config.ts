import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const r = (path: string): string => fileURLToPath(new URL(path, import.meta.url));

// Every HTML page must be listed here so it is included in the production build.
export default defineConfig({
  // Set BASE_PATH when deploying under a sub-path, e.g. BASE_PATH=/devexim-intranet/
  base: process.env.BASE_PATH ?? "/",
  build: {
    rollupOptions: {
      input: {
        home: r("./index.html"),
        people: r("./pages/people.html"),
        announcements: r("./pages/announcements.html"),
        resources: r("./pages/resources.html"),
        events: r("./pages/events.html"),
      },
    },
  },
});
