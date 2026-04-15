'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="grid grid-cols-2 shadow-2xl">
        <a
          href="tel:+15185703076"
          className="flex items-center justify-center gap-2 bg-charcoal text-white font-bold font-oswald text-base py-4 uppercase tracking-wide hover:bg-black transition-colors"
        >
          <Phone size={18} />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-base py-4 uppercase tracking-wide transition-colors"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
