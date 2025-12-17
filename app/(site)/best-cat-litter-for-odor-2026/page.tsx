import { Metadata } from 'next';
import { Container } from '@/components/container';
import { Badge } from '@/components/badge';
import Link from 'next/link';
import { amazonSearch } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Best Cat Litter for Odor Control (2026) | CatOfView',
  description: 'The most effective cat litter for controlling odors in 2026. Absorbs at the source instead of masking with fragrance.',
};

export default function BestCatLitterForOdor2026() {
  return (
    <Container>
      <article className="max-w-4xl mx-auto py-12">
        <Badge variant="success" className="mb-4">
          Updated for 2026
        </Badge>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Best Cat Litter for Odor Control (2026)
        </h1>

        {/* TL;DR Section */}
        <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mb-12 rounded-r">
          <h2 className="text-2xl font-bold mb-4">🏆 Winner: Tofu Cat Litter</h2>
          <p className="text-lg">
            Absorbs odors at the source instead of covering them with fragrance.
          </p>
        </div>

        {/* Odor Control Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Odor Control Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Litter Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Odor Control</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-brand-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Tofu</td>
                  <td className="px-6 py-4 text-sm font-bold text-brand-600">Excellent</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Absorbs moisture and odor</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Silica</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Very Good</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Traps odor but less natural</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Clay</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Moderate</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Relies on added fragrance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Odor Control Matters</h2>
          
          <p className="text-lg mb-6">
            Bad odor usually comes from <strong>moisture + bacteria</strong>, not the litter itself.
            Tofu litter absorbs moisture quickly, preventing odor from forming in the first place.
          </p>

          <p className="text-lg mb-8">
            Unlike clay litter that masks odors with fragrance, tofu litter addresses the root cause by absorbing moisture before bacteria can grow.
          </p>
        </section>

        {/* Verdict */}
        <section className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Verdict</h2>
          <p className="text-lg mb-6">
            For apartments and indoor homes, <strong>tofu litter offers the most reliable odor control in 2026</strong> without heavy scents.
          </p>
          <div className="flex gap-4">
            <a href={amazonSearch('tofu cat litter odor control')} target="_blank" rel="noopener noreferrer" className="btn-primary">
              👉 View best tofu litter options
            </a>
          </div>
        </section>

        {/* Related Guides */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/best-cat-litter-2026" className="p-4 border rounded-lg hover:border-brand-600 hover:bg-brand-50 transition">
              <h4 className="font-semibold text-lg mb-2">Best Cat Litter Overall</h4>
              <p className="text-gray-600">Our top pick for 2026</p>
            </Link>
            <Link href="/best-cat-litter-for-apartments-2026" className="p-4 border rounded-lg hover:border-brand-600 hover:bg-brand-50 transition">
              <h4 className="font-semibold text-lg mb-2">Best for Apartments</h4>
              <p className="text-gray-600">Low tracking and minimal dust</p>
            </Link>
          </div>
        </section>
      </article>
    </Container>
  );
}
