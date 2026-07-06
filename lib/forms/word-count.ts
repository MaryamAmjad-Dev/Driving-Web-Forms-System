export const MIN_FORM_WORDS = 10;

export function countWords(value: string): number {
  const trimmed = value.trim();
  if (!trimmed) {
    return 0;
  }

  return trimmed.split(/\s+/).length;
}

export function hasMinWords(
  value: string,
  min = MIN_FORM_WORDS,
): boolean {
  return countWords(value) >= min;
}
