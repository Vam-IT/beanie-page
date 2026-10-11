/**
 * Helper to ensure assets resolve properly regardless of Vite's base URL
 * (e.g. on GitHub Pages under /beanie-page/ or with custom domain /).
 */
export const assetUrl = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};
