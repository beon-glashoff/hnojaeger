/**
 * Inhalte der Startseite.
 * ACHTUNG: Alle Texte sind Entwürfe von be-on! und noch nicht fachlich
 * von Frau Dr. Jäger freigegeben. Siehe 03_Inhalte_Vita-Leistungen.md.
 */

import schlafmedizinBild from '../assets/images/schwerpunkte/schlafmedizin.png';
import allergologieBild from '../assets/images/schwerpunkte/allergologie.png';
import kinderHnoBild from '../assets/images/schwerpunkte/kinder-hno.png';
import aesthetikBild from '../assets/images/schwerpunkte/aesthetische-medizin.png';

export interface Schwerpunkt {
  slug: string;
  icon: string;
  titel: string;
  kurz: string;
  text: string;
  /** Kurzfassung für Layouts mit schmalen Spalten (Variante C). */
  kurztext: string;
  bild: ImageMetadata;
  /** Beschreibt, was zu sehen ist — nicht das Thema. Die Bilder tragen Inhalt. */
  bildAlt: string;
}

export const schwerpunkte: Schwerpunkt[] = [
  {
    slug: 'schlafmedizin',
    icon: 'zzz',
    titel: 'Schlafmedizin',
    kurz: 'Schnarchen und Schlafapnoe',
    bild: schlafmedizinBild,
    bildAlt: 'Schlafender Mann in einem hellen Schlafzimmer',
    text: 'Schnarchen ist selten nur ein Geräusch. Dahinter können Atemaussetzer stehen, die den Schlaf zerstückeln und den Kreislauf belasten. Ich arbeite täglich in einer schlafmedizinischen Schwerpunktpraxis und gehe der Ursache nach – von der Nasenatmung bis zur nächtlichen Messung.',
    kurztext: 'Schnarchen ist selten nur ein Geräusch. Dahinter können Atemaussetzer stehen – abgeklärt von der Nasenatmung bis zur nächtlichen Messung.',
  },
  {
    slug: 'allergologie',
    icon: 'flower',
    titel: 'Allergologie',
    kurz: 'Diagnostik und Therapie',
    bild: allergologieBild,
    bildAlt: 'Frau im Freien, die mit geschlossenen Augen tief durchatmet',
    text: 'Die Zusatzbezeichnung Allergologie führe ich seit 2014. Eine gute Allergiediagnostik beantwortet nicht nur die Frage, worauf jemand reagiert, sondern auch, was sich dagegen tun lässt – von der Karenz über die Medikation bis zur Hyposensibilisierung.',
    kurztext: 'Welche Allergie dahintersteckt und was sich dagegen tun lässt – von der Karenz über die Medikation bis zur Hyposensibilisierung.',
  },
  {
    slug: 'kinder-hno',
    icon: 'mood-kid',
    titel: 'Kinder-HNO',
    kurz: 'Hören, Infekte, Paukenröhrchen',
    bild: kinderHnoBild,
    bildAlt: 'Junge mit Kopfhörern sitzt auf einem Sofa und hört zu',
    text: 'Kinder sagen nicht, dass sie schlecht hören – sie fallen auf, weil sie nicht zuhören. Bei wiederkehrenden Infekten, Paukenergüssen und Hörauffälligkeiten nehme ich mir die Zeit, die eine Untersuchung mit Kindern braucht.',
    kurztext: 'Kinder sagen nicht, dass sie schlecht hören – sie fallen auf, weil sie nicht zuhören. Abklärung mit der Ruhe, die Kinder brauchen.',
  },
  {
    slug: 'aesthetische-medizin',
    icon: 'sparkles',
    titel: 'Ästhetische Medizin',
    kurz: 'Faltenbehandlung mit Botulinumtoxin',
    bild: aesthetikBild,
    bildAlt: 'Ärztin behandelt die Stirnpartie einer Patientin',
    text: 'Die Gesichtsanatomie kenne ich aus der HNO-Ausbildung, nicht aus einer Wochenendschulung. Das ist der Unterschied, auf den es bei einer Faltenbehandlung mit Botulinumtoxin ankommt – zurückhaltend dosiert und mit realistischer Erwartung.',
    kurztext: 'Faltenbehandlung mit Botulinumtoxin aus fachärztlicher Hand – zurückhaltend dosiert, mit realistischer Erwartung.',
  },
];

export interface LeistungsGruppe {
  titel: string;
  /** Tabler-Icon aus src/icons/ — dezente Orientierung vor dem Gruppentitel. */
  icon: string;
  punkte: string[];
}

export const leistungsspektrum: LeistungsGruppe[] = [
  {
    titel: 'Nase und Nebenhöhlen',
    icon: 'nose',
    punkte: [
      'Behinderte Nasenatmung',
      'Nasennebenhöhlenentzündung',
      'Allergiediagnostik',
      'Allergietherapie',
    ],
  },
  {
    titel: 'Ohren und Hören',
    icon: 'ear',
    punkte: [
      'Hörminderung',
      'Hörtest\u00A0/\u00A0Audiometrie',
      'Hörgeräteverordnung',
      'Ohrgeräusche\u00A0/\u00A0Tinnitus',
      'Ohrreinigung',
    ],
  },
  {
    titel: 'Hals, Stimme, Schlucken',
    icon: 'wave-sine',
    punkte: [
      'Halsschmerzen',
      'Globus- und Fremdkörpergefühl',
      'Stimm- und Sprachstörungen',
      'Abklärung CMD und Bruxismus',
      'Ultraschall\u00A0/\u00A0Sonografie',
    ],
  },
  {
    titel: 'Schlaf und Atmung',
    icon: 'zzz',
    punkte: [
      'Schlafapnoe-Syndrom',
      'Schnarchtherapie',
      'Schlafmedizinische Diagnostik',
    ],
  },
  {
    titel: 'Kinder-HNO',
    icon: 'mood-kid',
    punkte: [
      'Hörprüfung bei Kindern',
      'Wiederkehrende Infekte',
      'Paukenröhrchen',
      'Atemwegsbeschwerden',
    ],
  },
  {
    titel: 'Ästhetische Medizin',
    icon: 'sparkles',
    punkte: ['Faltenbehandlung mit Botulinumtoxin'],
  },
];

export interface VitaGruppe {
  titel: string;
  stationen: { jahr: string; text: string; ort?: string }[];
}

/**
 * Gruppiert nach 03_Inhalte_Vita-Leistungen.md, Abschnitt 2.
 * Die Bonner Anstellung 2018–2025 bewusst ohne Praxisnamen.
 */
export const vita: VitaGruppe[] = [
  {
    titel: 'Herkunft und Ausbildung',
    stationen: [
      {
        jahr: '2000–2007',
        text: 'Studium der Humanmedizin',
        ort: 'Goethe-Universität Frankfurt am Main · Universitätsklinik Wien (AKH) · King Edward Hospital, Durban',
      },
      {
        jahr: '2011',
        text: 'Promotion in der Abteilung für Virologie',
        ort: 'Goethe-Universität Frankfurt am Main',
      },
    ],
  },
  {
    titel: 'Facharztausbildung und Universitätsmedizin',
    stationen: [
      {
        jahr: '2007–2014',
        text: 'Facharztausbildung Hals-Nasen-Ohrenheilkunde',
        ort: 'Goethe-Universität Frankfurt am Main',
      },
      {
        jahr: '2012',
        text: 'Facharztprüfung Hals-Nasen-Ohrenheilkunde, Kopf-Hals-Chirurgie',
      },
      { jahr: '2013', text: 'Zusatzbezeichnung Psychosomatische Grundversorgung' },
      { jahr: '2014', text: 'Zusatzbezeichnung Allergologie' },
      {
        jahr: '2012–2016',
        text: 'Fachärztin für Hals-Nasen-Ohrenheilkunde',
        ort: 'Goethe-Universität Frankfurt am Main',
      },
    ],
  },
  {
    titel: 'Niederlassung und Spezialisierung',
    stationen: [
      { jahr: '2018–2025', text: 'Angestellte Fachärztin in einer HNO-Praxis', ort: 'Bonn' },
      {
        jahr: '2025',
        text: 'Botulinumtoxin Grundkurs und Masterclass',
        ort: 'Akademie für Kosmetische Medizin, Düsseldorf',
      },
      {
        jahr: '2025',
        text: 'Schlafmedizinischer BUB-Kurs',
        ort: 'Institut für Schlafmedizin, München',
      },
      {
        jahr: '2026',
        text: 'Zusatzbezeichnung Präventivmedizin',
        ort: 'Deutsche Akademie für Präventivmedizin e. V.',
      },
      {
        jahr: 'seit 2026',
        text: 'Angestellte Fachärztin in Köln-Rodenkirchen und Hennef',
      },
    ],
  },
];

export const qualifikationen: string[] = [
  'Fachärztin für Hals-Nasen-Ohrenheilkunde',
  'Zusatzbezeichnung Allergologie',
  'Zusatzbezeichnung Psychosomatische Grundversorgung',
  'Zusatzbezeichnung Präventivmedizin',
  'Schlafmedizinischer BUB-Kurs',
  'Botulinumtoxin Grundkurs und Masterclass',
  'Promotion Dr. med.',
];
