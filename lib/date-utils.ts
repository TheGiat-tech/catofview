/**
 * Get the current year dynamically to avoid hardcoding dates
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Format a year range (e.g., "2024-2026")
 */
export function getYearRange(startYear: number): string {
  const currentYear = getCurrentYear();
  return startYear === currentYear ? `${currentYear}` : `${startYear}-${currentYear}`;
}

/**
 * Check if content is current (within 18 months of publication)
 */
export function isContentCurrent(dateString: string): boolean {
  const publishDate = new Date(dateString);
  const now = new Date();
  const monthsOld = (now.getTime() - publishDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
  return monthsOld <= 18;
}
