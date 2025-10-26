import Image from 'next/image';

interface AmazonProductProps {
  title: string;
  imageUrl: string;
  amazonUrl: string;
  price?: string;
  description?: string;
}

export default function AmazonProduct({ 
  title, 
  imageUrl, 
  amazonUrl, 
  price, 
  description 
}: AmazonProductProps) {
  return (
    <div className="my-6 rounded-lg border-2 border-desert-tan bg-desert-cream p-4 shadow-md hover:shadow-lg transition-shadow">
      <a 
        href={amazonUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col sm:flex-row gap-4 no-underline"
      >
        <div className="flex-shrink-0 w-full sm:w-48 h-48 relative bg-white rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain p-2"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-xl font-bold text-desert-dark-brown mb-2 hover:text-desert-terracotta">
              {title}
            </h3>
            {description && (
              <p className="text-desert-brown text-sm mb-2">{description}</p>
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            {price && (
              <span className="text-2xl font-bold text-desert-terracotta">
                {price}
              </span>
            )}
            <span className="inline-flex items-center px-4 py-2 bg-desert-mustard text-desert-dark-brown font-semibold rounded-md hover:bg-desert-terracotta hover:text-white transition-colors">
              View on Amazon →
            </span>
          </div>
        </div>
      </a>
      <p className="text-xs text-desert-brown mt-2 italic">
        As an Amazon Associate, we earn from qualifying purchases.
      </p>
    </div>
  );
}
