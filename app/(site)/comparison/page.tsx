import { Container } from '@/components/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparison',
  description: 'Side-by-side comparison of self-cleaning litter boxes.',
};

export default function ComparisonPage() {
  return (
    <section className="hero-desert">
      <Container className="py-16 lg:py-20">
        <h1 className="text-4xl font-bold text-[color:var(--text)] mb-4">Self-Cleaning Litter Box Comparison</h1>
        <p className="text-xl text-[color:var(--subtext)] mb-12">
          Quick comparison of the top automatic litter boxes across key features.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full card overflow-hidden">
            <thead className="bg-camel text-night">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Model</th>
                <th className="px-6 py-4 text-left font-semibold">Odor Control</th>
                <th className="px-6 py-4 text-left font-semibold">Noise Level</th>
                <th className="px-6 py-4 text-left font-semibold">App</th>
                <th className="px-6 py-4 text-left font-semibold">Footprint</th>
                <th className="px-6 py-4 text-left font-semibold">Price Band</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border)]">
              <tr className="hover:bg-desert-50">
                <td className="px-6 py-4 font-semibold text-[color:var(--text)]">Litter-Robot 4</td>
                <td className="px-6 py-4">
                  <span className="text-oasis font-semibold">Excellent</span>
                </td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Very Quiet</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">✓ Wi-Fi</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Large</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">$$$</td>
              </tr>
              <tr className="hover:bg-desert-50">
                <td className="px-6 py-4 font-semibold text-[color:var(--text)]">PETKIT PURA X</td>
                <td className="px-6 py-4">
                  <span className="text-oasis font-semibold">Very Good</span>
                </td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Quiet</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">✓ Wi-Fi</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Compact</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">$$</td>
              </tr>
              <tr className="hover:bg-desert-50">
                <td className="px-6 py-4 font-semibold text-[color:var(--text)]">CATLINK Scooper</td>
                <td className="px-6 py-4">
                  <span className="text-oasis">Good</span>
                </td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Moderate</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">✓ Wi-Fi</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Medium</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">$$</td>
              </tr>
              <tr className="hover:bg-desert-50">
                <td className="px-6 py-4 font-semibold text-[color:var(--text)]">PETREE</td>
                <td className="px-6 py-4">
                  <span className="text-oasis">Good</span>
                </td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Moderate</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">—</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Medium</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">$</td>
              </tr>
              <tr className="hover:bg-desert-50">
                <td className="px-6 py-4 font-semibold text-[color:var(--text)]">Puramax</td>
                <td className="px-6 py-4">
                  <span className="text-oasis font-semibold">Very Good</span>
                </td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Quiet</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">✓ Wi-Fi</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Medium</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">$$</td>
              </tr>
              <tr className="hover:bg-desert-50">
                <td className="px-6 py-4 font-semibold text-[color:var(--text)]">Leo's Lounger</td>
                <td className="px-6 py-4">
                  <span className="text-terracotta">Fair</span>
                </td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Manual</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">—</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">Small</td>
                <td className="px-6 py-4 text-[color:var(--subtext)]">$</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 card">
          <h3 className="font-bold text-[color:var(--text)] mb-3">Price Bands:</h3>
          <ul className="space-y-1 text-[color:var(--subtext)]">
            <li><strong>$</strong> = Under $300</li>
            <li><strong>$$</strong> = $300-$500</li>
            <li><strong>$$$</strong> = $500+</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-[color:var(--text)] mb-6">Key Differences</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-[color:var(--text)] mb-3">Premium Tier (Litter-Robot 4)</h3>
              <p className="text-[color:var(--subtext)]">
                Best overall performance with superior odor control, quiet operation, and robust app features.
                Worth the premium for multi-cat households or those prioritizing convenience.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-[color:var(--text)] mb-3">Best Value (PETKIT PURA X, CATLINK Scooper)</h3>
              <p className="text-[color:var(--subtext)]">
                Strong feature sets at mid-range prices. PURA X excels in compact spaces, while CATLINK
                offers good all-around performance.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-[color:var(--text)] mb-3">Budget Options (PETREE, Leo's Lounger)</h3>
              <p className="text-[color:var(--subtext)]">
                Solid entry-level choices with fewer features but reliable basic operation. Good for
                testing if your cat will accept automatic boxes.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
