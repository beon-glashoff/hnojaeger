import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hnojaeger.de',
  output: 'static',
  trailingSlash: 'always',
  build: {
    // erzeugt /leistungen/index.html – funktioniert auf Strato-Webspace ohne Rewrites
    format: 'directory',
    inlineStylesheets: 'always',
  },
  image: {
    // Astro/sharp erzeugt AVIF + WebP zur Buildzeit
    responsiveStyles: true,
  },
  server: {
    port: Number(process.env.PORT) || 4321,
    // Bindet an 0.0.0.0, damit die Seite im WLAN auch vom Telefon
    // erreichbar ist – nicht nur über localhost.
    host: true,
  },
  compressHTML: true,
  devToolbar: { enabled: false },
});
