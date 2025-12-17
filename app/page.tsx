import Link from 'next/link';
import { Container } from '@/components/container';
import { Card } from '@/components/card';
import { Badge } from '@/components/badge';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="success" className="mb-4">
              Updated for 2026
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cat Litter Reviews & Comparisons That Help You Choose Faster (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choosing the right cat litter shouldn't feel like guesswork.
              At CatOfView, we compare the most popular cat litters of 2026 and clearly recommend <strong>what to buy, who it's for, and when it's not worth it</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              No endless lists. No fake neutrality. Just clear picks.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Guides */}
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Best Cat Litter Overall (2026)"
            description="Our top pick for most cat owners in 2026."
            image="/images/litter/og-tofu.jpg"
            href="/best-cat-litter-2026"
          />
          <Card
            title="Best Cat Litter for Odor Control"
            description="The most effective options for controlling odors."
            href="/best-cat-litter-for-odor-2026"
          />
          <Card
            title="Best Cat Litter for Apartments"
            description="Low tracking, low dust, and strong odor control."
            href="/best-cat-litter-for-apartments-2026"
          />
          <Card
            title="Tofu vs Clay Cat Litter"
            description="Which is better for your home?"
            href="/tofu-vs-clay-cat-litter"
          />
          <Card
            title="Tofu vs Silica Cat Litter"
            description="Natural vs long-lasting – which should you choose?"
            href="/tofu-vs-silica-cat-litter"
          />
        </div>
      </Container>

      {/* Trust & Disclosure */}
      <section className="bg-gray-50 py-16 mt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Trust & Disclosure</h2>
            <p className="text-lg text-gray-600">
              CatOfView is independently run.
              Some links may earn us a commission at no extra cost to you. This does not affect our recommendations.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
