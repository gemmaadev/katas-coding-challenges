export function sameCase(a: string, b: string): number {
  if (
    a.toLowerCase() === a.toUpperCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  }

  if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else if (
    (a === a.toUpperCase() && b === b.toLowerCase()) ||
    (a === a.toLowerCase() && b === b.toUpperCase())
  ) {
    return 0;
  }
  return -1;
}
