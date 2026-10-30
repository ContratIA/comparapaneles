// Conversor mínimo de Markdown a HTML para los artículos (titulares, listas, tablas, enlaces y negrita).
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function inline(t) {
  let s = esc(t);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, txt, url) => {
    const ext = /^https?:/.test(url);
    return `<a href="${url}"${ext ? ' rel="noopener"' : ''}>${txt}</a>`;
  });
  return s;
}

export function parseFront(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error('Falta frontmatter');
  const meta = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: m[2] };
}

export function mdToHtml(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const out = [], toc = [];
  let i = 0, afterSources = false;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    let m;
    if ((m = l.match(/^## (.+)$/))) {
      const id = slugify(m[1]);
      toc.push([id, m[1]]);
      afterSources = /^fuentes$/i.test(m[1].trim());
      out.push(`<h2 id="${id}">${inline(m[1])}</h2>`); i++; continue;
    }
    if ((m = l.match(/^### (.+)$/))) { out.push(`<h3>${inline(m[1])}</h3>`); i++; continue; }
    if (l.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++]);
      const cells = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = cells(rows[0]);
      const al = cells(rows[1]).map((c) => (c.endsWith(':') ? 'num' : ''));
      const body = rows.slice(2).map(cells);
      out.push(`<div class="tablewrap"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${body.map((r) => `<tr>${r.map((c, k) => `<td${al[k] ? ' class="num"' : ''}>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^- /.test(l)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i])) items.push(lines[i++].slice(2));
      out.push(`<ul${afterSources ? ' class="src"' : ''}>${items.map((x) => `<li>${inline(x)}</li>`).join('')}</ul>`);
      continue;
    }
    if (/^\d+\. /.test(l)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) items.push(lines[i++].replace(/^\d+\. /, ''));
      out.push(`<ol>${items.map((x) => `<li>${inline(x)}</li>`).join('')}</ol>`);
      continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3} |\||- |\d+\. )/.test(lines[i])) para.push(lines[i++]);
    const text = para.join(' ');
    const isFormula = text.startsWith('**') && text.includes(' = ') && text.length < 220;
    out.push(`<p${isFormula ? ' class="formula"' : ''}>${inline(text)}</p>`);
  }
  return { html: out.join('\n'), toc };
}

export const wordCount = (html) => html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
