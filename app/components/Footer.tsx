import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Get a Quote' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="Blocksons LLC — Home">
              <div className="bg-white rounded-lg px-3 py-2 inline-flex">
                <Image
                  src="/logo.png"
                  alt="Blocksons LLC logo"
                  width={120}
                  height={84}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-offwhite/70 text-sm leading-relaxed">
              Plattsburgh&apos;s most trusted tree removal company. Hazardous removal, stump grinding,
              emergency response — done right.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-oswald text-lg font-bold tracking-wide text-amber mb-4 uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-offwhite/80">
              <li>
                <a href="tel:+15185703076" className="flex items-center gap-2 hover:text-amber transition-colors">
                  <Phone size={14} className="text-amber shrink-0" />
                  (518) 570-3076
                </a>
              </li>
              <li>
                <a href="mailto:Blocksonstreeservice@gmail.com" className="flex items-center gap-2 hover:text-amber transition-colors">
                  <Mail size={14} className="text-amber shrink-0" />
                  Blocksonstreeservice@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-amber shrink-0" />
                Morrisonville, NY — Clinton County
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-amber shrink-0" />
                Open 24 Hours · Emergency Available
              </li>
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-oswald text-lg font-bold tracking-wide text-amber mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-offwhite/80 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-offwhite/40">
          <p>&copy; {new Date().getFullYear()} Blocksons LLC. All rights reserved.</p>
          <p>Serving the North Country — Plattsburgh · Lake Placid · Saranac Lake · Malone</p>
        </div>
      </div>
    </footer>
  );
}
