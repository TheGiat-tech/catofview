interface ProductSpecProps {
  specs: Record<string, string>;
}

export function ProductSpec({ specs }: ProductSpecProps) {
  return (
    <div className="bg-[color:var(--bg-muted)] rounded-card p-4 border border-[color:var(--border)]">
      <h4 className="font-semibold text-[color:var(--text)] mb-3">Specifications</h4>
      <dl className="grid grid-cols-1 gap-2 text-sm">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="flex justify-between py-1 border-b border-[color:var(--border)] last:border-0">
            <dt className="font-medium text-[color:var(--text)]/80">{key}:</dt>
            <dd className="text-[color:var(--subtext)]">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
