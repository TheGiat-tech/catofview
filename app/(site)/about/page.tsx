import { Container } from '@/components/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Cat of View - your trusted source for cat litter reviews.',
};

export default function AboutPage() {
  return (
    <section className="hero-desert">
      <Container className="max-w-4xl py-16 lg:py-20">
        <h1 className="text-4xl font-bold text-[color:var(--text)] mb-6">About Cat of View</h1>

        <div className="prose max-w-none">
          <p className="text-xl text-[color:var(--subtext)] mb-8">
            We're a team of cat lovers dedicated to helping you find the best litter solutions
            for your feline friends.
          </p>

          <h2>Our Mission</h2>
          <p>
            Cat of View was founded to cut through marketing hype and provide honest, data-driven
            reviews of cat litter and litter box products. We test everything we recommend in
            real-world conditions with real cats.
          </p>

          <h2>Why Trust Us?</h2>
          <ul>
            <li>
              <strong>Independent Testing:</strong> We purchase all products at retail prices.
              No freebies, no sponsored reviews.
            </li>
            <li>
              <strong>Real Cats, Real Homes:</strong> Products are tested for 2+ weeks in actual
              household conditions, not in a lab.
            </li>
            <li>
              <strong>Transparent Methodology:</strong> Our scoring system and testing protocols
              are publicly documented.
            </li>
            <li>
              <strong>Regular Updates:</strong> Reviews are updated when new models launch or
              significant issues emerge.
            </li>
          </ul>

          <h2>Our Team</h2>
          <p>
            Our reviewers have a combined 30+ years of cat ownership experience and have tested
            over 100 litter products. We consult with veterinarians on safety concerns and work
            with environmental experts to assess eco-friendly claims.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            Cat of View participates in affiliate programs. When you click our Amazon links and
            make a purchase, we may earn a small commission at no extra cost to you. This helps
            us fund testing and keep our content free.
          </p>
          <p>
            <strong>Important:</strong> Affiliate relationships never influence our ratings or
            recommendations. A low-scoring product with an affiliate link won't get a better
            review than a high-scoring product without one.
          </p>

          <h2>Contact</h2>
          <p>
            Have questions or suggestions? We'd love to hear from you. While we can't respond
            to every message, we read everything and use feedback to improve our reviews.
          </p>

          <div className="bg-desert-100 border border-[color:var(--border)] rounded-card p-6 mt-8">
            <h3 className="mt-0 text-[color:var(--text)]">Our Testing Philosophy</h3>
            <p className="mb-0 text-[color:var(--subtext)]">
              "We believe every cat deserves a clean, comfortable litter box. Our goal is to help
              cat owners make informed decisions based on real data, not marketing claims."
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
