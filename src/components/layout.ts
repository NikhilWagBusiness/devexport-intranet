import { NAV_ITEMS, SITE } from "../config/nav";
import type { NavItem } from "../types";
import { escapeHtml, qs } from "../utils/dom";
import { url } from "../utils/url";

const icon = (inner: string, size = 20): string =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

function navLink(item: NavItem, activeId: string): string {
  const active = item.id === activeId;
  return `
    <a class="nav-item${active ? " active" : ""}" href="${url(item.href)}"${active ? ' aria-current="page"' : ""}>
      ${icon(item.icon)}<span>${escapeHtml(item.label)}</span>
    </a>`;
}

function sidebarHtml(activeId: string): string {
  return `
    <aside class="sidebar">
      <a class="brand" href="${url()}">
        <span class="brand-mark">${SITE.initial}</span>
        <span class="brand-name">
          <strong>${SITE.brand}</strong>
          <small>${SITE.tagline}</small>
        </span>
      </a>

      <p class="nav-heading" id="nav-heading">WORKSPACE</p>
      <nav class="navigation" aria-labelledby="nav-heading">
        ${NAV_ITEMS.map((item) => navLink(item, activeId)).join("")}
      </nav>

      <div class="sidebar-bottom">
        <div class="help-icon" aria-hidden="true">?</div>
        <div>
          <strong>Need help?</strong>
          <small>Contact your administrator</small>
        </div>
      </div>
    </aside>`;
}

function topbarHtml(activeId: string): string {
  const label = NAV_ITEMS.find((item) => item.id === activeId)?.label ?? "Home";
  return `
    <header class="topbar">
      <nav class="breadcrumb" aria-label="Breadcrumb">Workspace <span aria-hidden="true">/</span> ${escapeHtml(label)}</nav>
      <div class="profile">
        <div class="avatar" aria-hidden="true">${SITE.initial}</div>
        <div>
          <strong>Team Member</strong>
          <small>${SITE.name}</small>
        </div>
      </div>
    </header>`;
}

function footerHtml(): string {
  return `<footer class="site-footer">&copy; ${new Date().getFullYear()} ${SITE.name} · Internal team portal</footer>`;
}

/** Injects the shared sidebar, top bar and footer around the page's own <main> content. */
export function mountLayout(activeId: string): void {
  const shell = qs("#app-shell");
  const mainArea = shell ? qs(".main-area", shell) : null;
  if (!shell || !mainArea) return;

  shell.insertAdjacentHTML("afterbegin", sidebarHtml(activeId));
  mainArea.insertAdjacentHTML("afterbegin", topbarHtml(activeId));
  mainArea.insertAdjacentHTML("beforeend", footerHtml());
}
