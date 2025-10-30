import { Product } from '@/lib/posts';
import Image from 'next/image';
import { ProductSpec } from './product-spec';
import { amazonSearch } from '@/lib/affiliates';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="card overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-desert"
        >
          <div className="relative h-64 w-full">
            <Image src={product.image} alt={product.title} fill className="object-cover" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-[color:var(--text)]">{product.title}</h3>

            <div>
              <h4 className="font-semibold text-oasis mb-2">Pros:</h4>
              <ul className="space-y-1">
                {product.pros.map((pro, i) => (
                  <li key={i} className="text-sm text-[color:var(--subtext)] flex items-start">
                    <span className="text-oasis mr-2">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-terracotta mb-2">Cons:</h4>
              <ul className="space-y-1">
                {product.cons.map((con, i) => (
                  <li key={i} className="text-sm text-[color:var(--subtext)] flex items-start">
                    <span className="text-terracotta mr-2">✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>

            <ProductSpec specs={product.specs} />

            <a
              href={amazonSearch(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent mt-4 w-full"
            >
              Check on Amazon
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
