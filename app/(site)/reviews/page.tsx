import { Container } from '@/components/container';
import { Card } from '@/components/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Expert reviews of cat litter, self-cleaning boxes, and cat care products.',
};

export default function ReviewsPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-4">Product Reviews</h1>
      <p className="text-xl text-gray-600 mb-12">
        In-depth testing and honest reviews of cat litter, automatic litter boxes, and accessories.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Self-Cleaning Litter Boxes"
          description="Complete guide to automatic litter boxes with detailed comparisons."
          image="/images/self-cleaning/hub-cover.jpg"
          href="/self-cleaning"
        />
        <Card
          title="Tofu Cat Litter"
          description="Eco-friendly, biodegradable litter options with excellent odor control."
          image="/images/litter/og-tofu.jpg"
          href="/blog/best-tofu-litter-2025"
        />
        <Card
          title="All Reviews"
          description="Browse our complete collection of product reviews and guides."
          href="/blog"
        >
          <div className="text-brand-600 font-semibold">View All →</div>
        </Card>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Review Categories</h2>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Cat Litter</h3>
            <p className="text-gray-600 mb-4">
              Clay, crystal, tofu, wood, and other litter types tested for clumping, odor control, and dust levels.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Self-Cleaning Boxes</h3>
            <p className="text-gray-600 mb-4">
              Automatic litter boxes from Litter-Robot, PETKIT, CATLINK, and more.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Accessories</h3>
            <p className="text-gray-600 mb-4">
              Mats, liners, scoops, and other litter box accessories.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
