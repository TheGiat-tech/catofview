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
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-64 w-full">
            <Image src={product.image} alt={product.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">{product.title}</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-brand-700 mb-2">Pros:</h4>
              <ul className="space-y-1">
                {product.pros.map((pro, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
              <ul className="space-y-1">
                {product.cons.map((con, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
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
              className="mt-4 block w-full bg-brand-600 hover:bg-brand-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
            >
              Check on Amazon
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
