import { Metadata } from 'next';
import { Container } from '@/components/container';
import { Badge } from '@/components/badge';
import Link from 'next/link';
import { amazonSearch } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Best Cat Litter for Apartments (2026) | CatOfView',
  description: 'Low odor, low tracking, and minimal dust — the ideal cat litter for small spaces and apartments in 2026.',
};

export default function BestCatLitterForApartments2026() {
  return (
    <Container>
      <article className="max-w-4xl mx-auto py-12">
        <Badge variant="success" className="mb-4">
          Updated for 2026
        </Badge>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Best Cat Litter for Apartments (2026)
        </h1>

        {/* TL;DR Section */}
        <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mb-12 rounded-r">
          <h2 className="text-2xl font-bold mb-4">🏆 Top Pick: Tofu Cat Litter</h2>
          <p className="text-lg">
            Low odor, low tracking, and minimal dust — ideal for small spaces.
          </p>
        </div>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">What Apartment Owners Need</h2>
          
          <p className="text-lg mb-6">
            Living in an apartment means you need cat litter that excels in three key areas:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="text-lg"><strong>Strong odor control</strong> — Essential in close quarters</li>
            <li className="text-lg"><strong>Low tracking</strong> — Keep floors and furniture clean</li>
            <li className="text-lg"><strong>Minimal dust</strong> — Important for enclosed spaces</li>
          </ul>

          <p className="text-lg mb-8">
            Tofu litter consistently performs best across all three categories.
          </p>
        </section>

        {/* Why Tofu Wins */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Tofu Litter Wins for Apartments</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Superior Odor Control</h3>
              <p className="text-gray-700">
                Absorbs moisture instantly, preventing odors from spreading through your apartment. No need for heavy fragrances that can be overwhelming in small spaces.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Minimal Tracking</h3>
              <p className="text-gray-700">
                Larger, softer pellets don't stick to paws like clay or silica. Less mess on your floors, carpets, and furniture.
              </p>
            </div>

            <div className="bg-white p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Very Low Dust</h3>
              <p className="text-gray-700">
                Nearly dust-free, which is crucial for apartment air quality. Better for both you and your cat's respiratory health.
              </p>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Verdict</h2>
          <p className="text-lg mb-6">
            If you live in an apartment, <strong>tofu cat litter is the safest and cleanest choice in 2026</strong>.
          </p>
          <div className="flex gap-4">
            <a href={amazonSearch('tofu cat litter low dust')} target="_blank" rel="noopener noreferrer" className="btn-primary">
              👉 Check availability
            </a>
          </div>
        </section>

        {/* Related Guides */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/best-cat-litter-for-odor-2026" className="p-4 border rounded-lg hover:border-brand-600 hover:bg-brand-50 transition">
              <h4 className="font-semibold text-lg mb-2">Best for Odor Control</h4>
              <p className="text-gray-600">Top picks for controlling smells</p>
            </Link>
            <Link href="/tofu-vs-clay-cat-litter" className="p-4 border rounded-lg hover:border-brand-600 hover:bg-brand-50 transition">
              <h4 className="font-semibold text-lg mb-2">Tofu vs Clay</h4>
              <p className="text-gray-600">Detailed comparison</p>
            </Link>
          </div>
        </section>
      </article>
    </Container>
  );
}
