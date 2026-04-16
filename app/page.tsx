import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TreePine, Scissors, CircleDot, AlertTriangle, MapPin, Clock, Star, Shield, ClipboardList, CheckCircle, Phone } from 'lucide-react';
import GoogleRatingBadge from './components/GoogleRatingBadge';
import ReviewCard from './components/ReviewCard';
import FaqAccordion from './components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Tree Removal in Plattsburgh, NY | Blocksons LLC',
  description:
    "Blocksons LLC — The North Country's most trusted tree removal. Hazardous removal, stump grinding, 24/7 emergency response. Licensed & insured. Free estimates. 5.0 ★ Google rating.",
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

const steps = [
  {
    number: '01',
    icon: <Phone size={28} />,
    title: 'Request a Free Quote',
    description: 'Call or fill out our form. Dustin responds fast — usually the same day.',
  },
  {
    number: '02',
    icon: <ClipboardList size={28} />,
    title: 'Free On-Site Estimate',
    description: 'We come out, assess the job, and give you a straight price upfront. No guesswork.',
  },
  {
    number: '03',
    icon: <CheckCircle size={28} />,
    title: 'Done Right & Cleaned Up',
    description: 'Professional removal with full debris cleanup. You won\'t know we were there.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[600px] md:min-h-[700px] flex items-center"
        style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #1E3A2F 60%, #162b22 100%)',
        }}
      >
        {/* Hero photo */}
        <Image
          src="/photos/hero.jpg"
          alt="Blocksons LLC tree removal near power lines in the North Country NY"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-charcoal/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Differentiator eyebrow */}
            <div className="inline-flex items-center gap-2 bg-amber/20 border border-amber/40 text-amber text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              We take the jobs other crews won&apos;t.
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white leading-none mb-4 uppercase tracking-tight">
              {"The North Country's Most Trusted"}
              <br />
              <span className="text-amber">Tree Removal.</span>
            </h1>
            <p className="text-offwhite/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Hazardous removal, stump grinding, emergency response — done right.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {[
                { icon: <Shield size={14} />, label: 'Licensed & Insured' },
                { icon: <CheckCircle size={14} />, label: 'Free Estimates' },
                { icon: <CheckCircle size={14} />, label: 'Full Cleanup Included' },
                { icon: <CheckCircle size={14} />, label: '24/7 Emergency' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-offwhite/70 text-sm">
                  <span className="text-amber">{icon}</span>
                  {label}
                </div>
              ))}
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

      {/* ── HOW IT WORKS ── */}
      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-forest text-center mb-4 uppercase tracking-wide">
            How It Works
          </h2>
          <p className="text-midgray text-center mb-12 max-w-xl mx-auto">
            Simple process, no surprises. From your first call to final cleanup — here&apos;s what to expect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-amber/30" />
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-20 h-20 rounded-full bg-forest flex items-center justify-center text-amber mb-5 relative z-10 shadow-lg">
                  {step.icon}
                </div>
                <div className="font-oswald text-5xl font-bold text-forest/10 absolute top-0 left-1/2 -translate-x-1/2 leading-none select-none">
                  {step.number}
                </div>
                <h3 className="font-oswald text-xl font-bold text-charcoal mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-midgray text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-lg px-8 py-4 rounded transition-colors uppercase tracking-wide"
            >
              Start with a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY BLOCKSONS ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-forest text-center mb-12 uppercase tracking-wide">
            Why Choose Blocksons?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-offwhite rounded-xl border border-offwhite">
              <div className="flex justify-center mb-4">
                <Star size={40} className="text-amber fill-amber" />
              </div>
              <div className="font-oswald text-4xl font-bold text-forest mb-2">5.0 Google Rating</div>
              <p className="text-midgray text-sm">
                49 verified reviews — exceptional for a local trade business in the North Country.
              </p>
            </div>
            <div className="text-center p-8 bg-offwhite rounded-xl border border-offwhite">
              <div className="flex justify-center mb-4">
                <Clock size={40} className="text-amber" />
              </div>
              <div className="font-oswald text-4xl font-bold text-forest mb-2">Open 24 Hours</div>
              <p className="text-midgray text-sm">
                Emergency tree removal available around the clock. When a tree falls, we answer.
              </p>
            </div>
            <div className="text-center p-8 bg-offwhite rounded-xl border border-offwhite">
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
      <section className="bg-offwhite py-16">
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

      {/* ── MEET DUSTIN ── */}
      <section className="bg-forest py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/photos/hazardous-removal.jpg"
                alt="Dustin Blockson assessing a large complex tree removal job in the North Country"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
            </div>

            {/* Content */}
            <div>
              <div className="text-amber font-bold text-sm uppercase tracking-widest mb-3">
                Owner &amp; Operator
              </div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-none">
                Meet Dustin.
              </h2>
              <div className="space-y-4 text-offwhite/80 leading-relaxed">
                <p>
                  Dustin Blockson is born and raised in the North Country — and that means something.
                  He knows these communities, these properties, and the kind of hardworking, straight-shooting
                  service people here expect.
                </p>
                <p>
                  When you hire Blocksons, you get Dustin. Not a crew of strangers — the owner himself,
                  on every job, from the estimate through the final cleanup. He takes on the work other
                  companies won&apos;t, gets it done right the first time, and doesn&apos;t leave until
                  the yard is clean.
                </p>
                <p>
                  49 five-star Google reviews don&apos;t happen by accident. They happen because Dustin
                  genuinely cares about doing right by his customers and his community.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-base px-6 py-3 rounded transition-colors uppercase tracking-wide text-center"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/reviews"
                  className="border border-white/40 hover:border-white text-white font-oswald font-bold text-base px-6 py-3 rounded transition-colors uppercase tracking-wide text-center"
                >
                  Read the Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-forest text-center mb-4 uppercase tracking-wide">
            Common Questions
          </h2>
          <p className="text-midgray text-center mb-10">
            Everything you need to know before you call.
          </p>
          <FaqAccordion />
          <div className="text-center mt-10">
            <p className="text-midgray text-sm mb-4">Still have questions?</p>
            <a
              href="tel:+15185703076"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-bold font-oswald text-base px-6 py-3 rounded transition-colors uppercase tracking-wide"
            >
              <Phone size={16} />
              Call Dustin Directly
            </a>
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
