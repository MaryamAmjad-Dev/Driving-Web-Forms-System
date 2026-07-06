export function formatAdminDate(isoDate: string): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
}

export function formatLabel(value: string): string {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}
