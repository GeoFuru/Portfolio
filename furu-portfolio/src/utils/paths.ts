/**
 * Helpers to make internal links and asset URLs work both in
 * development and when deployed under a subpath (e.g. GitHub Pages),
 * using the `base` option from vite.config.ts.
 */

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

/**
 * Prefixes an internal absolute path ("/projects") with the
 * configured base ("/furu-portfolio"). External URLs and relative
 * paths are returned unchanged.
 */
export function withBase(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${BASE_URL}${path}`;
}

/**
 * Returns the current pathname with the base prefix removed,
 * so route matching works regardless of the deploy subpath.
 */
export function currentPath(): string {
  const { pathname } = window.location;

  if (BASE_URL && pathname.startsWith(BASE_URL)) {
    return pathname.slice(BASE_URL.length) || "/";
  }

  return pathname;
}
