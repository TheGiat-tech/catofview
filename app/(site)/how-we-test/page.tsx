import { Container } from '@/components/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Test',
  description: 'Our comprehensive testing methodology for cat litter and self-cleaning litter boxes.',
};

export default function HowWeTestPage() {
  return (
    <Container className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">How We Test</h1>
      <p className="text-xl text-gray-600 mb-12">
        Every product we review is tested in real-world conditions for at least 2 weeks.
        Here's our methodology and scoring system.
      </p>

      {/* Scoring Weights */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Testing Criteria</h2>
        <div className="space-y-4">
          <div className="bg-white border-l-4 border-brand-600 p-6 rounded-r-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Odor Control</h3>
              <span className="text-2xl font-bold text-brand-600">35%</span>
            </div>
            <p className="text-gray-600">
              We measure odor levels at 12, 24, and 48 hours after use. Tests include ammonia
              detection and subjective smell tests by multiple reviewers.
            </p>
          </div>

          <div className="bg-white border-l-4 border-brand-600 p-6 rounded-r-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Safety</h3>
              <span className="text-2xl font-bold text-brand-600">25%</span>
            </div>
            <p className="text-gray-600">
              For automatic boxes: sensor accuracy, pinch protection, emergency stops, and
              stability. For litters: dust levels, tracking, and ingredient safety.
            </p>
          </div>

          <div className="bg-white border-l-4 border-brand-600 p-6 rounded-r-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Maintenance & Ease of Use</h3>
              <span className="text-2xl font-bold text-brand-600">20%</span>
            </div>
            <p className="text-gray-600">
              How easy is it to clean? Do parts come apart easily? For litter: clumping quality,
              scoop-ability, and disposal convenience.
            </p>
          </div>

          <div className="bg-white border-l-4 border-brand-600 p-6 rounded-r-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">App Features (if applicable)</h3>
              <span className="text-2xl font-bold text-brand-600">10%</span>
            </div>
            <p className="text-gray-600">
              Connectivity, notification reliability, usage tracking, and scheduling options.
              Does the app add genuine value or is it just a gimmick?
            </p>
          </div>

          <div className="bg-white border-l-4 border-brand-600 p-6 rounded-r-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">Noise Level</h3>
              <span className="text-2xl font-bold text-brand-600">10%</span>
            </div>
            <p className="text-gray-600">
              Measured in decibels during operation. We test at different times and evaluate
              how the noise might affect cats and household members.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Protocol */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Testing Protocol</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <ol className="space-y-6">
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </span>
              <div>
                <h3 className="font-bold mb-2">Initial Setup</h3>
                <p className="text-gray-600">
                  Unboxing, assembly, and first-use evaluation. We time the setup process and
                  note any confusing instructions or missing parts.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </span>
              <div>
                <h3 className="font-bold mb-2">Real-World Testing (2+ weeks)</h3>
                <p className="text-gray-600">
                  Products are tested with real cats in real homes. We document daily performance,
                  issues, and maintenance requirements.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </span>
              <div>
                <h3 className="font-bold mb-2">Standardized Testing</h3>
                <p className="text-gray-600">
                  Odor measurements, noise level readings, clump strength tests, and app
                  performance evaluations using consistent protocols.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                4
              </span>
              <div>
                <h3 className="font-bold mb-2">Long-Term Evaluation</h3>
                <p className="text-gray-600">
                  For automatic boxes: mechanical reliability after 100+ cycles. For litter:
                  cost per week, dust accumulation, and tracking over time.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                5
              </span>
              <div>
                <h3 className="font-bold mb-2">Scoring & Review</h3>
                <p className="text-gray-600">
                  Final scores are calculated using our weighted criteria. Reviews are written
                  to highlight real pros and cons, not marketing claims.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Independence */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
        <div className="bg-brand-50 border border-brand-200 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Editorial Independence</h3>
          <p className="text-gray-700 mb-4">
            We purchase all products at retail prices. Companies don't pay for reviews or higher
            ratings. While we may earn affiliate commissions when you click our links, this
            never influences our testing or scoring.
          </p>
          <h3 className="text-xl font-bold mb-4">Transparency</h3>
          <p className="text-gray-700 mb-4">
            All affiliate relationships are disclosed. We clearly label sponsored content (though
            we currently don't accept sponsored reviews). Our testing data is available upon request.
          </p>
          <h3 className="text-xl font-bold mb-4">Updates</h3>
          <p className="text-gray-700">
            Reviews are updated when new models are released or when significant issues emerge.
            We track firmware updates for smart litter boxes and retest when major features change.
          </p>
        </div>
      </section>

      {/* Limitations */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Testing Limitations</h2>
        <div className="prose prose-brand">
          <p>
            <strong>Cat behavior varies.</strong> What works for one cat may not work for another.
            We test with multiple cats when possible, but your results may differ.
          </p>
          <p>
            <strong>Sample variation.</strong> Manufacturing quality can vary. We test individual
            units and note if online reviews suggest widespread issues.
          </p>
          <p>
            <strong>Testing environment.</strong> Temperature, humidity, and household size affect
            performance. We test in typical home conditions but can't replicate every scenario.
          </p>
        </div>
      </section>
    </Container>
  );
}
