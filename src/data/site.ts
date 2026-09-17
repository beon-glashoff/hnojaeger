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
  /* Anschrift vor Go-live gegen aekno.de gegenprüfen. */
  strasse: 'Tersteegenstraße 9',
  plz: '40474',
  ort: 'Düsseldorf',
} as const;

/**
 * Angaben, die nur das Impressum trägt. Bewusst von `kontakt` getrennt: Die
 * Anschrift darf ausschließlich hier erscheinen — nicht im Footer, nicht in den
 * strukturierten Daten. Siehe 05_Recht-und-Datenschutz.md, Abschnitt 5.
 *
 * Felder mit `null` sind noch nicht geklärt. Das Impressum weist sie sichtbar
 * als offen aus, statt sie stillschweigend wegzulassen — es sind Pflichtangaben,
 * und eine leere Stelle im Entwurf ist besser als eine fehlende im Livebetrieb.
 */
export const impressum = {
  berufsbezeichnung: 'Ärztin · Fachärztin für Hals-Nasen-Ohrenheilkunde',
  verliehenIn: 'Bundesrepublik Deutschland',
  /** Zuständige Bezirksregierung — TODO: bei Frau Dr. Jäger erfragen. */
  approbationsbehoerde: null as string | null,
  /** Berufshaftpflicht nach DL-InfoV — TODO: Versicherer, Anschrift, Geltungsbereich. */
  haftpflicht: null as { versicherer: string; anschrift: string; geltung: string } | null,
  /**
   * Heilbehandlungen sind nach § 4 Nr. 14 UStG steuerfrei, ästhetische
   * Leistungen sind es nicht — ob eine USt-IdNr. vorliegt, ist zu klären.
   */
  ustId: null as string | null,
} as const;

/** Zuständige Datenschutzaufsicht am Wohnsitz der Verantwortlichen. */
export const aufsichtsbehoerde = {
  name: 'Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen',
  kurz: 'LDI NRW',
  strasse: 'Kavalleriestraße 2–4',
  plz: '40213',
  ort: 'Düsseldorf',
  url: 'https://www.ldi.nrw.de',
} as const;

/**
 * Hosting. Steht in der Datenschutzerklärung, weil beim Abruf zwangsläufig
 * IP-Adressen verarbeitet werden. Der Auftragsverarbeitungsvertrag ist vor dem
 * Go-live abzuschließen (Prüfliste in 05_Recht-und-Datenschutz.md).
 */
export const hosting = {
  anbieter: 'Cloudflare Germany GmbH',
  anschrift: 'Rosental 7, 80331 München',
  url: 'https://www.cloudflare.com/de-de/privacypolicy/',
} as const;
