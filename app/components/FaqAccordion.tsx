'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Do you offer free estimates?',
    a: 'Yes — always. Dustin will come out, assess the job, and give you a written estimate with no obligation. No surprises, no pressure.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Blocksons LLC is fully insured for tree removal and land clearing work. We carry liability coverage to protect your property throughout every job.',
  },
  {
    q: 'Can you remove trees in tight spaces where equipment won\'t fit?',
    a: 'That\'s our specialty. Most of our jobs involve oversized or hazardous trees in spots other crews won\'t touch — next to homes, near fences, with no equipment access. Dustin has the skill and experience to handle what others turn down.',
  },
  {
    q: 'Do you work near power lines and utility lines?',
    a: 'Yes. Blocksons has experience working near utility lines and will coordinate with the appropriate providers when needed. This is specialized work — not every tree service can do it safely.',
  },
  {
    q: 'Do you clean up after the job?',
    a: 'Always. Every job ends with full cleanup and debris removal. We don\'t leave stumps, brush piles, or sawdust behind — your yard is clean when we leave.',
  },
  {
    q: 'How fast can you respond for emergency work?',
    a: 'We\'re available 24/7 for emergencies. Storm damage, downed trees, trees on structures — call (518) 570-3076 and Dustin will pick up.',
  },
  {
    q: 'How long does a typical removal take?',
    a: 'Most residential tree removals are completed in a single day. Larger or more complex jobs may take longer — Dustin will give you a realistic timeline during the estimate.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Plattsburgh, Lake Placid, Saranac Lake, Malone, and the surrounding North Country region. Not sure if we cover your area? Call and ask — (518) 570-3076.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-offwhite">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-oswald text-lg font-bold text-charcoal group-hover:text-forest transition-colors uppercase tracking-wide">
              {faq.q}
            </span>
            <span className="text-amber shrink-0">
              {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
            </span>
          </button>
          {openIndex === i && (
            <div className="pb-5 pr-10">
              <p className="text-midgray leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
