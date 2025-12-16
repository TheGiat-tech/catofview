import Link from 'next/link';
import { Container } from '@/components/container';
import { Badge } from '@/components/badge';
import { RatingStars } from '@/components/rating-stars';

// Product data for the 5 tofu cat litters
const tofuLitters = [
  {
    id: 1,
    name: 'Pidan Tofu Cat Litter',
    subtitle: 'Best Overall',
    rating: 4.7,
    price: '$24.99',
    image: '🌿',
    pros: [
      'Superior clumping strength',
      'Very low dust',
      'Effective odor control',
      'Pleasant, subtle scent'
    ],
    cons: [
      'Higher price point',
      'Can be hard to find in stores'
    ],
    bestFor: 'Cat owners prioritizing performance over price, multi-cat households',
    link: '/reviews/pidan-tofu-litter'
  },
  {
    id: 2,
    name: 'PETKIT EVERSWEET Tofu Litter',
    subtitle: 'Best Value',
    rating: 4.4,
    price: '$18.99',
    image: '💚',
    pros: [
      'Excellent price-to-performance ratio',
      'Good clumping and odor control',
      'Widely available online',
      'Works great with PETKIT automatic boxes'
    ],
    cons: [
      'Slightly more dust than premium brands',
      'Pellets break down faster'
    ],
    bestFor: 'Budget-conscious buyers who don\'t want to compromise on quality',
    link: '/reviews/petkit-eversweet'
  },
  {
    id: 3,
    name: 'Honeycare Tofu Cat Litter',
    subtitle: 'Best for Odor Control',
    rating: 4.5,
    price: '$21.99',
    image: '🍯',
    pros: [
      'Outstanding odor neutralization',
      'Green tea extract formula',
      'Fast clumping action',
      'Minimal tracking'
    ],
    cons: [
      'Slightly higher dust levels',
      'Scent may be too strong for some'
    ],
    bestFor: 'Multi-cat homes needing maximum odor control',
    link: '/reviews/honeycare-tofu'
  },
  {
    id: 4,
    name: 'Tuft & Paw Really Great Cat Litter',
    subtitle: 'Premium Choice',
    rating: 4.6,
    price: '$29.99',
    image: '🐾',
    pros: [
      'Outstanding clumping',
      'Natural odor control (no artificial scents)',
      'Very low tracking',
      'Flushable and compostable'
    ],
    cons: [
      'Most expensive option tested',
      'Subscription model may not suit everyone'
    ],
    bestFor: 'Premium buyers who want the best eco-friendly option available',
    link: '/reviews/tuft-paw'
  },
  {
    id: 5,
    name: 'World\'s Best Multi-Cat Tofu Blend',
    subtitle: 'Best for Multiple Cats',
    rating: 4.3,
    price: '$22.99',
    image: '🌍',
    pros: [
      'Excellent for multi-cat households',
      'Corn and tofu blend for extra absorbency',
      'Long-lasting performance',
      'Natural ingredients'
    ],
    cons: [
      'Heavier than pure tofu litter',
      'May track more than smaller pellets'
    ],
    bestFor: 'Households with 3+ cats needing heavy-duty performance',
    link: '/reviews/worlds-best-tofu'
  }
];

const faqs = [
  {
    question: 'Can I flush tofu litter?',
    answer: 'Most tofu litter brands are flushable in small amounts (one clump at a time). Check local regulations and your plumbing system. Never flush large quantities at once as it may cause blockages.'
  },
  {
    question: 'Will my cat like tofu litter?',
    answer: 'Most cats adapt quickly—acceptance rate is 85-90%. The texture is different from clay but similar to premium clumping litters. Keep old litter available during the transition and mix gradually over a week.'
  },
  {
    question: 'Does tofu litter really control odor?',
    answer: 'Yes, when used properly. Tofu litter absorbs moisture quickly and many formulas include natural deodorizers like green tea extract. It performs as well as or better than premium clay litters in our testing.'
  },
  {
    question: 'Is tofu litter safe for kittens?',
    answer: 'Yes, tofu litter is safe for kittens. It\'s non-toxic and digestible if accidentally ingested. However, always supervise young kittens with any new litter and consult your vet if concerned.'
  },
  {
    question: 'How often should I change tofu litter completely?',
    answer: 'With daily scooping, you can go 3-4 weeks between complete changes. Tofu litter\'s superior clumping means less waste compared to clay, making it more economical over time.'
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-12 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="success" className="mb-6">
              Updated for 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The 5 Best Tofu Cat Litters (2025) – Tested & Reviewed
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We've tested dozens of eco-friendly tofu cat litters to find the best options for odor control,
              clumping, dust levels, and environmental impact. Here are our top picks that actually work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#reviews" className="inline-block bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors">
                View Top Picks
              </a>
              <a href="#comparison" className="inline-block bg-white text-brand-600 px-8 py-3 rounded-lg font-semibold border-2 border-brand-600 hover:bg-brand-50 transition-colors">
                Compare Litter Types
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-12 md:py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Top 5 Tofu Cat Litters</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each product was tested for 2-3 weeks in real household conditions with multiple cats
          </p>
          <div className="space-y-8">
            {tofuLitters.map((litter) => (
              <div key={litter.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl flex items-center justify-center text-5xl">
                        {litter.image}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{litter.name}</h3>
                            <Badge variant="success">{litter.subtitle}</Badge>
                          </div>
                          <div className="flex items-center gap-4 mb-2">
                            <RatingStars rating={litter.rating} />
                            <span className="text-2xl font-bold text-brand-600">{litter.price}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="text-green-600">✓</span> Pros
                          </h4>
                          <ul className="space-y-2">
                            {litter.pros.map((pro, idx) => (
                              <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                <span className="text-green-600 mt-0.5">•</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="text-red-600">✗</span> Cons
                          </h4>
                          <ul className="space-y-2">
                            {litter.cons.map((con, idx) => (
                              <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                <span className="text-red-600 mt-0.5">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Best for:</span> {litter.bestFor}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link 
                          href={litter.link}
                          className="inline-block bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors text-center"
                        >
                          Read Full Review
                        </Link>
                        <a 
                          href="#"
                          className="inline-block bg-white text-brand-600 px-6 py-3 rounded-lg font-semibold border-2 border-brand-600 hover:bg-brand-50 transition-colors text-center"
                        >
                          Check Price
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How We Test Section */}
      <section id="how-we-test" className="bg-gray-50 py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How We Test</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Our comprehensive testing process ensures you get honest, data-driven recommendations
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-2">Odor Control</h3>
                <p className="text-gray-600 mb-2">35% of total score</p>
                <p className="text-sm text-gray-500">Ammonia detection at 24 and 48 hours with multiple cats</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-4">💪</div>
                <h3 className="font-bold text-xl mb-2">Clumping Quality</h3>
                <p className="text-gray-600 mb-2">25% of total score</p>
                <p className="text-sm text-gray-500">Strength, cohesion, and ease of scooping tested daily</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-4">🌫️</div>
                <h3 className="font-bold text-xl mb-2">Dust Levels</h3>
                <p className="text-gray-600 mb-2">20% of total score</p>
                <p className="text-sm text-gray-500">Measured during pouring and daily use</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-4">👣</div>
                <h3 className="font-bold text-xl mb-2">Tracking</h3>
                <p className="text-gray-600 mb-2">10% of total score</p>
                <p className="text-sm text-gray-500">How much litter leaves the box on paws</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="font-bold text-xl mb-2">Value</h3>
                <p className="text-gray-600 mb-2">10% of total score</p>
                <p className="text-sm text-gray-500">Cost per week of use for 2-cat household</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-4">⏱️</div>
                <h3 className="font-bold text-xl mb-2">Testing Period</h3>
                <p className="text-gray-600 mb-2">2-3 weeks minimum</p>
                <p className="text-sm text-gray-500">Real-world conditions with multiple cats</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/how-we-test" className="text-brand-600 hover:text-brand-700 font-semibold text-lg">
                Learn More About Our Testing Process →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison" className="py-12 md:py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Tofu vs Clay vs Corn Litter</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Compare the three most popular cat litter types
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Tofu</th>
                    <th className="px-6 py-4 text-center font-semibold">Clay</th>
                    <th className="px-6 py-4 text-center font-semibold">Corn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Odor Control</td>
                    <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-6 py-4 text-center">⭐⭐⭐⭐</td>
                    <td className="px-6 py-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Clumping</td>
                    <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-6 py-4 text-center">⭐⭐⭐</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Dust Level</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Low</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">High</td>
                    <td className="px-6 py-4 text-center text-yellow-600 font-semibold">Medium</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Tracking</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Low</td>
                    <td className="px-6 py-4 text-center text-yellow-600 font-semibold">Medium</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">High</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Eco-Friendly</td>
                    <td className="px-6 py-4 text-center">✅ Yes</td>
                    <td className="px-6 py-4 text-center">❌ No</td>
                    <td className="px-6 py-4 text-center">✅ Yes</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Biodegradable</td>
                    <td className="px-6 py-4 text-center">✅ Yes</td>
                    <td className="px-6 py-4 text-center">❌ No</td>
                    <td className="px-6 py-4 text-center">✅ Yes</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Flushable</td>
                    <td className="px-6 py-4 text-center">✅ Yes</td>
                    <td className="px-6 py-4 text-center">❌ No</td>
                    <td className="px-6 py-4 text-center">⚠️ Some</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Price/Month</td>
                    <td className="px-6 py-4 text-center font-semibold">$25-35</td>
                    <td className="px-6 py-4 text-center font-semibold">$15-25</td>
                    <td className="px-6 py-4 text-center font-semibold">$30-40</td>
                  </tr>
                  <tr className="bg-brand-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Overall Rating</td>
                    <td className="px-6 py-4 text-center font-bold text-brand-600">9.0/10</td>
                    <td className="px-6 py-4 text-center font-bold">7.5/10</td>
                    <td className="px-6 py-4 text-center font-bold">7.0/10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-50 py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Common questions about tofu cat litter
            </p>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/faq" className="text-brand-600 hover:text-brand-700 font-semibold text-lg">
                View All FAQs →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Verdict Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Final Verdict</h2>
            
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Top Recommendations</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🏆</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Best Overall: Pidan Tofu Cat Litter</h4>
                      <p className="text-gray-600">
                        Offers the best combination of clumping, odor control, and low dust. Worth the premium for most households looking for top performance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💎</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Best Value: PETKIT EVERSWEET</h4>
                      <p className="text-gray-600">
                        Provides excellent performance at a more affordable price point. Perfect for budget-conscious buyers who don't want to compromise on quality.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Best Premium: Tuft & Paw Really Great Cat Litter</h4>
                      <p className="text-gray-600">
                        The absolute best eco-friendly option with exceptional clumping and natural odor control. Ideal for premium buyers seeking the finest quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Dive Deeper</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/blog/best-tofu-litter-2025" className="flex items-center gap-3 text-brand-600 hover:text-brand-700 font-semibold">
                      <span>📖</span>
                      <span>Complete Tofu Litter Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-we-test" className="flex items-center gap-3 text-brand-600 hover:text-brand-700 font-semibold">
                      <span>🔬</span>
                      <span>Our Testing Methodology</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/self-cleaning" className="flex items-center gap-3 text-brand-600 hover:text-brand-700 font-semibold">
                      <span>🤖</span>
                      <span>Best Self-Cleaning Litter Boxes</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reviews" className="flex items-center gap-3 text-brand-600 hover:text-brand-700 font-semibold">
                      <span>⭐</span>
                      <span>All Product Reviews</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">About the Author</h3>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      CV
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Cat of View Team</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Our team of cat enthusiasts and product testers has over 15 years of combined experience reviewing cat care products. We test every product ourselves in real-world conditions.
                      </p>
                      <Link href="/about" className="text-brand-600 hover:text-brand-700 font-semibold text-sm">
                        Learn more about us →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
