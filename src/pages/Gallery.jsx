import { Users, Baby, Sparkles, ScanLine, Heart, Search, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import PhotoHero from '../components/PhotoHero';
import { PHOTOS } from '../lib/images';

const TILES = [
  { src: PHOTOS.reception(), icon: Users, caption: 'Reception & Lounge' },
  { src: PHOTOS.treatmentRoomWhite(), icon: Sparkles, caption: 'Modern Treatment Room' },
  { src: PHOTOS.treatmentRoomOrange(), icon: Sparkles, caption: 'Comfortable Operatory' },
  { src: PHOTOS.brightSuite(), icon: Sparkles, caption: 'Bright, Open Suite' },
  { src: PHOTOS.xrayReview(), icon: ScanLine, caption: 'Digital X-Ray Review' },
  { src: PHOTOS.pediatricVisit(), icon: Baby, caption: 'Gentle Pediatric Visits' },
  { src: PHOTOS.alignerCloseup(), icon: Search, caption: 'Clear Aligner Fittings' },
  { src: PHOTOS.toothbrushes(), icon: Heart, caption: 'Oral Care Essentials' },
  { src: PHOTOS.comfortHands(), icon: Heart, caption: 'Comfort at Every Step' },
];

export default function Gallery({ onNavigate }) {
  return (
    <div>
      <PhotoHero
        image={PHOTOS.galleryHero(1600, 900)}
        imageAlt="A pristine, modern dental treatment room"
        eyebrow="Take a look inside"
        title="A space designed to put you at ease"
        subtitle="Bright rooms, friendly faces, and equipment kept spotless — see what a visit to Bright&Well actually looks like."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 md:grid-cols-3">
          {TILES.map((tile, i) => (
            <Reveal key={tile.caption} delay={i * 60}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-sky">
                <img
                  src={tile.src}
                  alt={tile.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand shadow-sm backdrop-blur-sm">
                  <tile.icon className="h-4 w-4" />
                </div>

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="p-4 text-sm font-semibold text-white">{tile.caption}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center">
          <Reveal>
            <h2 className="h2 text-white">Like what you see?</h2>
            <p className="mx-auto mt-3 max-w-md text-white/80">
              Come experience it in person — your first visit is just a booking away.
            </p>
            <div className="mt-8">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book an appointment <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
