import { Phone } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="bg-forest text-amber text-sm font-bold text-center py-2 px-4">
      <a
        href="tel:+15185703076"
        className="flex items-center justify-center gap-2 hover:text-white transition-colors"
      >
        <Phone size={14} />
        <span>24/7 Emergency Tree Removal — Call Now: (518) 570-3076</span>
      </a>
    </div>
  );
}
