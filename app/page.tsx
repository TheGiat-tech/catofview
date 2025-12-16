import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/container';
import { Card } from '@/components/card';
import { Badge } from '@/components/badge';
import { amazonProduct } from '@/lib/affiliates';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="success" className="mb-4">
                Updated for 2026
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                The 5 Best Tofu Cat Litters (2026) – Tested & Reviewed
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We've tested dozens of cat litters to find the best options for odor control,
                clumping, and environmental friendliness. Here are our top picks.
              </p>
              <div className="flex gap-4">
                <Link href="/reviews" className="btn-primary">
                  See All Reviews
                </Link>
                <Link href="/self-cleaning" className="btn-secondary">
                  Self-Cleaning Boxes
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/brand/hero-cat.jpg"
                alt="Cat of View - Expert Reviews"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Categories */}
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Tofu Cat Litter"
            description="Eco-friendly, low-dust options that clump well and control odor effectively."
            image="/images/litter/og-tofu.jpg"
            href="/blog/best-tofu-litter-2026"
          />
          <Card
            title="Self-Cleaning Boxes"
            description="Automatic litter boxes that save time and keep your home fresh."
            image="/images/self-cleaning/hub-cover.jpg"
            href="/self-cleaning"
          />
          <Card
            title="Complete Reviews"
            description="In-depth testing of cat litters, boxes, and accessories."
            href="/reviews"
          >
            <div className="text-brand-600 font-semibold">View All Reviews →</div>
          </Card>
        </div>
      </Container>

      {/* How We Test */}
      <section className="bg-gray-50 py-16 mt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">How We Test</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team tests every product for at least 2 weeks in real-world conditions.
              We evaluate odor control (35%), safety (25%), maintenance (20%), app features (10%),
              and noise levels (10%) to give you honest, data-driven recommendations.
            </p>
            <Link href="/how-we-test" className="text-brand-600 hover:text-brand-700 font-semibold">
              Learn More About Our Process →
            </Link>
          </div>
        </Container>
      </section>

      {/* Product Reviews */}
      <Container className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Top 5 Tofu Cat Litters (2026)</h2>
        <div className="space-y-8">
          {/* Pidan Tofu Cat Litter */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <div className="md:col-span-1">
                <img
                  src="https://m.media-amazon.com/images/I/71nl1sjbYjL._AC_SL1500_.jpg"
                  alt="Pidan Tofu Cat Litter"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Pidan Tofu Cat Litter</h3>
                  <Badge variant="success">Best Overall</Badge>
                </div>
                <p className="text-xl font-semibold text-brand-600 mb-4">~$36.71 for 21.2 lb</p>
                <p className="text-gray-600 mb-4">
                  Superior clumping strength and excellent odor control. Very low dust with a pleasant, subtle scent. Perfect for multi-cat households prioritizing performance.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Superior clumping strength</li>
                    <li>Very low dust</li>
                    <li>Effective odor control through 48 hours</li>
                    <li>Pleasant, subtle scent</li>
                  </ul>
                </div>
                <a
                  href={amazonProduct('B07WBVBRQ5')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Check on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* PETKIT Mixed Tofu + Bentonite */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <div className="md:col-span-1">
                <img
                  src="https://m.media-amazon.com/images/I/71r942Fe2nL._AC_SL1500_.jpg"
                  alt="PETKIT Mixed Tofu + Bentonite Cat Litter"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">PETKIT Mixed Tofu + Bentonite</h3>
                  <Badge variant="success">Best Value</Badge>
                </div>
                <p className="text-xl font-semibold text-brand-600 mb-4">~$27.99 for 15.8 lb</p>
                <p className="text-gray-600 mb-4">
                  Excellent price-to-performance ratio with good clumping and odor control. Widely available online and works great with PETKIT automatic boxes.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Excellent price-to-performance ratio</li>
                    <li>Good clumping and odor control</li>
                    <li>Widely available online</li>
                    <li>Works great with PETKIT automatic boxes</li>
                  </ul>
                </div>
                <a
                  href={amazonProduct('B08CRHL9LZ')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Check on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* Honeycare Tofu Cat Litter */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <div className="md:col-span-1">
                <img
                  src="https://m.media-amazon.com/images/I/81Ghm4abFtS._AC_SL1500_.jpg"
                  alt="Honeycare Tofu Cat Litter"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Honeycare Tofu Cat Litter</h3>
                <p className="text-xl font-semibold text-brand-600 mb-4">~$42.99 for 24 lb</p>
                <p className="text-gray-600 mb-4">
                  Premium tofu litter with excellent clumping and minimal dust. Large bag size offers great value for multi-cat households.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Excellent clumping performance</li>
                    <li>Minimal dust and tracking</li>
                    <li>Large 24 lb bag size</li>
                    <li>Natural odor control</li>
                  </ul>
                </div>
                <a
                  href={amazonProduct('B0BKSDTX6F')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Check on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* Tuft & Paw Really Great Cat Litter */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <div className="md:col-span-1">
                <img
                  src="https://m.media-amazon.com/images/I/61KnBwY-FeL._AC_SL1500_.jpg"
                  alt="Tuft & Paw Really Great Cat Litter"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Tuft & Paw Really Great Cat Litter</h3>
                  <Badge variant="success">Premium Choice</Badge>
                </div>
                <p className="text-xl font-semibold text-brand-600 mb-4">$29 for 9.5 lb</p>
                <p className="text-gray-600 mb-4">
                  Premium tofu blend with added corn and pea fiber. Outstanding clumping with natural odor control. Flushable and compostable for eco-conscious buyers.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Outstanding clumping performance</li>
                    <li>Natural odor control (no artificial scents)</li>
                    <li>Very low tracking</li>
                    <li>Flushable and compostable</li>
                  </ul>
                </div>
                <a
                  href={amazonProduct('B0925BX1B9')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Check on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* World's Best Cat Litter */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <div className="md:col-span-1">
                <img
                  src="https://m.media-amazon.com/images/I/912pQLQc2bL._AC_SL1500_.jpg"
                  alt="World's Best Cat Litter"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">World's Best Cat Litter</h3>
                <p className="text-xl font-semibold text-brand-600 mb-4">~$28.99 for 15 lb</p>
                <p className="text-gray-600 mb-4">
                  Made from whole-kernel corn, this natural litter offers excellent clumping and odor control. Lightweight and easy to pour with minimal dust.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Made from whole-kernel corn</li>
                    <li>Excellent clumping and odor control</li>
                    <li>Lightweight and easy to pour</li>
                    <li>Minimal dust and safe for cats</li>
                  </ul>
                </div>
                <a
                  href={amazonProduct('B0002DJX3Q')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Check on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Latest Posts */}
      <Container>
        <h2 className="text-3xl font-bold mb-8">Latest from the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="The 7 Best Self-Cleaning Litter Boxes (2026)"
            description="We tested leading automatic litter boxes for odor control, clump handling, safety, and long-term costs."
            image="/images/self-cleaning/hub-cover.jpg"
            href="/blog/best-self-cleaning-litter-boxes-2026"
          />
          <Card
            title="Best Tofu Cat Litter for 2026"
            description="Eco-friendly, biodegradable, and highly effective tofu litters that your cat will love."
            image="/images/litter/og-tofu.jpg"
            href="/blog/best-tofu-litter-2026"
          />
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="btn-primary">
            View All Posts
          </Link>
        </div>
      </Container>
    </>
  );
}
