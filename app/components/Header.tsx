'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Get a Quote' },
];

function Logo({ className = '' }: { className?: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Link href="/" className={`shrink-0 ${className}`} aria-label="Blocksons LLC — Home">
      {imgFailed ? (
        <span className="font-oswald text-2xl font-bold tracking-widest text-white uppercase">
          BLOCKSONS
        </span>
      ) : (
        <div className="bg-white rounded-lg px-2 py-1 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Blocksons LLC logo"
            width={80}
            height={56}
            className="h-12 w-auto object-contain"
            priority
            onError={() => setImgFailed(true)}
          />
        </div>
      )}
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-charcoal sticky top-0 z-50 shadow-lg">
      {/* Desktop nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile: hamburger left */}
          <button
            className="md:hidden text-offwhite p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Logo className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" />

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-offwhite hover:text-amber transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: click-to-call right */}
          <a
            href="tel:+15185703076"
            className="md:hidden flex items-center gap-1 text-amber font-bold text-sm"
            aria-label="Call Blocksons"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">(518) 570-3076</span>
          </a>

          {/* Desktop CTA */}
          <a
            href="tel:+15185703076"
            className="hidden md:flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-bold px-4 py-2 rounded transition-colors text-sm"
          >
            <Phone size={16} />
            (518) 570-3076
          </a>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-forest border-t border-forest-dark">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-offwhite hover:bg-forest-dark hover:text-amber px-6 py-4 text-sm font-medium tracking-wide uppercase border-b border-forest-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
