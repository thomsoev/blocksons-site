import type { Metadata } from 'next';
import Link from 'next/link';
import GoogleRatingBadge from '../components/GoogleRatingBadge';
import ReviewCard from '../components/ReviewCard';

export const metadata: Metadata = {
  title: '5.0 Google Reviews | Blocksons LLC Tree Service',
  description:
    'Blocksons LLC has a perfect 5.0 star rating on Google with 49 reviews. Read what Plattsburgh and Clinton County customers say about Dustin and his tree service.',
};

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

export default function ReviewsPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #1E3A2F 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Customer Reviews
          </h1>
          <GoogleRatingBadge variant="dark" />
        </div>
      </section>

      {/* Rating summary */}
      <section className="bg-white py-12 border-b border-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-8">
          {/* Big number */}
          <div className="text-center sm:text-left">
            <div className="font-oswald text-8xl font-bold text-forest leading-none">5.0</div>
            <div className="flex gap-1 mt-2 justify-center sm:justify-start">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-6 h-6 text-amber fill-amber" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-midgray text-sm mt-1">Based on 49 Google reviews</p>
          </div>

          <div className="border-l border-offwhite pl-8 hidden sm:block h-24" />

          <div className="flex flex-col gap-2 flex-1">
            <div className="text-charcoal font-bold font-oswald text-2xl">
              49 out of 49 reviewers gave 5 stars.
            </div>
            <p className="text-midgray leading-relaxed">
              A perfect rating across every verified Google review. Customers consistently highlight
              Dustin&apos;s professionalism, cleanup, honest estimates, and ability to handle jobs other crews
              won&apos;t take on.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://maps.google.com/?q=Blocksons+LLC+Morrisonville+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:text-amber font-bold text-sm uppercase tracking-wide transition-colors border-b border-forest hover:border-amber pb-0.5"
              >
                See All 49 Reviews on Google →
              </a>
            </div>
          </div>

          {/* Facebook badge */}
          <div className="bg-offwhite rounded-xl p-6 text-center border border-offwhite/80 min-w-[160px]">
            <div className="text-blue-600 font-bold text-lg mb-1">f</div>
            <div className="font-oswald font-bold text-charcoal text-sm">100%</div>
            <div className="text-midgray text-xs">Recommend<br />on Facebook</div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl font-bold text-forest mb-10 uppercase tracking-wide">
            Featured Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://maps.google.com/?q=Blocksons+LLC+Morrisonville+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-forest text-forest hover:bg-forest hover:text-white font-bold font-oswald text-base px-8 py-3 rounded transition-colors uppercase tracking-wide"
            >
              Read All 49 Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="bg-forest py-14 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl font-bold text-white mb-4 uppercase">
            Had a Great Experience?
          </h2>
          <p className="text-offwhite/70 mb-8">
            Your review helps other homeowners find a reliable, honest tree service in Plattsburgh and Clinton County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.google.com/?q=Blocksons+LLC+Morrisonville+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-lg px-8 py-4 rounded transition-colors uppercase"
            >
              Leave a Google Review
            </a>
            <Link
              href="/contact"
              className="border-2 border-white/50 hover:border-white text-white font-bold font-oswald text-lg px-8 py-4 rounded transition-colors uppercase"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
