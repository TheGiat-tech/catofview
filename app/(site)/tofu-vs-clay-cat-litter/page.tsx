import { Metadata } from 'next';
import { Container } from '@/components/container';
import { Badge } from '@/components/badge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tofu vs Clay Cat Litter: Which Is Better in 2026? | CatOfView',
  description: 'Complete comparison of tofu and clay cat litter. Clear verdict on which is better for your home in 2026.',
};

export default function TofuVsClayCatLitter() {
  return (
    <Container>
      <article className="max-w-4xl mx-auto py-12">
        <Badge variant="success" className="mb-4">
          Updated for 2026
        </Badge>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Tofu vs Clay Cat Litter: Which Is Better in 2026?
        </h1>

        {/* TL;DR Section */}
        <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mb-12 rounded-r">
          <h2 className="text-2xl font-bold mb-4">Winner: Tofu Cat Litter</h2>
          <p className="text-lg">
            Cleaner, less dusty, and better odor control for most homes.
          </p>
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Comparison Table</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Feature</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Tofu</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Clay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Odor Control</td>
                  <td className="px-6 py-4 text-sm font-bold text-brand-600">Excellent</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Moderate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Dust</td>
                  <td className="px-6 py-4 text-sm font-bold text-brand-600">Very Low</td>
                  <td className="px-6 py-4 text-sm text-gray-700">High</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Tracking</td>
                  <td className="px-6 py-4 text-sm font-bold text-brand-600">Low</td>
                  <td className="px-6 py-4 text-sm text-gray-700">High</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Eco-Friendly</td>
                  <td className="px-6 py-4 text-sm font-bold text-brand-600">Yes</td>
                  <td className="px-6 py-4 text-sm text-gray-700">No</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Price</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Medium</td>
                  <td className="px-6 py-4 text-sm font-bold text-brand-600">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When Each Is Better */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-50 p-6 rounded-lg border-2 border-brand-600">
              <h3 className="text-2xl font-bold mb-4">When Tofu Is Better</h3>
              <ul className="space-y-2">
                <li className="text-lg">✓ Apartments</li>
                <li className="text-lg">✓ Sensitive cats</li>
                <li className="text-lg">✓ Clean floors matter</li>
                <li className="text-lg">✓ Environmental concerns</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
              <h3 className="text-2xl font-bold mb-4">When Clay Makes Sense</h3>
              <ul className="space-y-2">
                <li className="text-lg">✓ Lowest possible cost</li>
                <li className="text-lg">✓ Outdoor or utility rooms</li>
                <li className="text-lg">✓ Very tight budget</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Dive */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">The Real Difference</h2>
          
          <p className="text-lg mb-6">
            Clay litter has been the standard for decades because it's cheap and widely available. But modern tofu litter solves the biggest problems with clay:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="text-lg"><strong>Dust clouds</strong> — Tofu litter produces almost no dust when poured or scooped</li>
            <li className="text-lg"><strong>Tracking</strong> — Larger, softer pellets don't stick to paws like clay granules</li>
            <li className="text-lg"><strong>Odor masking</strong> — Tofu absorbs odors naturally instead of covering them with perfume</li>
            <li className="text-lg"><strong>Environmental impact</strong> — Tofu is biodegradable and sustainable</li>
          </ul>

          <p className="text-lg mb-8">
            The only real advantage of clay is price. If budget is your main concern, clay can work — but you'll deal with more mess and maintenance.
          </p>
        </section>

        {/* Verdict */}
        <section className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Verdict</h2>
          <p className="text-lg mb-6">
            For most cat owners in 2026, <strong>tofu cat litter is the better long-term choice</strong>. 
            The extra cost pays for itself in cleanliness, less tracking, and better odor control.
          </p>
          <div className="flex gap-4">
            <a href="#" className="btn-primary">
              👉 Compare prices
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
            <Link href="/tofu-vs-silica-cat-litter" className="p-4 border rounded-lg hover:border-brand-600 hover:bg-brand-50 transition">
              <h4 className="font-semibold text-lg mb-2">Tofu vs Silica</h4>
              <p className="text-gray-600">Another popular comparison</p>
            </Link>
          </div>
        </section>
      </article>
    </Container>
  );
}
