import { useRef, useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import Reveal from '../components/Reveal';
import PhotoHero from '../components/PhotoHero';
import { PHOTOS } from '../lib/images';

const SERVICES = [
  {
    title: 'Comprehensive Exam & Cleaning',
    price: '$89 – $150',
    desc: 'A full checkup, professional cleaning, and digital X-rays so small issues get caught early — before they turn into bigger, costlier problems.',
  },
  {
    title: 'Teeth Whitening',
    price: '$250 – $450',
    desc: 'In-office or take-home whitening treatments that lift years of staining safely, with sensitivity-friendly formulas for comfortable results.',
  },
  {
    title: 'Dental Fillings (Composite)',
    price: '$150 – $300',
    desc: 'Tooth-colored fillings that blend naturally with your smile, placed in a single visit with gentle, modern numbing techniques.',
  },
  {
    title: 'Root Canal Therapy',
    price: '$700 – $1,200',
    desc: "Relieve pain and save the natural tooth with a procedure that's far more comfortable than its reputation suggests.",
  },
  {
    title: 'Invisalign & Clear Aligners',
    price: '$3,000 – $5,500',
    desc: 'Straighten teeth discreetly with custom, removable aligners — no metal brackets, and flexible payment plans available.',
  },
  {
    title: 'Pediatric Checkup & Fluoride',
    price: '$65 – $120',
    desc: 'A gentle, playful first-visit experience for kids, including a fluoride treatment to protect growing teeth.',
  },
];

function AccordionItem({ service, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="rounded-2xl border border-line bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="h3">{service.title}</h3>
          <span className="mt-1 block font-mono text-sm text-teal">{service.price}</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink/50 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand' : ''
          }`}
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight ?? 200 : 0 }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <p className="px-6 pb-6 text-sm leading-relaxed">{service.desc}</p>
      </div>
    </div>
  );
}

export default function Services({ onNavigate }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <PhotoHero
        image={PHOTOS.servicesHero(1600, 900)}
        imageAlt="A dentist reviewing a treatment plan with a patient"
        eyebrow="Our services"
        title="Straightforward care, straightforward pricing"
        subtitle="Tap any service below for details. Every treatment plan is walked through with you in plain language before we start — no surprises on the bill."
      />

      <section className="bg-white pb-16 pt-16">
        <div className="mx-auto max-w-3xl space-y-4 px-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <AccordionItem
                service={service}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center">
          <Reveal>
            <h2 className="h2 text-white">Not sure which service you need?</h2>
            <p className="mx-auto mt-3 max-w-md text-white/80">
              Tell us what's bothering you and we'll recommend the right treatment during your
              visit.
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
