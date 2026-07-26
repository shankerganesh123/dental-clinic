import { ArrowRight, Calendar, ShieldCheck, Sparkles, Star, Quote, Smile, Baby } from 'lucide-react';
import HeroTooth from '../components/HeroTooth';
import SmileDivider from '../components/SmileDivider';
import Eyebrow from '../components/Eyebrow';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import { PrimaryButton, GhostButton } from '../components/Button';
import { PHOTOS } from '../lib/images';

const STATS = [
  { value: '12,400+', label: 'Smiles treated' },
  { value: '18 yrs', label: 'Serving Riverside' },
  { value: '4.9★', label: 'Average rating' },
  { value: '97%', label: 'Patients pain-free' },
];

const SERVICES = [
  {
    icon: ShieldCheck,
    title: 'Checkups & Cleanings',
    desc: 'Routine care to catch small issues before they become big ones.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic & Whitening',
    desc: 'Brighten and reshape your smile with gentle, proven treatments.',
  },
  {
    icon: Smile,
    title: 'Cosmetic Bonding',
    desc: 'Fix chips and gaps in a single, comfortable visit.',
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    desc: 'A calm, kid-friendly approach that makes first visits easy.',
  },
];

export default function Home({ onNavigate }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <Eyebrow>Welcome to Bright&amp;Well</Eyebrow>
            <h1 className="h1 mt-4">
              Dental care that feels <span className="text-brand">calm</span>, not clinical.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed">
              No long waits, no scary jargon, no judgment. Just friendly, modern dentistry for
              your whole family — from wiggly first teeth to confident adult smiles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton onClick={() => onNavigate('contact')}>
                Book an appointment <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <GhostButton onClick={() => onNavigate('services')}>See our services</GhostButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <HeroTooth />
          </Reveal>
        </div>
      </section>

      <SmileDivider fill="#EAF2FF" />

      {/* Stats */}
      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="text-center">
                <div className="h2 text-brand">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-ink/70">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SmileDivider fill="#FFFFFF" flip />

      {/* Services preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Reveal className="mx-auto max-w-xl text-center">
            <Eyebrow className="justify-center">What we offer</Eyebrow>
            <h2 className="h2 mt-4">Care built around your comfort</h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky text-brand">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="h3 mt-4">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{service.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <GhostButton onClick={() => onNavigate('services')}>
              View all services <ArrowRight className="h-4 w-4" />
            </GhostButton>
          </div>
        </div>
      </section>

      <SmileDivider fill="#F6F9FF" />

      {/* Testimonial */}
      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <Reveal>
            <Quote className="mx-auto h-8 w-8 text-teal" />
            <p className="mt-6 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              "I used to dread the dentist. The team at Bright&amp;Well actually made me feel
              relaxed — and my kids ask to go back."
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img
                src={PHOTOS.patientPriya()}
                alt="Priya Nair"
                className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <div className="text-left">
                <div className="flex items-center gap-1 text-teal">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-ink/70">Priya Nair, patient since 2019</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SmileDivider fill="#1D5FE0" flip />

      {/* Closing CTA */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center">
          <Reveal>
            <h2 className="h2 text-white">Ready for a healthier smile?</h2>
            <p className="mx-auto mt-3 max-w-md text-white/80">
              Book your visit in minutes — most new patients are seen within a week.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Calendar className="h-4 w-4" /> Book an appointment
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
