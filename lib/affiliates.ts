export function amazonSearch(
  name: string,
  opts?: { tag?: string }
): string {
  const tag = opts?.tag || process.env.AMAZON_TAG || '';
  const tagPart = tag ? `&tag=${encodeURIComponent(tag)}` : '';
  return `https://www.amazon.com/s?k=${encodeURIComponent(name)}${tagPart}`;
}
