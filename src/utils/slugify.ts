export function slugify(text: string, maxLength = 79): string {
  const base = text
    .toString()
    .normalize('NFD') // Normalise le texte en séparant les caractères diacritiques
    .replace(/[\u0300-\u036f]/g, '') // Supprime les diacritiques (accents)
    .toLowerCase()
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/[^\w\-]+/g, '') // Enlève tout ce qui n'est pas un mot ou un tiret
    .replace(/\-\-+/g, '-') // Remplace les doubles tirets par un seul
    .replace(/^-+|-+$/g, ''); // Supprime les tirets au début et à la fin

  if (maxLength <= 0 || base.length <= maxLength) {
    return base;
  }

  const truncated = base.slice(0, maxLength);
  const lastDash = truncated.lastIndexOf('-');
  return (lastDash > 0 ? truncated.slice(0, lastDash) : truncated).replace(/-+$/g, '');
}
