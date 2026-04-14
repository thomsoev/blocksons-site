import type { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get a Free Tree Removal Quote | Plattsburgh, NY | Blocksons LLC',
  description:
    'Request a free tree removal estimate from Blocksons LLC in Plattsburgh, NY. Hazardous removal, trimming, stump grinding, emergency response. Call (518) 570-3076.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #1E3A2F 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tight">
            Get a Free Quote
          </h1>
          <p className="text-offwhite/70 text-lg max-w-2xl">
            Fill out the form below or call Dustin directly. No obligation. Fast response.
          </p>
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info — never hidden behind the form */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div>
                <h2 className="font-oswald text-2xl font-bold text-charcoal mb-6 uppercase tracking-wide">
                  Contact Us Directly
                </h2>
                <ul className="space-y-5">
                  <li>
                    <a
                      href="tel:+15185703076"
                      className="flex items-start gap-4 group"
                      aria-label="Call Blocksons LLC"
                    >
                      <div className="bg-amber rounded-lg p-2 shrink-0">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-midgray uppercase tracking-wider font-medium mb-0.5">Phone</div>
                        <div className="font-bold text-charcoal text-lg group-hover:text-amber transition-colors">
                          (518) 570-3076
                        </div>
                        <div className="text-midgray text-xs">Click to call on mobile</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:Blocksonstreeservice@gmail.com"
                      className="flex items-start gap-4 group"
                      aria-label="Email Blocksons LLC"
                    >
                      <div className="bg-forest rounded-lg p-2 shrink-0">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-midgray uppercase tracking-wider font-medium mb-0.5">Email</div>
                        <div className="font-bold text-charcoal text-sm group-hover:text-forest transition-colors break-all">
                          Blocksonstreeservice@gmail.com
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-charcoal rounded-lg p-2 shrink-0">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-midgray uppercase tracking-wider font-medium mb-0.5">Hours</div>
                      <div className="font-bold text-charcoal">Open 24 Hours</div>
                      <div className="text-midgray text-xs">Emergency response always available</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-charcoal rounded-lg p-2 shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-midgray uppercase tracking-wider font-medium mb-0.5">Service Area</div>
                      <div className="font-bold text-charcoal">Morrisonville, NY</div>
                      <div className="text-midgray text-xs">
                        Plattsburgh · Champlain · Peru · Keeseville<br />
                        and surrounding Clinton County
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Emergency callout */}
              <div className="bg-forest rounded-xl p-6 border border-forest-dark">
                <div className="font-oswald text-xl font-bold text-amber mb-2 uppercase">
                  Emergency?
                </div>
                <p className="text-offwhite/80 text-sm mb-4">
                  Don&apos;t wait. Call now for 24/7 emergency tree removal — storm damage,
                  downed trees, trees on structures.
                </p>
                <a
                  href="tel:+15185703076"
                  className="block bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-base px-6 py-3 rounded transition-colors text-center uppercase"
                >
                  Call Now: (518) 570-3076
                </a>
              </div>
            </div>

            {/* Quote form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-8 border border-offwhite">
                <h2 className="font-oswald text-2xl font-bold text-charcoal mb-6 uppercase tracking-wide">
                  Request a Free Estimate
                </h2>

                {/*
                  TODO: Configure Formspree
                  1. Create account at formspree.io
                  2. Create a new form and get your form ID
                  3. Replace REPLACE_WITH_FORMSPREE_ID below with your actual form ID
                */}
                <form
                  action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
                  method="POST"
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-1">
                        Name <span className="text-amber">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full border border-offwhite rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors bg-offwhite/50 placeholder:text-midgray/60"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-charcoal mb-1">
                        Phone <span className="text-amber">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(518) 000-0000"
                        className="w-full border border-offwhite rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors bg-offwhite/50 placeholder:text-midgray/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border border-offwhite rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors bg-offwhite/50 placeholder:text-midgray/60"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-bold text-charcoal mb-1">
                      Service Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Where is the tree?"
                      className="w-full border border-offwhite rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors bg-offwhite/50 placeholder:text-midgray/60"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-charcoal mb-1">
                      Type of Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full border border-offwhite rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors bg-offwhite/50"
                    >
                      <option value="">Select a service…</option>
                      <option value="removal">Tree Removal</option>
                      <option value="trimming">Tree Trimming</option>
                      <option value="stump">Stump Grinding</option>
                      <option value="emergency">Emergency Removal</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-bold text-charcoal mb-1">
                      Describe the Job
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Tell us about the tree(s), any hazards or access issues, and anything else we should know…"
                      className="w-full border border-offwhite rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors bg-offwhite/50 placeholder:text-midgray/60 resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="referral" className="block text-sm font-bold text-charcoal mb-1">
                      How Did You Hear About Us?
                    </label>
                    <input
                      id="referral"
                      name="referral"
                      type="text"
                      placeholder="Google, referral, Facebook, etc."
                      className="w-full border border-offwhite rounded-lg px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors bg-offwhite/50 placeholder:text-midgray/60"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-lg px-8 py-4 rounded transition-colors uppercase tracking-wide mt-2"
                  >
                    Send My Request
                  </button>

                  <p className="text-midgray text-xs text-center">
                    Dustin typically responds within a few hours. For emergencies, call directly: (518) 570-3076.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
