/**
 * Resolves nav hrefs so hash links work from any route (e.g. /projects → /#about).
 */
export function resolveNavHref(hash: string, pathname: string): string {
  if (hash === "/") return "/";
  if (hash.startsWith("#")) {
    return pathname === "/" ? hash : `/${hash}`;
  }
  return hash;
}
