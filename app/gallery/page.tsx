import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tree Removal Gallery | Before & After | Blocksons LLC',
  description:
    'Before and after photos of tree removal, stump grinding, and trimming jobs in Plattsburgh and Clinton County, NY. See the Blocksons LLC difference.',
};

const realPhotos = [
  {
    src: '/photos/utility-work.jpg',
    category: 'Utility Line Work',
    caption: 'Bucket truck operation near power lines — North Country, NY',
    alt: 'Blocksons LLC bucket truck working near power lines in the North Country NY',
  },
  {
    src: '/photos/hazardous-removal.jpg',
    category: 'Hazardous Removal',
    caption: 'Large complex tree assessment on the water',
    alt: 'Dustin Blockson assessing a massive complex tree removal job in the North Country NY',
  },
  {
    src: '/photos/hero.jpg',
    category: 'Hazardous Removal',
    caption: 'Tree removal near power lines and structures',
    alt: 'Blocksons LLC tree removal near utility lines and home in the North Country NY',
  },
];

// TODO: Replace placeholder cards with real before/after photos from Dustin
const jobs = [
  { category: 'Hazardous Removal', jobType: 'Large tree over home', index: 1 },
  { category: 'Hazardous Removal', jobType: 'Storm-damaged oak', index: 2 },
  { category: 'Stump Grinding', jobType: 'Front yard stump', index: 3 },
  { category: 'Stump Grinding', jobType: 'Backyard double stump', index: 4 },
  { category: 'Tree Trimming', jobType: 'Maple crown pruning', index: 5 },
  { category: 'Tree Trimming', jobType: 'Utility clearance trim', index: 6 },
  { category: 'Emergency Removal', jobType: 'Storm downed tree on driveway', index: 7 },
  { category: 'Emergency Removal', jobType: 'Ice storm damage', index: 8 },
  { category: 'Hazardous Removal', jobType: 'No-equipment-access removal', index: 9 },
  { category: 'Stump Grinding', jobType: 'Multiple stumps, rural property', index: 10 },
];

const categoryColors: Record<string, string> = {
  'Hazardous Removal': '#1E3A2F',
  'Stump Grinding': '#2d4a1e',
  'Tree Trimming': '#1a3040',
  'Emergency Removal': '#3a1e1e',
};

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #1E3A2F 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tight">
            Gallery
          </h1>
          <p className="text-offwhite/70 text-lg max-w-2xl">
            Before &amp; after photos from real jobs across Plattsburgh and Clinton County.
            Real work. Real results.
          </p>
        </div>
      </section>

      {/* Real photos section */}
      <section className="bg-offwhite pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-2xl font-bold text-forest mb-8 uppercase tracking-wide">
            Job Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {realPhotos.map((photo) => (
              <div key={photo.src} className="rounded-xl overflow-hidden shadow-md group">
                <div className="relative aspect-video">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-white px-4 py-3 border-t border-offwhite">
                  <span className="text-xs text-amber uppercase tracking-wider font-bold">{photo.category}</span>
                  <p className="text-sm font-medium text-charcoal mt-0.5">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder grid — more coming soon */}
      <section className="bg-offwhite pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-oswald text-2xl font-bold text-forest uppercase tracking-wide">
              Before &amp; After
            </h2>
            <div className="flex-1 h-px bg-forest/20" />
            <span className="text-xs text-midgray uppercase tracking-wider">More photos coming soon</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div key={job.index} className="flex flex-col gap-0 rounded-xl overflow-hidden shadow-md">
                {/* Before */}
                <div
                  className="aspect-video flex flex-col items-center justify-center gap-2"
                  style={{ background: categoryColors[job.category] ?? '#1E3A2F' }}
                  role="img"
                  aria-label={`Before photo — ${job.jobType}`}
                >
                  {/* TODO: Replace with real before photo from Dustin */}
                  <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Before</p>
                  <p className="text-white/40 text-sm text-center px-4">{job.jobType}</p>
                  <p className="text-white/25 text-xs">TODO: Real photo from Dustin</p>
                </div>

                {/* After */}
                <div
                  className="aspect-video flex flex-col items-center justify-center gap-2"
                  style={{
                    background: (categoryColors[job.category] ?? '#1E3A2F') + 'bb',
                    filter: 'brightness(1.2)',
                  }}
                  role="img"
                  aria-label={`After photo — ${job.jobType}`}
                >
                  {/* TODO: Replace with real after photo from Dustin */}
                  <p className="text-white/50 text-xs uppercase tracking-widest font-bold">After</p>
                  <p className="text-white/40 text-sm text-center px-4">{job.jobType}</p>
                  <p className="text-white/25 text-xs">TODO: Real photo from Dustin</p>
                </div>

                {/* Label */}
                <div className="bg-white px-4 py-3 border-t border-offwhite">
                  <span className="text-xs text-midgray uppercase tracking-wider font-medium">
                    {job.category}
                  </span>
                  <p className="text-sm font-bold text-charcoal mt-0.5">{job.jobType}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl font-bold text-white mb-4 uppercase">
            See This Quality on Your Property
          </h2>
          <p className="text-offwhite/70 mb-8">
            Free estimates. Dustin will come out, assess the job, and give you a straight answer.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber hover:bg-amber-dark text-white font-bold font-oswald text-lg px-8 py-4 rounded transition-colors uppercase"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
