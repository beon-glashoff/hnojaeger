/**
 * Die Logo-SVGs aus dem CD bringen feste Füllfarben als .st0–.st3 mit.
 * Für die Themes brauchen wir sie färbbar: Der eingebettete <style>-Block
 * wird ersetzt, sodass alle Flächen `currentColor` folgen. Eine Datei
 * bedient damit jede Variante — die Farbe kommt aus dem Token.
 */
export function logoInline(raw: string, opts: { label?: string; hidden?: boolean } = {}) {
  const svg = raw
    .replace(/<\?xml[^>]*\?>/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/, '<style>.st0,.st1,.st2,.st3{fill:currentColor}</style>')
    .trim();

  const attrs = opts.hidden
    ? 'aria-hidden="true" focusable="false"'
    : `role="img" aria-label="${opts.label ?? ''}"`;

  return svg.replace('<svg', `<svg ${attrs}`);
}
