'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

// Constants for IntersectionObserver configuration
const ACTIVE_SECTION_TOP_MARGIN = '-100px'; // Offset from top to account for fixed header
const ACTIVE_SECTION_BOTTOM_MARGIN = '-80%'; // Large bottom margin to trigger activation earlier

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the page
    const elements = Array.from(document.querySelectorAll('article h2, article h3'));
    const headingData = elements.map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: parseInt(element.tagName.substring(1)),
    }));
    setHeadings(headingData);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `${ACTIVE_SECTION_TOP_MARGIN} 0px ${ACTIVE_SECTION_BOTTOM_MARGIN} 0px`,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
            >
              <a
                href={`#${heading.id}`}
                className={`block text-sm hover:text-brand-600 transition-colors ${
                  activeId === heading.id
                    ? 'text-brand-600 font-semibold'
                    : 'text-gray-600'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
