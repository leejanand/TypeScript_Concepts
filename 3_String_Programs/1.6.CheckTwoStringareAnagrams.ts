function isAnagram(a: string, b: string): boolean {
  const clean = (s: string) => s.toLowerCase().replace(/\s/g, '');
  a = clean(a); 
  b = clean(b);

  if (a.length !== b.length) return false;

  const map: Record<string, number> = {};
  for (const c of a) map[c] = (map[c] ?? 0) + 1;
  for (const c of b) if (!map[c]--) return false;

  return true;
}
