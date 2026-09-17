# hnojaeger.de — Phase 1

Persönliche Profilseite für Dr. med. Anne Jäger, Fachärztin für
Hals-Nasen-Ohrenheilkunde. Astro, statischer Output, Hosting auf Cloudflare
(ein Umzug auf Strato-Webspace bleibt jederzeit möglich, siehe Deployment).

Konzept, Designsystem und rechtlicher Rahmen liegen in
`../../01_Assets/07_MDs/`.

---

## Befehle

```bash
npm install      # einmalig
npm run dev      # Entwicklungsserver
npm run build    # statischer Build nach dist/
npm run preview  # Build lokal prüfen
npm run deploy   # baut und veröffentlicht auf Cloudflare
```

Der Entwicklungsserver bindet über `server.host: true` an alle Interfaces. Die
Seite ist damit im selben WLAN auch vom Telefon erreichbar — Astro gibt die
Netzwerkadresse beim Start aus (`http://<IP-des-Rechners>:<Port>/`).

## Aufbau

```
public/            wird 1:1 nach dist/ kopiert
  .htaccess        Strato: HTTPS, Caching, Header
  fonts/           Inter Variable, auf Latin subsetiert (63 KB statt 875 KB)
  favicon.svg      Bildmarke Anthrazit
  og-bild.jpg      1200×630 für geteilte Links
src/
  assets/logos/    Logo-SVGs, inline eingebunden
  assets/images/   Portraits + schwerpunkte/ (4 Fachfotos),
                   zur Buildzeit zu AVIF/WebP/JPEG optimiert
  icons/           Tabler-Icons, nur die tatsächlich benutzten
  data/site.ts     Stammdaten: Name, Kontakt, Tätigkeitsorte
  data/content.ts  Vita, Leistungen, Schwerpunkte
  lib/logo.ts      stellt die Logo-SVGs auf currentColor um (theme-fähig)
  styles/          tokens.css (Designsystem, zugleich Variante A)
                   base.css (Primitive)
                   theme-dunkel.css / theme-sand.css (Varianten B und C)
  components/      Icon, SectionHead, SiteHeader, SiteFooter
  layouts/         BaseLayout — Meta, strukturierte Daten, Variante, Reveal-Skript
  pages/           index.astro (Hauptvariante), 404.astro
                   varianten/ — abgelegte Designvarianten, nur lokal
scripts/           Aufräumschritt nach dem Build
wrangler.jsonc     Cloudflare: Static-Asset-Deployment
```

**Alles liegt lokal.** Keine externen Schriften, keine CDNs, keine Karten, keine
Tracking-Skripte — das ist eine Anforderung aus dem Datenschutzkonzept, nicht nur
eine Performance-Entscheidung. Folge: kein Cookie-Banner nötig.

## Designvarianten

Drei Gestaltungsrichtungen liegen parallel zur Abstimmung bereit:

| Variante | URL | Farbklima |
|---|---|---|
| **B · Nocturne — Hauptvariante** | `/` | abgedunkeltes Anthrazit, mit Umschalter auf hell |
| A · Editorial | `/varianten/editorial/` | Weiß · Light Sage · Anthrazit |
| C · Sand | `/varianten/sand/` | warmer Sandton · weiße Karten |

**Variante B ist die Hauptvariante** und liegt unter `/` — dort laufen alle
weiteren Änderungen auf. A und C bleiben zum Vergleich unter `/varianten/`
liegen und sind auf `noindex` gesetzt.

Übersicht mit Begründung: `/varianten/` sowie
`../../01_Assets/07_MDs/07_Designvarianten.md`.

Alle drei nutzen dasselbe Designsystem — die Varianten überschreiben nur Token
unter `:root[data-variant='…']`. Eine neue Variante braucht daher nur eine
Theme-Datei plus `variant="…"` am `BaseLayout`.

**Nicht im Repository und nicht im Build.** `src/pages/varianten/` steht in
`.gitignore` und liegt damit nur lokal — auf Cloudflare wird der Ordner nie
gebaut. Lokal baut Astro ihn mit, deshalb räumt `npm run build` ihn danach aus
`dist/` wieder heraus (`scripts/varianten-aus-dist-entfernen.mjs`). Sonst lädt
ein Deploy vom Entwicklungsrechner die Varianten mit hoch. Im Entwicklungsserver
bleiben sie unter `/varianten/` erreichbar. Die Varianten sind
Abstimmungsmaterial und gehören nicht auf einen Produktivserver. Zum Vergleich
bleiben sie lokal unter `/varianten/` erreichbar.

**Nach der endgültigen Entscheidung:** `src/pages/varianten/` samt der nicht
gewählten Theme-Dateien löschen und den Eintrag aus `.gitignore` entfernen.

### Der Vollbild-Hero in Variante B

Er nutzt zwei Dinge, die sonst nirgends vorkommen:

- `<SiteHeader overlay />` über `headerOverlay` am `BaseLayout` — der Header wird
  fixiert und transparent und bekommt beim Scrollen eine Fläche. Das schaltet ein
  IntersectionObserver über einen 56 px hohen Sentinel am Seitenanfang, kein
  Scroll-Listener.
- Handgebautes `<picture>` mit `getImage()` statt `<Picture>`: Desktop bekommt das
  Querformat (Portrait 2), Mobil das Hochformat. Astros `<Picture>` kann nur eine
  Quelle, kennt also keine Art Direction. Es lädt trotzdem nur eine Datei.

Der Verlauf über dem Bild ist nach Messung gesetzt, nicht nach Gefühl — der
hellste Bildpunkt hinter der Textspalte ist ein Fenster mit `#FCFEFF`.

## Inhalte ändern

Texte, Vita und Leistungen stehen in `src/data/`. Für Textkorrekturen muss niemand
Astro-Dateien anfassen.

Neues Icon: die SVG-Datei aus `node_modules/@tabler/icons/icons/outline/` nach
`src/icons/` kopieren, dann `<Icon name="dateiname" />`.

## Schrift neu subsetieren

Nur nötig, wenn Zeichen außerhalb von Latin gebraucht werden:

```bash
pyftsubset "Inter-VariableFont_opsz,wght.ttf" \
  --output-file=public/fonts/Inter-var-latin.woff2 --flavor=woff2 \
  --layout-features='kern,liga,clig,calt,tnum,case' \
  --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+2000-206F,U+20AC,U+2122,U+2212"
```

Beide Achsen (`opsz` 14–32, `wght` 100–900) bleiben dabei erhalten.

## Deployment auf Cloudflare

Die Seite wird komplett statisch gebaut. Auf Cloudflare läuft sie als reines
Static-Asset-Deployment — es gibt kein Worker-Script, nur den Ordner `dist`.

```bash
npm run deploy
```

Das Script baut zuerst nach `dist/` und ruft dann `wrangler deploy` auf, das den
Ordner hochlädt. Gebaut wird bewusst außerhalb von `wrangler.jsonc`: In den
Cloudflare Workers Builds erledigt das der Build-Befehl `npm run build`, und ein
zusätzlicher `build.command` in der Wrangler-Konfiguration würde den Build dort
ein zweites Mal laufen lassen.

Beim ersten lokalen Deploy fragt Wrangler nach dem Cloudflare-Login.

### Workspace in Cloudflare anlegen

| Feld | Wert |
|---|---|
| Repository | `beon-glashoff/hnojaeger` |
| Projektname / Worker | `hnojaeger` |
| Root-Verzeichnis | `/` |
| Build-Befehl | `npm run build` |
| Deploy-Befehl | `npx wrangler deploy` |
| Branch | `main` |

Danach die Domain `hnojaeger.de` samt `www.` als Custom Domain auf den Worker
zeigen lassen; die Weiterleitung `www` → Hauptdomain wird dort als Redirect-Regel
gesetzt, nicht mehr über die `.htaccess`.

Nach dem ersten Deploy prüfen: `https://hnojaeger.de` lädt, `http://` und `www.`
leiten um, `/leistungen/` beantwortet mit und ohne Schrägstrich, eine erfundene
URL liefert die 404-Seite.

> Die Sitemap wird derzeit noch nicht erzeugt — `@astrojs/sitemap` ergänzen,
> sobald mehr als die Startseite steht. Bis dahin verweist `robots.txt` ins Leere.
> Anschließend Search Console einrichten und `sitemap-index.xml` einreichen.

### Späterer Umzug auf Strato

Weil der Build rein statisch ist (`output: 'static'`, `build.format: 'directory'`),
reicht ein Upload des `dist`-Ordners auf den Webspace — **inklusive der
versteckten `.htaccess`** (im FTP-Programm versteckte Dateien einblenden, sonst
fehlt sie). Cloudflare-spezifische Funktionen gibt es im Code keine. Zu beachten
wäre dann nur:

- `wrangler.jsonc` wird nicht mehr gebraucht
- Redirect von `www` auf die Hauptdomain im Strato-Panel setzen
- in der `.htaccess` `Strict-Transport-Security` nach bestätigtem Zertifikat von
  `max-age=300` auf `max-age=31536000` erhöhen

## Gewicht

| Posten | Größe |
|---|---|
| index.html inkl. inline CSS und JS | 64 KB |
| Inter Variable, Latin-Subset | 63 KB |
| Hero-Portrait AVIF, größte Stufe | 43 KB |
| **Erster Seitenaufruf** | **≈ 170 KB** |

Budget laut Designsystem: 600 KB. Externe Requests: keine.

## Bekannte Eigenheit

Ändert man einen `<style>`-Block in einer `.astro`-Datei, liefert der
Entwicklungsserver gelegentlich weiter das alte CSS aus — auch nach einem harten
Reload. Der Build ist davon nicht betroffen. Wenn eine Stiländerung im Browser
nicht ankommt: Server neu starten, nicht die Datei suchen.

## Seitenstruktur

```
/                                   Startseite
/leistungen/                        Übersicht: 4 Schwerpunkte + volles Spektrum
/leistungen/schlafmedizin/          Fachtext + FAQ, MedicalWebPage-Markup
/leistungen/allergologie/
/leistungen/kinder-hno/
/leistungen/aesthetische-medizin/
/gesundheitsinformationen/          Medizinischer Haftungsausschluss
/varianten/…                        Designvarianten, nur lokal (nicht im Repo)
```

Die vier Fachseiten entstehen aus `src/data/leistungen.ts` über die dynamische
Route `src/pages/leistungen/[slug].astro`. Eine neue Seite braucht damit nur
einen Eintrag in den Daten — Layout, Markup und strukturierte Daten kommen
automatisch mit.

**Aufbau einer Fachseite:** Split-Hero über die volle Fensterhöhe (Text links,
Hochformat rechts bündig an Menü, Abschlusslinie und Außenkante) → Inhalt in
einer zentrierten Spalte auf heller Fläche → Häufige Fragen als vollbreite
Sektion → weitere Schwerpunkte mit Bildern.

**Warum der Fließtext hell steht:** Über mehrere Bildschirme liest sich helle
Schrift auf dunklem Grund spürbar anstrengender. Die Fachseiten nutzen deshalb
eigene Token (`--surface-paper`, `--text-on-paper*`), die in beiden Farbmodi
hell bleiben. Komponenten, die dort stehen — Disclaimer, Autorenzeile,
Kurzprofil — müssen diese Token verwenden, nicht die Seitentöne; sonst stehen
sie im dunklen Modus unsichtbar auf heller Fläche.

> **Die Fachtexte sind Entwürfe und fachlich nicht freigegeben.** Vor dem
> Go-live muss Frau Dr. Jäger jede Seite gegenlesen; danach ist in
> `[slug].astro` die Konstante `geprueft` auf das Datum der Freigabe zu setzen.
> Sie erscheint in der Autorenzeile und im `lastReviewed` der strukturierten
> Daten — ein falsches Datum wäre dort eine falsche Tatsachenbehauptung.

## Offen

- Doctolib-Profil-URL → `src/data/site.ts`, dann `doctolib.aktiv = true`
- URLs der beiden Praxen → `src/data/site.ts`
- Impressum und Datenschutz — beides Go-live-Blocker
- Fachliche Freigabe der Leistungstexte
- `@astrojs/sitemap`
