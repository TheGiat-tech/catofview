import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get the current year for copyright notices and dynamic content
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Get a formatted year string for content (e.g., "2026")
 */
export function getContentYear(): string {
  return getCurrentYear().toString();
}

/**
 * Check if content is from the current year
 */
export function isCurrentYear(date: string | Date): boolean {
  const contentYear = new Date(date).getFullYear();
  return contentYear === getCurrentYear();
}

/**
 * Format a date range (e.g., "2025-2026" for content spanning multiple years)
 */
export function formatYearRange(startYear: number, endYear?: number): string {
  const currentYear = getCurrentYear();
  const end = endYear || currentYear;
  return startYear === end ? `${startYear}` : `${startYear}-${end}`;
}
