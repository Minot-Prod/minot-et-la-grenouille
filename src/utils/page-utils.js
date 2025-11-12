/**
 * Déduit l’URL d’une page (slug front-matter, page.slug, fallback chemin).
 */
export function getPageUrl(page) {
  if (!page) return "/";
  const fm = page.frontmatter ?? {};
  const rawSlug =
    page.slug ??
    fm.slug ??
    inferSlugFromPath(page.filePath ?? page._filePath ?? "");

  const slug = sanitizeSlug(rawSlug);
  return slug ? `/${slug}` : "/";
}

function inferSlugFromPath(p) {
  try {
    if (!p) return "";
    p = String(p).replace(/\\/g, "/");
    p = p.replace(/^.*?content\/pages\//, "");
    p = p.replace(/\.(md|mdx)$/i, "");
    if (p === "index") return "";
    return p;
  } catch {
    return "";
  }
}

function sanitizeSlug(s) {
  if (!s) return "";
  s = String(s).replace(/^\/+|\/+$/g, "");
  s = s.replace(/\/{2,}/g, "/");
  return s;
}