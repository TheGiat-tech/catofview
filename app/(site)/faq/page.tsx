import { Container } from '@/components/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about self-cleaning litter boxes and cat litter.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'Do self-cleaning litter boxes really eliminate odor?',
      answer:
        "Most premium models significantly reduce odor through sealed waste compartments and carbon filters. However, they don't eliminate odor completely—you still need to empty the waste drawer weekly and clean the unit monthly. Models with deodorizers and Wi-Fi alerts for full drawers perform best.",
    },
    {
      question: 'Are automatic litter boxes safe for cats?',
      answer:
        'Yes, when designed properly. Look for weight sensors, pinch protection, and automatic stop features. Premium brands like Litter-Robot and PETKIT have extensive safety testing. Always supervise initial use and ensure your cat is comfortable. Kittens under 3 pounds and elderly cats with mobility issues may need traditional boxes.',
    },
    {
      question: 'How much electricity do self-cleaning boxes use?',
      answer:
        'Most units use 5-15 watts during operation and minimal power on standby. Average monthly cost is $1-3 in electricity. The cleaning cycle typically runs for 2-3 minutes per use, so total daily power consumption is low.',
    },
    {
      question: 'What kind of warranty do these products have?',
      answer:
        'Warranties typically range from 1-3 years. Litter-Robot offers an 18-month warranty with optional extensions. PETKIT and CATLINK provide 12-month warranties. Check if the warranty covers motors, sensors, and electronics separately.',
    },
    {
      question: 'Can I use tofu litter with automatic boxes?',
      answer:
        "Yes! Most self-cleaning boxes work well with tofu litter. It's lightweight, clumps well, and produces less dust than clay. Some models (like PETKIT PURA X) explicitly recommend tofu litter. Avoid pine pellets or crystal litter unless specifically approved by the manufacturer.",
    },
    {
      question: 'Do they work with clay/clumping litter?',
      answer:
        'Yes, all models support clumping clay litter. Use premium clumping formulas for best results. Cheap clay can produce weak clumps that break apart during cleaning. Non-clumping litter is not compatible with automatic sifting mechanisms.',
    },
    {
      question: 'How many cats can use one automatic box?',
      answer:
        'Most standard units handle 1-2 cats comfortably. Larger models like Litter-Robot 4 and Puramax can serve 3-4 cats. For households with 4+ cats, consider two units or a larger commercial-grade model. Monitor waste drawer fill rates to determine if you need additional boxes.',
    },
    {
      question: 'What are the ongoing costs?',
      answer:
        'Expect $10-30/month for waste drawer liners, carbon filters, and litter. Proprietary liners cost more than standard trash bags (some models accept standard bags). Factor in filter replacements every 3-6 months ($15-30). Total yearly cost including electricity: $150-400 depending on the model.',
    },
    {
      question: 'How often do I need to clean the unit?',
      answer:
        'Empty the waste drawer weekly (or when the app alerts you). Deep clean the entire unit monthly—remove litter, wash all surfaces, and check sensors. Some models have dishwasher-safe components. Regular cleaning prevents odor buildup and mechanical issues.',
    },
    {
      question: 'Will my cat actually use it?',
      answer:
        "Most cats adapt within a few days to a week. Success tips: (1) Place it next to their old box initially, (2) Use the same litter type, (3) Don't force them—let them explore at their own pace, (4) Keep the old box available for the first week. Acceptance rate is roughly 85-90% based on user reviews. Nervous or elderly cats may need more time.",
    },
  ];

  return (
    <section className="hero-desert">
      <Container className="max-w-4xl">
        <h1 className="text-4xl font-bold text-[color:var(--text)] mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-[color:var(--subtext)] mb-12">
          Common questions about self-cleaning litter boxes, odor control, safety, and costs.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="card p-6">
              <h2 className="text-xl font-bold text-[color:var(--text)] mb-3">
                {index + 1}. {faq.question}
              </h2>
              <p className="text-[color:var(--subtext)] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-desert-100 border border-[color:var(--border)] rounded-card p-8 text-center">
          <h2 className="text-2xl font-bold text-[color:var(--text)] mb-4">Have More Questions?</h2>
          <p className="text-[color:var(--subtext)] mb-6">
            Check our detailed reviews and buying guides for more information.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/self-cleaning" className="btn btn-primary">
              Self-Cleaning Guide
            </a>
            <a href="/blog" className="btn btn-accent">
              Read Our Blog
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
