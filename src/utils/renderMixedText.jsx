/**
 * Renderiza texto onde números ganham a classe `fix`
 * para manter o estilo monoespacial (ex: "luxjson" e "404").
 * Antes duplicado em luxjson.jsx, Blog.jsx, BlogPost.jsx, NotFound.jsx.
 */
export default function renderMixedText(text, uppercase = false) {
  if (!text) return '';
  const normalized = uppercase ? text.toUpperCase() : text.toLowerCase();
  const parts = normalized.split(/(\d+)/);
  return parts.map((part, i) =>
    /\d+/.test(part) ? (
      <span key={i} className="fix">
        {part}
      </span>
    ) : (
      part
    )
  );
}
