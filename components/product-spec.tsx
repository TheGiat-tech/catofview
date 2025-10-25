interface ProductSpecProps {
  specs: Record<string, string>;
}

export function ProductSpec({ specs }: ProductSpecProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="font-semibold mb-3">Specifications</h4>
      <dl className="grid grid-cols-1 gap-2 text-sm">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="flex justify-between py-1 border-b border-gray-200 last:border-0">
            <dt className="font-medium text-gray-700">{key}:</dt>
            <dd className="text-gray-600">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
