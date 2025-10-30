import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/container';
import { Card } from '@/components/card';
import { Badge } from '@/components/badge';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-desert py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="success" className="mb-4">
                Updated for 2025
              </Badge>
              <h1 className="text-5xl font-bold text-[color:var(--text)] mb-6">
                The 5 Best Tofu Cat Litters (2025) – Tested & Reviewed
              </h1>
              <p className="text-xl text-[color:var(--subtext)] mb-8">
                We've tested dozens of cat litters to find the best options for odor control,
                clumping, and environmental friendliness. Here are our top picks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/reviews" className="btn btn-primary">
                  See All Reviews
                </Link>
                <Link href="/self-cleaning" className="btn btn-accent">
                  Self-Cleaning Boxes
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-card overflow-hidden shadow-desert">
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
        <h2 className="text-3xl font-bold text-center text-[color:var(--text)] mb-12">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Tofu Cat Litter"
            description="Eco-friendly, low-dust options that clump well and control odor effectively."
            image="/images/litter/og-tofu.jpg"
            href="/blog/best-tofu-litter-2025"
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
            <div className="text-oasis font-semibold">View All Reviews →</div>
          </Card>
        </div>
      </Container>

      {/* How We Test */}
      <section className="bg-[color:var(--bg-muted)] py-16 mt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[color:var(--text)] mb-6">How We Test</h2>
            <p className="text-lg text-[color:var(--subtext)] mb-8">
              Our team tests every product for at least 2 weeks in real-world conditions.
              We evaluate odor control (35%), safety (25%), maintenance (20%), app features (10%),
              and noise levels (10%) to give you honest, data-driven recommendations.
            </p>
            <Link
              href="/how-we-test"
              className="text-[color:var(--link)] hover:text-[color:var(--link-hover)] font-semibold"
            >
              Learn More About Our Process →
            </Link>
          </div>
        </Container>
      </section>

      {/* Latest Posts */}
      <Container>
        <h2 className="text-3xl font-bold text-[color:var(--text)] mb-8">Latest from the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="The 7 Best Self-Cleaning Litter Boxes (2025)"
            description="We tested leading automatic litter boxes for odor control, clump handling, safety, and long-term costs."
            image="/images/self-cleaning/hub-cover.jpg"
            href="/blog/best-self-cleaning-litter-boxes-2025"
          />
          <Card
            title="Best Tofu Cat Litter for 2025"
            description="Eco-friendly, biodegradable, and highly effective tofu litters that your cat will love."
            image="/images/litter/og-tofu.jpg"
            href="/blog/best-tofu-litter-2025"
          />
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="btn btn-primary">
            View All Posts
          </Link>
        </div>
      </Container>
    </>
  );
}
