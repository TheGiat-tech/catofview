import { Container } from '@/components/container';
import Image from 'next/image';
import { amazonSearch } from '@/lib/affiliates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Self-Cleaning Litter Boxes',
  description: 'Expert reviews of automatic litter boxes including Litter-Robot 4, PETKIT PURA X, CATLINK Scooper, and more.',
};

const products = [
  {
    name: 'Litter-Robot 4',
    image: '/images/self-cleaning/litter-robot-4.jpg',
    description: 'Premium automatic litter box with excellent odor control, quiet operation, and Wi-Fi app connectivity. Best for multi-cat households.',
    highlights: ['Sealed waste drawer', 'Multi-cat ready', 'Wi-Fi app alerts', 'Quiet cycling'],
  },
  {
    name: 'PETKIT PURA X',
    image: '/images/self-cleaning/petkit-pura-x.jpg',
    description: 'Compact design perfect for apartments. Includes deodorizer module and reliable clump separation.',
    highlights: ['Compact footprint', 'Deodorizer included', 'Smart app control', 'Great for apartments'],
  },
  {
    name: 'CATLINK Scooper',
    image: '/images/self-cleaning/catlink-scooper.jpg',
    description: 'Excellent value with multiple safety sensors and Wi-Fi connectivity. Good balance of features and price.',
    highlights: ['Best value', 'Multiple sensors', 'Wi-Fi enabled', 'Easy maintenance'],
  },
  {
    name: 'PETREE',
    image: '/images/self-cleaning/petree.jpg',
    description: 'Affordable option with simple UI and easy cleaning. Great starter model for those new to automatic boxes.',
    highlights: ['Affordable price', 'Simple to use', 'Easy to clean', 'Reliable operation'],
  },
  {
    name: 'Puramax',
    image: '/images/self-cleaning/puramax.jpg',
    description: 'Features built-in deodorization system. Ideal for multi-cat households with app monitoring.',
    highlights: ['Deodorization system', 'Multi-cat friendly', 'App monitoring', 'Large capacity'],
  },
  {
    name: 'Leo\'s Lounger',
    image: '/images/self-cleaning/leo-s-lounger.jpg',
    description: 'Budget-friendly pick with basic automation. Manual rotation system keeps costs down.',
    highlights: ['Budget friendly', 'Manual rotation', 'Simple design', 'Entry-level option'],
  },
];

export default function SelfCleaningPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-12">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Self-Cleaning Litter Boxes</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Automatic litter boxes save time and keep your home fresher. We've tested the leading models
            for odor control, safety, reliability, and long-term value.
          </p>
        </Container>
      </section>

      <Container>
        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Self-Cleaning?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">✓ Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reduces daily scooping to once a week</li>
                <li>• Better odor control with sealed waste compartments</li>
                <li>• Cleaner litter = happier cats</li>
                <li>• App alerts for waste levels and issues</li>
                <li>• Great for multi-cat households</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">⚠ Considerations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Higher upfront cost ($300-$700)</li>
                <li>• Requires electricity and Wi-Fi (most models)</li>
                <li>• Larger footprint than traditional boxes</li>
                <li>• May need training period for some cats</li>
                <li>• Replacement parts and liners add to costs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Top Picks for 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-brand-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={amazonSearch(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-brand-600 hover:bg-brand-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    Check on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buying Guide */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">What to Consider</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Safety Features</h3>
              <p className="text-gray-700">
                Look for weight sensors, pinch protection, and automatic stop mechanisms. Premium models
                have multiple sensors to prevent accidents.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Odor Control</h3>
              <p className="text-gray-700">
                Sealed waste drawers and carbon filters make a huge difference. Some models include
                built-in deodorizers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Noise Level</h3>
              <p className="text-gray-700">
                Brushless motors are quieter than standard motors. Check if the unit can be scheduled
                to run during the day when you're away.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Long-Term Costs</h3>
              <p className="text-gray-700">
                Factor in waste drawer liners, carbon filters, and electricity. Some models use standard
                trash bags instead of proprietary liners.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-brand-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Want the Full Breakdown?</h2>
          <p className="text-gray-600 mb-6">
            Read our complete guide with testing methodology, long-term costs, and detailed comparisons.
          </p>
          <a href="/blog/best-self-cleaning-litter-boxes-2025" className="btn-primary">
            Read Full Review
          </a>
        </div>
      </Container>
    </>
  );
}
