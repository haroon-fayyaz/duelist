// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL (for example https://example.com) at build time once the
// production domain is known. Canonical and Open Graph URLs need it.
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || undefined,
  trailingSlash: 'ignore',
});
