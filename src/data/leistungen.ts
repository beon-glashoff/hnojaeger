/**
 * Inhalte der vier Schwerpunktseiten.
 *
 * ACHTUNG: Alle Texte sind Entwürfe von be-on! und **fachlich nicht
 * freigegeben**. Vor dem Go-live muss Frau Dr. Jäger jede Seite gegenlesen –
 * das ist keine Formalie, sondern berufsrechtlich zwingend.
 *
 * Aufbau nach 01_Konzept_Phase-1.md, Abschnitt 6. Die Seiten sind allgemeine
 * Gesundheitsinformation, keine individuelle Beratung: kein Bezug auf „Ihren
 * Fall", keine Ferndiagnose, jede Seite endet mit dem Hinweis auf die
 * persönliche Untersuchung (Fernbehandlungsverbot, siehe
 * 05_Recht-und-Datenschutz.md, Abschnitt 4).
 */

export interface Frage {
  frage: string;
  antwort: string;
}

export interface Faktum {
  label: string;
  wert: string;
}

export interface Leistung {
  slug: string;
  /** Sortierung auf der Übersichtsseite */
  reihenfolge: number;
  navTitel: string;
  h1: string;
  title: string;
  description: string;
  lead: string;
  /** Kurz für die Übersichtsseite */
  teaser: string;
  /**
   * Eckdaten, knapp und konkret.
   * DERZEIT NICHT AUSGESPIELT: Der Einstiegskasten der Fachseiten trägt
   * seit dem Umbau die Merkmale aus `erkennen`. Die Daten bleiben stehen,
   * weil sie inhaltlich brauchbar sind — etwa für eine spätere Randspalte
   * oder die Praxisseite in Phase 2.
   */
  fakten: Faktum[];
  erkennen: { titel: string; punkte: string[] };
  vorgehen: { titel: string; absaetze: string[] };
  ursachen: { titel: string; absaetze: string[] };
  abklaeren: { titel: string; text: string; punkte: string[] };
  faq: Frage[];
}

export const leistungen: Leistung[] = [
  /* ------------------------------------------------------ Schlafmedizin */
  {
    slug: 'schlafmedizin',
    reihenfolge: 1,
    navTitel: 'Schlafmedizin',
    h1: 'Schnarchen und Schlafapnoe',
    title: 'Schnarchen und Schlafapnoe – was dahintersteckt',
    description:
      'Warum Schnarchen mehr sein kann als ein Geräusch: Anzeichen einer Schlafapnoe, wie die Abklärung abläuft und wann sie ernst zu nehmen ist.',
    lead: 'Schnarchen gilt als lästig, selten als Symptom. Dabei ist es oft das einzige hörbare Zeichen dafür, dass die Atmung im Schlaf nicht frei läuft. Zwischen harmlosem Schnarchen und einer behandlungsbedürftigen Schlafapnoe liegt ein Unterschied, den man von außen nicht hört — und den nur eine Messung zeigt.',
    teaser:
      'Zwischen harmlosem Schnarchen und einer Schlafapnoe liegt ein Unterschied, den man nicht hört.',
    fakten: [
      { label: 'Erster Schritt', wert: 'Gespräch und HNO-Untersuchung' },
      { label: 'Messung', wert: 'Ambulante Polygraphie, eine Nacht zu Hause' },
      { label: 'Bei unklarem Befund', wert: 'Nacht im Schlaflabor' },
      { label: 'Häufig übersehen', wert: 'Behinderte Nasenatmung als Mitursache' },
      { label: 'Qualifikation', wert: 'Schlafmedizinischer BUB-Kurs, 2025' },
    ],
    erkennen: {
      titel: 'Woran es sich zeigt',
      punkte: [
        'Lautes, unregelmäßiges Schnarchen mit Pausen',
        'Beobachtete Atemaussetzer — meist bemerkt sie der Partner, nicht die betroffene Person',
        'Morgendliche Kopfschmerzen, trockener Mund, das Gefühl, nicht erholt aufzuwachen',
        'Tagesmüdigkeit, Konzentrationsprobleme, Sekundenschlaf',
        'Nächtliches Erwachen mit Luftnot oder Herzklopfen',
        'Häufiger nächtlicher Harndrang',
      ],
    },
    vorgehen: {
      titel: 'Wie die Abklärung abläuft',
      absaetze: [
        'Am Anfang steht das Gespräch: Wie sieht die Nacht aus, wie der Tag danach? Fragebögen wie die Epworth-Skala helfen, die Tagesschläfrigkeit einzuordnen. Was der Partner beobachtet, ist dabei oft aufschlussreicher als die eigene Erinnerung.',
        'Es folgt die HNO-ärztliche Untersuchung. Sie klärt, ob die Luft überhaupt ungehindert durch Nase und Rachen strömen kann: Nasenscheidewand, Nasenmuscheln, Nebenhöhlen, Gaumen, Mandeln, Zungengrund. Eine behinderte Nasenatmung ist eine der häufigsten und zugleich am leichtesten übersehenen Ursachen.',
        'Bestätigt sich der Verdacht, folgt eine Messung im Schlaf. Für die ambulante Polygraphie nimmt man ein kleines Gerät mit nach Hause; es zeichnet über eine Nacht Atemfluss, Atembewegung, Sauerstoffsättigung, Puls und Körperlage auf. Zeigt sich ein auffälliger Befund oder passen Beschwerden und Messung nicht zusammen, schließt sich eine Nacht im Schlaflabor an.',
        'Erst aus Gespräch, Untersuchung und Messung zusammen ergibt sich ein Bild — und daraus die Frage, welche Behandlung überhaupt sinnvoll ist.',
      ],
    },
    ursachen: {
      titel: 'Was dahinterstecken kann',
      absaetze: [
        'Schnarchen entsteht, wenn Gewebe im Rachen bei jedem Atemzug in Schwingung gerät. Das kann harmlos sein. Kritisch wird es, wenn die oberen Atemwege dabei nicht nur schwingen, sondern zufallen: Dann setzt die Atmung aus, der Sauerstoffgehalt im Blut fällt, der Körper weckt sich selbst — oft hundertfach pro Nacht, ohne dass man davon erwacht. Das ist die obstruktive Schlafapnoe.',
        'Begünstigt wird sie durch eine behinderte Nasenatmung, vergrößerte Mandeln, einen schlaffen Gaumen, Übergewicht, Alkohol am Abend und Rückenlage. Unbehandelt belastet sie Herz und Kreislauf: Bluthochdruck, Herzrhythmusstörungen und Schlaganfall treten bei unbehandelter Schlafapnoe häufiger auf.',
      ],
    },
    abklaeren: {
      titel: 'Wann eine Abklärung sinnvoll ist',
      text: 'Nicht jedes Schnarchen muss untersucht werden. Eine Abklärung ist angezeigt, wenn eines der folgenden Zeichen dazukommt:',
      punkte: [
        'Jemand beobachtet Atemaussetzer im Schlaf',
        'Die Tagesmüdigkeit beeinträchtigt Arbeit, Straßenverkehr oder Alltag',
        'Ein Bluthochdruck lässt sich medikamentös schwer einstellen',
        'Der Schlaf erholt trotz ausreichender Dauer nicht',
      ],
    },
    faq: [
      {
        frage: 'Ist Schnarchen immer gefährlich?',
        antwort:
          'Nein. Schnarchen ohne Atemaussetzer ist medizinisch meist unbedenklich, auch wenn es die Nachtruhe stört. Gefährlich wird es erst, wenn die Atemwege dabei zufallen und die Atmung aussetzt. Ob das der Fall ist, lässt sich nicht hören, sondern nur messen.',
      },
      {
        frage: 'Muss ich für die Messung ins Schlaflabor?',
        antwort:
          'Meist nicht. Der erste Schritt ist eine ambulante Polygraphie: Ein kleines Messgerät wird mit nach Hause genommen und zeichnet eine Nacht im eigenen Bett auf. Erst wenn das Ergebnis unklar bleibt oder nicht zu den Beschwerden passt, folgt eine Nacht im Schlaflabor.',
      },
      {
        frage: 'Was hat die Nase mit dem Schlaf zu tun?',
        antwort:
          'Viel. Wer nachts nicht durch die Nase atmen kann, atmet durch den Mund — und dabei fällt der Rachen leichter zusammen. Eine behinderte Nasenatmung verschlechtert Schnarchen und Schlafapnoe und macht auch eine Maskentherapie schwerer verträglich. Deshalb gehört die Nase zu jeder schlafmedizinischen Abklärung.',
      },
      {
        frage: 'Welche Behandlungen gibt es?',
        antwort:
          'Das hängt vom Befund ab. In Frage kommen unter anderem die Verbesserung der Nasenatmung, eine Unterkieferprotrusionsschiene, eine Überdrucktherapie mit Maske (CPAP), Lagetherapie sowie Gewichtsreduktion. Welcher Weg trägt, entscheidet sich erst nach der Diagnostik — nicht vorher.',
      },
      {
        frage: 'Übernimmt die Krankenkasse die Untersuchung?',
        antwort:
          'Die schlafmedizinische Diagnostik ist eine Leistung, die bei entsprechendem Verdacht regulär abgerechnet wird. Welche Kosten im Einzelfall entstehen, hängt vom Versicherungsstatus und vom Umfang der Untersuchung ab und wird vorab besprochen.',
      },
    ],
  },

  /* ------------------------------------------------------- Allergologie */
  {
    slug: 'allergologie',
    reihenfolge: 2,
    navTitel: 'Allergologie',
    h1: 'Allergiediagnostik und Allergietherapie',
    title: 'Allergiediagnostik beim HNO-Arzt – Ablauf und Wege',
    description:
      'Welche Allergietests es gibt, wie eine Abklärung abläuft und welche Behandlungswege nach der Diagnose zur Verfügung stehen.',
    lead: 'Eine Allergie zu haben und zu wissen, worauf man reagiert, sind zwei verschiedene Dinge. Die Diagnostik beantwortet beides: was die Beschwerden auslöst — und was sich dagegen tun lässt. Letzteres ist die eigentlich wichtige Frage, denn bei kaum einer anderen Erkrankung stehen so viele Wege offen.',
    teaser:
      'Nicht nur, worauf jemand reagiert — sondern was sich dagegen tun lässt.',
    fakten: [
      { label: 'Erster Schritt', wert: 'Anamnese mit Blick auf den Jahresverlauf' },
      { label: 'Hauttest', wert: 'Pricktest, Ergebnis nach etwa 20 Minuten' },
      { label: 'Ergänzend', wert: 'Bluttest auf spezifische IgE-Antikörper' },
      { label: 'Wichtig', wert: 'Antihistaminika vorher pausieren' },
      { label: 'Qualifikation', wert: 'Zusatzbezeichnung Allergologie seit 2014' },
    ],
    erkennen: {
      titel: 'Woran es sich zeigt',
      punkte: [
        'Niesreiz, Fließschnupfen, verstopfte Nase über Wochen',
        'Juckende, tränende, gerötete Augen',
        'Jucken am Gaumen oder im Gehörgang',
        'Beschwerden, die jedes Jahr zur selben Zeit wiederkehren',
        'Husten oder Atemnot zusätzlich zu den Nasenbeschwerden',
        'Dauerbeschwerden ohne erkennbaren Infekt — Hinweis auf ganzjährige Auslöser',
      ],
    },
    vorgehen: {
      titel: 'Wie die Abklärung abläuft',
      absaetze: [
        'Die Anamnese trägt am meisten zur Diagnose bei: Wann treten die Beschwerden auf, wo, wie lange, was bessert sie? Der Jahresverlauf grenzt die in Frage kommenden Auslöser oft schon deutlich ein, bevor ein einziger Test gelaufen ist.',
        'Der Pricktest folgt als erster Schritt. Dabei werden Allergenlösungen auf die Haut des Unterarms aufgetragen und die Haut minimal angeritzt. Nach etwa zwanzig Minuten zeigt sich, worauf der Körper reagiert. Der Test ist kaum schmerzhaft und in einer Sitzung erledigt.',
        'Eine Blutuntersuchung auf spezifische IgE-Antikörper ergänzt das Bild, wenn der Hauttest nicht möglich oder das Ergebnis unklar ist — etwa bei Hauterkrankungen oder bei Medikamenten, die den Hauttest verfälschen.',
        'Entscheidend ist der letzte Schritt: der Abgleich von Testergebnis und Beschwerden. Ein positiver Test allein bedeutet noch keine Allergie. Erst wenn Sensibilisierung und tatsächliche Symptome zusammenpassen, ist die Diagnose gestellt — und erst dann lässt sich sinnvoll behandeln.',
      ],
    },
    ursachen: {
      titel: 'Was dahinterstecken kann',
      absaetze: [
        'Bei einer Allergie stuft das Immunsystem einen harmlosen Stoff als Bedrohung ein und reagiert darauf mit einer Entzündung. Die häufigsten Auslöser im HNO-Bereich sind Baum- und Gräserpollen, Hausstaubmilben, Tierhaare und Schimmelpilze.',
        'Unbehandelt bleibt es selten dabei. Aus einer Nasenschleimhautentzündung kann über Jahre ein allergisches Asthma werden — der sogenannte Etagenwechsel. Auch Nasennebenhöhlenentzündungen, Polypen und chronische Mittelohrprobleme treten bei unbehandelter Allergie häufiger auf. Das ist der Grund, warum eine Allergie mehr verdient als ein Rezept gegen die akuten Beschwerden.',
      ],
    },
    abklaeren: {
      titel: 'Wann eine Abklärung sinnvoll ist',
      text: 'Eine allergologische Abklärung ist angezeigt, wenn:',
      punkte: [
        'Beschwerden länger als zwei Wochen anhalten oder jedes Jahr wiederkehren',
        'Rezeptfreie Mittel nicht mehr ausreichen',
        'Husten, Engegefühl in der Brust oder Atemnot dazukommen',
        'Der Schlaf oder die Leistungsfähigkeit im Alltag leidet',
        'Kinder betroffen sind — hier lohnt sich die frühe Abklärung besonders',
      ],
    },
    faq: [
      {
        frage: 'Tut ein Allergietest weh?',
        antwort:
          'Der Pricktest ist kaum spürbar: Die Haut wird nur oberflächlich angeritzt, nicht gestochen. Kinder machen ihn in der Regel ohne Probleme mit. Unangenehm ist höchstens der Juckreiz an den Teststellen, der nach kurzer Zeit wieder nachlässt.',
      },
      {
        frage: 'Was ist eine Hyposensibilisierung?',
        antwort:
          'Bei der spezifischen Immuntherapie wird das auslösende Allergen über etwa drei Jahre in langsam steigender Dosis gegeben — als Spritze oder als Tablette beziehungsweise Tropfen unter die Zunge. Das Immunsystem gewöhnt sich daran. Es ist derzeit der einzige Weg, die Ursache zu behandeln statt nur die Symptome, und er kann dem Etagenwechsel zum Asthma vorbeugen.',
      },
      {
        frage: 'Kann eine Allergie im Erwachsenenalter neu entstehen?',
        antwort:
          'Ja. Allergien können in jedem Lebensalter erstmals auftreten, auch jenseits der vierzig. Ebenso können bestehende Allergien sich verändern oder im Lauf der Jahre abschwächen.',
      },
      {
        frage: 'Muss ich vor dem Test Medikamente absetzen?',
        antwort:
          'Antihistaminika unterdrücken die Hautreaktion und müssen einige Tage vorher pausiert werden, sonst ist der Test nicht aussagekräftig. Welche Medikamente das betrifft und wie lange vorher, wird bei der Terminvereinbarung besprochen. Kortisonsprays für die Nase können in der Regel weiter angewendet werden.',
      },
    ],
  },

  /* --------------------------------------------------------- Kinder-HNO */
  {
    slug: 'kinder-hno',
    reihenfolge: 3,
    navTitel: 'Kinder-HNO',
    h1: 'Kinder-HNO',
    title: 'Kinder-HNO – Hören, Infekte, Paukenröhrchen',
    description:
      'Wiederkehrende Infekte, Hörprüfung, Paukenerguss: Orientierung für Eltern zu den häufigsten HNO-Themen im Kindesalter.',
    lead: 'Kinder sagen nicht, dass sie schlecht hören. Sie fallen auf, weil sie nicht zuhören, undeutlich sprechen oder den Fernseher lauter stellen. Gerade in den Jahren, in denen Sprache entsteht, ist ein unbemerkter Hörverlust folgenreich — und zugleich in den meisten Fällen gut behandelbar.',
    teaser:
      'Kinder sagen nicht, dass sie schlecht hören — sie fallen auf, weil sie nicht zuhören.',
    fakten: [
      { label: 'Ohrmikroskopie', wert: 'Blick auf Trommelfell und Gehörgang' },
      { label: 'Tympanometrie', wert: 'Sekunden, schmerzfrei, zeigt Flüssigkeit im Mittelohr' },
      { label: 'Hörprüfung', wert: 'Spielaudiometrie oder Tonaudiometrie, je nach Alter' },
      { label: 'Grundsatz', wert: 'Kein erzwungener Test — lieber ein zweiter Termin' },
      { label: 'Zusatzqualifikation', wert: 'Psychosomatische Grundversorgung' },
    ],
    erkennen: {
      titel: 'Woran Eltern es bemerken',
      punkte: [
        'Das Kind reagiert nicht auf Ansprache oder fragt häufig nach',
        'Die Sprachentwicklung verzögert sich oder die Aussprache bleibt undeutlich',
        'Der Fernseher wird auffällig laut gestellt',
        'Häufige Mittelohrentzündungen, mehr als drei bis vier im Jahr',
        'Dauerhaft offener Mund, Schnarchen, unruhiger Schlaf',
        'Erzieherinnen oder Lehrkräfte sprechen Unaufmerksamkeit an',
      ],
    },
    vorgehen: {
      titel: 'Wie die Untersuchung abläuft',
      absaetze: [
        'Untersuchungen mit Kindern brauchen Zeit und Ruhe — das ist keine Freundlichkeit, sondern die Voraussetzung für ein verwertbares Ergebnis. Ein Kind, das sich erschreckt, macht beim Hörtest nicht mit, und ein Hörtest, bei dem das Kind nicht mitmacht, sagt nichts aus.',
        'Am Anfang steht die Ohrmikroskopie: Trommelfell und Gehörgang werden angesehen. Ein Paukenerguss — Flüssigkeit hinter dem Trommelfell — lässt sich dabei oft schon erkennen.',
        'Die Tympanometrie misst, wie beweglich das Trommelfell ist. Die Untersuchung dauert Sekunden, tut nicht weh und zeigt zuverlässig, ob sich Flüssigkeit im Mittelohr befindet. Je nach Alter folgt eine Hörprüfung: als Spielaudiometrie für die Kleinen, als klassische Tonaudiometrie für ältere Kinder.',
        'Dazu kommt der Blick auf Nase und Rachen — auf die Rachenmandel, die Nasenatmung, die Gaumenmandeln. Sie hängen mit den Ohren unmittelbar zusammen.',
      ],
    },
    ursachen: {
      titel: 'Was dahinterstecken kann',
      absaetze: [
        'Die häufigste Ursache für schlechtes Hören im Kindesalter ist der Paukenerguss: Flüssigkeit hinter dem Trommelfell, die das Hören dämpft wie Watte im Ohr. Ausgelöst wird er meist durch eine vergrößerte Rachenmandel oder wiederkehrende Infekte, die die Belüftung des Mittelohrs stören.',
        'Viele Paukenergüsse verschwinden von selbst. Halten sie über Monate an, kann das die Sprachentwicklung verzögern. Dann ist zu überlegen, ob ein Paukenröhrchen die Belüftung übernimmt, meist zusammen mit der Entfernung der Rachenmandel. Diese Entscheidung will gut abgewogen sein — nicht jedes Kind mit Paukenerguss braucht einen Eingriff.',
      ],
    },
    abklaeren: {
      titel: 'Wann eine Vorstellung sinnvoll ist',
      text: 'Eine HNO-ärztliche Untersuchung ist angezeigt, wenn:',
      punkte: [
        'Der Verdacht besteht, dass das Kind schlecht hört',
        'Die Sprachentwicklung hinter der Altersnorm zurückbleibt',
        'Mehr als drei bis vier Mittelohrentzündungen pro Jahr auftreten',
        'Das Kind dauerhaft durch den Mund atmet oder nachts schnarcht',
        'Ein Neugeborenen-Hörscreening auffällig war',
      ],
    },
    faq: [
      {
        frage: 'Ab welchem Alter kann man das Hören prüfen?',
        antwort:
          'Ab Geburt. Das Neugeborenen-Hörscreening läuft in den ersten Lebenstagen. Später stehen je nach Alter unterschiedliche Verfahren zur Verfügung — von der Messung ohne Mitarbeit des Kindes bis zur Spielaudiometrie, bei der das Kind auf einen Ton hin einen Baustein einsortiert. Auch sehr kleine Kinder lassen sich verlässlich prüfen.',
      },
      {
        frage: 'Braucht mein Kind wirklich ein Paukenröhrchen?',
        antwort:
          'Oft nicht. Viele Paukenergüsse bilden sich innerhalb von Wochen zurück. Zur Diskussion steht ein Röhrchen erst, wenn der Erguss über Monate bleibt, das Hören messbar eingeschränkt ist oder die Sprachentwicklung darunter leidet. Vorher wird abgewartet und kontrolliert.',
      },
      {
        frage: 'Wie oft sind Mittelohrentzündungen normal?',
        antwort:
          'Ein bis zwei pro Jahr sind im Kleinkindalter nichts Ungewöhnliches. Ab etwa vier Episoden im Jahr oder bei Entzündungen, die nicht richtig ausheilen, lohnt sich die Suche nach der Ursache.',
      },
      {
        frage: 'Mein Kind hat Angst vor Ärzten. Geht das trotzdem?',
        antwort:
          'In aller Regel ja. Die Untersuchungen tun nicht weh, und es gibt keinen Grund zur Eile. Wenn ein Kind am ersten Termin nicht mitmacht, wird ein zweiter vereinbart. Ein erzwungener Hörtest liefert ohnehin kein brauchbares Ergebnis.',
      },
    ],
  },

  /* ------------------------------------------------- Ästhetische Medizin */
  {
    slug: 'aesthetische-medizin',
    reihenfolge: 4,
    navTitel: 'Ästhetische Medizin',
    h1: 'Faltenbehandlung mit Botulinumtoxin',
    title: 'Faltenbehandlung mit Botulinumtoxin – fachärztlich',
    description:
      'Faltenbehandlung mit Botulinumtoxin aus fachärztlicher Hand: was medizinisch dahintersteht und worauf es bei der Gesichtsanatomie ankommt.',
    lead: 'Eine Faltenbehandlung ist ein medizinischer Eingriff, auch wenn sie in wenigen Minuten erledigt ist. Wie gut sie gelingt, entscheidet sich nicht am Präparat, sondern an der Kenntnis der Gesichtsanatomie: welcher Muskel wo verläuft, welche Dosis er braucht und wo eine Einheit zu viel den Ausdruck verändert.',
    teaser:
      'Ein medizinischer Eingriff — er gelingt über die Anatomie, nicht über das Präparat.',
    fakten: [
      { label: 'Vor der Behandlung', wert: 'Aufklärung, Anamnese, Bedenkzeit' },
      { label: 'Dauer', wert: 'Wenige Minuten, in der Regel ohne Betäubung' },
      { label: 'Wirkung', wert: 'Nach einigen Tagen, vollständig nach etwa zwei Wochen' },
      { label: 'Kontrolle', wert: 'Nach zwei Wochen, dann ggf. Nachjustierung' },
      { label: 'Qualifikation', wert: 'Botulinumtoxin Grund- und Masterkurs, AKM 2025' },
    ],
    erkennen: {
      titel: 'Worum es geht',
      punkte: [
        'Mimische Falten der oberen Gesichtshälfte — Stirn, Zornesfalte, Augenbereich',
        'Verstärkter Muskelzug, der den Ausdruck angestrengt oder streng wirken lässt',
        'Übermäßiges Schwitzen im Achselbereich',
        'Zähneknirschen und Verspannung der Kaumuskulatur',
      ],
    },
    vorgehen: {
      titel: 'Wie eine Behandlung abläuft',
      absaetze: [
        'Vor jeder Behandlung steht ein Gespräch: Was stört konkret, was ist das Ziel, was ist realistisch erreichbar? Dazu gehört auch, zu sagen, wenn eine Erwartung sich nicht erfüllen lässt oder von einer Behandlung abzuraten ist. Anschließend wird die Mimik in Bewegung beurteilt — im Ruhezustand ist nicht zu erkennen, welcher Muskel wie stark zieht.',
        'Die Aufklärung umfasst Wirkung, Dauer, mögliche Nebenwirkungen und Gegenanzeigen. Zwischen Aufklärung und Behandlung liegt eine angemessene Bedenkzeit.',
        'Die Injektion selbst dauert wenige Minuten. Es wird eine sehr feine Nadel verwendet; die meisten empfinden die Einstiche als kurzes Piksen. Eine Betäubung ist in der Regel nicht nötig.',
        'Die Wirkung setzt nach einigen Tagen ein und ist nach etwa zwei Wochen vollständig. Zu diesem Zeitpunkt folgt eine Kontrolle — dort zeigt sich, ob nachzujustieren ist. Die Wirkung hält üblicherweise drei bis sechs Monate an.',
      ],
    },
    ursachen: {
      titel: 'Was medizinisch dahintersteht',
      absaetze: [
        'Botulinumtoxin ist ein Arzneimittel, das die Signalübertragung vom Nerv zum Muskel vorübergehend hemmt. Der behandelte Muskel entspannt sich, die von ihm erzeugte Falte glättet sich. Der Wirkstoff wird seit Jahrzehnten auch in anderen Bereichen der Medizin eingesetzt, etwa bei Spastik oder übermäßigem Schwitzen.',
        'Der fachliche Hintergrund liegt in der Anatomie. Die Gesichtsmuskulatur ist eines der Gebiete, mit denen sich die Hals-Nasen-Ohrenheilkunde in Ausbildung und Operationslehre eingehend befasst — Muskelverläufe, Nervenbahnen, Gefäße. Genau diese Kenntnis entscheidet darüber, ob ein Ergebnis natürlich aussieht oder maskenhaft.',
      ],
    },
    abklaeren: {
      titel: 'Wann von einer Behandlung abzuraten ist',
      text: 'Nicht in jedem Fall ist eine Behandlung sinnvoll oder zulässig. Dagegen sprechen unter anderem:',
      punkte: [
        'Schwangerschaft und Stillzeit',
        'Erkrankungen der neuromuskulären Signalübertragung, etwa Myasthenia gravis',
        'Akute Infektionen oder Hauterkrankungen im geplanten Behandlungsgebiet',
        'Bekannte Unverträglichkeit gegenüber Bestandteilen des Präparats',
        'Erwartungen, die sich mit diesem Verfahren nicht erfüllen lassen',
      ],
    },
    faq: [
      {
        frage: 'Sieht man danach noch natürlich aus?',
        antwort:
          'Das hängt von der Dosis und der Platzierung ab. Zurückhaltend dosiert bleibt die Mimik erhalten und wirkt lediglich weniger angestrengt. Ein maskenhaftes Ergebnis entsteht durch zu viel Präparat an zu vielen Stellen — nicht durch den Wirkstoff selbst.',
      },
      {
        frage: 'Wie lange hält die Wirkung?',
        antwort:
          'In der Regel drei bis sechs Monate. Danach kehrt die Muskelaktivität allmählich zurück. Die Dauer unterscheidet sich individuell und hängt unter anderem von Dosis, Behandlungsareal und Muskelkraft ab.',
      },
      {
        frage: 'Welche Nebenwirkungen sind möglich?',
        antwort:
          'Häufig sind kleine Blutergüsse oder Rötungen an den Einstichstellen, gelegentlich Kopfschmerzen in den ersten Tagen. Selten kann es zu einem vorübergehenden Absinken des Oberlids oder einer Asymmetrie kommen. Alle bekannten Risiken werden vor der Behandlung im Einzelnen besprochen.',
      },
      {
        frage: 'Warum eine HNO-Ärztin und nicht ein Kosmetikinstitut?',
        antwort:
          'Weil es sich um einen medizinischen Eingriff mit einem verschreibungspflichtigen Arzneimittel handelt. Er gehört in ärztliche Hand — mit Aufklärung, Anamnese, Kenntnis der Gegenanzeigen und der Möglichkeit, bei Komplikationen sachgerecht zu reagieren.',
      },
      {
        frage: 'Was kostet eine Behandlung?',
        antwort:
          'Ästhetische Behandlungen sind Selbstzahlerleistungen und werden nach der Gebührenordnung für Ärzte abgerechnet. Die Kosten richten sich nach Umfang und Aufwand und werden vor der Behandlung schriftlich vereinbart.',
      },
    ],
  },
];

export const leistungenSortiert = [...leistungen].sort((a, b) => a.reihenfolge - b.reihenfolge);
