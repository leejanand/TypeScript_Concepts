function findDuplicates(str: string) {
  const map: Record<string, number> = {};
  const result: Record<string, number> = {};

  for (const c of str) {
    map[c] = (map[c] ?? 0) + 1;
  }

  for (const c in map) {
    if (map[c] > 1) result[c] = map[c];
  }

  return result;
}

console.log(findDuplicates("programming"));

