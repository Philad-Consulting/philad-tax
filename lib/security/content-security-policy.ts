/**
 * The site's Content-Security-Policy: which outside services the browser may load from or talk
 * to. Anything not listed (injected scripts, unknown trackers, other sites framing us) is blocked.
 *
 * The site only talks to the Philad API (the contact form). Fonts and images are self-hosted.
 */
export function buildContentSecurityPolicy({
  apiBaseUrl,
  isDev,
}: {
  apiBaseUrl?: string;
  isDev: boolean;
}): string {
  const api = originOf(apiBaseUrl);

  const directives: Record<string, (string | undefined | false)[]> = {
    "default-src": ["'self'"],
    // Next.js inlines its startup scripts; development also needs eval for hot reload
    "script-src": ["'self'", "'unsafe-inline'", isDev && "'unsafe-eval'"],
    "style-src": ["'self'", "'unsafe-inline'"],
    "img-src": ["'self'", "data:", "blob:"],
    "font-src": ["'self'", "data:"],
    "connect-src": ["'self'", api, isDev && "ws:"],
    "object-src": ["'none'"],
    "base-uri": ["'self'"],
    "form-action": ["'self'"],
    "frame-ancestors": ["'none'"],
  };

  return Object.entries(directives)
    .map(([name, sources]) => `${name} ${[...new Set(sources.filter(Boolean))].join(" ")}`)
    .join("; ");
}

function originOf(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    return new URL(url).origin;
  } catch {
    return undefined;
  }
}
