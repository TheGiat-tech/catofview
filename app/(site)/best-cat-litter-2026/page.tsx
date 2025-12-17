import { Metadata } from 'next';
import { Container } from '@/components/container';
import { Badge } from '@/components/badge';
import Link from 'next/link';
import { amazonSearch } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'Best Cat Litter in 2026 - Our Top Pick | CatOfView',
  description: 'After comparing clay, silica, and plant-based litters, we found the best cat litter for most homes in 2026. Clear verdict, no fluff.',
};

export default function BestCatLitter2026() {
  return (
    <Container>
      <article className="max-w-4xl mx-auto py-12">
        <Badge variant="success" className="mb-4">
          Updated for 2026
        </Badge>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Best Cat Litter in 2026
        </h1>

        {/* TL;DR Section */}
        <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mb-12 rounded-r">
          <h2 className="text-2xl font-bold mb-4">🏆 Our Pick: Tofu Cat Litter</h2>
          <p className="text-lg mb-2">
            Best overall balance of odor control, low tracking, cleanliness, and safety.
          </p>
          <p className="text-gray-600">
            <strong>Downside:</strong> Costs slightly more than basic clay.
          </p>
        </div>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Tofu Cat Litter Wins in 2026</h2>
          
          <p className="text-lg mb-6">
            After comparing clay, silica, and plant-based litters, tofu litter consistently delivers the best real-world results:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="text-lg">Absorbs odor instead of masking it</li>
            <li className="text-lg">Very low dust (better for cats and humans)</li>
            <li className="text-lg">Minimal tracking outside the litter box</li>
            <li className="text-lg">Easier daily cleanup</li>
            <li className="text-lg">Biodegradable and eco-friendly</li>
          </ul>

          <p className="text-lg mb-8">
            For most homes, it simply creates <strong>less mess and less smell</strong>.
          </p>
        </section>

        {/* Also Good Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Also Good Options</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold mb-2">Best Budget Choice: Clay Cat Litter</h3>
              <p className="text-gray-700">
                Affordable and widely available, but dusty and prone to tracking.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold mb-2">Best for Multi-Cat Homes: Silica Crystal Litter</h3>
              <p className="text-gray-700">
                Strong odor control and long lifespan, but less natural and not biodegradable.
              </p>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Verdict</h2>
          <p className="text-lg mb-6">
            If you want the cleanest and lowest-maintenance option in 2026, <strong>tofu cat litter is the best choice for most cat owners</strong>.
            Clay only makes sense if price is your main concern.
          </p>
          <div className="flex gap-4">
            <a href={amazonSearch('tofu cat litter')} target="_blank" rel="noopener noreferrer" className="btn-primary">
              👉 Check current price
            </a>
          </div>
        </section>

        {/* Related Guides */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/best-cat-litter-for-odor-2026" className="p-4 border rounded-lg hover:border-brand-600 hover:bg-brand-50 transition">
              <h4 className="font-semibold text-lg mb-2">Best Cat Litter for Odor Control</h4>
              <p className="text-gray-600">Top picks for apartments and indoor cats</p>
            </Link>
            <Link href="/tofu-vs-clay-cat-litter" className="p-4 border rounded-lg hover:border-brand-600 hover:bg-brand-50 transition">
              <h4 className="font-semibold text-lg mb-2">Tofu vs Clay Cat Litter</h4>
              <p className="text-gray-600">Detailed comparison to help you decide</p>
            </Link>
          </div>
        </section>
      </article>
    </Container>
  );
}
