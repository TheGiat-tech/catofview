import { Container } from '@/components/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparison',
  description: 'Side-by-side comparison of self-cleaning litter boxes.',
};

export default function ComparisonPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-4">Self-Cleaning Litter Box Comparison</h1>
      <p className="text-xl text-gray-600 mb-12">
        Quick comparison of the top automatic litter boxes across key features.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-brand-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Model</th>
              <th className="px-6 py-4 text-left font-semibold">Odor Control</th>
              <th className="px-6 py-4 text-left font-semibold">Noise Level</th>
              <th className="px-6 py-4 text-left font-semibold">App</th>
              <th className="px-6 py-4 text-left font-semibold">Footprint</th>
              <th className="px-6 py-4 text-left font-semibold">Price Band</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">Litter-Robot 4</td>
              <td className="px-6 py-4">
                <span className="text-green-600 font-semibold">Excellent</span>
              </td>
              <td className="px-6 py-4">Very Quiet</td>
              <td className="px-6 py-4">✓ Wi-Fi</td>
              <td className="px-6 py-4">Large</td>
              <td className="px-6 py-4">$$$</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">PETKIT PURA X</td>
              <td className="px-6 py-4">
                <span className="text-green-600 font-semibold">Very Good</span>
              </td>
              <td className="px-6 py-4">Quiet</td>
              <td className="px-6 py-4">✓ Wi-Fi</td>
              <td className="px-6 py-4">Compact</td>
              <td className="px-6 py-4">$$</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">CATLINK Scooper</td>
              <td className="px-6 py-4">
                <span className="text-green-600">Good</span>
              </td>
              <td className="px-6 py-4">Moderate</td>
              <td className="px-6 py-4">✓ Wi-Fi</td>
              <td className="px-6 py-4">Medium</td>
              <td className="px-6 py-4">$$</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">PETREE</td>
              <td className="px-6 py-4">
                <span className="text-green-600">Good</span>
              </td>
              <td className="px-6 py-4">Moderate</td>
              <td className="px-6 py-4">—</td>
              <td className="px-6 py-4">Medium</td>
              <td className="px-6 py-4">$</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">Puramax</td>
              <td className="px-6 py-4">
                <span className="text-green-600 font-semibold">Very Good</span>
              </td>
              <td className="px-6 py-4">Quiet</td>
              <td className="px-6 py-4">✓ Wi-Fi</td>
              <td className="px-6 py-4">Medium</td>
              <td className="px-6 py-4">$$</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-semibold">Leo's Lounger</td>
              <td className="px-6 py-4">
                <span className="text-yellow-600">Fair</span>
              </td>
              <td className="px-6 py-4">Manual</td>
              <td className="px-6 py-4">—</td>
              <td className="px-6 py-4">Small</td>
              <td className="px-6 py-4">$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="font-bold mb-3">Price Bands:</h3>
        <ul className="space-y-1 text-gray-700">
          <li><strong>$</strong> = Under $300</li>
          <li><strong>$$</strong> = $300-$500</li>
          <li><strong>$$$</strong> = $500+</li>
        </ul>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Key Differences</h2>
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Premium Tier (Litter-Robot 4)</h3>
            <p className="text-gray-600">
              Best overall performance with superior odor control, quiet operation, and robust app features.
              Worth the premium for multi-cat households or those prioritizing convenience.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Best Value (PETKIT PURA X, CATLINK Scooper)</h3>
            <p className="text-gray-600">
              Strong feature sets at mid-range prices. PURA X excels in compact spaces, while CATLINK
              offers good all-around performance.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Budget Options (PETREE, Leo's Lounger)</h3>
            <p className="text-gray-600">
              Solid entry-level choices with fewer features but reliable basic operation. Good for
              testing if your cat will accept automatic boxes.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
