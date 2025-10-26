'use client';

import { useEffect } from 'react';
import { config } from '@/lib/config';

export function Adsense() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      try {
        // @ts-expect-error - adsbygoogle is added by Google's script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.adsenseClient}`}
        crossOrigin="anonymous"
      />
    </>
  );
}
