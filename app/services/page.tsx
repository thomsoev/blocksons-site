import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TreePine, Scissors, CircleDot, AlertTriangle, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tree Removal Services | North Country NY | Blocksons LLC',
  description:
    'Blocksons LLC offers hazardous tree removal, trimming, stump grinding, emergency response, and utility line work across the North Country. Call (518) 570-3076.',
};

const services = [
  {
    icon: <TreePine size={40} />,
    name: 'Hazardous & Oversized Tree Removal',
    description:
      "This is what sets Blocksons apart. Dustin specializes in trees that other crews won't touch — oversized, leaning, or dangerously positioned near homes, structures, or property lines. Whether there's no room for equipment or the tree is compromised by disease or storm damage, Blocksons has the skill and experience to get it done safely.",
    bullets: [
      'Tight-access removal with no equipment clearance',
      'Diseased, storm-damaged, and structurally compromised trees',
      'Precision felling to protect structures and landscaping',
      'Full cleanup and debris hauling included',
    ],
    photo: '/photos/hazardous-removal.jpg',
    alt: 'Dustin Blockson assessing a large hazardous tree removal job in the North Country NY',
  },
  {
    icon: <Scissors size={40} />,
    name: 'Tree Trimming & Pruning',
    description:
      "Regular trimming keeps your trees healthy, your property safe, and your curb appeal sharp. Blocksons provides professional pruning that promotes growth, removes dead or crossing branches, and addresses potential hazards before they become problems.",
    bullets: [
      'Crown cleaning and deadwood removal',
      'Clearance trimming from structures and power lines',
      'Shape pruning for ornamental trees',
      'Storm-prep trimming to reduce wind load',
    ],
    photo: null,
    alt: 'Tree trimming and pruning service in the North Country NY',
  },
  {
    icon: <CircleDot size={40} />,
    name: 'Stump Removal & Grinding',
    description:
      'After a tree comes down, the stump stays — unless you call Blocksons. Full stump grinding removes the stump below grade, leaving your yard clean, safe, and ready for whatever comes next. No more tripping hazards, no more eyesores.',
    bullets: [
      'Grinding to below ground level',
      'Debris cleanup and backfill',
      'Safe for replanting or lawn restoration',
      'Available as a standalone service or paired with removal',
    ],
    photo: null,
    alt: 'Stump grinding and removal service in the North Country NY',
  },
  {
    icon: <AlertTriangle size={40} />,
    name: 'Emergency Tree Removal',
    description:
      "Storm damage doesn't wait for business hours — and neither does Blocksons. Available 24 hours a day, 7 days a week for emergency response. Downed trees on roofs, blocking driveways, across power lines — call now and Dustin will be there.",
    bullets: [
      '24/7 availability, including weekends and holidays',
      'Storm damage and downed tree response',
      'Rapid removal to restore access and safety',
      'Insurance documentation available upon request',
    ],
    photo: null,
    alt: 'Emergency tree removal response in the North Country NY after storm damage',
  },
  {
    icon: <Zap size={40} />,
    name: 'Work Near Utility Lines',
    description:
      "Not every tree crew can safely work near power lines — it takes specific training, experience, and judgment. Blocksons has the expertise to handle trees near utility lines safely and professionally, coordinating with utility providers when needed.",
    bullets: [
      'Safe removal and trimming adjacent to power lines',
      'Coordination with utility companies when required',
      'Experience with high-risk utility corridor work',
      'Protects your home and the grid from tree damage',
    ],
    photo: '/photos/utility-work.jpg',
    alt: 'Blocksons bucket truck working near utility lines and power lines in the North Country NY',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #1E3A2F 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tight">
            Our Services
          </h1>
          <p className="text-offwhite/70 text-lg max-w-2xl">
            From routine trimming to the most hazardous removals in the North Country — Blocksons handles it all.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-start`}
            >
              {/* Photo or placeholder */}
              <div className="w-full md:w-5/12 shrink-0">
                {service.photo ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={service.photo}
                      alt={service.alt}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ) : (
                  // TODO: Replace with real job photo from Dustin
                  <div
                    className="w-full aspect-video rounded-xl flex flex-col items-center justify-center gap-3 border-2 border-dashed border-forest/30"
                    style={{ background: 'linear-gradient(135deg, #1E3A2F22 0%, #1A1A1A11 100%)' }}
                    role="img"
                    aria-label={service.alt}
                  >
                    <div className="text-forest/40">{service.icon}</div>
                    <p className="text-forest/50 text-sm font-medium text-center px-4">
                      [Photo — {service.name}]
                    </p>
                    <p className="text-forest/30 text-xs">TODO: Replace with real job photo from Dustin</p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-amber mb-3">{service.icon}</div>
                <h2 className="font-oswald text-3xl md:text-4xl font-bold text-charcoal mb-4 uppercase tracking-wide">
                  {service.name}
                </h2>
                <p className="text-midgray leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="text-amber font-bold mt-0.5">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-base px-6 py-3 rounded transition-colors uppercase tracking-wide"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-forest py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
            Not Sure What You Need?
          </h2>
          <p className="text-offwhite/70 text-lg mb-8">
            Call Dustin directly or fill out the quote form — he&apos;ll assess the job and give you a straight answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-lg px-8 py-4 rounded transition-colors uppercase"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+15185703076"
              className="border-2 border-white/50 hover:border-white text-white font-bold font-oswald text-lg px-8 py-4 rounded transition-colors uppercase"
            >
              Call (518) 570-3076
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
