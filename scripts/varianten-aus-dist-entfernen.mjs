/**
 * Entfernt die Designvarianten aus `dist/`, nachdem Astro gebaut hat.
 *
 * Die Varianten stehen in `.gitignore` und liegen deshalb nur lokal. Auf
 * Cloudflare gibt es sie gar nicht — dort tut dieses Skript nichts. Lokal
 * baut Astro sie aber mit, und `wrangler deploy` lädt alles hoch, was in
 * `dist/` liegt. Ohne diesen Schritt landen sie bei jedem Deploy von einem
 * Entwicklungsrechner aus im Netz.
 *
 * Deshalb läuft das Aufräumen im `build`-Script und nicht erst im `deploy`:
 * Ein `dist/`, aus dem versehentlich hochgeladen werden könnte, soll es gar
 * nicht erst geben. Zum Vergleichen sind die Varianten im Entwicklungsserver
 * weiterhin unter `/varianten/` erreichbar — der liest aus `src/`.
 */
import { rm, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const wurzel = join(dirname(fileURLToPath(import.meta.url)), '..');
const ordner = join(wurzel, 'dist', 'varianten');

try {
  const inhalt = await readdir(ordner);
  await rm(ordner, { recursive: true, force: true });
  console.log(`varianten: ${inhalt.length} Einträge aus dist/ entfernt`);
} catch (fehler) {
  if (fehler.code !== 'ENOENT') throw fehler;
  // Kein Ordner da — auf Cloudflare der Normalfall.
}
