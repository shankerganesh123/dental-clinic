import { ShieldCheck, Users, Clock } from 'lucide-react';
import SmileDivider from '../components/SmileDivider';
import Eyebrow from '../components/Eyebrow';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import { PHOTOS } from '../lib/images';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Judgment-free care',
    desc: "Missed a few checkups? No lectures here — just a plan to get your smile back on track.",
  },
  {
    icon: Users,
    title: 'Family-friendly',
    desc: 'From toddlers to grandparents, our team knows how to put every age at ease.',
  },
  {
    icon: Clock,
    title: 'Respect for your time',
    desc: 'Real appointment windows and short waits — your schedule matters to us too.',
  },
];

const TEAM = [
  { name: 'Dr. Elena Vasquez', role: 'Lead Dentist, DDS', photo: PHOTOS.drElena() },
  { name: 'Dr. Marcus Chen', role: 'Orthodontist, DMD', photo: PHOTOS.drMarcus() },
  { name: 'Dr. Amara Okafor', role: 'Pediatric Dentist, DDS', photo: PHOTOS.drAmara() },
  { name: 'Dr. Theo Larsen', role: 'Oral Surgeon, DMD', photo: PHOTOS.drTheo() },
];

export default function About() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h1 className="h1 mt-4">Built by people who used to fear the dentist too</h1>
            <p className="mt-5 leading-relaxed">
              Bright&amp;Well Dental started in 2008 with one simple idea: dental visits
              shouldn't feel stressful. We've grown from a single chair to a full team of
              specialists, but that founding idea hasn't changed — every visit should leave you
              feeling calmer than when you walked in.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-line">
              <img
                src={PHOTOS.brightSuite(900, 700)}
                alt="Bright&Well Dental treatment suite"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SmileDivider fill="#EAF2FF" />

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <Card className="h-full bg-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky text-brand">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="h3 mt-4">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{value.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SmileDivider fill="#FFFFFF" flip />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Reveal className="mx-auto max-w-xl text-center">
            <Eyebrow className="justify-center">Meet the team</Eyebrow>
            <h2 className="h2 mt-4">Specialists you'll actually like seeing</h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <Card className="text-center transition-shadow hover:shadow-md">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-sky">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="h3 mt-4">{member.name}</h3>
                  <p className="mt-1 text-sm text-teal">{member.role}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
