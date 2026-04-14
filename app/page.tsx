import type { Metadata } from 'next';
import Link from 'next/link';
import { TreePine, Scissors, CircleDot, AlertTriangle, MapPin, Clock, Star } from 'lucide-react';
import GoogleRatingBadge from './components/GoogleRatingBadge';
import ReviewCard from './components/ReviewCard';

export const metadata: Metadata = {
  title: 'Tree Removal in Plattsburgh, NY | Blocksons LLC',
  description:
    "Blocksons LLC — Plattsburgh's #1 tree removal company. Hazardous removal, stump grinding, 24/7 emergency response. Locally owned. 5.0 ★ Google rating. Serving Clinton County, NY.",
};

const services = [
  {
    icon: <TreePine size={32} />,
    name: 'Hazardous Removal',
    description: 'Expert removal of oversized, precarious, and dangerous trees — even in tight spaces.',
  },
  {
    icon: <CircleDot size={32} />,
    name: 'Stump Grinding',
    description: 'Complete stump removal and grinding so your yard is clean and safe.',
  },
  {
    icon: <Scissors size={32} />,
    name: 'Tree Trimming',
    description: 'Professional trimming and pruning to keep your trees healthy and your property looking sharp.',
  },
  {
    icon: <AlertTriangle size={32} />,
    name: 'Emergency Response',
    description: '24/7 emergency tree removal for storm damage and downed trees. We answer the call.',
  },
];

const reviews = [
  {
    name: 'Brandon Craft',
    timeAgo: '1 year ago',
    text: "Highly recommend Blocksons for tree service work! Dustin was great to work with and is a true master of his trade. We had a large, precarious tree partially over hanging the home we recently purchased and there was no room to fit equipment…",
  },
  {
    name: 'Laura Leavine',
    timeAgo: '2 years ago',
    text: "Dustin is amazing. He cut down both of these huge trees. He is very professional and cleans up the area. Thank you Dustin. I don't have to worry about these trees this winter. I would highly recommend Dustin.",
  },
  {
    name: 'Andrew Krug',
    timeAgo: '2 years ago',
    text: 'Dustin was great to work with, from coming out for the estimate, having a formal estimate (professional document) and all the way through clean up after tree removal. I highly recommend and appreciate his follow-through, honesty, and professionalism.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[560px] md:min-h-[680px] flex items-center"
        style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #1E3A2F 60%, #162b22 100%)',
        }}
      >
        {/* TODO: Replace with real hero photo from Dustin — uncomment Image below */}
        {/* <Image src="/hero.jpg" alt="Hazardous tree removal in Plattsburgh NY" fill className="object-cover opacity-30" priority /> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white leading-none mb-4 uppercase tracking-tight">
              {"The North Country's Most Trusted"}
              <br />
              <span className="text-amber">Tree Removal.</span>
            </h1>
            <p className="text-offwhite/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Hazardous removal, stump grinding, emergency response — done right.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-lg px-8 py-4 rounded transition-colors text-center uppercase tracking-wide"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+15185703076"
                className="border-2 border-white/50 hover:border-white text-white font-bold font-oswald text-lg px-8 py-4 rounded transition-colors text-center uppercase tracking-wide"
              >
                Call (518) 570-3076
              </a>
            </div>

            {/* Google rating badge */}
            <GoogleRatingBadge variant="dark" />
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="bg-forest py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-forest-dark rounded-xl p-6 flex flex-col gap-4 border border-white/10 hover:border-amber/40 transition-colors group"
              >
                <div className="text-amber group-hover:scale-110 transition-transform w-fit">
                  {service.icon}
                </div>
                <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wide">
                  {service.name}
                </h3>
                <p className="text-offwhite/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-amber hover:text-white font-bold text-sm uppercase tracking-wide transition-colors border-b border-amber hover:border-white pb-1"
            >
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY BLOCKSONS ── */}
      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-forest text-center mb-12 uppercase tracking-wide">
            Why Choose Blocksons?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-offwhite">
              <div className="flex justify-center mb-4">
                <Star size={40} className="text-amber fill-amber" />
              </div>
              <div className="font-oswald text-4xl font-bold text-forest mb-2">5.0 Google Rating</div>
              <p className="text-midgray text-sm">
                49 verified reviews — exceptional for a local trade business in Clinton County.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-offwhite">
              <div className="flex justify-center mb-4">
                <Clock size={40} className="text-amber" />
              </div>
              <div className="font-oswald text-4xl font-bold text-forest mb-2">Open 24 Hours</div>
              <p className="text-midgray text-sm">
                Emergency tree removal available around the clock. When a tree falls, we answer.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-offwhite">
              <div className="flex justify-center mb-4">
                <MapPin size={40} className="text-amber" />
              </div>
              <div className="font-oswald text-4xl font-bold text-forest mb-2">Locally Owned</div>
              <p className="text-midgray text-sm">
                Dustin runs every job himself. You get the owner on site — not a subcontractor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-forest mb-4 uppercase tracking-wide">
              What Customers Are Saying
            </h2>
            <GoogleRatingBadge variant="light" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-forest hover:text-amber font-bold text-sm uppercase tracking-wide transition-colors border-b border-forest hover:border-amber pb-1"
            >
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="bg-offwhite py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin size={28} className="text-forest mx-auto mb-4" />
          <h2 className="font-oswald text-2xl md:text-3xl font-bold text-forest mb-4 uppercase tracking-wide">
            Serving the North Country
          </h2>
          <p className="text-midgray text-lg">
            Plattsburgh · Lake Placid · Saranac Lake · Malone · and surrounding communities
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #1E3A2F 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-offwhite/70 text-lg mb-8">
            Free estimates. No obligation. Dustin picks up the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-xl px-10 py-4 rounded transition-colors uppercase tracking-wide"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+15185703076"
              className="border-2 border-white/50 hover:border-white text-white font-bold font-oswald text-xl px-10 py-4 rounded transition-colors uppercase tracking-wide"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
