/**
 * Stammdaten. Einzige Quelle für Name, Kontakt und Tätigkeitsorte —
 * damit Seite, Impressum und strukturierte Daten nicht auseinanderlaufen.
 */

export const site = {
  url: 'https://hnojaeger.de',
  locale: 'de-DE',
  name: 'Dr. med. Anne Jäger',
  nameShort: 'Dr. Anne Jäger',
  role: 'Fachärztin für Hals-Nasen-Ohrenheilkunde',
  roleLong: 'Fachärztin für HNO-Heilkunde, Allergologie und Präventivmedizin',
  roleShort: 'HNO-Fachärztin',
} as const;

export const kontakt = {
  email: 'kontakt@hnojaeger.de',
  /** Festnetz — steht im Impressum, bewusst nicht in der Kontaktsektion.
   *  Siehe 06_Offene-Punkte.md: private Nummer, kein Patiententelefon. */
  telefon: '0228 94770078',
  telefonHref: '+4922894770078',
  anschrift: {
    strasse: 'Königstraße 31',
    plz: '53115',
    ort: 'Bonn',
    land: 'DE',
  },
} as const;

/**
 * Aktuelle Anstellungen. Von Frau Dr. Jäger zur Nennung und Verlinkung freigegeben.
 * Praxisnamen und Adressen sind von den Praxisseiten übernommen, nicht aus der
 * E-Mail — dort standen Kurzformen. Vor Go-live von Frau Dr. Jäger gegenlesen lassen.
 */
export const taetigkeitsorte = [
  {
    praxis: 'HNO Rodenkirchen',
    inhaber: 'Prof. Dr. med. Stefanie Jansen und Prof. Dr. med. Jan-Christoffer Lüers',
    ort: 'Köln-Rodenkirchen',
    seit: 'seit Januar 2026',
    schwerpunkt: 'Schlafmedizinische Diagnostik, allgemeine HNO-Heilkunde',
    url: 'https://hno-rodenkirchen.de/',
  },
  {
    praxis: 'HNO Zentrum Hennef',
    inhaber: 'Dr. med. Tobias van Bremen und Dr. med. Stephan Westermann',
    ort: 'Hennef',
    seit: 'seit März 2026',
    schwerpunkt: 'Allgemeine HNO-Heilkunde, Allergologie, Kinder-HNO',
    url: 'https://hno-zentrum-hennef.de/',
  },
] as const;

/** Doctolib-Profil — freigegeben, als dezenter Textlink, niemals eingebettet. */
export const doctolib = {
  aktiv: false,          // auf true, sobald die Profil-URL vorliegt
  url: '',               // TODO: Doctolib-Profil-URL ergänzen
  label: 'Termin online vereinbaren',
} as const;

export const kammer = {
  name: 'Ärztekammer Nordrhein',
  url: 'https://www.aekno.de',
} as const;
